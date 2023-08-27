import json
from operator import ne
from subprocess import call
from appscript import k
import js2py
import os, sys
from regex import F

from sqlalchemy import false
import divide_ob
import copy
import time


def writeNode(node):
    tempFile = open('./temp.js.json', 'w')
    tempFile.write(json.dumps(node))
    tempFile.close()


def DFS_cnt(node, callee_name, cnts, constants):
    if type(node) == dict:
        token = node.get('type')
        if token == 'CallExpression' and node.get('callee').get('type') == 'Identifier' and node.get('callee').get('name') in callee_name:
            nodeName = node.get('callee').get('name')
            cnts[nodeName] = cnts[nodeName] + 1
            if 'arguments' in node.keys():
                isConstant = True
                for parameter in node.get('arguments'):
                    if parameter.get('type') != 'Literal':
                        isConstant = False
                if isConstant:
                    constants[nodeName] = constants[nodeName] + 1
        for key in node.keys():
            DFS_cnt(node.get(key), callee_name, cnts, constants)
    elif type(node) == list:
        for i in range(len(node)):
            DFS_cnt(node[i], callee_name, cnts, constants)

def DFS_replace(node, nodeName, jsFun):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            if type(next) == dict:
                token = next.get('type')
                if token == 'CallExpression' and next.get('callee').get('type') == 'Identifier' and next.get('callee').get('name') == nodeName:
                    parameters = []
                    if 'arguments' in next.keys():
                        for argument in next.get('arguments'):
                            parameters.append(argument.get('value'))
                    # print("parameters", parameters, jsFun)
                    res = jsFun(parameters[0], parameters[1])
                    newNode = {'type' : 'Literal', 'value' : res, 'raw' : '\'' + res + '\''}
                    node[key] = newNode
                    continue
            DFS_replace(next, nodeName, jsFun)
    elif type(node) == list:
        for i in range(len(node)):
            next = node[i]
            if type(next) == dict:
                token = next.get('type')
                if token == 'CallExpression' and next.get('callee').get('type') == 'Identifier' and next.get('callee').get('name') == nodeName:
                    parameters = []
                    if 'arguments' in next.keys():
                        for argument in next.get('arguments'):
                            parameters.append(argument.get('value'))
                    # print("parameters", parameters)
                    res = jsFun(parameters[0], parameters[1])
                    # print("res", res)
                    newNode = {'type' : 'Literal', 'value' : res, 'raw' : '\'' + res + '\''}
                    node[i] = newNode
                    continue
            DFS_replace(node[i], nodeName, jsFun)


def call_graph(program):
    callee = {}
    callee_name = []
    for index in program:
        if index.get('type') != 'VariableDeclaration':
            continue
        declarations = index.get('declarations')
        for declaration in declarations:
            if 'init' not in declaration or declaration.get('init').get('type') != 'FunctionExpression':
                continue
            if 'id' not in declaration or declaration.get('id').get('type') != 'Identifier':
                continue
            callee_name.append(declaration.get('id').get('name'))
            callee[declaration.get('id').get('name')] = declaration
    cnts = {}
    constants = {}
    for name in callee_name:
        cnts[name] = 0
        constants[name] = 0
    DFS_cnt(program, callee_name, cnts, constants)
    # print(cnts)
    # print(constants)
    illegalFun = {}

    maxNumber, maxName = 0, ''
    for name in callee_name:
        if cnts[name] == constants[name] and cnts[name] > 0:
            # illegalFun[name] = callee[name]
            if cnts[name] > maxNumber:
                maxNumber = cnts[name]
                maxName = name
    illegalFun[maxName] = callee[maxName]
    return illegalFun
    # print(callee_name)

def isReturnOnly(node):
    if node.get('type') != 'FunctionExpression':
        return False
    bodyNode = node.get('body')
    if bodyNode.get('type') != 'BlockStatement' or len(bodyNode.get('body')) > 1:
        return False
    expNode = bodyNode.get('body')[0]
    return expNode.get('type') == 'ReturnStatement'

