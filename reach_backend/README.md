# README

This application was not setup for deployment, only to run on local machine.
Will require an API Key from Twilio https://www.twilio.com/

Things you may want to cover:

* Ruby version : ruby '2.6.1'
    
* System dependencies

* Configuration
    Must create a webhook to your twilio phone number.
    - Follow this guide here: https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-node-js

    White list the domain of the webhook
    - Navigate to the fowarding address in your browser
    - Copy the config.host <<< URL and paste into development.rb under "white list on host name"
        example: config.hosts << "85350fddf1e5.ngrok.io"



Navigate to the development.rb file

* Database creation: 
    - Backend is created using Ruby on Rails
    - Run Rails db:create

* Database initialization
    - Migrate and seed data base
    - Run: 
        Rails db:migrate
        Rails db:seed


* ...
# Reach_BACKEND

