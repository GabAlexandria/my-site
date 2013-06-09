class CreateCodeTypes < ActiveRecord::Migration
  def change
    create_table :code_types do |t|
      t.string :name
      t.timestamps
    end
  end
end
