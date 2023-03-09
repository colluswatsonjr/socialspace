Rails.application.routes.draw do
  # resources :followings
  resources :spaces
  resources :users

  post '/users/:id/follow', to: "users#follow"
  post '/users/:id/unfollow', to: "users#unfollow"
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch "/edit", to:"users#edit_user"
  delete "/delete", to:"users#delete_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
