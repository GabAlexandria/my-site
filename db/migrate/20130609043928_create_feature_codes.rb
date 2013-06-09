class CreateFeatureCodes < ActiveRecord::Migration
  def change
    create_table :feature_codes do |t|
      t.integer :feature_id
      t.string :title
      t.integer :code_type_id
      t.text :code
      t.timestamps
    end
  end
end
