require "spec_helper"

describe SlidePhotosController do
  describe "routing" do

    it "routes to #index" do
      get("/slide_photos").should route_to("slide_photos#index")
    end

    it "routes to #new" do
      get("/slide_photos/new").should route_to("slide_photos#new")
    end

    it "routes to #show" do
      get("/slide_photos/1").should route_to("slide_photos#show", :id => "1")
    end

    it "routes to #edit" do
      get("/slide_photos/1/edit").should route_to("slide_photos#edit", :id => "1")
    end

    it "routes to #create" do
      post("/slide_photos").should route_to("slide_photos#create")
    end

    it "routes to #update" do
      put("/slide_photos/1").should route_to("slide_photos#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/slide_photos/1").should route_to("slide_photos#destroy", :id => "1")
    end

  end
end
