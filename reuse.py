import os, sys
import random

def reuse_jiami():
    cnt1, cnt2 = 0, 0
    names = os.listdir('./jsdata/rand_jsjiami')
    print(len(names))
    for name in names: 
        if not name.endswith('.js'): 
            continue 
        originName = name[0:-9]
        print(originName)
        try:
            file = open('./jsdata/rand_origin/' + originName)
            program = file.read()
            # print(program)
            file.close()
            if 'function' not in program:
                continue
            else:
                print('aaa')
            cnt1 = cnt1 + 1
            os.system('node pparse ./jsdata/rand_origin/' + originName)
            os.system('cp ./jsdata/rand_jsjiami/' + name + ' ./jsdata2/rand_jsjiami/' + name) 
            # print('bbb')
            os.system('cp ./jsdata/rand_origin/' + originName + ' ./jsdata2/rand_origin/' + originName) 
            # print('bbb')
            cnt2 = cnt2 + 1
        except:
            continue
    print(cnt1, cnt2)

def newParse():
    names = os.listdir('../jsdata/jsFiles')
    used = os.listdir('./jsdata2/rand_origin_2')
    print(len(names))
    while len(os.listdir('./jsdata2/rand_origin')) < 670:
        idx = random.randint(0, len(names) - 1)
        name = names[idx]
        if not name.endswith('.js'):
            continue
        if name in used:
            continue
        try:
            file = open('../jsdata/jsFiles/' + name)
            program = file.read()
            # print(program)
            file.close()
            if 'function' not in program:
                continue
            os.system('node pparse ../jsdata/jsFiles/' + name)
            os.system('cp ../jsdata/jsFiles/' + name + ' ./jsdata2/rand_origin/' + name)
        except:
            continue


if __name__ == '__main__':
    newParse()