class CreateSlidePhotos < ActiveRecord::Migration
  def change
    create_table :slide_photos do |t|
      t.string :name
      t.string :slug
      t.text :description
      t.timestamps
    end
    add_attachment :slide_photos, :avatar
  end
end
