import json
from operator import ne
from subprocess import call
from appscript import k
import js2py
import os, sys
from regex import F

from sqlalchemy import false
# import divide_ob
import copy
import time

def DFS_alias(node, illgalFuns, decs):
    if type(node) == dict:
        for key in node:
            DFS_alias(node[key], illgalFuns, decs)
    elif type(node) == list:
        to_remove = []
        for item in node:
            if item == None:
                continue
#             print(item, '\n')
            if item['type'] == 'VariableDeclarator' and item['id']['type'] == 'Identifier'\
                and item['id']['name'].startswith('_0x') and item['init']!= None\
            and item['init']['type'] == 'Identifier' and item['init']['name'] in illgalFuns:
                illgalFuns.add(item['id']['name'])
                decs.append(item)
                to_remove.append(item)
            else:
                DFS_alias(item, illgalFuns, decs)
        for item in to_remove:
            node.remove(item)

def DFS_clear(node):
    if type(node) == dict:
        for key in node:
            DFS_clear(node[key])
    elif type(node) == list:
        to_remove = []
        for item in node:
            if item == None:
                continue
            if item['type'] == 'VariableDeclaration' and len(item['declarations']) == 0:
                to_remove.append(item)
            else:
                DFS_clear(item)
        for item in to_remove:
            node.remove(item)

def DFS_replace(node, nodeName, jsFun):
    if type(node) == dict:
        for key in node.keys():
            next = node.get(key)
            if type(next) == dict:
                token = next.get('type')
                if token == 'CallExpression' and next.get('callee').get('type') == 'Identifier'\
                and next.get('callee').get('name') in nodeName:
                    funName = next.get('callee').get('name')
                    parameters = []
                    if 'arguments' in next.keys():
                        for argument in next.get('arguments'):
                            parameters.append(argument.get('value'))
                    # print("parameters", parameters, jsFun)
#                     res = jsFun(parameters[0], parameters[1])
                    curFun = f'{jsFun}\n{funName}{tuple(parameters)};'
                    curFun = curFun.replace(',)', ')')
#                     print("curFun", curFun)
                    res = js2py.eval_js(curFun)
                    print('res', res)
                    newNode = {'type' : 'Literal', 'value' : res, 'raw' : '\'' + res + '\''}
                    node[key] = newNode
                    continue
            DFS_replace(next, nodeName, jsFun)
    elif type(node) == list:
        for i in range(len(node)):
            next = node[i]
            if type(next) == dict:
                token = next.get('type')
                if token == 'CallExpression' and next.get('callee').get('type') == 'Identifier'\
                and next.get('callee').get('name') in nodeName:
                    funName = next.get('callee').get('name')
                    parameters = []
                    if 'arguments' in next.keys():
                        for argument in next.get('arguments'):
                            parameters.append(argument.get('value'))
#                     print("parameters", parameters)
                    curFun = f'{jsFun}\n{funName}{tuple(parameters)};'
                    curFun = curFun.replace(',)', ')')
#                     print("curFun", curFun)
                    res = js2py.eval_js(curFun)
                    print('eval res', res)
#                     res = jsFun(parameters[0], parameters[1])
                    # print("res", res)
                    newNode = {'type' : 'Literal', 'value' : res, 'raw' : '\'' + res + '\''}
                    node[i] = newNode
                    continue
            DFS_replace(node[i], nodeName, jsFun)
        
def simulate(inputFileName, inputPath, outputPath):
    inputFile = os.path.join(inputPath, inputFileName)
    #     print('inputFile', inputFile)
    #     inputFile = './jsdata/rand_jsjiami/' + inputFileName
    # file = open(inputFile)
    # if not os.path.exists(inputFile + '-fun'):
    #     os.mkdir(inputFile + '-fun')
    srcFile = os.popen('node pparse.js ' + inputFile, 'r')# Not sure ...'r', 1)
    syntax = json.loads(srcFile.read())
    srcFile.close()
    
    with open('t1.json', 'w') as f:
        json.dump(syntax, f)
    
    newProgram = {'type': 'Program', 'body': [], 'sourceType': 'script'}
    illgalFuns = set()
    for item in syntax['body']:
        if item['type'] == 'ExpressionStatement' and (item['expression']['type'] != 'AssignmentExpression'):
#             print(item, '\n')
            newProgram['body'].append(item)

        if item['type'] == 'FunctionDeclaration' and item['id']['type'] == 'Identifier'\
            and item['id']['name'].startswith('_0x'): 
            illgalFuns.add(item['id']['name'])
            newProgram['body'].append(item)
#     print(newProgram)
    decs = []
    for item in syntax['body']:
        if item not in newProgram['body']:
            DFS_alias(item, illgalFuns, decs)

    target_dec = {"type": "VariableDeclaration", "declarations": decs, 'kind': "const"}
    if len(target_dec['declarations']) > 0:
        newProgram['body'].append(target_dec)

    illegalName = os.path.join('./temp_job', inputFileName + '.json')
    with open(illegalName, 'w') as f:
        json.dump(newProgram, f)
    dstFile = os.popen('node ./pregenerate.js ' + illegalName, 'r')
    dstRes = dstFile.read()

    for item in newProgram['body']:
        if item in syntax['body']:
            syntax['body'].remove(item)
#     print(dstRes)
    DFS_replace(syntax, illgalFuns, dstRes)
    DFS_clear(syntax)
    
    outputFile = os.path.join(outputPath, inputFileName)
#     outputFile = './jsdata/rand_jsjiami_recover/' + inputFileName

    newFile = open(outputFile + '-fixed.json', 'w')
    newFile.write(json.dumps(syntax, indent = 4))
    newFile.close()
    # print(syntax)
    os.system('node ./regenerate.js ' + outputFile + '-fixed.json ' + outputFile)



if __name__ == "__main__":
#     simulate3('44354.js-ob.js')
    simulate('memoize.js', 'temp_job', 'lodash_rec_ob_raw')