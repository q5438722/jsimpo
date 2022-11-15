import json
import js2py
import os, sys

def moveDeclaration(syntax):
    if syntax.get('type') != 'Program':
        return []
    bodies = syntax.get('body')
    index = 0
    while index != -1:
        index = -1
        for i in range(len(bodies)):
            if bodies[i].get('type') == 'VariableDeclaration' and len(bodies[i].get('declarations')) > 1:
                index = i
                break
        cnt = 0
        toRemove = bodies[i]
        if index != -1:
            for item in bodies[i].get('declarations'):
                newDeclar = {"type": "VariableDeclaration", "declarations": [item], "kind": "var"}
                bodies.insert(index + cnt, newDeclar)
                cnt = cnt + 1
            bodies.remove(toRemove)



def dfs_call_graph(node):
    return

def getDel(syntax, toDel):
    if syntax.get('type') != 'Program':
        return []
    body = syntax.get('body')


    definition, namedFun, exp = [], [], []


    return