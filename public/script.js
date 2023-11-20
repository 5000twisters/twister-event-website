form.addEventListener('submit', function(event) {
    // prevent the default behavior of the form
    event.preventDefault();
    // get the values of the input fields
    const name = nameInput.value;
    const email = emailInput.value;
    const option = dropdown.value;
    const frequency = checkbox1.checked;
    const topic1 = checkbox2.checked;
    const topic2 = checkbox3.checked;
    // validate the email address
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailPattern.test(email);
    // if the email is not valid, show an alert message and stop the function
    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }
    // send the data to the database
    fetch('https://api.mongodb.com/v1/databases/mydatabase/collections/mycollection', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        option: option,
        frequency: frequency,
        topic1: topic1,
        topic2: topic2
      })
    }).then(function(response) {
      // parse the response body as a JSON object
      return response.json();
    }).then(function(data) {
      // check the status code of the request
      if (data.status === 201) {
        // the document was created successfully
        // update the counter
        const currentCount = parseInt(counter.textContent);
        const newCount = currentCount + 1;
        counter.textContent = newCount + ' out of 5000';
        // display the thank you message
        thankYou.style.display = 'block';
      } else if (data.status === 409) {
        // the email address already exists in the database
        // show an alert message and stop the function
        alert(data.message);
        return;
      } else {
        // some other error occurred
        // show an alert message and stop the function
        alert('Something went wrong. Please try again later.');
        return;
      }
    });
  });  