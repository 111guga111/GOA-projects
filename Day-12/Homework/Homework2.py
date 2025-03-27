num1=int(input("num:"))

if num1%2==0:
    num1+=5
else:
    num1*=3

num1%=5
print(num1)