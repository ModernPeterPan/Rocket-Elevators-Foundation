// Listeners
$(function() {

    $($("select#interventions_customer")).change(function() {
        console.log("customer id = " + $("select#interventions_customer").val())
        $(".field2").show();
        $(".field3").hide();
        $(".field4").hide();
        $(".field5").hide();
        setCustomerBuildings($("select#interventions_customer").val());
        // setBuildingBatteries($("select#building_id").val());
    })

    $($("select#interventions_building")).change(function() {
        console.log("building id = " + $("select#interventions_building").val())
        $(".field3").show();
        $(".field4").hide();
        $(".field5").hide();
        setBuildingBatteries($("select#interventions_building").val());
    })

    $($("select#interventions_battery")).change(function() {
        console.log("battery id = " + $("select#interventions_battery").val())
        $(".field4").show();
        $(".field5").hide();
        setBatterieColumns($("select#interventions_battery").val());
    })

    $($("select#interventions_column")).change(function() {
        console.log("column id = " + $("select#interventions_column").val())
        $(".field5").show();
        setColumnElevators($("select#interventions_column").val());
    })

    $($("select#interventions_elevator")).change(function() {
        // console.log("elevator id = " + $("select#interventions_elevator").val())
        // $(".field5").show();
        // setColumnElevators($("select#interventions_elevator").val());
    })

    $($("select#employee_id")).change(function() {
        console.log("employee id = " + $("select#employee_id").val())
        setCustomerBuildings($("select#employee_id").val());
    })

});

    // AJAX calls
// 1. Customer => Buildings
function setCustomerBuildings(customer_id) {
    $.ajax({
        dataType: "json",
        cache: false,
        url: '/interventions/get_building_by_client/' + customer_id,
        timeout: 5000,
        error: function(XMLHttpRequest, errorTextStatus, error) {
            alert("Failed to submit : " + errorTextStatus + " ;" + error);
        },
        success: function(data) {
        // Clear all options from building
            $("select#interventions_building option").remove();
        //put in a empty default line
        //  var row = "<option value=\"" + "" + "\">" + "Building" + "</option>";
        //  $(row).appendTo("select#building_id");
        // Fill building
            row = "<option>-- Select Building --</option>";
            $(row).appendTo("select#interventions_building");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#interventions_building");
            });
            // setBuildingBatteries($("select#building_id").val());
            // setBatterieColumns($("select#battery_id").val());
            // setColumnElevators($("select#column_id").val());
        }
    });
}

// 2. Building => Batteries
function setBuildingBatteries(building_id) {
    $.ajax({
        dataType: "json",
        cache: false,
        url: '/interventions/get_battery_by_building/' + building_id,
        timeout: 5000,
        error: function(XMLHttpRequest, errorTextStatus, error) {
            alert("Failed to submit : " + errorTextStatus + " ;" + error);
        },
        success: function(data) {
        // Clear all options from battery
            $("select#interventions_battery option").remove();
        // Fill battery
            row = "<option>-- Select Battery --</option>";
            $(row).appendTo("select#interventions_battery");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#interventions_battery");
            });
        }
    });
}

// 3. Battery => Columns
function setBatterieColumns(battery_id) {
    $.ajax({
        dataType: "json",
        cache: false,
        url: '/interventions/get_columns_by_battery/' + battery_id,
        timeout: 5000,
        error: function(XMLHttpRequest, errorTextStatus, error) {
            alert("Failed to submit : " + errorTextStatus + " ;" + error);
        },
        success: function(data) {
        // Clear all options from column
            $("select#interventions_column option").remove();
        // Fill column
            row = "<option>-- Select Column --</option>";
            $(row).appendTo("select#interventions_column");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#interventions_column");
            });
        }
    });
}

// 4. Column => Elevators
function setColumnElevators(column_id) {
    $.ajax({
        dataType: "json",
        cache: false,
        url: '/interventions/get_elevators_by_columns/' + column_id,
        timeout: 5000,
        error: function(XMLHttpRequest, errorTextStatus, error) {
            alert("Failed to submit : " + errorTextStatus + " ;" + error);
        },
        success: function(data) {
        // Clear all options from elevator
            $("select#interventions_elevator option").remove();
        // Fill elevator
            row = "<option>-- Select Elevator --</option>";
            $(row).appendTo("select#interventions_elevator");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#interventions_elevator");
            });
        }
    });
}