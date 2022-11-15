from math import fabs
from matplotlib.backends.backend_pdf import PdfPages
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import copy
import numpy as np
from sqlalchemy import all_

# grouped boxplot
dict_demo_group = {'s1-m1': [1, 2, 3, 4, 5, 6, 7, 8], 's2-m2': [9, 8, 7, 6, 5, 4, 3, 2, 1], 's1-m2': [1, 3, 1, 2, 6, 7, 0, 8, 1],
        's2-m1': [2, 6, 2, 4, 1, 2, 7, 2,2,3,41, 2]}

# single boxplot
dict_demo_single = {'s1': [1, 2, 3, 4, 5, 6, 7, 8, 9], 's2': [9, 8, 7, 6, 5, 4, 3, 2, 1], 's3': [1, 3, 1, 2, 6, 7, 0, 8, 1],
        's4': [2, 6, 2, 4, 1, 2, 7, 2, 2]}


# dict_demo
# count: 'g' for group, 's' for single
# column_names: the list of column name
def creat_df(dict_demo, count, column_names):
    # if len(column_names) == 0:
    #     print('errors! please specify the columns !')
    #     return None

    all_line = list()
    for pair in dict_demo.items():
        keys = pair[0]
        values = pair[1]
        if count == 's':
            for value in values:
                line = [keys, value]
                all_line.append(line)
        if count == 'g':
            arrs = keys.split('-')
            for value in values:
                line = copy.deepcopy(arrs)
                line.append(value)
                all_line.append(line)
    df = pd.DataFrame(all_line, columns=column_names, dtype=float)
    return df

