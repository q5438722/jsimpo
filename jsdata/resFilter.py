import pandas as pd


def filter_jiami():
    df = pd.read_csv('res_jiami.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_jiami_new.csv', index = False)

def filter_ob():
    df = pd.read_csv('res_ob.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_ob_new.csv', index = False)

def filter_jiami2():
    df = pd.read_csv('res_len_jiami.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_len_jiami_new.csv', index = False)

def filter_ob2():
    df = pd.read_csv('res_len_ob.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_len_ob_new.csv', index = False)


def filter_jiami3():
    df = pd.read_csv('res_len_jiami_2.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_len_jiami_new_2.csv', index = False)

def filter_ob3():
    df = pd.read_csv('res_len_ob_2.csv', encoding='utf-8')
    df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_len_ob_new_2.csv', index = False)



def filter_jiami4():
    df = pd.read_csv('res_kernel_jiami.csv', encoding='utf-8')
    # df = df.drop(df[df.rename_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_kernel_jiami_new.csv', index = False)

def filter_ob4():
    df = pd.read_csv('res_kernel_ob.csv', encoding='utf-8')
    df = df.drop(df[df.jsjiami_unweighted_old < -0.5].index)
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_kernel_ob_new.csv', index = False)

def filter_jiami5():
    df = pd.read_csv('res_kernel_jiami_cmp.csv', encoding='utf-8')
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df1 = df.copy(deep=True)
    df1 = df1.drop(df1[df1.jsjiami_jsdec < -0.5].index)
    print(len(df1))
    print(df1.mean())
    df2 = df.copy(deep=True)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    print(len(df2))
    print(df2.mean())
    df3 = df.copy(deep=True)
    df3 = df3.drop(df3[df3.jsjiami_sd < -0.5].index)
    print(len(df3))
    print(df3.mean())
    df4 = df.copy(deep=True)
    df4 = df4.drop(df4[df4.jsjiami_safe < -0.5].index)
    print(len(df4))
    print(df4.mean())
    df = df.drop(df[df.jsjiami_jsdec < -0.5].index)
    df = df.drop(df[df.jsjiami_illu < -0.5].index)
    df = df.drop(df[df.jsjiami_sd < -0.5].index)
    # df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_kernel_jiami_cmp_new.csv', index = False)

def filter_ob5():
    df = pd.read_csv('res_kernel_ob_cmp.csv', encoding='utf-8')
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df1 = df.copy(deep=True)
    df1 = df1.drop(df1[df1.jsjiami_jsdec < -0.5].index)
    print(len(df1))
    print(df1.mean())
    df2 = df.copy(deep=True)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    print(len(df2))
    print(df2.mean())
    df3 = df.copy(deep=True)
    df3 = df3.drop(df3[df3.jsjiami_sd < -0.5].index)
    print(len(df3))
    print(df3.mean())
    df4 = df.copy(deep=True)
    df4 = df4.drop(df4[df4.jsjiami_safe < -0.5].index)
    print(len(df4))
    print(df4.mean())
    df = df.drop(df[df.jsjiami_jsdec < -0.5].index)
    df = df.drop(df[df.jsjiami_illu < -0.5].index)
    df = df.drop(df[df.jsjiami_sd < -0.5].index)
    # df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_kernel_ob_cmp_new.csv', index = False)


