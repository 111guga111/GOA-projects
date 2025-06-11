# 1. https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
def remove_char(s):
    return s[1:-1]

# 2. https://www.codewars.com/kata/5715eaedb436cf5606000381 
def positive_sum(arr):
    lst=0
    for i in arr:
        if i>0:
            lst+=i
    return lst

# 3. https://www.codewars.com/kata/53dc54212259ed3d4f00071c 
def sum_array(a):
    num=0
    for i in a:
        num+=i
    return num

# 4. https://www.codewars.com/kata/8f180a5c22b820f36b000a54 
def digitize(n):
    n=str(n)[::-1]
    num=[]
    for i in n:
        num.append(int(i))
    return num

# 5. https://www.codewars.com/kata/5b853229cfde412a470000d0
def twice_as_old(dad_years_old, son_years_old):
    twice=son_years_old*2
    dif=dad_years_old-twice
    if dif<0:
        dif=dif*-1
    return dif
