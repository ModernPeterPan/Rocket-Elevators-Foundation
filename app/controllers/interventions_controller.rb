class InterventionsController < ApplicationController
    before_action :authenticate_user!
        # GET /interventions/show
    def index
        @customers = Customer.all
    end

    def show
    end
    
    def new
        @customers = Customer.all
        @buildings = Building.all
        @batteries = Battery.all
        @columns = Column.all
        @elevators = Elevator.all
        @employees = Employee.all
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

    def get_battery_by_building
        @batteries = Battery.where("building_id = ?", params[:building_id])
        render plain: @batteries.to_json
    end

    def get_columns_by_battery
        @columns = Column.where("battery_id = ?", params[:battery_id])
        render plain: @columns.to_json
    end

    def get_elevators_by_columns
        @elevators = Elevator.where("column_id = ?", params[:column_id])
        render plain: @elevators.to_json
    end
end