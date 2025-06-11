#1
list1 = [1, 2, 3, 2]
def manual_remove(a, b=[1, 2, 3, 2]):
    list2 = []
    U = 0
    for i in b:
        if i != a and U == 0:
            list2 = list2 + [i]
        elif U==0:
            U += 1
        else:
            list2 = list2 + [i]
    return list2
print(manual_remove(2, list1))
    
#2
def manual_index(a ,b=[1, 2, 3, 2]):
    U = -1
    for i in b:
        U += 1
        if i==a:
            return U
    return None
print(manual_index(2,list1))

#3
list1=[1, 2, 3, 2]
def manual_len(a):
    len1=0
    for i in a:
        len1 += 1
    return len1
print(manual_len(list1))

#4
def manual_pop(a,b=[1, 2, 3, 2]):
    list6=[]
    index=-1
    for i in b:
        index +=1
        if index!=a:
            list6 = list6 + [i]
    return list6
print (manual_pop(2, list1))



#5
def manual_reverse(a):
    list4=[]
    for i in a:
        list4 = [i] + list4
    return list4
print (manual_reverse(list1))
