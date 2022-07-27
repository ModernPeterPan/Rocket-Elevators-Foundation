// Listeners
$(function() {

    $($("select#customer_id")).change(function() {
        console.log("customer id = " + $("select#customer_id").val())
        setCustomerBuildings($("select#customer_id").val());
        // setBuildingBatteries($("select#building_id").val());
    })

    $($("select#building_id")).change(function() {
        console.log("building id = " + $("select#building_id").val())
        setBuildingBatteries($("select#building_id").val());
    })

    $($("select#battery_id")).change(function() {
        console.log("battery id = " + $("select#battery_id").val())
        setBatterieColumns($("select#battery_id").val());
    })

    $($("select#column_id")).change(function() {
        console.log("column id = " + $("select#column_id").val())
        setColumnElevators($("select#column_id").val());
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
            $("select#building_id option").remove();
        //put in a empty default line
        //  var row = "<option value=\"" + "" + "\">" + "Building" + "</option>";
        //  $(row).appendTo("select#building_id");
        // Fill building
            row = "<option>-- Select Building --</option>";
            $(row).appendTo("select#building_id");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#building_id");
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
            $("select#battery_id option").remove();
        // Fill battery
            row = "<option>-- Select Battery --</option>";
            $(row).appendTo("select#battery_id");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#battery_id");
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
            $("select#column_id option").remove();
        // Fill column
            row = "<option>-- Select Column --</option>";
            $(row).appendTo("select#column_id");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#column_id");
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
            $("select#elevator_id option").remove();
        // Fill elevator
            row = "<option>-- Select Elevator --</option>";
            $(row).appendTo("select#elevator_id");
            $.each(data, function(i, j) {
                row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
                $(row).appendTo("select#elevator_id");
            });
        }
    });
}