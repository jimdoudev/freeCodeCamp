import urllib.request as urrllib

def main(url):
    print("Checking connectivity")
    response = urrllib.urlopen(url)
    print("Connected to", url, "successfully")
    print("The response code was:", response.getcode())

print("This is a site connectivity checker program")
input_url = input("Enter the url of the site you want to check: ")

main(input_url)

