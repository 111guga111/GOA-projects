#1 https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python
def repeat_str(repeat, string):
    return string*repeat
#2 https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/python
def say_hello(name):
    return "Hello, "+name
#3 https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python
def rps(p1, p2):
    if p1=="scissors" and p2=="paper":
        return "Player 1 won!"
    elif p1=="scissors" and p2=="rock":
        return "Player 2 won!"
    elif p1=="scissors" and p2=="scissors":
        return "Draw!"
    elif p1=="rock" and p2=="scissors":
        return "Player 1 won!"
    elif p1=="rock" and p2=="paper":
        return "Player 2 won!"
    elif p1=="rock" and p2=="rock":
        return "Draw!"
    elif p1=="paper" and p2=="rock":
        return "Player 1 won!"
    elif p1=="paper" and p2=="scissors":
        return "Player 2 won!"
    elif p1=="paper" and p2=="paper":
        return "Draw!"
#4 https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python
def get_grade(s1, s2, s3):
    if 90<=((s1+s2+s3)/3)<=100:
        return "A"
    elif 80<=((s1+s2+s3)/3)<90:
        return "B"
    elif 70<=((s1+s2+s3)/3)<80:
        return "C"
    elif 60<=((s1+s2+s3)/3)<70:
        return "D"
    elif 0<=((s1+s2+s3)/3)<60:
        return "F"
    return get_grade(s1, s2, s3)
#5 https://www.codewars.com/kata/583710ccaa6717322c000105/train/python
def simple_multiplication(number) :
    if number%2==0:
        return number*8
    return number*9
#6
name1=input("name: ")
name2=input("username: ")
def greet(name1, name2):
    return name1[0]+"."+name2
print (greet(name1, name2))