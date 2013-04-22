Setup
=====

Install the required modules in npm

    npm install ntwitter
    npm install socket.io
  
Enter your API keys by editing these lines:

    var twit = new twitter({
      consumer_key: '[YOUR KEY HERE]',
      consumer_secret: '[YOUR KEY HERE]',
      access_token_key: '[YOUR KEY HERE]',
      access_token_secret:'[YOUR KEY HERE]'
    });


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
