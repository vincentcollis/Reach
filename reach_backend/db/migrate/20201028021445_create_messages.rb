class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.boolean :origin
      t.string :body
      t.integer :user_id
      t.integer :voter_id

      t.timestamps
    end
  end
end
