#1
def res(x):
    y=0
    for i in str(x):
        y+=int(i)
    return x%y
print(res(340))

