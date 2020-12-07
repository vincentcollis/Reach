Rails.application.routes.draw do

  post '/send_sms', to: 'send_text#send_text_message'

  post '/receive_sms', to: 'receive_text#create_received_text'

  post '/messages/new_convo', to: 'messages#new_convo'
  post '/voters/new_voter', to: 'voters#new_voter'
  
  resources :users
  resources :admins
  resources :voters
  resources :messages

  mount ActionCable.server => '/cable'
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
