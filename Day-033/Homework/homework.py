#1
num=[1,2,5,6,"good","4",4,2]
def ManualSplit(lst,a):
    result=[]
    for i in lst:
        if i!=a:
            result.append(i)
    return result
print(ManualSplit(num,2))

#2 https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python
def sum_str(a, b):
    if a=="":
        a="0"
    if b=="":
        b="0"
    return str(int(a)+int(b))

#3 https://www.codewars.com/kata/55a5bfaa756cfede78000026
def problem(a):
    if type(a)==str:
        return "Error"
    return a*50+6

#4 https://www.codewars.com/kata/vowel-count
def get_count(sentence):
    lst="aeiou"
    count=0
    for i in sentence:
        if i in lst:
            count+=1
    return count

#5 https://www.codewars.com/kata/554ca54ffa7d91b236000023
def delete_nth(order,max_e):
    lst = []
    for i in order:
        if lst.count(i) < max_e:
            lst.append(i)
    return lst