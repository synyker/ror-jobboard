class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.integer :company_id
      t.string :description
      t.date :begin
      t.date :end

      t.timestamps null: false
    end
  end
end
