class SpacesController < ApplicationController
  before_action :authorize

  def index
    spaces = Space.all
    render json: spaces
  end

  # def show
  #   space = User.find()
  #   if space
  #     render json: space
  #   else
  #     render json: {error: space.errors.full_messages}, status: :unprocessable_entity
  #   end
  # end

  def create
    space = Space.new(space_params)
    space.creator = session[:user_id]
    if space.valid?
      space.save
      render json: space, status: :created
    else
      render json: { errors: space.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def space_params
      params.require(:space).permit(:title, :bio)
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
