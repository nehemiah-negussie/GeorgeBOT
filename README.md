# GeorgeBOT
## _Discord Pokemon Autocatcher_



GeorgeBOT is a discord bot made to read discord bot Poketwo's messages and retrieve the pokemon name, saving the name to a file, allowing a Python script to read and send the commands.

WARNING: By using this code, you agree that I (the creator) am not liable in any way, if your discord account gets banned or kicked or has any action taken against it. You understand that this could potentially get your discord account banned and suspended from the Poketwo bot and choose to use the code anyways.


## Requirements

Javascript:
- [discord.js] - Node.js module to communicate with Discord API
- [node.js] - javascript runtime environment and installer

Python 3:
- [requests] - Send HTTP requests for discord messages

## Installation
Install the latest LTS on the [node.js] website

Install discord.js by entering cmd on Windows or Terminal on Mac and typing
``` 
npm install discord.js
```
Make sure you have an up to date version of Python3.

Install requests on the command line through the command:
```
python -m pip install requests
```
or
```
pip install requests
```

## Usage
First clone the repository by using:
```
git clone https://github.com/nehemiah-negussie/GeorgeBOT.git
```
##### Running the GeorgeBOT :
Change the token in the index.js file to your own discord bot token before doing this step. To learn how to get your own discord bot token go [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

First change the directory of the command line into the `GeorgeBOT` folder then we will run the javascript file with the command `node index.js`.
```
cd GeorgeBOT
node index.js
```

##### For running the AutoCatcher:
Open a new terminal tab and make sure you are in the GeorgeBOT directory.
Get the [authorization token](https://youtu.be/YEgFvgg7ZPI) of the discord account you want to autocatch on and replace the token variable on  `discmessage.py`.
```
python discmessage.py
```
or
```
python3 discmessage.py
```
for Mac

If both `index.js` and `discmessage.py` are running, the GeorgeBOT will write the commands to the commands.txt file and the python script will read and send the commands.

## Questions, comments, or concerns?
Open a new issue on the github page [here](https://github.com/nehemiah-negussie/GeorgeBOT/issues).
## License

MIT


[//]: #
   [node.js]: <http://nodejs.org>
   [discord.js]: <https://discord.js.org/>
   [requests]: <https://requests.readthedocs.io/en/master/>
