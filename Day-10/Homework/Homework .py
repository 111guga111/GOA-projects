#1 https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python
def calculator(x, y, op):
    if type(x)==str or type(y)==str:
        return "unknown value"
    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        return x / y
    return "unknown value"

#2 https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python
def string_clean(s):
    to_remove="0123456789"
    result=""
    for i in s:
        if i not in to_remove:
            result+=i
    return result
        
   
#3 https://www.codewars.com/kata/55f1b763dd670651620000ce/train/python
def count_char_occurrences(string, char):
    sum=0
    for i in string:
        if i==char:
            sum+=1
    return sum

