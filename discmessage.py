import requests
import time
import sys

payload = {
    'content': "this is from my code smile"
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
        if (line.find(',') != -1):
            data = line.split(',')
            payload['content'] = data[0]
            channel = data[1]
            url = "https://discord.com/api/v8/channels/" + str(channel).strip() + "/messages"
            r = requests.post(url, data=payload, headers=header)

f = open("commands.txt", "r")
follow(f)

