class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :fname, :lname, :bio
  has_many :followees, through: :followed_users
  has_many :followers, through: :following_users
end
