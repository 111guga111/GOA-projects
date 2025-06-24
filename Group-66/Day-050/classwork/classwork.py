#https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/python 
def sum_diagonals(matrix):
    result=0
    inde1=0
    inde2=-1
    for i in matrix:
        result+=i[inde1]+i[inde2]
        inde1+=1
        inde2-=1
    return result

#https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/python
def solve(arr):
    for i in arr:
        if i*-1 not in arr:
            return i
