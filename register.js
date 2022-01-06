function submitbtn() {
    var firstname = document.getElementById("firstName").value;
    checkName(firstname);
}

function checkName(fName) {
    var checking = /^[a-zA-Z\s]+$/

    if ((fName.match(checking)) && (firstname.length > 3 && firstname.length < 8)) {
    }
    else {
        alert("wrong entry");

        document.getElementById("firstName").style.borderBlockStyle = "red";
    }
}

function submitbtn() {
    var lastname = document.getElementById("lastName").value;
    checkNames(lastname);
}

function checkNames(lName) {
    var checkings = /^[a-zA-Z\s]+$/

    if ((lName.match(checkings)) && (lastname.length > 3 && lastname.length < 8)) {
    }
    else {
        alert("wrong entry");

        document.getElementById("lastName").style.borderBlockStyle = "red";
    }
}