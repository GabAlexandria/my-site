class SlidePhotosController < ApplicationController
  before_filter :authenticate_admin!

  def index
    @slide_photos = SlidePhoto.all
  end


  def show
    @slide_photo = SlidePhoto.find(params[:id])

  end

  def new
    @slide_photo = SlidePhoto.new
  end

  def edit
    @slide_photo = SlidePhoto.find(params[:id])
  end

  def create
    @slide_photo = SlidePhoto.new(params[:slide_photo])
    if @slide_photo.save
      flash[:notice] = "A new slide photo has been added"
      render :action => :index
    else
      flash[:error] = "There was a problem saving this slide photo"
      render :action => :new
    end
  end

  def update
    @slide_photo = SlidePhoto.find(params[:id])
    @slide_photo.attributes = params[:product]
    if @slide_photo.save
      flash[:notice] = "The slide photo has been updated"
      render :action => :index
    else
      flash[:error] = "There was a problem saving this slide photo"
      render :action => :edit
    end
  end

  def destroy
    @slide_photo = SlidePhoto.find(params[:id])
    @slide_photo.destroy
  end
end
