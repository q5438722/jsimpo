import os, sys
import random

def mix_global_dead():
    names = os.listdir('./rand_jsjiami_recover')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_jsjiami_global_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        if flag == 1:
            # print(name)
            os.system('cp ./rand_jsjiami/' + name + ' ./rand_jsjiami_global_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-9] + ' ./rand_jsjiami_global_mixed/' + name[0:-9])

def mix_local_dead():
    random.seed(123)
    names = os.listdir('./rand_jsjiami_recover')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_jsjiami_local_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        if flag == 1:
            # print(name)
            os.system('cp ./rand_jsjiami/' + name + ' ./rand_jsjiami_local_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-9] + ' ./rand_jsjiami_local_mixed/' + name[0:-9])

def mix_global_dead2():
    random.seed(456)
    names = os.listdir('./rand_ob_recover')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_ob_global_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        if flag == 1:
            # print(name)
            os.system('cp ./rand_ob/' + name + ' ./rand_ob_global_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-6] + ' ./rand_ob_global_mixed/' + name[0:-6])

def mix_local_dead2():
    random.seed(789)
    names = os.listdir('./rand_ob_recover')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_ob_local_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        if flag == 1:
            # print(name)
            os.system('cp ./rand_ob/' + name + ' ./rand_ob_local_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-6] + ' ./rand_ob_local_mixed/' + name[0:-6])

def mix_controlFlow():
    random.seed(135)
    names = os.listdir('./rand_ob_control')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_ob_control_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        file = open('./rand_ob_control/' + name)
        text = file.read()
        file.close()
        if 'switch' not in text and 'while' not in text:
            flag = 0
        
        if flag == 1:
            # print(name)
            os.system('cp ./rand_ob_control/' + name + ' ./rand_ob_control_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-6] + ' ./rand_ob_control_mixed/' + name[0:-6])

def mix_numberExp():
    random.seed(246)
    names = os.listdir('./rand_ob_recover')
    background = []
    for name in names:
        if not name.endswith('.js'):
            continue
        background.append(name)
    
    while(len(os.listdir('./rand_ob_number_mixed')) < 500):
        flag = random.randint(0, 1)
        index = random.randint(0, len(background) - 1)
        name = background[index]
        file = open('./rand_ob_number/' + name)
        text = file.read()
        file.close()
        if '+' not in text and '*' not in text and '-' not in text:
            flag = 0
        
        if flag == 1:
            # print(name)
            os.system('cp ./rand_ob_number/' + name + ' ./rand_ob_number_mixed/' + name)
        else:
            # print(name[0:-9])
            os.system('cp ./rand_origin/' + name[0:-6] + ' ./rand_ob_number_mixed/' + name[0:-6])


if __name__ == '__main__':
    # mix_global_dead()
    # mix_local_dead()
    # mix_global_dead2()
    # mix_local_dead2()
    # mix_controlFlow()
    mix_numberExp()
