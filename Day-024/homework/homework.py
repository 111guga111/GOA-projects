# 1. https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python
def digitize(n):
    lst=[]
    new=[]
    for i in str(n):
        lst.append(int(i))
    for u in lst:
        new = [int(u)] + new
    return new

# 2. https://www.codewars.com/kata/56efc695740d30f963000557/train/python
def to_alternating_case(string):
    word=""
    for i in string:
        if i.islower():
            word += i.upper()
        else:
            word += i.lower()
    return word

# 3. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python
def abbrev_name(name):
    Name=""
    Last=""
    count=0
    for i in name:
        if i==" ":
            count+=1
        if count==0:
            Name += i
        elif count!=0:
            Last += i
    full=f"{Name[0].upper()}.{Last[1].upper()}"
    return full

# 4. https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif p1 == "rock" and p2 == "scissors" or p1 == "scissors" and p2 == "paper" or p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    else:
        return "Player 2 won!"

# 5. https://www.codewars.com/kata/5aa736a455f906981800360d/train/python
def feast(beast, dish):
    if beast[0]==dish[0] and beast[-1]==dish[-1]:
        return True
    else:
        return False