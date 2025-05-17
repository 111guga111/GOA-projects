#1
def data(a):
    if type(a)==str:
        return "Literature"
    elif type(a)==bool:
        return "Science"
    return "Math"
print(data(2))

#2
def datas(a):
    lst = []
    for i in a:
        lst.append(type(i))

    strings = lst.count(str)
    integers = lst.count(int)
    booleons = lst.count(bool)
    floats = lst.count(float)
    most = max(strings, integers, booleons, floats)
    
    if most == strings:
        return str
    elif most == integers:
        return int
    elif most == booleons:
        return bool
    elif most == floats:
        return float
print (datas(["guga","nika",10,12,40,True,False,True]))

#3
def dataclean(a):
    lst = []
    for i in a:
        lst.append(type(i))

    strings = lst.count(str)
    integers = lst.count(int)
    booleons = lst.count(bool)
    floats = lst.count(float)
    most = max(strings, integers, booleons, floats)

    if most == strings:
        datatype=str
    elif most == integers:
        datatype=int
    elif most == booleons:
        datatype=bool
    elif most == floats:
        datatype=float
    
    result=[]
    for i in a:
        if type(i)==datatype:
            result.append(i)
    return result
print (dataclean(["world","dog","water","movie",10,12,40,True,False,True]))
 
 #4
def equal(a):
    return type(a)
print(equal(5+6.5))
