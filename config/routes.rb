Rails.application.routes.draw do

  root to: 'application#awp'

  get 'photo-albums', to: 'application#awp'
  get 'photo-albums/:id', to: 'application#awp'

end
