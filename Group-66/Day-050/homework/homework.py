#https://www.codewars.com/kata/5a3dd29055519e23ec000074/solutions/python
def check_exam(arr1,arr2):
    score=0
    for i in range(len(arr1)):
            if arr1[i]==arr2[i]:
                score+=4
            elif arr2[i]!="":
                score-=1
    if score<0:
        score=0
    return score

#https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/python
def find_missing_numbers(arr):
    if arr==[]:
        return arr
    num=arr[0]
    lst=[]
    for i in arr:
        while i!=num:
            lst.append(num)
            num+=1
        num+=1
    return lst

#https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
def to_jaden_case(string):
    string=string.split(" ")
    sen=""
    for i in string:
        sen+=i[0].upper() + i[1:].lower() +" "
    return sen[:-1]

#https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
def duplicate_count(text):
    result=0
    text=text.lower()
    lst=[]
    for i in text:
        if text.count(i)>1 and i not in lst:
            result+=1
        lst.append(i)
    return result

#https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python
def likes(names):
    if names==[]:
        return "no one likes this"
    if len(names)<2:
        return f"{names[0]} likes this"
    if len(names)==2:
        return f"{names[0]} and {names[1]} like this"
    if len(names)==3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names)-2} others like this"