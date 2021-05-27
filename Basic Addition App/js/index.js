// METHODS

function addition() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);

    let sum = input1 + input2;

    if (isNaN(sum)) {
        sum = "Error: Please make sure all fields are filled out and contain only numbers"
    }

    return sum;
}

function returnSum() {
    let sum = addition()
    
    document.getElementById("sum").innerHTML = sum;
}

// Initial Functions

document.getElementById("submitSum").onclick = returnSum;