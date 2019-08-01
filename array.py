num1=int(input("enter a number: "))
num2=int(input("enter another number: "))
num3=[]
sum=0
if(num1>num2):
    for i in range(0,num1):
        val = int(input("enter a value: "))
        num3.insert(i,val)
    for j in range(0,num2):
        sum = sum + num3[j]
else:
    print("num1 is not greater than num2 try again")
print(sum)