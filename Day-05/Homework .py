#1
number=int(input("num: "))
sum=0
for i in range(number):
    if i%2==1:
        sum+=i
print(sum)

#2
number1=int(input("num: "))
for I in range(1,number1):
    if number1%I==0:
     print(I)

#3
word=input("word: ")
count=" "
for O in word:
   count=O+count
print(count)

#4
correct_password=("nice")
huh=0
password=input("password: ")
while password!=correct_password and huh<3:
   password=input("incorrect, try again: ")
   huh+=1
if huh==3:
   print("your blocked!, try again later")
else:
   print("your correct!")