# app/controllers/users_controller.rb
class UsersController < ApplicationController

    before_filter :authorize, :except => ['index', 'show']

    def new

    end

    def create
      user = User.new(user_params)
      if user.save
        redirect_to '/login'
      else
        redirect_to '/signup'
      end
    end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
