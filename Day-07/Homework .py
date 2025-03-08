#1
num=int(input("num: "))
while num>50 or num<1:
    num=int(input("it has to be more then 0 and less then 51: "))
for i in range(1,101):
    print (num*i)

#2
num1=int(input("guess the number pattern or number(number starts with 1): "))
num2=1357
while num1!=num2 and num1!=2:
    if int(str(num1)[0])!=1 and num1!=2:
     num1=int(input("number starts with 1 : "))
    elif int(str(num1)[0])==1 and num1!=2:
     num1=int(input("wrong try again: "))
 
print("YOUR CORRECT!,YOU WON!")
