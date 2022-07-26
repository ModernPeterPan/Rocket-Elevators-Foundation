class InterventionsController < ApplicationController
   
    def new
    @customers = Customer.all
    @buildings = Building.all
    end

    def get_building_by_client
        @buildings = Building.where("customer_id = ?", params[:customer_id])
        render plain: @buildings.to_json
        # respond_to do |format|
        #     format.json { render json: => @buildings.to_json }
        #     format.html { render 'new'}
        # end
        #render plain: params
    end
end