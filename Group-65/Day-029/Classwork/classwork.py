#1 https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    count = 0
    sum = 0

    for i in arr:
        if i > 0:
            count += 1
        elif i < 0:
            sum += i
    return [count, sum]
#2 https://www.codewars.com/kata/57cff961eca260b71900008f/train/python
def is_vow(inp):
    lst = []
    for i in inp:
        if i == 97:
            lst.append("a")
        elif i == 101:
            lst.append("e")
        elif i == 105:
            lst.append("i")
        elif i == 111:
            lst.append("o")
        elif i == 117:
            lst.append("u")
        else:
            lst.append(i)
    return lst
#3 https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/python
def monkey_count(n):
    res=[]
    for i in range(n+1):
        res += [i]
    res.pop(0)
    return res