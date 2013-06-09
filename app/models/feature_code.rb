class FeatureCode < ActiveRecord::Base
  attr_accessible :feature_id, :title, :type_id, :code
  belongs_to :feature
  has_many :code_types
end
