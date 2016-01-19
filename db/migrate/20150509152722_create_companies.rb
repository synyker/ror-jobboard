class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :website
      t.boolean :sponsored

      t.timestamps null: false
    end
  end
end
