#1
age=int(input("whats your age?: "))
if age<=10:
    print("kid")
elif age>10 and age<18:
    print("teenager")
elif age>18 and age<30:
    print("adult")
else:
    print("unc")

#2 https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
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

#3 https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/python
def is_opposite(s1, s2):
    if s1 == "" and s2 == "":
        return False
    if len(s1) != len(s2):
        return False
    for i in range(len(s1)):
        if s1[i].lower() != s2[i].lower() or s1[i] == s2[i]:
            return False
    return True

#4 https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/python
def monkey_count(n):
    res = []
    i = 1
    while i <= n:
        res.append(i)
        i += 1
    return res
