document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("appointmentForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const status = document.getElementById("status");

        status.style.color = "#ffffff";
        status.innerHTML = "Sending appointment request...";

        emailjs.send("service_93lbhes", "template_x3kevzp", {

            name: document.getElementById("name").value,

            phone: document.getElementById("phone").value,

            email: document.getElementById("email").value,

            vehicle: document.getElementById("vehicle").value,

            service: document.getElementById("service").value,

            date: document.getElementById("date").value,

            time: document.getElementById("time").value,

            message: document.getElementById("message").value

        }).then(function () {

            status.style.color = "#00ff66";
            status.innerHTML = "✅ Appointment request sent successfully!";

            form.reset();

        }).catch(function (error) {

            console.error(error);

            status.style.color = "#ff4444";
            status.innerHTML = "❌ Failed to send. Please try again.";

        });

    });

});
