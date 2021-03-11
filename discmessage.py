import requests
import time
import sys

payload = {
    'content': ""
 }

header = {
    'authorization': "TOKEN"
}

def follow(thefile):
    thefile.seek(0,2) # Go to the end of the file
    while True:
        line = thefile.readline()
        if not line:
            time.sleep(0.1) # Sleep briefly
            continue
        print (line)
        if (line.find(',') != -1): # if line has comma then it is a command
            data = line.split(',') # split line into the message and channel id to send into
            payload['content'] = data[0] 
            channel = data[1]
            url = "https://discord.com/api/v8/channels/" + str(channel).strip() + "/messages"
            r = requests.post(url, data=payload, headers=header) # send message

f = open("commands.txt", "r")
follow(f) # continually read the file for new lines

