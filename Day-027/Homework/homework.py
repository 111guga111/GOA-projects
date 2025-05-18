
#1 function
def time(d,m,y):
    if d>31:
        return "invalid input"
    if type(m)==int:
        if m>12:
            return "invalid input"
    month = ["january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december"]
    if str(m).isalpha():
        m=m.lower()
    for i in month:
        if m==i:
            m=month.index(m)+1
    if m<10:
        m="0"+str(m)
    return f"{d}/{m}/{y}"
print(time(14,8,2032))

#1
month = ["january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december"]
d=input("day: ")
m=input("month: ")
y=input("year: ")
if m.isalpha():
    m=m.lower()
for i in month:
    if m==i:
        m=str(month.index(m)+1)
if len(m)<2:
    m="0"+m
print(f"{d}/{m}/{y}")



#2 function
def password(a):
    if len(str(a))<8:
        return "Length should be 8 or more then 8"
    return "Password accepted"
print(password("gugugugug12123"))

#2 
password=input("Password: ")
if len(password)<8:
    print("Length should be 8 or more then 8")
elif len(password)>=8:
    print("Password accepted")



#3 function
def biggest(a,b,c):
    nums=[a,b,c]
    return max(nums)
print(biggest(1,8,10))

#3
num=int(input("number: "))
num1=int(input("number: "))
num2=int(input("number: "))
nums=[num,num1,num2]
print(max(nums))



#4 function
def biggest(a,b,c,d,e):
    nums=[a,b,c,d,e]
    return sum(nums)
print(biggest(1,8,10,20,80))

#4
num=int(input("number: "))
num1=int(input("number: "))
num2=int(input("number: "))
num3=int(input("number: "))
num4=int(input("number: "))
nums=[num,num1,num2,num3,num4]
print(sum(nums))
