class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image, :profile, :address, :twitter_link, :instagram_link, :facebook_link, :created_at, :updated_at
end
