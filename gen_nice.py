import os, sys

def rename(Path):
    names = os.listdir(Path)
    for name in names:
        if not name.endswith('.js'):
            continue
        os.system('jsnice --no-types ' + Path + '/' + name + ' > ' + Path + '_nice/' + name)

if __name__ == '__main__':
    rename('./jsdata/rand_ob_recover')