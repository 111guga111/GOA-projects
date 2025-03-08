#harder version for fun
num1=int(input("guess the number pattern or number(number starts with 1): "))
num2=1357
while num1!=num2 and num1!=2:
   
    if len(str(num1))!=4 and len(str(num1))!=1:
        num1=int(input("it has to be one or four digit: "))
    
    elif int(str(num1)[0])!=1 and num1!=2 and len(str(num1))!=1:
        num1=int(input("number starts with 1 : "))
   
    elif int(str(num1)[0])==1 and num1!=2 or len(str(num1))==1:
        num1=int(input("wrong try again: "))

print("CORRECT!,YOU WON!")
