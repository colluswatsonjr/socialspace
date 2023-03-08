class CreateSpaces < ActiveRecord::Migration[7.0]
  def change
    create_table :spaces do |t|
      t.string :title
      t.string :bio
      t.integer :creator

      t.timestamps
    end
  end
end
