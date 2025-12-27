var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello " + fullName + "<br><br>");

var mobile = prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br><br>");

var word1 = "Pakistani";
document.write("Index of 'n' in Pakistani: " + word1.indexOf("n") + "<br><br>");

var word2 = "Hello World";
document.write("Last index of 'l' in Hello World: " + word2.lastIndexOf("l") + "<br><br>");

document.write("Character at index 3 in Pakistani: " + word1.charAt(3) + "<br><br>");

var fullName2 = firstName.concat(" ", lastName);
document.write("Hello " + fullName2 + " (using concat)<br><br>");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("After replacement: " + newCity + "<br><br>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(newMessage + "<br><br>");

var strNum = "472";
var num = Number(strNum);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br><br>");

var inputUpper = prompt("Enter text:");
document.write("Uppercase: " + inputUpper.toUpperCase() + "<br><br>");

var inputTitle = prompt("Enter text for Title Case:");
var titleCase = inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1).toLowerCase();
document.write("Title Case: " + titleCase + "<br><br>");

var num2 = 35.36;
var str2 = num2.toString().replace(".", "");
document.write("Result: " + str2 + "<br><br>");

var username = prompt("Enter username:");
var invalid = false;

for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        invalid = true;
        break;
    }
}

if (invalid) {
    alert("Please enter a valid username");
} else {
    document.write("Valid Username<br><br>");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item to search:").toLowerCase();

if (A.includes(searchItem)) {
    document.write(searchItem + " is available in the list<br><br>");
} else {
    document.write(searchItem + " is not available in the list<br><br>");
}

var password = prompt("Enter password:");
var hasAlpha = false;
var hasNumber = false;

if (password.length >= 6 && isNaN(password.charAt(0))) {
    for (var i = 0; i < password.length; i++) {
        var c = password.charCodeAt(i);
        if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) hasAlpha = true;
        if (c >= 48 && c <= 57) hasNumber = true;
    }

    if (hasAlpha && hasNumber) {
        document.write("Valid Password<br><br>");
    } else {
        alert("Invalid password");
    }
} else {
    alert("Invalid password");
}

var university = "University of Karachi";
var uniArray = university.split("");

for (var i = 0; i < uniArray.length; i++) {
    document.write(uniArray[i] + "<br>");
}

document.write("<br>");

var userInput = prompt("Enter any text:");
document.write("Last character: " + userInput.charAt(userInput.length - 1));