import numpy as np  
import matplotlib.mlab as mlab  
import matplotlib.pyplot as plt  

def jsjiami():
    labels=['Parse and \nRegeneration','Inter-procedure Deob-\nfuscation Detection','Inter-procedure Deob-\nfuscation Resolution','dictionary replacement']
    X=[0.075384906, 0.168265702, 0.81832427, 0.224871286]  

    fig = plt.figure()
    plt.pie(X,labels=labels,autopct='%1.2f%%') #画饼图（数据，数据对应的标签，百分数保留两位小数点）
    plt.title("Pie chart")
    

    plt.show()  
    plt.savefig("time_jsjismi.jpg")
    return

def job():
    labels=['Parse and Regeneration','Inter-procedure Deobfuscation Detection','Inter-procedure Deobfuscation Resolution','dictionary replacement','Control-Flow Flattening','Statement-level Deobfuscation']
    X=[0.075049478, 0.090475193, 0.150990089, 0.074776232, 0.129486904, 0.075904759]  

    fig = plt.figure()
    plt.pie(X,labels=labels,autopct='%1.2f%%') #画饼图（数据，数据对应的标签，百分数保留两位小数点）
    plt.title("Pie chart")
    

    plt.show()  
    plt.savefig("time_job.jpg")
    return

def combine():
    labels=['Parse and Regeneration','Inter-procedure Deobfuscation Detection','Inter-procedure Deobfuscation Resolution','dictionary replacement','Control-Flow Flattening','Statement-level Deobfuscation']
    colors = ['red','pink','green','purple','orange', 'blue']
    sizes = [0.075049478, 0.090475193, 0.150990089, 0.074776232, 0.129486904, 0.075904759]  
    sizes1 = [0.075384906, 0.168265702, 0.81832427, 0.224871286, 0, 0]  
    s1, s2 = sum(sizes), sum(sizes1)
    for i in range(len(sizes)):
        sizes[i] = sizes[i] / s1
    for i in range(len(sizes1)):
        sizes1[i] = sizes1[i] / s2
    explode = (0, 0, 0, 0, 0, 0)  # 设置各部分距离圆心的距离
    fig1 = plt.figure(facecolor='white',figsize=(16,8))
    ax1=plt.subplot(1,2,1)
    ax1.pie(sizes, explode=explode,autopct='%1.1f%%',
            shadow=False, colors = colors, startangle=90)
    ax1.axis('equal')
    # ax1.legend(labels)

    ax1=plt.subplot(1,2,2)
    ax1.pie(sizes1, explode=explode,autopct='%1.1f%%',
            shadow=False, colors = colors, startangle=90)
    ax1.axis('equal')
    ax1.legend(labels)

    plt.tight_layout()
    plt.show()
    fig1.savefig('time_consumption_test.jpg',dpi=400)

if __name__ == '__main__':
    combine()