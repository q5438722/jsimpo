import sys, os
import similarity
import csv
import pandas as pd
import kernel
import time

def cmp_origin(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = similarity.similarity('./jsdata2/rand_origin/' + name, dstPath + '/' + name + affix, False)
        resColumn.append(resNumber)
    return resColumn


def cmp_length(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = similarity.length_similarity('./jsdata2/rand_origin/' + name, dstPath + '/' + name + affix)
        resColumn.append(resNumber)
    return resColumn


def cmp_length2(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = similarity.length_similarity2('./jsdata/rand_origin/' + name, dstPath + '/' + name + affix)
        resColumn.append(resNumber)
    return resColumn


def cmp_length22(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = similarity.length_similarity2('./jsdata2/rand_origin/' + name, dstPath + '/' + name + affix)
        resColumn.append(resNumber)
    return resColumn


def cmp_kernel(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = kernel.tree_kernel('./jsdata/rand_origin/' + name, dstPath + '/' + name + affix)
        resColumn.append(resNumber)
    return resColumn


def jsjiami_calculate():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_origin('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_origin('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_origin('./jsdata2/rand_jsjiami', '-jiami.js', newNames)
    # jsjiami_nice_unweighted = cmp_origin('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    jsjiami_recover_unweighted = cmp_origin('./jsdata2/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_origin('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_jiami.csv', encoding ='utf-8', index = False)


def ob_calculate():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_origin('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_origin('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_origin('./jsdata2/rand_ob', '-ob.js', newNames)
    # jsjiami_nice_unweighted = cmp_origin('./jsdata/rand_ob_nice', '-ob.js', newNames)

    jsjiami_recover_unweighted = cmp_origin('./jsdata2/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_origin('./jsdata/rand_ob_recover_nice', '-ob.js', newNames)
    jsjiami_recover_unweighted_old = cmp_origin('./jsdata2/rand_ob_recover', '-ob.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted_old'] = jsjiami_recover_unweighted_old

    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_ob.csv', encoding ='utf-8', index = False)


def improvement_calculate():
    srcPath = './jsdata/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    
    res1 = pd.DataFrame(columns = {'name', 'nice', 'recover_nice', 'improve'})
    res2 = pd.DataFrame(columns = {'name', 'nice', 'recover_nice', 'improve'})
    for name in newNames:
        r1 = similarity.improvement(name, '-jiami.js', 'jsjiami', False)
        r2 = similarity.improvement(name, '-ob.js', 'ob', False)
        res1 = res1.append([{'name': name, 'nice': r1[0], 'recover_nice': r1[1], 'improve': r1[2]}])
        res2 = res2.append([{'name': name, 'nice': r2[0], 'recover_nice': r2[1], 'improve': r2[2]}])
    

    res1.to_csv('./jsdata/improve_jiami.csv', index = False)
    res2.to_csv('./jsdata/improve_ob.csv', index = False)

    res1 = res1.drop(res1[res1.nice < -0.5].index)
    res1 = res1.drop(res1[res1.recover_nice < -0.5].index)

    res2 = res2.drop(res2[res2.nice < -0.5].index)
    res2 = res2.drop(res2[res2.recover_nice < -0.5].index)
    
    print('First Res:')
    print(res1.mean())
    print(res2.mean())

    res1.to_csv('./jsdata/improve_jiami_new.csv', index = False)
    res2.to_csv('./jsdata/improve_ob_new.csv', index = False)


def jsjiami_calculate2():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_length('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_length('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_length('./jsdata2/rand_jsjiami', '-jiami.js', newNames)
    # jsjiami_nice_unweighted = cmp_length('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    jsjiami_recover_unweighted = cmp_length('./jsdata2/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_length('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_len_jiami.csv', encoding ='utf-8', index = False)


def ob_calculate2():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_length('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_length('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_length('./jsdata2/rand_ob', '-ob.js', newNames)
    # jsjiami_nice_unweighted = cmp_length('./jsdata/rand_ob_nice', '-ob.js', newNames)

    jsjiami_recover_unweighted = cmp_length('./jsdata2/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_length('./jsdata/rand_ob_recover_nice', '-ob.js', newNames)
    jsjiami_recover_unweighted_old = cmp_length('./jsdata2/rand_ob_recover', '-ob.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted_old'] = jsjiami_recover_unweighted_old

    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_len_ob.csv', encoding ='utf-8', index = False)


def jsjiami_calculate3():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_length2('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_length2('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_length2('./jsdata2/rand_jsjiami', '-jiami.js', newNames)
    # jsjiami_nice_unweighted = cmp_length2('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    jsjiami_recover_unweighted = cmp_length2('./jsdata2/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_length2('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_len_jiami_2.csv', encoding ='utf-8', index = False)


def ob_calculate3():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    rename_unweighted = cmp_length2('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_length2('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_length2('./jsdata2/rand_ob', '-ob.js', newNames)
    # jsjiami_nice_unweighted = cmp_length2('./jsdata/rand_ob_nice', '-ob.js', newNames)

    jsjiami_recover_unweighted = cmp_length2('./jsdata2/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_length2('./jsdata/rand_ob_recover_nice', '-ob.js', newNames)
    jsjiami_recover_unweighted_old = cmp_length2('./jsdata2/rand_ob_recover', '-ob.js', newNames)


    # print(rename_unweighted)
    res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted_old'] = jsjiami_recover_unweighted_old
    
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_len_ob_2.csv', encoding ='utf-8', index = False)


def jsjiami_calculate4():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    # rename_unweighted = cmp_kernel('./jsdata2/rand_rename', '-rename.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_kernel('./jsdata2/rand_jsjiami', '-jiami.js', newNames)
    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    jsjiami_recover_unweighted = cmp_kernel('./jsdata2/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    # res['rename_unweighted'] = rename_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_kernel_jiami.csv', encoding ='utf-8', index = False)


def ob_calculate4():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted_old = cmp_kernel('./jsdata2/rand_ob2', '-ob.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_unweighted = cmp_kernel('./jsdata2/rand_ob', '-ob.js', newNames)
    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_ob_nice', '-ob.js', newNames)

    jsjiami_recover_unweighted = cmp_kernel('./jsdata2/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_ob_recover_nice', '-ob.js', newNames)

    jsjiami_recover_unweighted_old = cmp_kernel('./jsdata2/rand_ob_recover', '-ob.js', newNames)

    # print(rename_unweighted)
    res['jsjiami_unweighted_old'] = jsjiami_unweighted_old
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_unweighted'] = jsjiami_unweighted

    res['jsjiami_recover_unweighted_old'] = jsjiami_recover_unweighted_old
    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_kernel_ob.csv', encoding ='utf-8', index = False)

def jsjiami_calculate5():
    srcPath = './jsdata/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_kernel('./jsdata/rand_jsjiami', '-jiami.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_jsdec = cmp_kernel('./jsdata/rand_jsjiami_jsdec', '-jiami.js', newNames)
    jsjiami_illu = cmp_kernel('./jsdata/rand_jsjiami_illu', '-jiami.js', newNames)
    jsjiami_sd = cmp_kernel('./jsdata/rand_jsjiami_sd', '-jiami.js', newNames)
    jsjiami_safe = cmp_kernel('./jsdata/rand_jsjiami_safe', '-jiami.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # jsjiami_recover_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted

    res['jsjiami_jsdec'] = jsjiami_jsdec
    res['jsjiami_illu'] = jsjiami_illu
    res['jsjiami_sd'] = jsjiami_sd
    res['jsjiami_safe'] = jsjiami_safe

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata/res_kernel_jiami_cmp.csv', encoding ='utf-8', index = False)


def ob_calculate5():
    srcPath = './jsdata/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_kernel('./jsdata/rand_ob', '-ob.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    job_jsdec = cmp_kernel('./jsdata/rand_ob_jsdec', '-ob.js', newNames)
    job_illu = cmp_kernel('./jsdata/rand_ob_illu', '-ob.js', newNames)
    job_sd = cmp_kernel('./jsdata/rand_ob_sd', '-ob.js', newNames)
    job_safe = cmp_kernel('./jsdata/rand_ob_safe', '-ob.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # job_recover_unweighted = cmp_kernel('./jsdata/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_jsdec'] = job_jsdec
    res['jsjiami_illu'] = job_illu
    res['jsjiami_sd'] = job_sd
    res['jsjiami_safe'] = job_safe

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = job_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata/res_kernel_ob_cmp.csv', encoding ='utf-8', index = False)



def jsjiami_calculate6_1():
    srcPath = './jsdata/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_length2('./jsdata/rand_jsjiami', '-jiami.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_jsdec = cmp_length2('./jsdata/rand_jsjiami_jsdec', '-jiami.js', newNames)
    jsjiami_illu = cmp_length2('./jsdata/rand_jsjiami_illu', '-jiami.js', newNames)
    jsjiami_sd = cmp_length2('./jsdata/rand_jsjiami_sd', '-jiami.js', newNames)
    jsjiami_safe = cmp_length2('./jsdata/rand_jsjiami_safe', '-jiami.js', newNames)
    jsjiami_recover_unweighted = cmp_length2('./jsdata/rand_jsjiami_recover', '-jiami.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # jsjiami_recover_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted

    res['jsjiami_jsdec'] = jsjiami_jsdec
    res['jsjiami_illu'] = jsjiami_illu
    res['jsjiami_sd'] = jsjiami_sd
    res['jsjiami_safe'] = jsjiami_safe
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata/res_token_jiami_cmp.csv', encoding ='utf-8', index = False)


def jsjiami_calculate6_2():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_length22('./jsdata2/rand_jsjiami', '-jiami.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    jsjiami_jsdec = cmp_length22('./jsdata2/rand_jsjiami_jsdec', '-jiami.js', newNames)
    jsjiami_illu = cmp_length22('./jsdata2/rand_jsjiami_illu', '-jiami.js', newNames)
    jsjiami_sd = cmp_length22('./jsdata2/rand_jsjiami_sd', '-jiami.js', newNames)
    jsjiami_safe = cmp_length22('./jsdata2/rand_jsjiami_safe', '-jiami.js', newNames)
    jsjiami_recover_unweighted = cmp_length22('./jsdata2/rand_jsjiami_recover', '-jiami.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # jsjiami_recover_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover', '-jiami.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted

    res['jsjiami_jsdec'] = jsjiami_jsdec
    res['jsjiami_illu'] = jsjiami_illu
    res['jsjiami_sd'] = jsjiami_sd
    res['jsjiami_safe'] = jsjiami_safe
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_token_jiami_cmp.csv', encoding ='utf-8', index = False)



def ob_calculate6_1():
    srcPath = './jsdata/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_length2('./jsdata/rand_ob', '-ob.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    job_jsdec = cmp_length2('./jsdata/rand_ob_jsdec', '-ob.js', newNames)
    job_illu = cmp_length2('./jsdata/rand_ob_illu', '-ob.js', newNames)
    job_sd = cmp_length2('./jsdata/rand_ob_sd', '-ob.js', newNames)
    job_safe = cmp_length2('./jsdata/rand_ob_safe', '-ob.js', newNames)
    jsjiami_recover_unweighted = cmp_length2('./jsdata/rand_ob2_recover', '-ob.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # job_recover_unweighted = cmp_kernel('./jsdata/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_jsdec'] = job_jsdec
    res['jsjiami_illu'] = job_illu
    res['jsjiami_sd'] = job_sd
    res['jsjiami_safe'] = job_safe
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = job_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata/res_token_ob_cmp.csv', encoding ='utf-8', index = False)


def ob_calculate6_2():
    srcPath = './jsdata2/rand_origin'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    jsjiami_unweighted = cmp_length22('./jsdata2/rand_ob', '-ob.js', newNames)
    # rename_nice_unweighted = cmp_kernel('./jsdata/rand_rename_nice', '-rename.js', newNames)

    job_jsdec = cmp_length22('./jsdata2/rand_ob_jsdec', '-ob.js', newNames)
    job_illu = cmp_length22('./jsdata2/rand_ob_illu', '-ob.js', newNames)
    job_sd = cmp_length22('./jsdata2/rand_ob_sd', '-ob.js', newNames)
    job_safe = cmp_length22('./jsdata2/rand_ob_safe', '-ob.js', newNames)
    jsjiami_recover_unweighted = cmp_length22('./jsdata2/rand_ob2_recover', '-ob.js', newNames)


    # jsjiami_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_nice', '-jiami.js', newNames)

    # job_recover_unweighted = cmp_kernel('./jsdata/rand_ob2_recover', '-ob.js', newNames)
    # jsjiami_recover_nice_unweighted = cmp_kernel('./jsdata/rand_jsjiami_recover_nice', '-jiami.js', newNames)


    # print(rename_unweighted)
    res['jsjiami_unweighted'] = jsjiami_unweighted
    # res['rename_nice_unweighted'] = rename_nice_unweighted
    res['jsjiami_jsdec'] = job_jsdec
    res['jsjiami_illu'] = job_illu
    res['jsjiami_sd'] = job_sd
    res['jsjiami_safe'] = job_safe
    res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = job_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./jsdata2/res_token_ob_cmp.csv', encoding ='utf-8', index = False)



if __name__ == '__main__':
    # ob_calculate()
    # improvement_calculate()
    # jsjiami_calculate2()
    # jsjiami_calculate3()
    # jsjiami_calculate4()
    st = time.time()
    # ob_calculate4()
    # jsjiami_calculate5()
    # ob_calculate5()
    # jsjiami_calculate6_1()
    # jsjiami_calculate6_2()
    ob_calculate6_1()
    ob_calculate6_2()
    end = time.time()
    print('time: ', end - st)