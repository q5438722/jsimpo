from js2py import eval_js
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import sys
import time
import pandas as pd
import re, os

def eval_js1():
    inputPath = './beautify/'
    files = os.listdir(inputPath)
    for item in files:
        if not item.endswith('.js'):
            continue
        try:
            os.system('node eval_beautify.js ./beautify/' + item + ' > ./beautify-res/' + item)
        except:
            print('Fail name : ' + item)
            continue


def eval_js2():
    inputPath = './beautify2/'
    files = os.listdir(inputPath)
    for item in files:
        if not item.endswith('.js'):
            continue
        try:
            os.system('node eval_beautify.js ./beautify2/' + item + ' > ./beautify2-res/' + item)
        except:
            print('Fail name : ' + item)
            continue


if __name__ == '__main__':
    st = time.time()
    eval_js1()
    # eval_js2()
    end = time.time()
    print('time ', end - st)
