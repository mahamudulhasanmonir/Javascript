


document.getElementById('doctorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const specialization = document.getElementById('specialization').value;
    const contact = document.getElementById('contact').value;

    // Create an object to store the data
    const doctor = { name, specialization, contact };

    // Retrieve existing doctors from local storage
    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    // Add the new doctor to the list
    doctors.push(doctor);

    // Save the updated list back to local storage
    localStorage.setItem('doctors', JSON.stringify(doctors));

    // Display the updated list
    displayDoctors();
});

// Function to display doctors on the page
function displayDoctors() {
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    const doctorList = document.getElementById('doctorList');

    // Clear the existing list
    doctorList.innerHTML = '<h2>List of Doctors</h2>';

    doctors.forEach((doctor, index) => {
        const doctorElement = document.createElement('div');
        doctorElement.innerHTML = `
            <strong>${doctor.name}</strong><br>
            Specialization: ${doctor.specialization}<br>
            Contact: ${doctor.contact}<br><br>
        `;
        doctorList.appendChild(doctorElement);
    });
}

// Display doctors when the page loads
document.addEventListener('DOMContentLoaded', displayDoctors);