def copyNode(src, dst):
    if type(src) == dict:
        for key in src.keys():
            value = src.get(key)
            if type(value) == dict:
                dst[key] = {}
                copyNode(src.get(key), dst.get(key))
            elif type(dict) == list:
                dst[key] = []
                copyNode(src.get(key), dst.get(key))
            else:
                dst[key] = src.get(key)
    elif type(src) == list:
        for item in src:
            if type(item) == dict:
                newItem = {}
                dst.append(newItem)
                copyNode(item, newItem)
            elif type(dict) == list:
                newItem = []
                dst.append(newItem)
                copyNode(item, newItem)
            else:
                newItem = item
                dst.append(newItem)

def repParameter(node, parameterMapping):
    if type(node) == dict:
        for key in node.keys():
            if type(node.get(key)) == dict:
                if node.get(key).get('type') == 'Identifier':
                    node[key] = parameterMapping[node.get(key).get('name')]
                    continue
            repParameter(node.get(key), parameterMapping)
    elif type(node) == list:
        cnt = -1
        for item in node:
            cnt = cnt + 1
            if type(item) == dict:
                if item.get('type') == 'Identifier':
                    node[cnt] = parameterMapping[item.get('name')]
                    continue
            repParameter(item, parameterMapping)

def unfoldReturn(node, function):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            # print(next)
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        newNode = {}
                        # print(function[2].get('body'))
                        retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(retNode)
                        # copyNode(retNode, newNode)
                        mapping = {}
                        cnt = -1
                        for argus in function[2].get('params'):
                            cnt = cnt + 1
                            mapping[argus.get('name')] = next.get('arguments')[cnt]
                        # print(newNode)
                        # print('mapping\n', mapping, '\n')
                        # print('newNode\n', newNode)
                        repParameter(newNode, mapping)
                        # print(json.dumps(newNode, indent=4))
                        # print('newNode\n', newNode)
                        node[key] = newNode
                        continue
            unfoldReturn(node.get(key), function)
    elif type(node) == list:
        cntNode = -1
        for next in node:
            cntNode = cntNode + 1
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        newNode = {}
                        # print(function[2].get('body'))
                        retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(retNode)
                        # copyNode(retNode, newNode)
                        mapping = {}
                        cnt = -1
                        for argus in function[2].get('params'):
                            cnt = cnt + 1
                            mapping[argus.get('name')] = next.get('arguments')[cnt]
                        repParameter(newNode, mapping)
                        # if cnt >= len(node):
                        #     print(cnt, node)
                        #     print(newNode)
                        #     print(function)
                        node[cntNode] = newNode
                        continue
            unfoldReturn(next, function)


def DFS_innermapping(node, res):
    if type(node) == dict:
        if node.get('type') == 'VariableDeclarator' and type(node.get('init')) == dict and node.get('init').get('type') == 'ObjectExpression':
            toDel = []
            for property in node.get('init').get('properties'):
                if property.get('key').get('type') == 'Literal':
                    if isReturnOnly(property.get('value')):
                        res.append([node.get('id').get('name'), property.get('key').get('value'), property.get('value')])
                        toDel.append(property)
            for item in toDel:
                node.get('init').get('properties').remove(item)
        for key in node.keys():
            DFS_innermapping(node.get(key), res)
    elif type(node) == list:
        for item in node:
            DFS_innermapping(item, res)


def DFS_innervalue(node, res):
    if type(node) == dict:
        if node.get('type') == 'VariableDeclarator' and type(node.get('init')) == dict and node.get('init').get('type') == 'ObjectExpression':
            toDel = []
            for property in node.get('init').get('properties'):
                if property.get('key').get('type') == 'Literal':
                    if property.get('value').get('type') == 'Literal':
                        res.append([node.get('id').get('name'), property.get('key').get('value'), property.get('value')])
                        toDel.append(property)
            for item in toDel:
                node.get('init').get('properties').remove(item)
        for key in node.keys():
            DFS_innervalue(node.get(key), res)
    elif type(node) == list:
        for item in node:
            DFS_innervalue(item, res)


