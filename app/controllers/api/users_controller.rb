class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
    
        if @user.save
          login(@user)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])      
        @user.update_attributes(user_params)
        render :show
    end

    private

    def user_params

        params.require(:user).permit(
            :username, 
            :password, 
            :credits, 
            :cart
        )

    end

end
