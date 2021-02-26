import requests
import time
  
payload = {
    'content': "yo <:ANIIIISHHH:784238963589513226>"
 }

header = [{
    'authorization': "TOKEN"
},
{
    'authorization': "TOKEN"
},
{
    'authorization': "TOKEN"
}]

id = ["813500379295121439", "813500346814300233", "813500328845901857", "813500287561367597", "813500261389565975", "813500425873391629", "812937001606053910", "808028771307356160"]

while True:
    for i in range(len(id)):
        url = "https://discord.com/api/v8/channels/" + id[i] + "/messages"
        for j in range(len(header)):
            r = requests.post(url, data=payload, headers=header[j])