def unfoldValue(node, function):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            # print(next)
            if type(next) == dict and next.get('type') == 'MemberExpression' and next.get('computed') == True:
                if next.get('object').get('type') == 'Identifier' and next.get('object').get('name') == function[0]:
                    if next.get('property').get('type') == 'Literal' and next.get('property').get('value') == function[1]:
                        newNode = {}
                        # print('aaa')
                        newNode = copy.deepcopy(function[2])
                        node[key] = newNode
                        continue
            unfoldValue(node.get(key), function)
    elif type(node) == list:
        cnt = -1
        for next in node:
            cnt = cnt + 1
            if type(next) == dict and next.get('type') == 'MemberExpression' and next.get('computed') == True:
                if next.get('object').get('type') == 'Identifier' and next.get('object').get('name') == function[0]:
                    if next.get('property').get('type') == 'Literal' and next.get('property').get('value') == function[1]:
                        # print('bbb')
                        newNode = {}
                        newNode = copy.deepcopy(function[2])
                        node[cnt] = newNode
                        continue
            unfoldValue(next, function)



def unfoldValue_old(node, function):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            # print(next)
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        newNode = {}
                        # print('aaa')
                        # print(function[2].get('body'))
                        # retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(function[2])
                        # copyNode(retNode, newNode)
                        # mapping = {}
                        # cnt = -1
                        # for argus in function[2].get('params'):
                        #     cnt = cnt + 1
                        #     mapping[argus.get('name')] = next.get('arguments')[cnt]
                        # print(newNode)
                        # print('mapping\n', mapping, '\n')
                        # print('newNode\n', newNode)
                        # repParameter(newNode, mapping)
                        # print(json.dumps(newNode, indent=4))
                        # print('newNode\n', newNode)
                        node[key] = newNode
                        continue
            unfoldValue(node.get(key), function)
    elif type(node) == list:
        cnt = -1
        for next in node:
            cnt = cnt + 1
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        # print('bbb')
                        newNode = {}
                        # print(function[2].get('body'))
                        # retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(function[2])
                        # copyNode(retNode, newNode)
                        # mapping = {}
                        # cnt = -1
                        # for argus in function[2].get('params'):
                        #     cnt = cnt + 1
                        #     mapping[argus.get('name')] = next.get('arguments')[cnt]
                        # repParameter(newNode, mapping)
                        node[cnt] = newNode
                        continue
            unfoldValue(next, function)




def empty_define(node):
    if type(node) != dict or node.get('type') != 'VariableDeclaration':
        return False
    declarations = node.get('declarations')
    for declaration in declarations:
        # print('wow')
        if declaration.get('type') != 'VariableDeclarator' or 'init' not in declaration.keys():
            return False

        if type(declaration.get('init')) != dict or declaration.get('init').get('type') != 'ObjectExpression' or len(declaration.get('init').get('properties')) > 0:
            return False
    return True

def DFS_empty(node):
    if type(node) == dict:
        for key in node.keys():
            DFS_empty(node.get(key))
    elif type(node) == list:
        toDel = []
        for next in node:
            if type(next) == dict and next.get('type') == 'VariableDeclaration':
                if empty_define(next):
                    toDel.append(next)
                    continue
            DFS_empty(next)
        for next in toDel:
            node.remove(next)


def innerSimulation(syntax):
    for funNode in syntax.get('body'):
        res = []
        DFS_innermapping(funNode, res)
        for function in res:
            # print('function', function)
            unfoldReturn(funNode, function)
            DFS_empty(funNode)
        resValue = []
        DFS_innervalue(funNode, resValue)
        for function in resValue:
            # print('function', function)
            unfoldValue(funNode, function)
            DFS_empty(funNode)

        
