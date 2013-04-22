Setup
=====

Install the required modules in npm

    npm install ntwitter
    npm install socket.io
  
You can pick what topic you are listening for by editing this line in twitter-stream.js

    twit.stream('statuses/filter', {'track':'YOUR TOPIC HERE'},
  
Run
===

If you are using windows, just run the batch file. Else:

### Windows

    node twitter-stream.js

### Linux

    nodejs twitter-stream.js
  


Screenshot
==========

![Alt text](http://imgur.com/WZoVVHA.jpg)
