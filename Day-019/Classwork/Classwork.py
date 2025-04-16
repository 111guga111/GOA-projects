#1) https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/discuss/python
def six_toast(num):
        missing=6-num
        if missing<0:
            missing=-1*missing
        return missing
#2) https://www.codewars.com/kata/50ee6b0bdeab583673000025
a = "code"
b = "wa.rs"
name = a + b
#3
list1=[1,5,3,6]
list2=[2,4,9,7]
list3=[]
for i in list1:
    list3=list3 + [i]
for i in list2:
    list3=list3 + [i]
print (list3)
#4
list1=[1,5,3,6]
list3=[]
for i in list1:
    if i%2==0:
        list3=list3 + [i]
print (list3)
#5
list1=[1,5,3,6]
num=''
list3=[]
for i in list1:
    num+=str(i)
    list3=[num]
print (list3)
