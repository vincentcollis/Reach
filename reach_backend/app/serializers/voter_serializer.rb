class VoterSerializer
    include JSONAPI::Serializer
    
    attributes :name, :number, :photo

    # get last message sent
    attribute :last_message do |object|
        index = object.messages.length
        if index > 0
            object.messages[index-1].body
        else
            'no messages found'
        end
    end

    attribute :last_message_id do |object|
        index = object.messages.length
        if index > 0
            object.messages[index-1].id
        else
            'no messages found'
        end
    end
end