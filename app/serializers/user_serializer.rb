class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fname, :lname, :email, :bio
end
