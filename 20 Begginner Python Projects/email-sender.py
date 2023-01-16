from email.message import EmailMessage
import smtplib

email_sender = 'doumpis@hotmail.com'

email_receiver = 'blablabla@gmail.com'

subject = "Hey!"
body = """
I just sent my first mail with Python!
"""

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['subject'] = subject
em.set_content(body)

#for testing I used an account at mailtrap.io
with smtplib.SMTP('smtp.mailtrap.io', 2525) as server:
    server.login("1f1e9add25dd05", "6f89d0f3660279") 
    server.sendmail(email_sender, email_receiver, em.as_string())