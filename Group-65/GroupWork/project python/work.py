#1
print("""Question N1: Is Python Case-sensitive language?"
      A)No B)Yes""")

question1=input("answer (A/B): ") 

while question1 not in ["A","a","B","b"]:
    question1=input("A or B :")

if question1=="A" or question1=="a":
    question1=False

if question1=="B" or question1=="b":
    question1=True
      

#2
print("Question N2: What is the Square root of 49")
question2=input("Answer: ")

if question2 == "7":
    question2=True

else:
    question2=False



#3
print("Question N3: Which year happened  Battle of didgori")
question3 =input("Answer: ")
if question3 == "1121":
    question3=True
else:
    question3=False



#4
print("""Question N4: What is the correct way to declare a list in Python?
    1. list = {1, 2, 3}
    2. list = (1, 2, 3)
    3. list = [1, 2, 3]
    4. list = <1, 2, 3>""")

question4=(input("Select the correct option number: "))
while question4 not in ["1", "2", "3", "4"]:
    question4=input("Invalid. Select the correct option number: ")
if question4 == "3":
    question4 =True 
elif question4 in ["1", "2", "4"]:
    question4 = False
    
#5
print("Question N5: Bob the banana seller had 5 golden bananas. He gave 2 of them to his friend Zog from Planet Mathon. How many golden bananas does Bob have now?")
question5=input("Answer: ")
if question5=="3":
    question5=True
else:
   question5=False



#6
print("""Question N6:If you were given 1B$ because your lucky" 
      A)Put it all on black B)Better your life""")

question6=input("answer (A/B): ") 

while question6 not in ["A","a","B","b"]:
    question6=input("A or B :")

if question6=="A" or question6=="a":
    question6=True

if question6=="B" or question6=="b":
    question6=False



#7
print("""Question N7. what will the terminal output? ('word' + 2)
    A)Error   B)word2""")
question7=input("answer (A/B): ") 

while question7 not in ["A","a","B","b"]:
    question7=input("A or B :")

if question7=="A" or question7=="a":
    question7=True

if question7=="B" or question7=="b":
    question7=False

#8
print(""" question N8. '5' * 3
    A) 15
    B) 555
    C) Error
    """)
question8=input("answer (A/B/C): ") 
while question8 not in ["A","a","B","b","C","c"]:
    question8=input("A or B or C:")

if question8=="A" or question8=="a":
    question8=False

if question8=="B" or question8=="b":
    question8=True

if question8=="C" or question8=="c":
    question8=False


#9
print("""Question N9. Whats the capital of Georgia?
      1.Gurjaani
      2.Somxeti
      3.Tbilisi
      4.USA""")
question9=int(input("Select the correct option number: "))
while question9 not in [1, 2, 3, 4]:
    question9=int(input("Invalid. Select the correct option number: "))
if question9 == 3:
    question9 =True 
elif question9 in [1, 2, 4]:
    question9 = False




#10
print("""Is it possible to create a function in Python without using the def keyword?
      A)Yes B)No""")
question10=input("answer (A/B): ") 

while question10 not in ["A","a","B","b"]:
    question10=input("A or B :")

if question10=="A" or question10=="a":
    question10=False

if question10=="B" or question10=="b":
    question10=True



#score
test=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
score=0
for i in test:
    if i==True:
     score+=1

print(f"your score is {score}/10")