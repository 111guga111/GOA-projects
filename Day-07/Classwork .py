print(len("hello"))
print("len" + " " + str(len("hello")))

#1

word=input("word: ")
res=" "
for i in word:
 res=i+res
print(res)

#2

sum=0
for O in range(101):
  sum+=O
print(sum)
 
#3
word1=input("word: ")
if len(word1)!=3:
  print("make sure number is 3 letters")
  word1=input("word: ")
if word1==word1[::-1]:
  print("true")
else:
   print("false")

#4

for K in range(100,301):
  K*=K
print(K)

#5

for G in range(1000):
  if G%2==0:
    print("true")
  else:
    print("false")

