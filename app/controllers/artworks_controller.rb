class ArtworksController < ApplicationController
  def new
  end

  def create
    @artwork = Artwork.new(data: params[:artString])
    @artwork.save


    respond_to do |format|
      response = { :status => "Artwork saved, you can view it at artwork/" + @artwork.id.to_s + " and edit it at /artwork/" +@artwork.id.to_s+"/edit/", :message => "Success!", :html => "Success"}
      format.json { render json: response }
    end
  end

  def update
    @artwork = Artwork.find(params[:id])
    @artwork.update(data: params[:artString])
    respond_to do |format|
      response = { :status => "Artwork updated, you can view it at artwork/" + @artwork.id.to_s, :message => "Success!", :html => "Success"}
      format.json { render json: response }
    end
  end

  def edit
    @artwork = Artwork.find(params[:id])
    @id = params[:id]
    @data = @artwork.data
  end

  def show
    @artwork = Artwork.find(params[:id])
    @data = @artwork.data
  end
end
