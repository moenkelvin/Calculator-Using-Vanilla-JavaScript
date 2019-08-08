// PRESSED BUTTON OUTPUT IN TEXT
function insert(obj) {
    var inputlabel = document.form.textview.value;
    // document.form.textview.value = inputlabel + obj;
    if (inputlabel == "0") {
        document.form.textview.value = obj;
    } else {
        document.form.textview.value = inputlabel + obj;
    }
}

// EQUALS BUTTON FUNCTION 
function equal() {
    document.form.textview.value = eval(document.form.textview.value);

}

// DELETE ALL VALUES IN TEXT
function AC() {
    document.form.textview.value = "0";

}

function C() {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);

    if (exp.length == 1) {
        document.form.textview.value = "0";
    }
}