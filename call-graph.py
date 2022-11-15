import json
import os, sys

def Isredunduncy(node, p):
    if type(node) != dict and type(node) != list and type(node) != str and type(node) != bool:
        print (type(node), node)
    return False

def Iscallexpression(node, p):
    if 'type' in node and node.get('type') == 'CallExpression':
        callee = node.get('callee')
        if 'name' in callee:
            p.append(callee.get('name'))
            print(callee.get('name'))
        
def call_graph_in(node, p):
    left, right, graph, cright = p[0], p[1], p[3], p[4]
    numPara = p[5]
    if 'type' in node and node.get('type') == 'CallExpression':
        callee = node.get('callee')
        if 'name' in callee:
            c1 = callee.get('name')
            if len(left) > 0:
                edge = left[-1] + ' ' + c1
                if [left[-1], c1] in graph:
                    right[edge] = right[edge] + 1
                    cright[edge] = cright[edge] + 1
                else:
                    graph.append([left[-1], c1])
                    right[edge] = 1
                    cright[edge] = 1

                argus = node.get('arguments')
                numPara[c1] = len(argus)
                isconstant = True
                for argu in argus:
                    if argu.get('type') != 'Literal':
                        isconstant = False
                if not isconstant:
                    cright[edge] = cright[edge] - 1


            left.append(callee.get('name'))
        else:
            p[2] = p[2] + 1
            left.append(str(p[2]))
            # print(callee.get('name'))

def call_graph_out(node, p):
    left, right = p[0], p[1]
    if 'type' in node and node.get('type') == 'CallExpression':
        callee = node.get('callee')
        if 'name' in callee:
            left.remove(callee.get('name'))
            # print(callee.get('name'))
        else:
            left.remove(str(p[2]))
            p[2] = p[2] - 1

def writeFun(node):
    tempFile = open('./temp.js', 'w')
    tempFile.write(json.dumps(node))
    tempFile.close()


def DFS(node, fun_in, fun_out, p):
    if type(node) == dict:
        token = node.get('type')
        # if token == 'FunctionExpression':
        #     print (node.get('params'))
        fun_in(node, p)
        for key in node.keys():
            DFS(node.get(key), fun_in, fun_out, p)
        fun_out(node, p)
    elif type(node) == list:
        for i in range(len(node)):
            DFS(node[i], fun_in, fun_out, p)
    # else:
    #     if type(node) != str and type(node) != bool:
    #         print (type(node), node)





if __name__ == "__main__":
    file = open(sys.argv[1])
    syntax = json.load(file)
    # DFS(syntax, Isredunduncy, 0)
    callees = [[], {}, 0, [], {}, {}]
    DFS(syntax, call_graph_in, call_graph_out, callees)
    # print(callees[1])
    # print(callees[3])
    # for item in callees[3]:
    #     edge = item[0] + ' ' +  item[1]
    #     # print(edge, callees[4][edge])
    #     print(item, callees[1][edge], callees[4][edge])
    Dict1, Dict2, Dict3 = {}, {}, {}
    for item in callees[3]:
        if item[1] not in Dict1.keys():
            Dict1[item[1]] = 0
            Dict2[item[1]] = 0
            Dict3[item[1]] = 0
    for item in callees[3]:
        edge = item[0] + ' ' +  item[1]
        Dict1[item[1]] = Dict1[item[1]] + callees[1][edge]
        Dict2[item[1]] = Dict2[item[1]] + callees[4][edge]
        Dict3[item[1]] = callees[5][item[1]]
    for item in Dict1.keys():
        print(item, Dict1[item], Dict2[item], Dict3[item])
