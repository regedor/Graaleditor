class CreateGrammars < ActiveRecord::Migration
  def self.up
    create_table :grammars do |t|
      t.string :title
      t.text :body
      t.integer :account_id
    end
  end

  def self.down
    drop_table :grammars
  end
end
