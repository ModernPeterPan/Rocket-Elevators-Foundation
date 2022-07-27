class CreateInterventions < ActiveRecord::Migration[5.2]
  def change
    create_table :interventions do |t|
      t.string :author
      t.integer :customer_id
      t.integer :building_id
      t.integer :battery_id
      t.integer :column_id, null: true
      t.integer :elevator_id, null: true
      t.integer :employee_id, null: true
      t.datetime :int_started_at, null: true
      t.datetime :int_ended_at, null: true
      t.string :result
      t.text :report
      t.string :status

      t.timestamps
    end
  end
end
