// Function to handle validation and submission of the "Add Review" form
function addFormValidation() {
    // Check if the "Add Review" form is valid using the isvalid_AddForm() function
    if (isvalid_AddForm()) {
        // If the form is valid, log a message indicating its validity
        console.info("Add Form is valid");
    } else {
        // If the form is invalid, log a message indicating its invalidity
        console.info("Add Form is invalid");
    }
}

// Function to handle validation and submission of the "Modify Reviews" form
function addModifyValidation() {
    // Check if the "Modify Reviews" form is valid using the isvalid_ModifyForm() function
    if (isvalid_ModifyForm()) {
        // If the form is valid, log a message indicating its validity
        console.info("Modify Form is valid");
    } else {
        // If the form is invalid, log a message indicating its invalidity
        console.info("Modify Form is invalid");
    }
}
function updateTotalRating1() {
    var quality = ($("#txtFoodQuality1").val());
    var service = ($("#txtService1").val());
    var value = ($("#txtValue1").val());
    var averageRating = calCulation_Add(quality, service, value);
    $("#rangeratings1").val(averageRating);
}
function updateTotalRating2() {
    var quality2 = ($("#txtFoodQuality2").val());
    var service2 = ($("#txtService2").val());
    var value2 = ($("#txtValue2").val());
    var averageRating2 = calCulation_Modify(quality2, service2, value2);
    $("#rangeratings2").val(averageRating2);
}