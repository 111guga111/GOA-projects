
#1 https://www.codewars.com/kata/57089707fe2d01529f00024a/train/python
def check_alive(health):
    if health <= 0:
        return False
    else:
        return True
    
#2 https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python
def repeat_str(repeat, string):
    return string*repeat

#3 https://www.codewars.com/kata/55a996e0e8520afab9000055/train/python
def cookie(x):
    if type(x)==str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x)==float or type(x)==int:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"

#4 https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python
def century(year):
    century=year/100 
    if century>int(century):
        century = int(century) + 1 
    return int(century)

#5 https://www.codewars.com/kata/55d277882e139d0b6000005d/train/python
def find_average(nums):
    num=0
    len=0
    for i in nums:
        len += 1
        num += i
    return num/len