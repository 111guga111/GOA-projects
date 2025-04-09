list=[1, 3, 4, 4, 5]
list.append(6)
list.pop(3)
list.insert(1,2)
print(list)


print(len(list))

print(sum(list))

print(max(list))

print(min(list))

list1=list.copy()
print(list1)

print(list.count(2))#counts the amount of times is used given number

print(list.index(4))#gives the index of the number given. if theres more then one same number, then  it gives first given number index

list1.remove(6)
print(list1)

list1=[5, 3 , 1 , 5 , 2 , 4]
list1.sort()
print(list1)

list2=["Guga","andria","Barbare"]
list2.sort()
print(list2)

list3=["guga","andria","barbare"]
list3.sort()
print(list3)

list.reverse()
print(list)

list.clear()

list1=[1, 2, 3, 4, 5]
def manual_def(a):
    uu=0
    if type(a)==list1:
        for i in a:
            uu += 1
    else:
        for i in str(a):
           uu += 1
    return sum

print(manual_def(list1))


#1
list1=[1, 2, 3]
def manual_sum(a):
    oo=0
    for i in a:
        oo += i
    return oo
print(manual_sum(list1))

def manual_append(a):
    list1=[]
    list1 += a
    return list1
print(manual_append(list1))
         