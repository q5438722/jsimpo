import sys, os
import json
import math

def extract_production(node, father, res):
    # print(node)
    if type(node) == dict:
        if 'type' not in node.keys():
            return 
        nodeType = node.get('type')
        term = father + '->' + nodeType
        if term not in res.keys():
            res[term] = 0
        res[term] = res[term] + 1
        for key in node.keys():
            extract_production(node[key], nodeType, res)
    elif type(node) == list:
        for item in node:
            extract_production(item, father, res)
    else:
        return


def dot_production(srcNode, dstNode):
    res = 0
    for key in srcNode.keys():
        if key in dstNode.keys():
            minCnt = min(srcNode[key], dstNode[key])
            res = res + minCnt
    # print(res)
    return res

def tree_kernel(srcPath, dstPath):
    print(srcPath, '    ', dstPath)
    if not os.path.exists(srcPath):
        return -1.0
    if not os.path.exists(dstPath):
        return -1.0

    try:
        # file = open(inputFile)
        # if not os.path.exists(inputFile + '-fun'):
        #     os.mkdir(inputFile + '-fun')
        srcFile = os.popen('node pparse.js ' + srcPath, 'r')# Not sure ...'r', 1)
        srcSyntaxTree = json.loads(srcFile.read())
        srcSyntaxNode = {}
        # print(123)
        extract_production(srcSyntaxTree.get('body'), 'Program', srcSyntaxNode)
        # print(456)
        srcFile.close()

        dstFile = os.popen('node pparse.js ' + dstPath, 'r')# Not sure ...'r', 1)
        dstSyntaxTree = json.loads(dstFile.read())
        dstSyntaxNode = {}
        # print('wow')

        extract_production(dstSyntaxTree.get('body'), 'Program', dstSyntaxNode)
        dstFile.close()
        # print('wow')

        kernel = dot_production(srcSyntaxNode, dstSyntaxNode) / math.sqrt((dot_production(srcSyntaxNode, srcSyntaxNode) * dot_production(dstSyntaxNode, dstSyntaxNode)))

        print('kernel : ', kernel)
        return kernel
    except:
        return -1.0


if __name__ == '__main__':
    print (tree_kernel(sys.argv[1], sys.argv[2]))