from turtle import *

#we want to paint a house

#house
speed(30)
width(7)
shape("turtle")
#walls
color("blue")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200) 
left(90)
end_fill()

#door
forward(70)
color("purple")
begin_fill()
left(90)
forward(110)
right(90)
forward(60)
right(90)
forward(110)
end_fill()
penup()
goto(200,200)
pendown()

#roof
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
penup()
goto(60,120)
pendown()

#window 1
color("grey")
begin_fill()
right(60)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
penup()
goto(180,120)
pendown()

#window 2
color("grey")
begin_fill()
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
penup()
goto(-500,0)
pendown

#background

#grass
color("green")
begin_fill()
left(90)
forward(100000000)
right(90)
forward(100000000)
right(90)
forward(1000000000)
right(90)
forward(100000000)
end_fill()
penup()
goto(0,0)
pendown()

#sky
color("cyan")
begin_fill()
forward(1000000000)
left(90)
forward(1000000000)
left(90)
forward(1000000000)
left(90)
forward(1000000000)
penup()
goto(200,0)
pendown()
forward(1000000000)
left(90)
forward(1000000000)
left(90)
forward(1000000000)
left(90)
forward(1000000000)
end_fill()
penup()
goto(200,205)
pendown()
begin_fill()
right(150)
forward(400)
right(30)
forward(1000000000)
right(90)
forward(200)
right(90)
forward(1000000350)
end_fill()
penup()
goto(0,205)
pendown()
begin_fill()
left(150)
forward(400)
left(30)
forward(1000000000)
left(90)
forward(200)
right(90)
forward(1000000350)
end_fill()

exitonclick()

print("Hello World")
print("Guram Topchishvili, Known as Guga")

#programing is fun

print(5) #integer (int)
print("5")#string (str)
print(5.5)#float

# cant add up different types
print(5+ int("5")) # change type
print(5+ float("5.5")) # change type
print(str(5)+ " " + "Guga") # change type