for _ in range(3):
 print("Guga")
print("done")
for _ in range(15,22,2):
 print(_)
name="guga"
sec="D"
for I in name:
 if I =="g":
   sec=sec+I
print(sec)

#1
for O in range(2,25):  #for O in range(3,25,2):
  if O % 2 !=0:           #print(O)
     print(O)

#2
name=input("name: ")
for U in name:
 print(U)

places=5
while places>0:
  print("place got blown")
  places=int(places)-1
print("everything got blown and nothing is left")

age=5
while age<10:
  print("too young")
  age+=1
print("now your ready")

#3
correct_password="LEAVE HIM ALONE"
password=input("password: ")
while password!=correct_password:
  print("your wrong")
  password=input("password: ")
print("your dam right")


