import string
import random

characters = list(string.ascii_letters + string.digits + "!@#$%^&*()")

def generate_password():
    password_length = int(input("Enter desired length: "))
    random.shuffle(characters)
    password = characters[:password_length]
    print("".join(password))

generate_password()