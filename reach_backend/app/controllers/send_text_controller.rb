class SendTextController < ApplicationController
    def send_text_message
      voter_to_message_by_id = params[:voter_id]
      message_to_send = params[:body]
  
      if voter_to_message_by_id === 1
        number_to_send_to = '+16468729355'
        
        twilio_account_sid = Rails.application.credentials.dig(:twilio_sid)
        twilio_auth_token = Rails.application.credentials.dig(:twilio_token)
        twilio_phone_number = Rails.application.credentials.dig(:twilio_number)
    
        @twilio_client = Twilio::REST::Client.new twilio_account_sid, twilio_auth_token
    
        @twilio_client.messages.create(
          :from => twilio_phone_number,
          :to => number_to_send_to,
          :body => message_to_send
        )
      end
      
        @new_message = Message.new(
            origin: params[:origin],
            user_id: params[:user_id],
            voter_id: params[:voter_id],
            body: params[:body]
        )
        if @new_message.save
            render json: @new_message, status: :created, location: @new_message
          else
            render json: @new_message.errors, status: :unprocessable_entity
          end
    end
  end