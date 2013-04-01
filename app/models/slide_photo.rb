class SlidePhoto < ActiveRecord::Base
  attr_accessible :name, :slug, :description, :avatar
  has_attached_file :avatar, :style => {:medium => "300x300>", :thumb => "50x50p>"} 
  # attr_accessible :title, :body
end
