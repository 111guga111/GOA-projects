#print(), len(), input(), str(), int(), float()
#void doesnt give back anything

def print_two_times():
    print("hello")
    print("bye")
print(print_two_times())#void

name=input("name: ")
def greet():
    return "hello" + name
print(greet())

#void does something but we dont get information back
#return give back information that we can use

name1="luka"
name2="lasha"
def greet(name3):
    return "hello" + name3
print(greet("luka"))
print(greet(name2))

def greet(name, name3):
    return "hello" + name + name3
print(greet("luka", "lasha"))

name1="luka"
name2="lasha"
def greet(name, name2):
    return "hello" + name + name2
print(greet("deme", "ana"))

