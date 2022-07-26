// Listeners
$(function() {

    $($("select#customer_id")).change(function() {
        console.log("customer id = " + $("select#customer_id").val())
        setCustomerBuildings($("select#customer_id").val());
    })

  });

  // AJAX calls

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
         $.each(data, function(i, j) {
          row = "<option value=\"" + j.id + "\">" + j.id + "</option>";
          $(row).appendTo("select#building_id");
         });
        }
    });
  }