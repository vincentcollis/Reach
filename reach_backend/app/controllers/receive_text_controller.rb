class ReceiveTextController < ApplicationController
    def create_received_text
        # let's pretend that we've mapped this action to 
        # http://localhost:3000/sms in the routes.rb file
      
        message_body = params["Body"]
        from_number = params["From"]
  
        # SMSLogger.log_text_message from_number, message_body

        person = Voter.all.find{|v| v.number === from_number}

        @new_message = Message.new(
            origin: false,
            user_id: 1,
            voter_id: person.id,
            body: message_body
        )
        
        if @new_message.save
            render json: @new_message, status: :created, location: @new_message
          else
            render json: @new_message.errors, status: :unprocessable_entity
        end

        
    end
end