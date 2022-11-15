from enum import Flag
from nis import cat
from pandas._config.config import reset_option
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import sys
import time
import pandas as pd
import re, os

def obfuscate_beautify(dir):
    browser = webdriver.Chrome(executable_path="./chromedriver")
    url = 'https://beautifytools.com/javascript-obfuscator.php'
    browser.get(url)
    browser.implicitly_wait(10)

    files = os.listdir(dir)
    files.sort()
    flag = False
    for item in files:
        print(item)
        if item == '96629.js':
            flag = True
        if not flag:
            continue
        if not item.endswith('.js'):
            continue
        inputFile = open(dir + item).read()
        for i in range(2):
            print("round ", i)
            try:
                browser.find_element_by_id('src').send_keys(inputFile)
                browser.find_element_by_id('obfuscate').click()
                browser.implicitly_wait(1)
            except:
                browser.get(url)
                browser.implicitly_wait(5)
                continue
            
            res = browser.find_elements_by_id('out')
            if(len(res) < 1):
                if i % 5 == 4:
                    browser.get(url)
                    browser.implicitly_wait(5)
                else:
                    browser.back()
            else:
                outputFile = open('./beautify2/' + item + '-beautify.js', 'w')
                outputFile.write(res[0].text)
                outputFile.close()
                browser.get(url)
                browser.implicitly_wait(10)
                break

if __name__ == '__main__':
    obfuscate_beautify('../jsdata2/rand_origin/')

