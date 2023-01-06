#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    i = len(argv) - 1
    if i == 0:
        print("{} arguments.".format(i))
    elif i == 1:
        print("{} argument:".format(i)) 
        print("1: {}".format(argv[1]))
    else:
        print("{} arguments:".format(i))
        n = 1
        for arg in argv[1:]:
            print("{}: {}".format(i, arg))
            i += 1
