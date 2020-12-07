class MessageSerializer
    include JSONAPI::Serializer
    
    attributes :user_id, :voter_id


    #return voter name
    attribute :voter_name do |object|
        object.voter.name
    end

    # sender of instantiated of message
    attribute :sender do |object|
        if object.origin == true
            'user'
        else
            object.voter.name
        end
    end

    attributes :body

    # time message was generated in integer form
    attribute :time do |object|
        object.created_at.to_time.to_i
    end
            
end