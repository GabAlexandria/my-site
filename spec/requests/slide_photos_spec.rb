require 'spec_helper'

describe "SlidePhotos" do
  describe "GET /slide_photos" do
    it "works! (now write some real specs)" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get slide_photos_path
      response.status.should be(200)
    end
  end
end