def fig1():
    all_line = []
    jsjiami_jsimpo = pd.read_csv('./jsdata/res_kernel_jiami.csv')
    for i in range(len(jsjiami_jsimpo)):
        origin = jsjiami_jsimpo.loc[i, 'jsjiami_unweighted']
        recover = jsjiami_jsimpo.loc[i, 'jsjiami_recover_unweighted']
        if origin > -0.1:
            all_line.append(['jsjiami', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['jsjiami', ' JSimpo ', recover])

    jsjiami2_jsimpo = pd.read_csv('./jsdata2/res_kernel_jiami.csv')
    for i in range(len(jsjiami2_jsimpo)):
        origin = jsjiami2_jsimpo.loc[i, 'jsjiami_unweighted']
        recover = jsjiami2_jsimpo.loc[i, 'jsjiami_recover_unweighted']
        if origin > -0.1:
            all_line.append(['jsjiami', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['jsjiami', ' JSimpo ', recover])

    jsjiami_baseline = pd.read_csv('./jsdata/res_kernel_jiami_cmp.csv')
    for i in range(len(jsjiami_baseline)):
        jsdec = jsjiami_baseline.loc[i, 'jsjiami_jsdec']
        illu = jsjiami_baseline.loc[i, 'jsjiami_illu']
        sd = jsjiami_baseline.loc[i, 'jsjiami_sd']
        safe = jsjiami_baseline.loc[i, 'jsjiami_safe']
        if jsdec > -0.1:
            all_line.append(['jsjiami', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['jsjiami', 'illu', illu])
        if sd > -0.1:
            all_line.append(['jsjiami', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['jsjiami', 'safe-deobs', safe])
        else:
            all_line.append(['jsjiami', 'safe-deobs', 0])



    jsjiami2_baseline = pd.read_csv('./jsdata2/res_kernel_jiami_cmp.csv')
    for i in range(len(jsjiami2_baseline)):
        jsdec = jsjiami2_baseline.loc[i, 'jsjiami_jsdec']
        illu = jsjiami2_baseline.loc[i, 'jsjiami_illu']
        sd = jsjiami2_baseline.loc[i, 'jsjiami_sd']
        safe = jsjiami_baseline.loc[i, 'jsjiami_safe']
        if jsdec > -0.1:
            all_line.append(['jsjiami', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['jsjiami', 'illu', illu])
        if sd > -0.1:
            all_line.append(['jsjiami', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['jsjiami', 'safe-deobs', safe])
        else:
            all_line.append(['jsjiami', 'safe-deobs', 0])
    return all_line

def fig2():
    all_line = []
    # ob_baseline = pd.read_csv('./jsdata/res_kernel_ob_cmp_combine.csv')
    # for i in range(len(ob_baseline)):
    #     origin = ob_baseline.loc[i, 'jsjiami_unweighted']
    #     recover = ob_baseline.loc[i, 'jsjiami_recover_unweighted']
    #     jsdec = ob_baseline.loc[i, 'jsjiami_jsdec']
    #     illu = ob_baseline.loc[i, 'jsjiami_illu']
    #     sd = ob_baseline.loc[i, 'jsjiami_sd']
    #     safe = ob_baseline.loc[i, 'jsjiami_safe']
    #     if origin > -0.1:
    #         all_line.append(['J-ob', '  Origin  ', origin])
    #     if recover > -0.1:
    #         all_line.append(['J-ob', ' JSimpo ', recover])
    #     if jsdec > -0.1:
    #         all_line.append(['J-ob', 'JSDec', jsdec])
    #     if illu > -0.1:
    #         all_line.append(['J-ob', 'illu', illu])
    #     if sd > -0.1:
    #         all_line.append(['J-ob', 'sd-soleaio', sd])
    #     if safe > -0.1:
    #         all_line.append(['J-ob', 'safe-deobs', safe])

    ob11_baseline = pd.read_csv('./jsdata/res_kernel_ob.csv')
    for i in range(len(ob11_baseline)):
        origin = ob11_baseline.loc[i, 'jsjiami_unweighted']
        recover = ob11_baseline.loc[i, 'jsjiami_recover_unweighted']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['J-ob', ' JSimpo ', recover])


    ob1_baseline = pd.read_csv('./jsdata/res_kernel_ob_cmp.csv')
    for i in range(len(ob1_baseline)):
        jsdec = ob1_baseline.loc[i, 'jsjiami_jsdec']
        illu = ob1_baseline.loc[i, 'jsjiami_illu']
        sd = ob1_baseline.loc[i, 'jsjiami_sd']
        safe = ob1_baseline.loc[i, 'jsjiami_safe']
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])

    ob21_baseline = pd.read_csv('./jsdata2/res_kernel_ob.csv')
    for i in range(len(ob21_baseline)):
        origin = ob21_baseline.loc[i, 'jsjiami_unweighted']
        recover = ob21_baseline.loc[i, 'jsjiami_recover_unweighted']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['J-ob', ' JSimpo ', recover])


    ob2_baseline = pd.read_csv('./jsdata2/res_kernel_ob_cmp.csv')
    for i in range(len(ob2_baseline)):
        jsdec = ob2_baseline.loc[i, 'jsjiami_jsdec']
        illu = ob2_baseline.loc[i, 'jsjiami_illu']
        sd = ob2_baseline.loc[i, 'jsjiami_sd']
        safe = ob2_baseline.loc[i, 'jsjiami_safe']
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])
    return all_line

