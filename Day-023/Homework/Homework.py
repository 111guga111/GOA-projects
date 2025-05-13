#1
def num(a,b):
 answear=float(a)+float(b)
 if answear/int(answear)==1:
  return int(answear)
 else:
  return answear   
print(num(3.8,"1.3"))

#2
def devide(a,b):
 a=float(a)
 b=float(b)
 if b==0.0 or a==0.0:
    return "ZeroDivissionError"
 if a>b:
   answear=a/b
 elif b>a:
    answear=b/a
 if answear==int(answear):
   return int(answear)
 else:
   return answear
print (devide(4,"6"))

#3
def sentence(a):
  stri=[]
  inte=[]
  lst=[]
  for i in a:
    if type(i)==str:
      stri.append(i)
    else:
      inte.append(i)
  lst = stri+inte
  return lst
print(sentence(["word",7,"word1",8,"word2",9]))

#4
def checktype(a,b):
  return type(a)==b
print(checktype(8,int))