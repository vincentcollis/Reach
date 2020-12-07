require 'faker'

class VotersController < ApplicationController
  before_action :set_voter, only: [:show, :update, :destroy]

  # GET /voters
  def index
    @voters = Voter.all
    json_string = VoterSerializer.new(@voters).serializable_hash.to_json
    render json: json_string
  end

  # GET /voters/1
  def show

    json_string = VoterSerializer.new(@voter).serializable_hash.to_json
    render json: json_string
  end

  # POST /voters
  def create
    @voter = Voter.new(voter_params)

    if @voter.save
      render json: @voter, status: :created, location: @voter
    else
      render json: @voter.errors, status: :unprocessable_entity
    end
  end

  def new_voter
    @voter = Voter.new(
      number: params[:number], 
      name: params[:name], 
      photo: Faker::Avatar.image
    )

    if @voter.save
      render json: @voter, status: :created, location: @voter
    else
      render json: @voter.errors, status: :unprocessable_entity
    end
  end
  

  # PATCH/PUT /voters/1
  def update
    if @voter.update(voter_params)
      render json: @voter
    else
      render json: @voter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /voters/1
  def destroy
    @voter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_voter
      @voter = Voter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def voter_params
      params.require(:voter).permit(:id, :name, :number)
    end
end
