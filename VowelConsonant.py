ch = input("Enter a character:")
if((ch>='a' and ch<='z') or (ch>='A' and ch<='Z')):
    if(ch=='a'or ch=='e'or ch=='i'or ch=='o'or ch=='u'or ch=='A'or ch=='E' or ch=='I' or ch=='O' or ch=='U'):
        print("vowel")
    else:
        print("consonant")
else:
    print("invalid")
