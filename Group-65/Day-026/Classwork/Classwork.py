#1 https://www.codewars.com/kata/55a996e0e8520afab9000055
def cookie(x):
    if type(x)==str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x)==float or type(x)==int:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"
#2 https://www.codewars.com/kata/5708f682c69b48047b000e07
def multiply(n):
    a = len(str(abs(n)))
    return n * (5 ** a)