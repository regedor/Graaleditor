class Gralleditor < Padrino::Application
  register Padrino::Mailer
  register Padrino::Helpers
  register Padrino::Admin::AccessControl
  #register SassInitializer

  ##
  # Application configuration options
  #
  # set :raise_errors, true     # Show exceptions (default for development)
  # set :public, "foo/bar"      # Location for static assets (default root/public)
  # set :reload, false          # Reload application files (default in development)
  # set :default_builder, "foo" # Set a custom form builder (default 'StandardFormBuilder')
  # set :locale_path, "bar"     # Set path for I18n translations (default your_app/locales)
  # enable  :sessions           # Disabled by default
  # disable :flash              # Disables rack-flash (enabled by default if sessions)
  # layout  :my_layout          # Layout can be in views/layouts/foo.ext or views/foo.ext (default :application)
  #

  set :login_page, "/sessions/new"
  disable :store_location

  access_control.roles_for :any do |role|
    role.allow /$\/^/
    role.protect "/accounts"
    role.allow "/sessions"
    role.project_module 'About Graal Editor', "/about" 
    role.project_module :grammars, "/grammars"	  
  end

  access_control.roles_for :admin do |role|
    role.project_module 'About Graal Editor', "/about" 
    role.project_module :grammars, "/grammars"	  
    role.project_module :accounts, "/accounts"
  end
end
