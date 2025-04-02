list=[1,4,3,6,9,11,17,13,26,30]
sum=0
sum1=0
for i in list:
    if i%2==0:
        sum+=i
    elif i%2!=0:
        sum1+=1
print(sum)
print(sum1)