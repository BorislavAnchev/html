const insert = function (num) {
    document.form.textview.value = document.form.textview.value + num
}

const equal = function () {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }   
}

const clean = function () {
    document.form.textview.value = "";
}

const back = function () {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}