def simulate(inputFileName):
    t1 = time.time()
    inputFile = './jsdata/rand_jsjiami/' + inputFileName
    # file = open(inputFile)
    # if not os.path.exists(inputFile + '-fun'):
    #     os.mkdir(inputFile + '-fun')
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    t2 = time.time()
    # syntax = json.load(file)
    illegalFun = call_graph(syntax.get('body'))
    jsFuns = {}
    partial = []
    newProgram = {'type': 'Program', 'body': partial, 'sourceType': 'script'}
    counter = 0

    # divide_ob.moveDeclaration(syntax)

    for declarations in syntax.get('body'):
        counter = counter + 1
        if counter > 3:
            break
        if declarations.get('type') != 'VariableDeclaration':
            partial.append(declarations)
            # print('wow', counter)
        elif len(declarations) <= 0:
            continue
        elif declarations.get('declarations')[0].get('type') != 'VariableDeclarator' or 'init' not in declarations.get('declarations')[0].keys() or declarations.get('declarations')[0].get('init').get('type') != 'FunctionExpression':
            partial.append(declarations)
            # print('wow', counter)

    toMove = []
    for funName in illegalFun.keys():
        illegalName = './jsdata/rand_temp/' + inputFileName + '.json'
        print('illeagalName', illegalName)
        illegalFile = open(illegalName, 'w')
        wrapper = {}
        for wrapperName in syntax.get('body'):
            if wrapperName.get('type') == 'VariableDeclaration' and illegalFun.get(funName) in wrapperName.get('declarations'):
                wrapper = wrapperName
        # wrapper = {'type': 'VariableDeclaration', 'declarations':[illegalFun.get(funName)], 'kind': 'var'}
        partial.append(wrapper)
        illegalFile.write(json.dumps(newProgram))
        partial.remove(wrapper)
        illegalFile.close()
        toMove.append(wrapper)

        dstFile = os.popen('node ./pregenerate.js ' + illegalName, 'r')
        dstRes = dstFile.read()
        dstFile.close()
        # illegalJS = open(illegalName + '-new.js', 'r+')
        jsFuns[funName] = js2py.eval_js(dstRes)
        # illegalJS.close()

    t3 = time.time()
    for funName in jsFuns.keys():
        DFS_replace(syntax.get('body'), funName, jsFuns.get(funName))

    for funNode in partial:
        syntax.get('body').remove(funNode)
    
    for funNode in toMove:
        syntax.get('body').remove(funNode)

    t4 = time.time()
    innerSimulation(syntax)
    outputFile = './jsdata/rand_jsjiami_recover/' + inputFileName
    newFile = open(outputFile + '-fixed.json', 'w')
    newFile.write(json.dumps(syntax, indent = 4))
    newFile.close()
    # print(syntax)
    os.system('node ./regenerate.js ' + outputFile + '-fixed.json ' + outputFile)
    # os.system('node ./parse.js ' + outputFile + '-fixed.json-new.js ' + outputFile + '-fixed.json')
    # DFS(syntax, Isredunduncy, 0)
    # writeNode(syntax.get('body')[0])
    t5 = time.time()
    return [t2 - t1, t3 - t2, t4 - t3, t5-  t4]


def call_graph_detect(program):
    callee = {}
    callee_name = []
    for index in program:
        if index.get('type') != 'VariableDeclaration':
            continue
        declarations = index.get('declarations')
        for declaration in declarations:
            if 'init' not in declaration or declaration.get('init').get('type') != 'FunctionExpression':
                continue
            if 'id' not in declaration or declaration.get('id').get('type') != 'Identifier':
                continue
            callee_name.append(declaration.get('id').get('name'))
            callee[declaration.get('id').get('name')] = declaration
    cnts = {}
    constants = {}
    for name in callee_name:
        cnts[name] = 0
        constants[name] = 0
    DFS_cnt(program, callee_name, cnts, constants)
    # print(cnts)
    # print(constants)
    illegalFun = {}

    maxNumber, maxName = 0, ''
    for name in callee_name:
        if cnts[name] == constants[name] and cnts[name] > 0:
            # illegalFun[name] = callee[name]
            if cnts[name] > maxNumber:
                maxNumber = cnts[name]
                maxName = name
    illegalFun[maxName] = maxNumber
    return illegalFun
    # print(callee_name)



