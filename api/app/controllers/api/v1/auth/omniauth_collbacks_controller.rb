class Api::V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  include Devise::Controllers::Rememberable

  def omniauth_success
    if current_api_v1_user
      assign_provider_attrs_for_current_user(current_api_v1_user, auth_hash)
      current_api_v1_user.save!
      render json: current_api_v1_user, serializer: UserSerializer
    else
      get_resource_from_auth_hash
      set_token_on_resource
      create_auth_params

      if confirmable_enabled?
        # don't send confirmation email!!!
        @resource.skip_confirmation!
      end

      sign_in(:user, @resource, store: false, bypass: false)

      @resource.save!

      yield @resource if block_given?
      render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)
    end
  end

  protected

  def assign_provider_attrs(user, auth_hash)
    attrs = auth_hash['info'].to_hash
    extra_info = {}
    extra_info = {
      'twitter_link' => attrs&.fetch('urls')&.fetch('Twitter', nil)
    } if auth_hash['provider'] == 'twitter'

    extra_info = {
      'instagram_link' => attrs&.fetch('urls')&.fetch('Instagram', nil)
    } if auth_hash['provider'] == 'instagram'

    extra_info = {
      'facebook_link' => attrs&.fetch('urls')&.fetch('Facebook', nil)
    } if auth_hash['provider'] == 'facebook'

    attrs = attrs.slice(*user.attribute_names)
    attrs = attrs.merge(extra_info)
    user.assign_attributes(attrs)
  end

  def assign_provider_attrs_for_current_user(user, auth_hash)
    attrs = auth_hash['info'].to_hash
    extra_info = {}
    extra_info = {
      'twitter_link' => attrs&.fetch('urls')&.fetch('Twitter', nil)
    } if auth_hash['provider'] == 'twitter'

    extra_info = {
      'instagram_link' => attrs&.fetch('urls')&.fetch('Instagram', nil)
    } if auth_hash['provider'] == 'instagram'

    extra_info = {
      'facebook_link' => attrs&.fetch('urls')&.fetch('Facebook', nil)
    } if auth_hash['provider'] == 'facebook'

    user.assign_attributes(extra_info)
  end
end