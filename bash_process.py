import json
import js2py
import os, sys
import divide_ob
import copy
import simulation
import time

def jsjiami_recover():
    names = os.listdir('./jsdata/rand_jsjiami')
    totTime = [0, 0, 0, 0]
    counter = 0
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            tempTime = simulation.simulate(name)
            for i in range(4):
                totTime[i] = totTime[i] + tempTime[i]
                counter = counter + 1
        except:
            print(name)
    print('Res :')
    print(totTime)
    print(counter)

def ob_recover():
    names = os.listdir('./jsdata/rand_ob')
    totTime = [0, 0, 0, 0, 0, 0]
    counter = 0
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            tempTime = simulation.simulate2(name)
            # tempTime = simulation.simulate(name)
            for i in range(6):
                totTime[i] = totTime[i] + tempTime[i]
                counter = counter + 1
        except:
            print(name)
    print('Res :')
    print(totTime)
    print(counter)



def eval_js1():
    inputPath = './test/beautify/'
    files = os.listdir(inputPath)
    for item in files:
        if not item.endswith('.js'):
            continue
        try:
            os.system('node eval_beautify.js ./test/beautify/' + item + ' > ./test/beautify-res/' + item)
        except:
            print('Fail name : ' + item)
            continue


def eval_eso():
    names = os.listdir('./esoteric/esoteric/')
    totTime = [0, 0, 0, 0]
    counter = 0
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            tempTime = simulation.simulate(name)
            for i in range(4):
                totTime[i] = totTime[i] + tempTime[i]
                counter = counter + 1
        except:
            print(name)
    print('Res :')
    print(totTime)
    print(counter)
    names = os.listdir('./esoteric/fk/')
    totTime = [0, 0, 0, 0]
    counter = 0
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            tempTime = simulation.simulate(name)
            for i in range(4):
                totTime[i] = totTime[i] + tempTime[i]
                counter = counter + 1
        except:
            print(name)
    print('Res :')
    print(totTime)
    print(counter)


def eval_ugly():
    names = os.listdir('./ugly/ugly')
    totTime = [0, 0, 0, 0]
    counter = 0
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            tempTime = simulation.simulate(name)
            for i in range(4):
                totTime[i] = totTime[i] + tempTime[i]
                counter = counter + 1
        except:
            print(name)
    print('Res :')
    print(totTime)
    print(counter)


if __name__ == '__main__':
    st = time.time()
    jsjiami_recover()
    ob_recover()
    eval_js1()
    eval_ugly()
    eval_eso()
    end = time.time()
    print('time: ', end - st)