def detect_global(inputFile):
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    # syntax = json.load(file)
    illegalFun = call_graph_detect(syntax.get('body'))

    for funName in illegalFun.keys():
        if illegalFun[funName] > 1:
            return True
    return False



def DFS_controlFlow(node, flags):
    if type(node) == dict:
        if node.get('type') == 'WhileStatement':
            test = node.get('test')
            if test.get('type') == 'UnaryExpression' and test.get('operator') == '!':
                argument = test.get('argument')
                if argument.get('type') == 'UnaryExpression' and argument.get('operator') == '!':
                    if argument.get('argument').get('type') == 'ArrayExpression':
                        flags[0] = flags[0] + 1
            body = node.get('body')
            if body.get('type') == 'BlockStatement' and body.get('body')[0].get('type') == 'SwitchStatement':
                flags[1] = flags[1] + 1
        for key in node.keys():
            DFS_controlFlow(node.get(key), flags)
    elif type(node) == list:
        for i in range(len(node)):
            DFS_controlFlow(node[i], flags)


def detect_controlFlow(inputFile):
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    # syntax = json.load(file)
    flags = [0, 0]
    DFS_controlFlow(syntax.get('body'), flags)
    return flags[0] > 0 and flags[1] > 0


def DFS_number(node, flags):
    if type(node) == dict:
        if node.get('type') == 'BinaryExpression' and node.get('left').get('type') == 'Literal' and node.get('right').get('type'):
            flags[0] = flags[0] + 1
        for key in node.keys():
            DFS_number(node.get(key), flags)
    elif type(node) == list:
        for i in range(len(node)):
            DFS_number(node[i], flags)



def detect_number2Exp(inputFile):
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    # syntax = json.load(file)
    flags = [0]
    DFS_number(syntax.get('body'), flags)
    return flags[0]


def unfoldReturn2(node, function):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            # print(next)
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        newNode = {}
                        # print(function[2].get('body'))
                        retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(retNode)
                        # copyNode(retNode, newNode)
                        mapping = {}
                        cnt = -1
                        for argus in function[2].get('params'):
                            cnt = cnt + 1
                            mapping[argus.get('name')] = next.get('arguments')[cnt]
                        # print(newNode)
                        # print('mapping\n', mapping, '\n')
                        # print('newNode\n', newNode)
                        repParameter(newNode, mapping)
                        # print(json.dumps(newNode, indent=4))
                        # print('newNode\n', newNode)
                        # node[key] = newNode
                        continue
            unfoldReturn(node.get(key), function)
    elif type(node) == list:
        cnt = -1
        for next in node:
            cnt = cnt + 1
            if type(next) == dict and next.get('type') == 'CallExpression' and type(next.get('callee')) == dict and next.get('callee').get('type') == 'MemberExpression' and next.get('callee').get('computed') == True:
                callee = next.get('callee')
                if callee.get('object').get('type') == 'Identifier' and callee.get('object').get('name') == function[0]:
                    if callee.get('property').get('type') == 'Literal' and callee.get('property').get('value') == function[1]:
                        newNode = {}
                        # print(function[2].get('body'))
                        retNode = (function[2].get('body').get('body')[0]).get('argument')
                        newNode = copy.deepcopy(retNode)
                        # copyNode(retNode, newNode)
                        mapping = {}
                        cnt = -1
                        for argus in function[2].get('params'):
                            cnt = cnt + 1
                            mapping[argus.get('name')] = next.get('arguments')[cnt]
                        repParameter(newNode, mapping)
                        # node[cnt] = newNode
                        continue
            unfoldReturn(next, function)