def filter_jiami6():
    df = pd.read_csv('res_kernel_jiami_cmp.csv', encoding='utf-8')
    df1 = pd.read_csv('res_kernel_jiami.csv', encoding='utf-8')
    df['jsjiami_recover_unweighted'] = df1['jsjiami_recover_unweighted']
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)

    df2 = df.copy(deep=True)

    print('legal count: ', len(df))
    try:
        print(len(df) - df['jsjiami_jsdec'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_illu'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_sd'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_recover_unweighted'].value_counts()[-1])
    except:
        print(len(df))

    df['jsjiami_jsdec'] = df.loc[:,['jsjiami_jsdec', 'jsjiami_unweighted']].T.max()
    df['jsjiami_illu'] = df.loc[:,['jsjiami_illu', 'jsjiami_unweighted']].T.max()
    df['jsjiami_sd'] = df.loc[:,['jsjiami_sd', 'jsjiami_unweighted']].T.max()
    df['jsjiami_recover_unweighted'] = df.loc[:,['jsjiami_recover_unweighted', 'jsjiami_unweighted']].T.max()

    print(len(df))
    print(df.mean())

    df2 = df2.drop(df2[df2.jsjiami_jsdec < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_sd < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_recover_unweighted < -0.5].index)
    print(len(df2))
    print(df2.mean())
    # df.to_csv('res_kernel_jiami_cmp_combine_new.csv', index = False)

def filter_ob6():
    df = pd.read_csv('res_kernel_ob_cmp.csv', encoding='utf-8')
    df1 = pd.read_csv('res_kernel_ob.csv', encoding='utf-8')
    df['jsjiami_recover_unweighted'] = df1['jsjiami_recover_unweighted']
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)

    df2 = df.copy(deep=True)

    print('legal count: ', len(df))
    try:
        print(len(df) - df['jsjiami_jsdec'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_illu'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_sd'].value_counts()[-1])
    except:
        print(len(df))
    try:
        print(len(df) - df['jsjiami_recover_unweighted'].value_counts()[-1])
    except:
        print(len(df))


    df['jsjiami_jsdec'] = df.loc[:,['jsjiami_jsdec', 'jsjiami_unweighted']].T.max()
    df['jsjiami_illu'] = df.loc[:,['jsjiami_illu', 'jsjiami_unweighted']].T.max()
    df['jsjiami_sd'] = df.loc[:,['jsjiami_sd', 'jsjiami_unweighted']].T.max()
    df['jsjiami_recover_unweighted'] = df.loc[:,['jsjiami_recover_unweighted', 'jsjiami_unweighted']].T.max()

    print(len(df))
    print(df.mean())

    df2 = df2.drop(df2[df2.jsjiami_jsdec < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_sd < -0.5].index)
    df2 = df2.drop(df2[df2.jsjiami_recover_unweighted < -0.5].index)
    print(len(df2))
    print(df2.mean())
    # df.to_csv('res_kernel_ob_cmp_combine_new.csv', index = False)


def filter_jiami7():
    df = pd.read_csv('res_token_jiami_cmp.csv', encoding='utf-8')
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df1 = df.copy(deep=True)
    df1 = df1.drop(df1[df1.jsjiami_jsdec < -0.5].index)
    print(len(df1))
    print(df1.mean())
    df2 = df.copy(deep=True)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    print(len(df2))
    print(df2.mean())
    df3 = df.copy(deep=True)
    df3 = df3.drop(df3[df3.jsjiami_sd < -0.5].index)
    print(len(df3))
    print(df3.mean())
    df4 = df.copy(deep=True)
    df4 = df4.drop(df4[df4.jsjiami_safe < -0.5].index)
    print(len(df4))
    print(df4.mean())
    df = df.drop(df[df.jsjiami_jsdec < -0.5].index)
    df = df.drop(df[df.jsjiami_illu < -0.5].index)
    df = df.drop(df[df.jsjiami_sd < -0.5].index)
    # df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_token_jiami_cmp_new.csv', index = False)

def filter_ob7():
    df = pd.read_csv('res_token_ob_cmp.csv', encoding='utf-8')
    df = df.drop(df[df.jsjiami_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df1 = df.copy(deep=True)
    df1 = df1.drop(df1[df1.jsjiami_jsdec < -0.5].index)
    print(len(df1))
    print(df1.mean())
    df2 = df.copy(deep=True)
    df2 = df2.drop(df2[df2.jsjiami_illu < -0.5].index)
    print(len(df2))
    print(df2.mean())
    df3 = df.copy(deep=True)
    df3 = df3.drop(df3[df3.jsjiami_sd < -0.5].index)
    print(len(df3))
    print(df3.mean())
    df4 = df.copy(deep=True)
    df4 = df4.drop(df4[df4.jsjiami_safe < -0.5].index)
    print(len(df4))
    print(df4.mean())
    df = df.drop(df[df.jsjiami_jsdec < -0.5].index)
    df = df.drop(df[df.jsjiami_illu < -0.5].index)
    df = df.drop(df[df.jsjiami_sd < -0.5].index)
    # df = df.drop(df[df.jsjiami_recover_unweighted < -0.5].index)
    print(len(df))
    print(df.mean())
    df.to_csv('res_token_ob_cmp_new.csv', index = False)




if __name__ == '__main__':
    # filter_jiami2()
    # filter_ob2()
    # filter_jiami3()
    # filter_ob4()
    # filter_jiami4()
    # filter_jiami5()
    # print("\n\n")
    # filter_ob5()
    # filter_jiami6()
    # filter_jiami7()
    filter_ob7()
    print("\n\n")
    # filter_ob6()