ToDoList=[]
com=["0","9","8","7","6","5","4","3","2","1","l"]
Task="0"
menu="0"
remo="0"
mark="0"
undo = []
save = ToDoList.copy()

while menu!="l" :
    if Task =="0" and remo =="0" and mark =="0":
        menu=input("""(0=Edit list)  (9=Clear last task)  (8=Clear all) (7=undo) (6=Save) (5=Load) (4=Remove) (3=Mark) (2=Paste) (1=info) (l=Leave): """)

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

    if menu=="4":
        if ToDoList!=[]:
            undo.append(ToDoList.copy())
            print("Example: [ 1 , 2 , 3 ,....]")
            remo=input("(0=Menu) enter number of item you want to remove is standing on: ")
            while not remo.isdigit() or int(remo) > len(ToDoList):
                remo=input("(0=Menu) number you entered cant be found in list, please re-enter or go back to menu : ")
            if remo!="0":
                ToDoList.pop(int(remo)-1)
        else:
            remo=input("you to do list is empty please go back to menu and fill it in order to use this function  (0=Menu):  ")
            while remo!="0":
                remo=input("your to do list is empty please go back to menu and fill it in order to use this function  (0=Menu):  ")

    if menu == "3":
        
        if ToDoList == [] and mark!="0":
                mark = input("Your to do list is empty, please go back to menu and add tasks first (0=Menu): ")
        
        if ToDoList != []:
            mark = input("(0=Menu) mark in your list: ")

            while not mark.isdigit() or int(mark) > len(ToDoList):
                mark = input("(0=Menu) invalid input, please go back to Menu: ")

            if mark.isdigit() and int(mark) <= len(ToDoList) and mark!="0":
                undo.append(ToDoList.copy())
                ToDoList[int(mark) - 1] += " ✅"

    if menu == "2":
        undo.append(ToDoList.copy())
        for i in save:
            ToDoList.append(i)
    
    if menu == "1":
        print("""
            How to use ToDo List:

            (0) Edit list:
                - Add a new task by typing it in and specifying a time.

            (1) Info:
                - Shows this help message.

            (2) Paste:
                - Paste tasks from the saved version of your list.

            (3) Mark:
                - Mark a task as completed with a ✅ symbol.

            (4) Remove:
                - Remove a specific task from the list by its number.

            (5) Load:
                - Load the last saved version of your list.

            (6) Save:
                - Save the current version of your list.

            (7) Undo:
                - Undo the last change to your list.

            (8) Clear all:
                - Remove all tasks from your list.

            (9) Clear last task:
                - Remove the most recent task you added.

            (Anything else) Exit:
                - Stop and close the ToDo list app.

            Notes:
            - Task numbers start from 1 when removing or marking.
            - All actions (except viewing info) are undoable using option (7).
            - Your list is always shown after every operation.
            """)

    if menu=="0":
        Task=input("""(0=Menu) what task do you want to add to your list?: """)
        if Task!="0":
            undo.append(ToDoList.copy())
            when=input("""time: """).lower()
            ToDoList.append(f"  {Task}---{when}")
    if menu not in com:
        print("command you entered doesnt exist")

    print(f"""Your to do List  {ToDoList}""")