def fig3():
    all_line = []
    beautify11_baseline = pd.read_csv('./test/beautify1.csv')
    for i in range(len(beautify11_baseline)):
        origin = beautify11_baseline.loc[i, 'beautify']
        recover = beautify11_baseline.loc[i, 'recover']
        if origin > -0.1:
            all_line.append(['BeautifyTools', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['BeautifyTools', ' JSimpo ', recover])


    beautify12_baseline = pd.read_csv('./test/baseline1.csv')
    for i in range(len(beautify12_baseline)):
        jsdec = beautify12_baseline.loc[i, 'jsdec']
        illu = beautify12_baseline.loc[i, 'illu']
        sd = beautify12_baseline.loc[i, 'sd']
        safe = beautify12_baseline.loc[i, 'safe']
        if jsdec > -0.1:
            all_line.append(['BeautifyTools', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['BeautifyTools', 'illu', illu])
        if sd > -0.1:
            all_line.append(['BeautifyTools', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['BeautifyTools', 'safe-deobs', safe])

    beautify21_baseline = pd.read_csv('./test/beautify2.csv')
    for i in range(len(beautify21_baseline)):
        origin = beautify21_baseline.loc[i, 'beautify']
        recover = beautify21_baseline.loc[i, 'recover']
        if origin > -0.1:
            all_line.append(['BeautifyTools', '  Origin  ', origin])
        if recover > -0.1:
            all_line.append(['BeautifyTools', ' JSimpo ', recover])


    beautify22_baseline = pd.read_csv('./test/baseline2.csv')
    for i in range(len(beautify22_baseline)):
        jsdec = beautify22_baseline.loc[i, 'jsdec']
        illu = beautify22_baseline.loc[i, 'illu']
        sd = beautify22_baseline.loc[i, 'sd']
        safe = beautify22_baseline.loc[i, 'safe']
        if jsdec > -0.1:
            all_line.append(['BeautifyTools', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['BeautifyTools', 'illu', illu])
        if sd > -0.1:
            all_line.append(['BeautifyTools', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['BeautifyTools', 'safe-deobs', safe])

    return all_line

def fig4():
    all_line = []
    ugly1 = pd.read_csv('./ugly/baseline1.csv')
    for i in range(len(ugly1)):
        origin = ugly1.loc[i, 'ugly']
        recover = ugly1.loc[i, 'recover']
        jsdec = ugly1.loc[i, 'jsdec']
        illu = ugly1.loc[i, 'illu']
        sd = ugly1.loc[i, 'sd']
        safe = ugly1.loc[i, 'safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        else:
            all_line.append(['J-ob', 'JSDec', 0])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])

    ugly2 = pd.read_csv('./ugly/baseline2.csv')
    for i in range(len(ugly2)):
        origin = ugly2.loc[i, 'ugly']
        recover = ugly2.loc[i, 'recover']
        jsdec = ugly2.loc[i, 'jsdec']
        illu = ugly2.loc[i, 'illu']
        sd = ugly2.loc[i, 'sd']
        safe = ugly2.loc[i, 'safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])

    return all_line


def fig5():
    all_line = []
    esoteric1 = pd.read_csv('./esoteric/baseline1.csv')
    for i in range(len(esoteric1)):
        origin = esoteric1.loc[i, 'esoteric']
        jsdec = esoteric1.loc[i, 'esoteric_jsdec']
        illu = esoteric1.loc[i, 'esoteric_illu']
        sd = esoteric1.loc[i, 'esoteric_sd']
        safe = esoteric1.loc[i, 'esoteric_safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        else:
            all_line.append(['J-ob', 'JSDec', 0])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        else:
            all_line.append(['J-ob', 'illu', 0])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])
        else:
            all_line.append(['J-ob', 'safe-deobs', 0])

    esoteric2 = pd.read_csv('./esoteric/baseline2.csv')
    for i in range(len(esoteric2)):
        origin = esoteric2.loc[i, 'esoteric']
        jsdec = esoteric2.loc[i, 'esoteric_jsdec']
        illu = esoteric2.loc[i, 'esoteric_illu']
        sd = esoteric2.loc[i, 'esoteric_sd']
        safe = esoteric2.loc[i, 'esoteric_safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        else:
            all_line.append(['J-ob', 'JSDec', 0])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        else:
            all_line.append(['J-ob', 'illu', 0])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])
        else:
            all_line.append(['J-ob', 'safe-deobs', 0])

    ugly1 = pd.read_csv('./ugly/baseline1.csv')
    for i in range(len(ugly1)):
        origin = ugly1.loc[i, 'ugly']
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])

    ugly2 = pd.read_csv('./ugly/baseline2.csv')
    for i in range(len(ugly2)):
        origin = ugly1.loc[i, 'ugly']
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])

    return all_line



