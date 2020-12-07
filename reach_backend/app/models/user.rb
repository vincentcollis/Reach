class User < ApplicationRecord
    has_many :messages
    has_many :voters, through: :messages

    
    
end
