class InterventionsController < ApplicationController
    def _form
    @customers = Customer.all
    @buildings = Building.all
    end
end