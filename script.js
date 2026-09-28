```javascript
// ================================
// ANNOUNCEMENT
// ================================

let announcements = [
    "Registration is now open for all festival events!",
    "CampusFest 2026 will be conducted on 10th and 11th October.",
    "Participants can register for multiple events.",
    "All students are invited to participate!"
];

let announcementIndex = 0;

function changeAnnouncement() {

    announcementIndex++;

    if (announcementIndex >= announcements.length) {
        announcementIndex = 0;
    }

    document.getElementById("announcementText").textContent =
        announcements[announcementIndex];
}


// ================================
// SELECT EVENT
// ================================

function selectEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}


// ================================
// REGISTRATION FORM
// ================================

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let mobile =
            document.getElementById("mobile").value.trim();

        let department =
            document.getElementById("department").value;

        let year =
            document.getElementById("year").value;

        let selectedEvent =
            document.getElementById("event").value;

        let message =
            document.getElementById("formMessage");


        // Validation

        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            department === "" ||
            year === "" ||
            selectedEvent === ""
        ) {

            message.textContent =
                "Please fill all the required fields.";

            message.style.color = "red";

            return;
        }


        // Mobile validation

        if (!/^[0-9]{10}$/.test(mobile)) {

            message.textContent =
                "Please enter a valid 10-digit mobile number.";

            message.style.color = "red";

            return;
        }


        // Success

        message.textContent =
            "Registration successful! Welcome to CampusFest 2026.";

        message.style.color = "green";


        // Clear form

        document
            .getElementById("registrationForm")
            .reset();

    });


// ================================
// CONTACT FORM
// ================================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("contactName").value.trim();

        let email =
            document.getElementById("contactEmail").value.trim();

        let messageText =
            document.getElementById("message").value.trim();

        let contactMessage =
            document.getElementById("contactMessage");


        if (
            name === "" ||
            email === "" ||
            messageText === ""
        ) {

            contactMessage.textContent =
                "Please fill all the fields.";

            contactMessage.style.color = "red";

            return;
        }


        contactMessage.textContent =
            "Your message has been sent successfully!";

        contactMessage.style.color = "green";


        document
            .getElementById("contactForm")
            .reset();

    });
```
