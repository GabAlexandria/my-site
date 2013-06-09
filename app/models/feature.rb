class Feature < ActiveRecord::Base
  attr_accessible :name, :slug
  has_many :feature_codes
end
