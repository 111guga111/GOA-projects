# 1. https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/python
def sum_array(a):
    return sum(a)

# 2. https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
def count_positives_sum_negatives(arr):
    sum=0
    neg=0
    if arr==[]:
        return arr
    for i in arr:
        if i>0:
            sum+=1
        else:
            neg+=i
    return [sum,neg]

# 3. https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python
def accum(st):
    result=""
    count=1
    st=st.lower()
    for i in st:
        word=i*count + "-"
        word=word[0].upper() + word[1:]
        result+= word
        count+=1
    return result[:-1]