var selectedRow = null; // Declare global variable


/**
 * This method defines that actions should program
 * do as soon as submit button clicked
 * @param {*} e 
 */
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();// Read form data by calling readFormData() method
    if(selectedRow === null){
        insertNewRecord(formData); // Insert the new entries/data
    } else {
             //update the record
             updateRecord(formData); 
            // inserted read data into display table/list
    }
    resetForm(); // Clear the form record
}

//The function reads form data & return filled array
function readFormData(){
    var formData = {}; // Empty array to hold data temporarily
    formData["fullName"] = document.getElementById("fullName").value;
    formData["studentId"] = document.getElementById("studentId").value;
    formData["major"] = document.getElementById("major").value;
    formData["phone"] = document.getElementById("phone").value;
    return formData; // Returns the array contents to its caller
}

//This function insert new record to the table
//if Edit button is clicked, the selected record is modified
//But if Delete button is clicked, the selected record is deleted
//after confiromation.
function insertNewRecord(data){
    var table = document.getElementById("storedStudentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length); //The insertCell() method inserts a cell into the current row.
   var  cell1 = newRow.insertCell(0); //Start insert from 0
    cell1.innerHTML = data.fullName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentId;

    var cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.major;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onClick="onEdit(this)"> Edit</button> <button onClick="onDelete(this)"> Delete </button>';

}

//This function is called to clear the specified fields
// By setting them to empty strings
function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("studentId").value="";
    document.getElementById("major").value="";
    document.getElementById("phone").value="";
}


// Click edit to populate record on the selected row on the table
// Allows editing the fields with new data.
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentId').value = selectedRow.cells[1].innerHTML;
    document.getElementById('major').value = selectedRow.cells[2].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[3].innerHTML;

}

// This function is called to update the selected record
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.studentId;
    selectedRow.cells[2].innerHTML = formData.major;
    selectedRow.cells[3].innerHTML = formData.phone;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storedStudentList').deleteRow(row.rowIndex);
    }

}
