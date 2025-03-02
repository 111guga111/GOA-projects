#5! = 1*2*3*4*5
num=int(input("number: "))
result=1
for i in range(1,num + 1):
    result*=i
    print(i,result)


ool=input("word: ")
res=" "
for i in ool:
    res = i+res
print(res)


#1
NUM=int(input("number: "))
num1=0
while NUM==1:
    NUM=int(input("try another number: "))
    
for O in range(2,NUM):
   if NUM%O==0 and num1==0:
       print("your number is not prime")
       num1+=1
if num1==0:
    print("your number is a prime")


print("password must be over 8 character, must contain A ")
password=input("password: ")

while len(password)<8 or "A" not in password:
    password = input("it doesnt meet the requirements")
print("good")