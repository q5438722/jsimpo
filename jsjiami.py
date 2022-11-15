import os
import sys
import requests
import json

def trans(path, dst, name):
    if os.path.exists(path) and path.endswith('.js'):
        file = open(path, 'r')
        code = file.read()
        url = 'http://api.jsjiami.com/jsjiami/v2'
        data = {'uid' : 'JS677108', 'token' : '099aecf0ee5ab649', 'javascript' : code, 'templateId' : 'hiejmbot'}
        res = requests.post(url = url, data = data)
        newRes = json.loads(str(res.content, 'utf-8'))
        if newRes['status'] == 200:
            newFile = open(dst + '/' + name + '-jiami.js', 'w')
            newFile.write(newRes['code'])
            newFile.close()
        else:
            print(newRes)
        return newRes
    return {}

if __name__ == '__main__':
    logFile = open('failLog2.txt', 'w')

    if os.path.isdir(sys.argv[1]):
        os.listdir(sys.argv[1])
        items = os.listdir(sys.argv[1])
        items.sort()
        for item in items:
            if item <= '82803.js':
                continue
            try:
                res = trans(sys.argv[1] + '/' + item, sys.argv[2], item)
                if res['status'] != 200:
                    logFile.write(res)
                    continue
            except:
                logFile.write(item)
    elif os.path.exists(sys.argv[1]):
        trans(sys.argv[1], sys.argv[2], sys.argv[3])
    logFile.close()