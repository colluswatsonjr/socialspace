Rails.application.routes.draw do
  resources :spaces
  resources :users
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch "/edit", to:"users#edit_user"
  delete "/delete", to:"users#delete_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
