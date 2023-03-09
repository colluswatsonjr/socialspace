class UsersController < ApplicationController
  before_action :authorize, except: [:create]

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(session[:user_id])
    if user
      render json: user
    else
      render json: {error:['No saved login']}
    end
  end

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit_user
    user = User.find(session[:user_id])
    if user
      user.update(user_params)
     render json: user
    else
      render json: {error:"User Not Found"}, status: 404
    end
end

def delete_user
  user = User.find(session[:user_id])
  if user
      user.destroy
      render json: {}
  else
      render json: {error:"User Not Found"}, status: 404
  end
end

def follow
  user = User.find(params[:id])
  User.find(session[:user_id]).followees << user
  render json: User.find(session[:user_id])
end

def unfollow
  user = User.find(params[:id])
  User.find(session[:user_id]).followed_users.find_by(followee_id: user.id).destroy
  render json: User.find(session[:user_id])
end

  private
  def user_params
    params.permit(:username, :email, :fname, :lname, :bio, :password, :password_confirmation)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
