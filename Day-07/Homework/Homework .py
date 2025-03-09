#1
num=int(input("num: "))
while num>50 or num<1:
    num=int(input("it has to be more then 0 and less then 51: "))

for i in range(1,101):
    print (num*i)

#2
sum=int(input("guess the number(4 digit number): "))
code=1234

while sum!=code:
   sum=int(input("guess the number(4 digit number): "))

print("CORRECT!,YOUR IN!")
