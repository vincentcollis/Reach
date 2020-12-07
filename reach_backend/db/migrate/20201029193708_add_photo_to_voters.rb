class AddPhotoToVoters < ActiveRecord::Migration[6.0]
  def change
    add_column :voters, :photo, :string
  end
end
