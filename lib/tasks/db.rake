namespace :db do
  desc "drop, create, migrate jeff's mom"
  task shalom: [:environment, 'db:drop', 'db:create', 'db:migrate', 'db:seed']
  task yolo: [:environment, 'db:drop', 'db:create', 'db:migrate', ]
end
