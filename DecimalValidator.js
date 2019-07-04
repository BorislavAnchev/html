function validate() {
    var number = document.decimalValidatorForm.inputField.value; // Problem?
    var numberRegEx = /^[-+]?[0-9]{1,10}([.,][0-9]{1,5})?$/; // Working.
    var test = numberRegEx.test(number);
    // alert("The number is OK!");
    if(test){
        alert("The number is OK!");
    }
    else{
        alert("The number is not OK!");
    }
    
    // var found = str.match( re );
    // document.write("decimal" );
}