def fig6():
    all_line = []
    esoteric1 = pd.read_csv('./esoteric/baseline1.csv')
    for i in range(len(esoteric1)):
        origin = esoteric1.loc[i, 'fk']
        jsdec = esoteric1.loc[i, 'fk_jsdec']
        illu = esoteric1.loc[i, 'fk_illu']
        sd = esoteric1.loc[i, 'fk_sd']
        safe = esoteric1.loc[i, 'fk_safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        else:
            all_line.append(['J-ob', 'JSDec', 0])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])

    esoteric2 = pd.read_csv('./esoteric/baseline2.csv')
    for i in range(len(esoteric2)):
        origin = esoteric1.loc[i, 'fk']
        jsdec = esoteric1.loc[i, 'fk_jsdec']
        illu = esoteric1.loc[i, 'fk_illu']
        sd = esoteric1.loc[i, 'fk_sd']
        safe = esoteric1.loc[i, 'fk_safe']
        if origin > -0.1:
            all_line.append(['J-ob', '  Origin  ', origin])
        if jsdec > -0.1:
            all_line.append(['J-ob', 'JSDec', jsdec])
        else:
            all_line.append(['J-ob', 'JSDec', 0])
        if illu > -0.1:
            all_line.append(['J-ob', 'illu', illu])
        if sd > -0.1:
            all_line.append(['J-ob', 'sd-soleaio', sd])
        if safe > -0.1:
            all_line.append(['J-ob', 'safe-deobs', safe])

    ugly1 = pd.read_csv('./ugly/baseline1.csv')
    for i in range(len(ugly1)):
        origin = ugly1.loc[i, 'ugly']
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])

    ugly2 = pd.read_csv('./ugly/baseline2.csv')
    for i in range(len(ugly2)):
        origin = ugly1.loc[i, 'ugly']
        if origin > -0.1:
            all_line.append(['J-ob', ' JSimpo ', origin])

    return all_line



def obfuscation_df(fun, tool):
    column_names = ['DataSet', tool, 'Similarity']

    all_line = fun()
    df = pd.DataFrame(all_line, columns=column_names, dtype=float)
    return df




def draw_figure(fun, tool):

    sns.set(style="darkgrid", font_scale =1.2)
    column_names = ['DataSet', tool, 'Similarity']

    # column_single = ['sampler', 'value']
    # column_group = ['sampler', 'metric', 'value']

    # # single box
    # df = creat_df(dict_demo_group, 's', column_single)
    # sns.boxplot(x="sampler", y="value",
    #             data=df, linewidth=3, width=0.5)

    # group box
    # df = creat_df(dict_demo_group, 'g', column_group)
    df = obfuscation_df(fun, tool)
    df = df.sort_values(by = tool)
    print(df)
    sns.boxplot(x=tool, y=column_names[2],
                data=df, linewidth=3, width=0.5)
    plt.legend([],[], frameon=False)
    # # style related command
    # sns.despine(offset=10, trim=True) # 去除实心边框
    # plt.legend(loc='upper center')


def save_figure(name, fun, tool):
    # pdf = PdfPages(name + '.pdf')
    draw_figure(fun, tool)
    plt.savefig(name + '.svg')
    # pdf.savefig()
    # plt.show()
    # plt.close()
    # pdf.close()
    plt.clf()
    

if __name__ == '__main__':
    # save_figure('./figure/fig1', fig1, 'Obfuscated by jsjiami')
    # save_figure('./figure/fig2', fig2, 'Obfuscated by J-ob')
    # save_figure('./figure/fig3', fig3, 'Obfuscated by BeautifyTools')
    # save_figure('./figure/fig4', fig4, 'Obfuscated by UglifyJS')
    # save_figure('./figure/fig5', fig5, 'Obfuscated by esoteric')
    # save_figure('./figure/fig6', fig6, 'Obfuscated by JSFK')
    save_figure('./figure/fig1', fig1, ' ')
    save_figure('./figure/fig2', fig2, ' ')
    save_figure('./figure/fig3', fig3, ' ')
    save_figure('./figure/fig4', fig4, ' ')
    save_figure('./figure/fig5', fig5, ' ')
    save_figure('./figure/fig6', fig6, ' ')
