function firstNameCheck() {
    var firstName = document.form.firstName.value;
    var firstNameRegex = /^[A-Z]{1}[a-z]{0,14}$/;
    var test = firstNameRegex.test(firstName);
    if(!test) {
        alert("Please insert a correct first name.");
    }
}

function lastNameCheck() {
    var lastName = document.form.lastName.value;
    var lastNameRegEx = /^[A-Z]{1}[a-z]{0,14}$/;
    var test = lastNameRegEx.test(lastName);
    if(!test) {
        alert("Please insert a correct last name.");
    }
}

/* function checkdate(d,m,y) {  // An attempt to recreate the checkdate() PHP funciton.
    var leapYear;
    if(y % 4 == 0) { // Check wether the year is a leap year or not.
        if(y % 100 == 0) {
            if(y % 400 == 0) {
                leapYear = true;
            }
            else {
                leapYear = false;
            }
        }
        else {
            leapYear = true;
        } 
    }
    else {
        leapYear = false;
    }

    if( (leapYear == false) && (m == "02")) {
        if(d == "29") {
            return false; // Returns 'false' if it's not a leap year and the date is 29/02.
        }
    }
    else {
        return true; // Otherwise returns true - it is a valid date.
    }

}
*/

function egnCheck() { 
//  var flag = true;
 //   const EGN_WEIGHTS = [2,4,8,5,10,9,7,3,6]; // Weights of each of the PIN digits.
    var egn = document.form.egn.value;
    var egnReGex = /^\d{10}$/;
    var test = egnReGex.test(egn);
    if(!test) {
        alert("Please enter a valid EGN.");
    }
 
 
/*   if(egn.length != 10) {
        //flag = false;
        alert("Please enter a correct EGN.");
    }
    var year = egn.substring(0,2);
    var month = egn.substring(2,4);
    var day = egn.substring(4,6);
//============================= NICE TRY ==============================
    if(month > 40) {
        if(!checkdate(day, month-40, year+2000)){
            flag = false; // Alert
            alert("Please enter a correct EGN.");
        }
    }
    else if (mon > 20) {
        if(!checkdate(day, month-20, year+1800)) {
            flag = false; // Alert
            alert("Please enter a correct EGN.");
        }
    }
    else {
        if(!checkdate(day, month, year+1900)) {
            flag = false; // Alert
            alert("Please enter a correct EGN.");
        }
    }
    var checksum = egn.substring(9,10);
    var egnsum = 0;
    var i;
    
    for (i = 0; i < 9; i++) {
        egnsum += egn.substring(i, i+1) * EGN_WEIGHTS[i];
    }
    
    var valid_checksum = egnsum % 11;
    
    if(valid_checksum == 10) {
        valid_checksum = 0;
    }

    if(checksum != valid_checksum) {
        flag = false;
        alert("Please enter a correct EGN.");
    }

    if(flag == false) {
        alert("Please enter a valid EGN.");
    }*/
}


function ageCheck() {
    var age = document.form.age.value;
    var ageRegEx = /^\d{2,3}$/
    var test = ageRegEx.test(age);
    if(!test) {
        alert("Please insert a correct age.");
    }
    else if((age < 18) || (age > 118)) {
        alert("Please insert a correct age.");
    }
}

function addressCheck() {
    var address = document.form.address.value;
    var addressRegEx = /^\w{1,100}$/
    var test = addressRegEx.test(address);
    if(!test) {
        alert("Please insert a correct address.");
    }
}

function passwordCheck() {
    var password = document.form.password.value;
    var passREGEX = /^\w{6,18}$/;
    var test = passREGEX.test(password);
    if(!test) {
        alert("Please insert a correct password.");
    }
}

function test() {
    var password = document.form.password.value;
    var confirm = document.form.confirmPassword.value;
    //var test = passREGEX.test(password);
    if(password != confirm) {
        alert("Please insert a correct password.");
    }
}