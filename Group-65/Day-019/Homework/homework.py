#1
list1=[1,1,2,3,12,3,24,2,1]
def coin(a,b=[1, 2, 3, 2]):
    for i in a:
        b += [i]
    n = len(b)
    for i in range(n):
        for c in range(n - 1):
            if b[c] > b[c + 1]:
                b[c], b[c + 1] = b[c + 1], b[c]
    return b
print(coin(list1))

#2
def outMore(a,b):
    res1 = 0
    res2 = 0
    for i in a:
        res1 += i
    for i in b:
        res2 += i
    if res1 > res2:
        return a
    else:
        return b

print(outMore([1,2,3],[1,2,3,4]))

#3
def posAndNeg(a,b):
    PosAmount = 0
    NegSum = 0
    for i in a+b:
        if i < 0:
            NegSum += i
        if i > 0:
            PosAmount += 1
    return PosAmount,NegSum
print(posAndNeg([1,2,3,-2,-3,-1], [1,2,3,3,21]))

#4
def onlyNonThrees(arr):
    res = []
    for i in arr:
        if i % 3 != 0:
            res += [i]
    return res
print(onlyNonThrees([1,1,1,2,3,4,3,3,3,]))

#5
def Doubled(arr):
    res = []
    for i in arr:
        res += (i*2)
    return res