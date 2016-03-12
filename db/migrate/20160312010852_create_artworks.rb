class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.text :data

      t.timestamps null: false
    end
  end
end
