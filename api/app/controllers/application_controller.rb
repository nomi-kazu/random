class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :null_session
  # skip_before_action :verify_authenticity_token
end
