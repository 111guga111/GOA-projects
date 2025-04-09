#1
list1 = [1, 2, 3, 2]
def manual_remove(a, b):
    list2 = []
    U = 0
    for i in a:
        if i != b and U == 0:
            list2 = list2 + [i]
        elif U==0:
            U += 1
        else:
            list2 = list2 + [i]
    return list2
print(manual_remove(list1, 2))
    
#2
def manual_index(a,b):
    U = -1
    for i in a:
        U += 1
        if i==b:
            return U
    return None
print(manual_index(list1, 2))

#3
list1=[1, 2, 3, 2]
def manual_len(a):
    len1=0
    for i in a:
        len1 += 1
    return len1
print(manual_len(list1))

#4
def manual_pop(a,b):
    list6=[]
    index=-1
    for i in a:
        index +=1
        if index!=b:
            list6 = list6 + [i]
    return list6
print (manual_pop(list1, 2))



#5
def manual_reverse(a):
    list4=[]
    for i in a:
        list4 = [i] + list4
    return list4
print (manual_reverse(list1))
