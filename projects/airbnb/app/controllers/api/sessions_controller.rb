class Api::SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials."], status: 401
    end
  end

  def destroy
    # Rendering a 404 message if there is no current_user to logout.
    unless current_user
      render json: ["No user is currently logged in."], status: 404
    else
      # Logout the current_user and render an empty {} upon succesful logout.
      logout!
      render json: {}
    end
  end

end