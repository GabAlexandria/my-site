class FeatureCodesController < ApplicationController

  def index
  end

  def show
  end

  def new
    @feature_code = FeatureCode.new
    @features = Feature.all
    @types = CodeType.all
    respond_to do |format|
      format.js{}
    end
  end

  def create
    @feature_code = FeatureCode.new(params[:feature_code])
    respond_to do |format|
      if @feature_code.save
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
