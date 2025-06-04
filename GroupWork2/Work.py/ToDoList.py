ToDoList=[]
com=["0","9","8","7","6","5"]
Task="0"
menu="0"
undo = []
save = ToDoList.copy()

while menu in com :

    if Task=="0":
        menu=input("""(0=Edit list)  (9=Clear last task)  (8=Clear all) (7=undo) (6=Save) (5=Load) () (Anything else=stop): """)

    if menu=="9":
        undo.append(ToDoList.copy())
        ToDoList=ToDoList[:-1]

    if menu=="8":
        undo.append(ToDoList.copy())
        ToDoList=[]

    if menu=="7":
        if undo!=[]:
            ToDoList=undo.pop()

    if menu=="6":
        save=ToDoList.copy()

    if menu=="5":
        undo.append(ToDoList.copy())
        ToDoList=save.copy()
        
    if menu=="0":
        Task=input("""(0=Menu) what task do you want to add to your list?: """)
        if Task!="0":
            when=input("""time: """).lower()
            ToDoList.append(f"{Task}---{when}")

    print(f"""Your to do List  {ToDoList}""")