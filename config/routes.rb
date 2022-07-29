Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql#execute"
  end
  post "/graphql", to: "graphql#execute"
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'polly/index', to: "polly#convert"
  get 'maps/index'
  resources :quotes
end
Rails.application.routes.draw do
  get 'maps/index'
  resources :quotes
  resources :employees
  resources :interventions, only: [:new, :create]
  resources :polly
  devise_for :users
  root 'home#index'
  get 'home/backOffice'
  get 'home/quote'
  get 'home/commercial'
  get 'home/residential'
  get 'home/chart'
  get 'maps' => 'maps#index'
  post '/create_lead' => 'home#create_lead'
  get 'dropbox/auth' => 'dropbox#auth'
  get 'dropbox/auth_callback' => 'dropbox#auth_callback'

  #get 'interventions/index' => 'interventions#index'
  #get 'interventions/new' => 'interventions#new'
  #post 'interventions/create' => 'interventions#create'
  get 'interventions/get_building_by_client/:customer_id', to: 'interventions#get_building_by_client'
  get 'interventions/get_battery_by_building/:building_id', to: 'interventions#get_battery_by_building'
  get 'interventions/get_columns_by_battery/:battery_id', to: 'interventions#get_columns_by_battery'
  get 'interventions/get_elevators_by_columns/:column_id', to: 'interventions#get_elevators_by_columns'
end
