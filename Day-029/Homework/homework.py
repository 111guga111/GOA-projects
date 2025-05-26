#1---
a = 5
b = 10
c = 5
d = 20
#               True                      False
#          True      False            False    False
result = (a == c or b == d) and not (a > b or d <= c)

#                  True
result = True and not False

print(result)#both sides are True and answear will be True

#2---    
# we alweys do first anything that is in () and then we continue with "==, !=, <, >, <=, >=," after that we do "or", at last we do "and" 

#            1   2     1     4   3     1   2     1
result = (a == c or b == d) and not (a > b or d <= c)
                            
#        1   2   1     4  3    1   2   1
20 = ( (5-2) + (6+1) ) + 2*( (2+3) + (7-2) )
