Rails.application.config.middleware.use OmniAuth::Builder do
  OmniAuth.config.full_host = ENV["API_DOMAIN"]
  # provider :twitter,      ENV['TWITTER_KEY'], ENV['TWITTER_SECRET']
  # provider :instagram,    ENV['INSTAGRAM_KEY'], ENV['INSTAGRAM_SECRET']
  # provider :facebook,     ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  # provider :google_oauth2, ENV['GOOGLE_KEY'],   ENV['GOOGLE_SECRET']
end