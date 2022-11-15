from copy import deepcopy
import sys, os
import similarity
import csv
import pandas as pd
import kernel
import time

def cmp_kernel1(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = kernel.tree_kernel('./jsdata/rand_origin/' + name, dstPath + name + affix)
        resColumn.append(resNumber)
    return resColumn


def beautify1():
    srcPath = './jsdata/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    beautify = cmp_kernel1('./test/beautify/', '-beautify.js', newNames)
    recover = cmp_kernel1('./test/beautify-res/', '-beautify.js', newNames)

    # print(rename_unweighted)
    res['beautify'] = beautify
    # res['rename_nice_unweighted'] = rename_nice_unweighted

    res['recover'] = recover

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./test/beautify1.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    res = res.drop(res[res.beautify < -0.5].index)
    res = res.drop(res[res.recover < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./test/beautify1-new.csv', index = False)


def cmp_kernel2(dstPath, affix, newNames):
    if not os.path.isdir(dstPath):
        return
    
    resColumn = []
    for name in newNames:
        if not name.endswith('.js'):
            continue
        resNumber = kernel.tree_kernel('./jsdata2/rand_origin/' + name, dstPath + name + affix)
        resColumn.append(resNumber)
    return resColumn


def beautify2():
    srcPath = './jsdata2/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    beautify = cmp_kernel2('./test/beautify2/', '-beautify.js', newNames)
    recover = cmp_kernel2('./test/beautify2-res/', '-beautify.js', newNames)

    # print(rename_unweighted)
    res['beautify'] = beautify
    # res['rename_nice_unweighted'] = rename_nice_unweighted

    res['recover'] = recover

    # res['jsjiami_nice_unweighted'] = jsjiami_nice_unweighted
    # res['jsjiami_recover_unweighted'] = jsjiami_recover_unweighted
    # res['jsjiami_recover_nice_unweighted'] = jsjiami_recover_nice_unweighted

    res.to_csv('./test/beautify2.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    res = res.drop(res[res.beautify < -0.5].index)
    res = res.drop(res[res.recover < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./test/beautify2-new.csv', index = False)


def beautify1_other():
    srcPath = './jsdata/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    beautify = cmp_kernel1('./test/beautify/', '-beautify.js', newNames)
    jsdec = cmp_kernel1('./test/beautify1-jsdec/', '-beautify.js', newNames)
    illu = cmp_kernel1('./test/beautify1-illu/', '-beautify.js', newNames)
    sd = cmp_kernel1('./test/beautify1-sd/', '-beautify.js', newNames)
    safe = cmp_kernel1('./test/beautify1-safe/', '-beautify.js', newNames)

    # print(rename_unweighted)
    res['beautify'] = beautify
    res['jsdec'] = jsdec
    res['illu'] = illu
    res['sd'] = sd
    res['safe'] = safe


    res.to_csv('./test/baseline1.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    res = res.drop(res[res.jsdec < -0.5].index)
    res = res.drop(res[res.illu < -0.5].index)
    res = res.drop(res[res.sd < -0.5].index)
    res = res.drop(res[res.safe < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./test/baseline1-new.csv', index = False)


def beautify2_other():
    srcPath = './jsdata2/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    beautify = cmp_kernel2('./test/beautify/', '-beautify.js', newNames)
    jsdec = cmp_kernel2('./test/beautify2-jsdec/', '-beautify.js', newNames)
    illu = cmp_kernel2('./test/beautify2-illu/', '-beautify.js', newNames)
    sd = cmp_kernel2('./test/beautify2-sd/', '-beautify.js', newNames)
    safe = cmp_kernel2('./test/beautify2-safe/', '-beautify.js', newNames)

    # print(rename_unweighted)
    res['beautify'] = beautify
    res['jsdec'] = jsdec
    res['illu'] = illu
    res['sd'] = sd
    res['safe'] = safe


    res.to_csv('./test/baseline2.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    res = res.drop(res[res.jsdec < -0.5].index)
    res = res.drop(res[res.illu < -0.5].index)
    res = res.drop(res[res.sd < -0.5].index)
    res = res.drop(res[res.safe < -0.5].index)

    print(len(res))
    print(res.mean())
    res.to_csv('./test/baseline2-new.csv', index = False)


def ugly1_other():
    srcPath = './jsdata/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    ugly = cmp_kernel1('./ugly/ugly/', '-rename.js', newNames)
    recover = 1.0
    jsdec = cmp_kernel1('./ugly/ugly-jsdec/', '-rename.js', newNames)
    illu = cmp_kernel1('./ugly/ugly-illu/', '-rename.js', newNames)
    sd = cmp_kernel1('./ugly/ugly-sd/', '-rename.js', newNames)
    safe = cmp_kernel1('./ugly/ugly-safe/', '-rename.js', newNames)


    # print(rename_unweighted)
    res['ugly'] = ugly
    res['recover'] = recover
    res['jsdec'] = jsdec
    res['illu'] = illu
    res['sd'] = sd
    res['safe'] = safe


    res.to_csv('./ugly/baseline1.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    res = res.drop(res[res.jsdec < -0.5].index)
    res = res.drop(res[res.illu < -0.5].index)
    res = res.drop(res[res.sd < -0.5].index)
    res = res.drop(res[res.safe < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./ugly/baseline1-new.csv', index = False)


def ugly2_other():
    srcPath = './jsdata2/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    ugly = cmp_kernel2('./ugly/ugly2/', '-rename.js', newNames)
    recover = 1.0
    jsdec = cmp_kernel2('./ugly/ugly2-jsdec/', '-rename.js', newNames)
    illu = cmp_kernel2('./ugly/ugly2-illu/', '-rename.js', newNames)
    sd = cmp_kernel2('./ugly/ugly2-sd/', '-rename.js', newNames)
    safe = cmp_kernel2('./ugly/ugly2-safe/', '-rename.js', newNames)

    # print(rename_unweighted)
    res['ugly'] = ugly
    res['recover'] = recover
    res['jsdec'] = jsdec
    res['illu'] = illu
    res['sd'] = sd
    res['safe'] = safe


    res.to_csv('./ugly/baseline2.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())


    # res = res.drop(res[res.jsdec < -0.5].index)
    res = res.drop(res[res.illu < -0.5].index)
    res = res.drop(res[res.sd < -0.5].index)
    res = res.drop(res[res.safe < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./ugly/baseline2-new.csv', index = False)


def eso1_other():
    srcPath = './jsdata/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    esoteric = cmp_kernel1('./esoteric/esoteric/', '-eso.js', newNames)
    esoteric_recover = 1.0
    esoteric_jsdec = cmp_kernel1('./esoteric/esoteric-jsdec/', '-eso.js', newNames)
    esoteric_illu = cmp_kernel1('./esoteric/esoteric-illu/', '-eso.js', newNames)
    esoteric_sd = cmp_kernel1('./esoteric/esoteric-sd/', '-eso.js', newNames)
    esoteric_safe = cmp_kernel1('./esoteric/esoteric-safe/', '-eso.js', newNames)

    fk = cmp_kernel1('./esoteric/fk/', '-fk.js', newNames)
    fk_recover = 1.0
    fk_jsdec = cmp_kernel1('./esoteric/fk-jsdec/', '-fk.js', newNames)
    fk_illu = cmp_kernel1('./esoteric/fk-illu/', '-fk.js', newNames)
    fk_sd = cmp_kernel1('./esoteric/fk-sd/', '-fk.js', newNames)
    fk_safe = cmp_kernel1('./esoteric/fk-safe/', '-fk.js', newNames)


    # print(rename_unweighted)
    res['esoteric'] = esoteric
    res['esoteric_recover'] = esoteric_recover
    res['esoteric_jsdec'] = esoteric_jsdec
    res['esoteric_illu'] = esoteric_illu
    res['esoteric_sd'] = esoteric_sd
    res['esoteric_safe'] = esoteric_safe

    res['fk'] = fk
    res['fk_recover'] = fk_recover
    res['fk_jsdec'] = fk_jsdec
    res['fk_illu'] = fk_illu
    res['fk_sd'] = fk_sd
    res['fk_safe'] = fk_safe


    res.to_csv('./esoteric/baseline1.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())

    res1 = res

    res = res.drop(res[res.esoteric_jsdec < -0.5].index)
    res = res.drop(res[res.esoteric_illu < -0.5].index)
    res = res.drop(res[res.esoteric_sd < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./esoteric/esoteric1-new.csv', index = False)

    res = res1

    res = res.drop(res[res.fk_jsdec < -0.5].index)
    res = res.drop(res[res.fk_illu < -0.5].index)
    res = res.drop(res[res.fk_sd < -0.5].index)
    res = res.drop(res[res.fk_safe < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./esoteric/fk1-new.csv', index = False)


def eso2_other():
    srcPath = './jsdata2/rand_origin/'
    names = os.listdir(srcPath)
    names.sort()
    newNames = []
    for name in names:
        if name.endswith('.js'):
            newNames.append(name)
    res = pd.DataFrame({'FileName': newNames})

    esoteric = cmp_kernel2('./esoteric/esoteric2/', '-eso.js', newNames)
    esoteric_recover = 1.0
    esoteric_jsdec = cmp_kernel2('./esoteric/esoteric2-jsdec/', '-eso.js', newNames)
    esoteric_illu = cmp_kernel2('./esoteric/esoteric2-illu/', '-eso.js', newNames)
    esoteric_sd = cmp_kernel2('./esoteric/esoteric2-sd/', '-eso.js', newNames)
    esoteric_safe = cmp_kernel2('./esoteric/esoteric2-safe/', '-eso.js', newNames)

    fk = cmp_kernel2('./esoteric/fk2/', '-fk.js', newNames)
    fk_recover = 1.0
    fk_jsdec = cmp_kernel2('./esoteric/fk2-jsdec/', '-fk.js', newNames)
    fk_illu = cmp_kernel2('./esoteric/fk2-illu/', '-fk.js', newNames)
    fk_sd = cmp_kernel2('./esoteric/fk2-sd/', '-fk.js', newNames)
    fk_safe = cmp_kernel2('./esoteric/fk2-safe/', '-fk.js', newNames)


    # print(rename_unweighted)
    res['esoteric'] = esoteric
    res['esoteric_recover'] = esoteric_recover
    res['esoteric_jsdec'] = esoteric_jsdec
    res['esoteric_illu'] = esoteric_illu
    res['esoteric_sd'] = esoteric_sd
    res['esoteric_safe'] = esoteric_safe

    res['fk'] = fk
    res['fk_recover'] = fk_recover
    res['fk_jsdec'] = fk_jsdec
    res['fk_illu'] = fk_illu
    res['fk_sd'] = fk_sd
    res['fk_safe'] = fk_safe


    res.to_csv('./esoteric/baseline2.csv', encoding ='utf-8', index = False)
    print(len(res))
    print(res.mean())

    res1 = res

    res = res.drop(res[res.esoteric_jsdec < -0.5].index)
    res = res.drop(res[res.esoteric_illu < -0.5].index)
    res = res.drop(res[res.esoteric_sd < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./esoteric/esoteric2-new.csv', index = False)

    res = res1

    res = res.drop(res[res.fk_jsdec < -0.5].index)
    res = res.drop(res[res.fk_illu < -0.5].index)
    res = res.drop(res[res.fk_sd < -0.5].index)
    res = res.drop(res[res.fk_safe < -0.5].index)
    print(len(res))
    print(res.mean())
    res.to_csv('./esoteric/fk2-new.csv', index = False)



if __name__ == '__main__':
    # ob_calculate()
    # improvement_calculate()
    # jsjiami_calculate2()
    # jsjiami_calculate3()
    # jsjiami_calculate4()
    st = time.time()
    # ob_calculate4()
    # beautify1()
    # beautify2()
    # beautify1_other()
    # beautify2_other()
    # ugly1_other()
    # ugly2_other()
    eso1_other()
    eso2_other()
    end = time.time()
