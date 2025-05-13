#1
def lst(a):
    return sum(a)
print(lst([1,3,2,7,8,9]))

def lst(a):
    all=0
    for i in a:
        all+=i
    return all
print(lst([1,3,2,7,8,9]))

#2
def mas(a,b):
    mass=sum(a)-sum(b)
    return mass
print(mas([3,4,6,7,8],[3,4,6,7]))

def mas(a,b):
    mass=0
    mass2=0
    for i in a:
        mass+=i
    for i in b:
        mass2+=i
    mass3=mass-mass2
    return mass3
print(mas([3,4,6,7,8],[3,4,6,7]))

#3
def leng(a,b):
    Len=len(a)+len(b)
    return Len
print(leng([2,5],[2,6,8,9]))

def leng(a,b):
    count=0
    for i in a:
        count+=1
    for i in b:
        count+=1
    return count
print(leng([2,4,],[2,6,8,9]))

#4
def Len(a):
    count=0
    for i in a:
        count+=1
    return count
print(Len("Doneeee"))

#5
a=2
b=3
c=a
a=b
b=c
print([a,b])

#6
def num(a,b,c):
    Num=[a,b,c]
    return max(Num)
print(num(2,6,8))
    
#7
def num(a):
    lst=[]
    for i in a:
        if i>=10 and i<100:
            lst.append(i)
    return len(lst)
print(num([1,4,6,10,24,15,120]))

#8
def word(a):
    a=a[::-1]
    return a
print (word("NICE"))

def word(a):
    b=""
    for i in a:
        b = i + b
    return b
print (word("NICE"))

#9
def word(a):
    if a[0] in ("aAeEiIoOuU"):
        return True
    return False
print (word("auga"))

def age(a):
    if a>60:
        return "retired"
    if 18<a<=60:
        return "adult"
    if 13<=a<=18:
        return "teenager"
    if a>13:
        return "kid"
print (age(13))