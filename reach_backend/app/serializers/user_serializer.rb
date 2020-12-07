class UserSerializer
    include JSONAPI::Serializer
    
    attr_accessor :id, :number
end