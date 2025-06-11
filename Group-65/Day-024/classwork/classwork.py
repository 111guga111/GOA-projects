#1
def reverse(a):
    word=''
    for i in a:
        word=i+word 
    return word
print (reverse("guga"))
#2
def word(a):
    word=""
    for i in a:
        if i not in ("aAeEiIoOuU"):
            word+=i
    return word
print(word("guga"))
#3
def massive(a):
    return sum(a)
print(massive([1,2,4,5]))
#4
def massive(a):
    mass=0
    for i in a:
        mass+=i
    return mass
print(massive([1,2,4,5]))
