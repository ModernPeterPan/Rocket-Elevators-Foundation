class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  establish_connection :mysql
end
