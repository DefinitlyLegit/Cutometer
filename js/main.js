var submit = document.getElementById("submit");

var cute = sumOfCharacters("cute");

submit.onclick = function() {
    var name = document.getElementById("name");
    var text = name.value;
    var goldenRatio = 1.6180339;
    var goldenNumber = 16; // Kappa

    /**
    console.log(sumOfCharacters(text), cute, checksumOf(cute), checksumOf(sumOfCharacters(text)), );
    console.log(sumOfCharacters(text) / cute);
    **/

    if(checksumOf(Math.floor(sumOfCharacters(text) * goldenRatio) + cute) >= goldenNumber) {
        alert(text + " you are definitly cute!");
    } else {
        alert("sowwy TwT, I sense no cute");
    }
};

function sumOfCharacters(text) {
    var sum = 0;
    for(var i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }

    return sum;
}

function checksumOf(value) {
    var sum = 1;

    var s = value + "";
    for(var i = 0; i < s.length; i++) {
        sum += parseInt(s[i]);
    }

    return sum;
}
