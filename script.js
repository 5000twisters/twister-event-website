// MongoDB connection string
const mongoUri = "mongodb+srv://5000twister:M3ga0rangemongo@atlascluster.bzlpbls.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
const connectToMongo = async () => {
  try {
    const response = await fetch(mongoUri, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Show contact field based on selection
const showContactField = () => {
  const contactValue = document.getElementById("contact").value;
  const contactField = document.getElementById("contactField");

  if (contactValue === "email") {
    contactField.innerHTML = `
      <label for="info">Enter Email:</label>
      <input type="email" id="info" required>
    `;
  } else if (contactValue === "phone") {
    contactField.innerHTML = `
      <label for="info">Enter Phone:</label>
      <input type="tel" id="info" required>
    `;
  }

  contactField.style.display = "block";
};

// Submit the form
const submitForm = async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const info = document.getElementById("info").value;
  const commitment = document.getElementById("commitment").value;
  const updates = Array.from(document.querySelectorAll('input[name="updates"]:checked')).map((checkbox) => checkbox.value);

  // Check if email/phone number already exists in the database

  // If not, save the submission and update the counter and progress bar

  document.getElementById("registrationForm").reset();
  document.getElementById("contactField").style.display = "none";
  document.getElementById("successMessage").style.display = "block";
};

// Call connectToMongo to establish the MongoDB connection
connectToMongo();