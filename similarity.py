import sys, os
import json

def jaccard(src, dst, withWeight):
    left = src.keys()
    right = dst.keys()
    cap, sumLeft, sumRight = 0, 0, 0
    if withWeight:
        for item in left:
            sumLeft = sumLeft + src[item]
            if item in right:
                cap = cap + min(src[item], dst[item])
        for item in right:
            sumRight = sumRight + dst[item]
    else:
        for item in left:
            if item in right:
                cap = cap + 1
        sumLeft, sumRight = len(left), len(right)
    print(cap, sumLeft, sumRight)
    if sumLeft + sumRight - cap <= 0:
        return -1.0
    return (cap) / (sumLeft + sumRight - cap)


def filter_ids(Tokens):
    tree_ids, set_ids = [], {}
    for items in Tokens:
        temp_ids = {}
        for item in items:
            if item.get('type') != 'Identifier':
                continue
            
            name = item.get('value')
            if name not in temp_ids.keys():
                temp_ids[name] = 0
            if name not in set_ids.keys():
                set_ids[name] = 0

            temp_ids[name] = temp_ids[name] + 1
            set_ids[name] = set_ids[name] + 1
        if len(temp_ids.keys()) > 0:
            tree_ids.append(temp_ids)
    return tree_ids, set_ids

def similarity(srcPath, dstPath, withWeight):
    print('wow\n', srcPath, dstPath)
    if not os.path.exists(srcPath):
        return -1.0
    if not os.path.exists(dstPath):
        return -1.0
    
    try:
        srcFile = os.popen('node tokenize.js ' + srcPath, 'r')# Not sure ...'r', 1)
        srcTokens = json.loads(srcFile.read())
        srcFile.close()

        dstFile = os.popen('node tokenize.js ' + dstPath, 'r')
        dstTokens = json.loads(dstFile.read())
        dstFile.close()
    except:
        return -1.0

    srcTree, srcSet = filter_ids(srcTokens)
    dstTree, dstSet = filter_ids(dstTokens)

    return jaccard(srcSet, dstSet, withWeight)

def map_minus(src, dst):
    # print(src, dst)
    res = {}
    for item in src.keys():
        if item not in dst.keys():
            res[item] = src[item]
    return res

def improvement(srcName, affix, tool, withWeight):
    print('wow\n', srcName)
    dstName = srcName + affix
    paths = ['./jsdata/rand_origin/' + srcName, './jsdata/rand_rename/' + srcName + '-rename.js',
            './jsdata/rand_' + tool + '/' + dstName, './jsdata/rand_' + tool + '_recover/' + dstName,
            './jsdata/rand_rename_nice/' + srcName + '-rename.js', './jsdata/rand_' + tool + '_nice/' + dstName,
            './jsdata/rand_' + tool + '_recover_nice/' + dstName]
    # print(paths)
    for filePath in paths:
        if not os.path.exists(filePath):
            print('fail1 ', filePath)
            return [-1.0, -1.0, -1.0]
    
    Tokens = []
    try:
        for filePath in paths:
            srcFile = os.popen('node tokenize.js ' + filePath, 'r')# Not sure ...'r', 1)
            srcTokens = json.loads(srcFile.read())
            srcFile.close()
            srcTree, srcSet = filter_ids(srcTokens)
            Tokens.append(srcSet)
    except:
        print('fail')
        return [-1.0, -1.0, -1.0]

    diff = [map_minus(Tokens[0], Tokens[2]), map_minus(Tokens[5], Tokens[2]), map_minus(Tokens[6], Tokens[2]), map_minus(Tokens[6], Tokens[5])]
    res = []
    for i in range(1, 4):
        res.append(jaccard(Tokens[0], diff[i], withWeight))
    # if res[0] < 0.00005:
    #     res.append(-1.0)
    # else:
    #     res.append((res[1] - res[0]) / res[0])
    return res

    # return jaccard(srcSet, dstSet, withWeight)


def length_similarity(srcPath, dstPath):
    print('wow\n', srcPath, dstPath)
    if not os.path.exists(srcPath):
        return -1.0
    if not os.path.exists(dstPath):
        return -1.0
    
    try:
        srcFile = os.popen('node tokenize.js ' + srcPath, 'r')# Not sure ...'r', 1)
        srcTokens = json.loads(srcFile.read())
        srcFile.close()

        dstFile = os.popen('node tokenize.js ' + dstPath, 'r')
        dstTokens = json.loads(dstFile.read())
        dstFile.close()
    except:
        return -1.0
    
    if len(srcTokens) == 0:
        return -1.0

    return len(dstTokens) / len(srcTokens)


def length_similarity2(srcPath, dstPath):
    print('wow\n', srcPath, dstPath)
    if not os.path.exists(srcPath):
        return -1.0
    if not os.path.exists(dstPath):
        return -1.0
    
    try:
        srcFile = os.popen('node tokenize.js ' + srcPath, 'r')# Not sure ...'r', 1)
        srcTokens = json.loads(srcFile.read())
        srcFile.close()

        dstFile = os.popen('node tokenize.js ' + dstPath, 'r')
        dstTokens = json.loads(dstFile.read())
        dstFile.close()
    except:
        return -1.0
    
    if len(srcTokens) == 0:
        return -1.0

    return abs(len(dstTokens) - len(srcTokens)) / len(srcTokens)



if __name__ == '__main__':
    if len(sys.argv) < 3:
        print ("Lack of arguments!")
    else:
        srcPath, dstPath = sys.argv[1], sys.argv[2]
        s = similarity(srcPath, dstPath, False)
        print(s)
