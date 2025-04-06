num1=input("num:")
while len(num1)!=3:
    num1=input("has to be 3 digit:")

sum=0
for i in num1:
    sum+=int(i)

print(int(num1)%sum)