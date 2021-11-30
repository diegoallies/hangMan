function testans () {

    let userans = document.getElementById("userinput").value;
 
    switch (userans) {
        case "S":
            document.getElementById("output").innerText="that is correct";
            break;

        case "s":
            document.getElementById("output").innerText="that is correct";
            break;
    
        default:
            document.getElementById("output").innerText="that is incorrect, try again";
            break;
    };

};

