import os, sys
import simulation
import pandas as pd
import time

def detect_technique(detectPath, affix, fun):
    names = os.listdir(detectPath)
    res = [0, 0, 0, 0]
    for name in names:
        if not name.endswith('.js'):
            continue
        try:
            jsjiami = fun(detectPath + '/' + name)
        except:
            print('Fail', name)
            continue
        if jsjiami and affix in name:
            res[0] = res[0] + 1
        elif jsjiami and affix not in name:
            res[1] = res[1] + 1
        elif not jsjiami and affix in name:
            res[2] = res[2] + 1
        elif not jsjiami and affix not in name:
            res[3] = res[3] + 1
    print (affix)
    print (res)
    return res

def detect_all():
    res = pd.DataFrame(columns = {'name', 'TT', 'TF', 'FT', 'FF'}) #First bit: our result; second bit: true result
    
    jiami_global = detect_technique('./jsdata/rand_jsjiami_global_mixed', 'jiami', simulation.detect_global)
    res = res.append([{'name': 'jiami_global', 'TT': jiami_global[0], 'TF': jiami_global[1],
    'FT': jiami_global[2], 'FF': jiami_global[3]}])

    jiami_local = detect_technique('./jsdata/rand_jsjiami_local_mixed', 'jiami', simulation.detect_global)
    res = res.append([{'name': 'jiami_local', 'TT': jiami_local[0], 'TF': jiami_local[1],
    'FT': jiami_local[2], 'FF': jiami_local[3]}])

    ob_global = detect_technique('./jsdata/rand_ob_global_mixed', 'ob', simulation.detect_global2)
    res = res.append([{'name': 'ob_global', 'TT': ob_global[0], 'TF': ob_global[1],
    'FT': ob_global[2], 'FF': ob_global[3]}])

    ob_local = detect_technique('./jsdata/rand_ob_local_mixed', 'ob', simulation.detect_global2)
    res = res.append([{'name': 'ob_local', 'TT': ob_local[0], 'TF': ob_local[1],
    'FT': ob_local[2], 'FF': ob_local[3]}])

    ob_control = detect_technique('./jsdata/rand_ob_control_mixed', 'ob', simulation.detect_controlFlow)
    res = res.append([{'name': 'ob_control', 'TT': ob_control[0], 'TF': ob_control[1],
    'FT': ob_control[2], 'FF': ob_control[3]}])

    ob_number = detect_technique('./jsdata/rand_ob_number_mixed', 'ob', simulation.detect_number2Exp)
    res = res.append([{'name': 'ob_number', 'TT': ob_number[0], 'TF': ob_number[1],
    'FT': ob_number[2], 'FF': ob_number[3]}])

    res.to_csv('./jsdata/detect_res.csv', index = False)

if __name__ == '__main__':
    st = time.time()
    detect_all()
    end = time.time()
    print('time: ', end - st)