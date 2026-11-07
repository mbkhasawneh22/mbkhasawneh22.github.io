document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var country = document.getElementById("country").value.trim();
    var comments = document.getElementById("comments").value.trim();
    
    if (name === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
    }
});