def innerSimulation2(syntax):
    for funNode in syntax.get('body'):
        res = []
        DFS_innermapping(funNode, res)
        for function in res:
            print('aaa')
            # print('function', function)
            unfoldReturn2(funNode, function)
            DFS_empty(funNode)
        resValue = []
        # DFS_innervalue(funNode, resValue)
        # for function in res:
        #     # print('function', function)
        #     unfoldReturn2(funNode, function)
        #     DFS_empty(funNode)

        
def simulate2(inputFileName):
    t1 = time.time()
    inputFile = './jsdata/rand_ob/' + inputFileName
    # file = open(inputFile)
    # if not os.path.exists(inputFile + '-fun'):
    #     os.mkdir(inputFile + '-fun')
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()
    t2 = time.time()
    print ('test1')
    # syntax = json.load(file)
    counter = 0
    detect_global(inputFile)

    # divide_ob.moveDeclaration(syntax)
    if len(syntax.get('body')) >= 3:
        toMove = []
        for declarations in syntax.get('body'):
            counter = counter + 1
            if counter >= 3 and declarations.get('type') == 'ExpressionStatement':
                if declarations.get('expression').get('type') == 'SequenceExpression':
                    temp = declarations.get('expression').get('expressions')[0]
                    declarations.get('expression').get('expressions').remove(temp)
                    break
                elif declarations.get('expression').get('type') == 'CallExpression':
                    toMove.append(declarations)
                    break
            else:
                if counter == len(syntax.get('body')):
                    break
                toMove.append(declarations)
                # print('wow', counter)

        for funNode in toMove:
            syntax.get('body').remove(funNode)
            
    # innerSimulation(syntax)
    print('kkk')
    outputFile = './jsdata/rand_ob_recover/' + inputFileName
    newFile = open(outputFile + '-fixed.json', 'w')
    newFile.write(json.dumps(syntax, indent = 4))
    newFile.close()

    t3 = time.time()
    detect_global2(inputFile)
    detect_global(inputFile)
    try:
        innerSimulation2(syntax.get('body'))
    except:
        print('bbb')
    t4 = time.time()
    detect_global2(inputFile)
    t5 = time.time()
    detect_number2Exp(inputFile)
    t6 = time.time()
    detect_controlFlow(inputFile)

    # print(syntax)
    os.system('node ./regenerate.js ' + outputFile + '-fixed.json ' + outputFile)
    # os.system('node ./parse.js ' + outputFile + '-fixed.json-new.js ' + outputFile + '-fixed.json')
    # DFS(syntax, Isredunduncy, 0)
    # writeNode(syntax.get('body')[0])
    t7 = time.time()
    return [t2 - t1, t3 - t2, t4 - t3, t5 - t4, t6 - t5, t7 - t6]

def DFS_global2(node, flags):
    if node.get('type') == 'Identifier' and '_0x' in node.get('name'):
        flags[0] = flags[0] + 1
    if type(node) == dict:
        for key in node.keys():
            DFS_number(node.get(key), flags)
    elif type(node) == list:
        for i in range(len(node)):
            DFS_number(node[i], flags)


        
def detect_global2(inputFile):
    # file = open(inputFile)
    # if not os.path.exists(inputFile + '-fun'):
    #     os.mkdir(inputFile + '-fun')
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    print ('test1')
    # syntax = json.load(file)
    counter = 0
    flags = [0]
    # divide_ob.moveDeclaration(syntax)
    if len(syntax.get('body')) >= 3:
        for declarations in syntax.get('body'):
            counter = counter + 1
            if counter <= 2:
                DFS_global2(declarations, flags)
                if flags[0] > 0:
                    return True
            elif counter >= 3 and declarations.get('type') == 'ExpressionStatement':
                if declarations.get('expression').get('type') == 'SequenceExpression':
                    return True
    return False            


