
def fun(List,l):
    list1=[]
    for i in List:
        if i % l == 0:
            list1.append(i)
    return list1
print(fun([1,23,165,2,3,92,10,34,911],3))
 
#https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/python

def reverse_list(l):
    return l[::-1]

