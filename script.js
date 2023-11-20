document.getElementById('contact').addEventListener('change', function() {
    var contactInfo = document.getElementById('contactInfo');
    if (this.value === 'email') {
        contactInfo.innerHTML = '<label for="email">Email:</label><br><input type="email" id="email" name="email"><br>';
    } else {
        contactInfo.innerHTML = '<label for="phone">Phone:</label><br><input type="tel" id="phone" name="phone"><br>';
    }
});

document.getElementById('recordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thankYou').style.display = 'block';
    document.getElementById('thankYou').textContent = 'Thank you for your submission!';
});
