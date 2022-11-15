import sys, os


if __name__ == '__main__':
    names = os.listdir('./rand_origin')
    for item in names: 
        os.system('uglifyjs ./rand_origin/' + item + ' -o ./rand_rename/'+ item + '-rename.js -m') 