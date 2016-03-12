Rails.application.routes.draw do
  resources :artworks, only: %i(create edit new update show)

  get 'welcome/index'
  root 'welcome#index'
end
