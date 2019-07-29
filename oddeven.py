num = input()
if(num.isdigit()):
    num1=int(num)
    if((num1%2)==0):
        print("even")
    else:
        print("odd")
else:
    print("invalid")
