class Api::V1::Auth::RegistrationsController < ApplicationController
  private

  # ストロングパラメーター設定
  def sign_up_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:name, :email, :nickname, :image)
  end
end
