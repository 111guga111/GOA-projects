name="year"
list=["Guga","Gurami",17,name]
print(list[0]+str(list[2]))

list=["Guga","Gurami",17,name]
for i in list:
    print(i)

list=[1,5,3,8,2,4,6,7,9,10]
for i in list:
    if i%2==0:
        print(i)

list=[1,5,3,8,2,4,6,7,9,10]
res=[]
for i in list:
    if i%2==0:
        res.append(i)
print(res)


list=[1,5,2,29,21,13,61,27,101]
def isprime(n):
    if n == 1:
        return False
    for i in range(2,n):
        if n%i==0:
            return False
    return True
for i in list:
    if isprime(i):
        res.append(i)
print(i)


res=[1,2,4]
res.pop(2)
res.insert(2, 3)
print(res)

res=[1,2,4]
res.pop(2)
print(res)
