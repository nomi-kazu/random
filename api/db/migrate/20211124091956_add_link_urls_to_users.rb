class AddLinkUrlsToUsers < ActiveRecord::Migration[6.1]
  def up
    add_column :users, :twitter_link, :string
    add_column :users, :instagram_link, :string
    add_column :users, :facebook_link, :string
  end

  def down
    remove_column :users, :twitter_link
    remove_column :users, :instagram_link
    remove_column :users, :facebook_link
  end
end
