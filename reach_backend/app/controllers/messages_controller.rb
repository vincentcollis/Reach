class MessagesController < ApplicationController
  # skip_before_filter :verify_authenticity_token
  before_action :set_message, only: [:show, :update, :destroy]
#  skip_before_filter :authenticate_user!, :only => "reply"


  # GET /messages
  def index
    @messages = Message.all
    json_string = MessageSerializer.new(@messages).serializable_hash.to_json
    render json: json_string
  end

  # GET /messages/#
  def show
    json_string = MessageSerializer.new(@message).serializable_hash.to_json
    render json: json_string
  end


  # POST /messages
  def create
    @message = Message.new(message_params)

    if @message.save
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def new_convo
    @message = Message.new(
      origin: true, 
      body: params[:body], 
      user_id: '1', 
      voter_id: Voter.last.id
    )

    if @message.save
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit(:id, :origin, :body, :user_id, :voter_id)
    end

end