def isControlFlowStart(node):
    if type(node) != dict:
        return False
    isTrueWhile = False
    if node.get('type') == 'WhileStatement':
        test = node.get('test')
        if test.get('type') == 'UnaryExpression' and test.get('operator') == '!':
            argument = test.get('argument')
            if argument.get('type') == 'UnaryExpression' and argument.get('operator') == '!':
                if argument.get('argument').get('type') == 'ArrayExpression':
                    isTrueWhile = True
    if not isTrueWhile:
        return False
    body = node.get('body')
    if body.get('type') == 'BlockStatement':
        # print(body['body'][0])
        if body['body'][0].get('type') == 'SwitchStatement':
            return isTrueWhile

def isSwitchOrder(node):
    if type(node) != dict:
        return False
    if node.get('type') == 'VariableDeclarator' and 'init' in node.keys():
        initNode = node.get('init')
        if initNode.get('type') == 'CallExpression' and initNode.get('callee').get('type') == 'MemberExpression':
            calleeNode = initNode.get('callee')
            if 'computed' in calleeNode.keys() and calleeNode.get('computed') == True and 'object' in calleeNode.keys():
                if calleeNode.get('property').get('type') == 'Literal' and calleeNode.get('property').get('value') == 'split':
                    if calleeNode.get('object').get('type') == 'Literal':
                        switchOrder = calleeNode.get('object').get('value')
                        if '|' in switchOrder:
                            return switchOrder
    return ""

def repControlFlow(node, order):
    orderList = order.split('|')
    if len(orderList) < 2:
        return node
    newNode = {'type': 'BlockStatement', 'body': []}
    discriminant = node['body']['body'][0]['discriminant']
    switchVar = discriminant['object']['name']
    
    caseList = node['body']['body'][0]['cases']
    for order in orderList:
        for case in caseList:
            if case['test']['value'] != order:
                continue
            for i in range(len(case['consequent']) - 1):
                newNode['body'].append(case['consequent'][i])
            if case['consequent'][-1]['type'] != 'ContinueStatement':
                newNode['body'].append(case['consequent'][-1])
    # print(newNode)
    return newNode

def DFS_controlFlow_rep(node, rep):
    if type(node) == dict:
        order = isSwitchOrder(node)
        if len(order) > 2:
            rep.append(order)        
        for key in node.keys():
            if isControlFlowStart(node.get(key)):
                newNode = repControlFlow(node.get(key), rep[0])
                node[key] = newNode
                continue
            DFS_controlFlow_rep(node.get(key), rep)
    elif type(node) == list:
        for i in range(len(node)):
            if isControlFlowStart(node[i]):
                newNode = repControlFlow(node[i], rep[0])
                node[i] = newNode
                continue
            DFS_controlFlow_rep(node[i], rep)


def simulate3(inputFileName):
    t1 = time.time()
    inputFile = './control/' + inputFileName
    # file = open(inputFile)
    # if not os.path.exists(inputFile + '-fun'):
    #     os.mkdir(inputFile + '-fun')
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()

    t2 = time.time()
    # syntax = json.load(file)
    # illegalFun = call_graph(syntax.get('body'))
    rep = []
    # newProgram = {'type': 'Program', 'body': partial, 'sourceType': 'script'}
    DFS_controlFlow_rep(syntax.get('body'), [])
    counter = 0

    outputFile = './control/' + inputFileName + '-con.js'
    newFile = open(outputFile + '-fixed.json', 'w')
    newFile.write(json.dumps(syntax, indent = 4))
    newFile.close()
    # print(syntax)
    os.system('node ./regenerate.js ' + outputFile + '-fixed.json ' + outputFile)
    # os.system('node ./parse.js ' + outputFile + '-fixed.json-new.js ' + outputFile + '-fixed.json')
    # DFS(syntax, Isredunduncy, 0)
    # writeNode(syntax.get('body')[0])
    t5 = time.time()
    return [t2 - t1, t5 - t2]




if __name__ == "__main__":
    simulate3('44354.js-ob.js')