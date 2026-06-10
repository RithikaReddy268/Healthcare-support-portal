function toggleAppointmentFields() {

    let status =
        document.getElementById("appointmentStatus").value;

    let details =
        document.getElementById("appointmentDetails");

    if(status === "Yes"){
        details.style.display = "block";
    }
    else{
        details.style.display = "none";
    }
}

function generateSummary() {

    if (
        document.getElementById("name").value.trim() === "" ||
        document.getElementById("age").value.trim() === "" ||
        document.getElementById("phone").value.trim() === "" ||
        document.getElementById("email").value.trim() === "" ||
        document.getElementById("city").value.trim() === "" ||
        document.getElementById("appointmentStatus").value === "" ||
        document.getElementById("concern").value.trim() === ""
    ) {
        alert("Please fill in all required fields before generating the summary.");
        return;
    }

    if (
        document.getElementById("appointmentStatus").value === "Yes" &&
        (
            document.getElementById("appointmentDate").value === "" ||
            document.getElementById("appointmentTime").value === ""
        )
    ) {
        alert("Please enter the appointment date and time.");
        return;
    }

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let appointmentStatus = document.getElementById("appointmentStatus").value;

    let concern =
        document.getElementById("concern").value;

    let concernLower =
        concern.toLowerCase();

    let appointmentInfo = "";

    if (appointmentStatus === "Yes") {

        let appointmentDate =
            document.getElementById("appointmentDate").value;

        let appointmentTime =
            document.getElementById("appointmentTime").value;

        appointmentInfo =
`Appointment Date: ${appointmentDate}
Appointment Time: ${appointmentTime}`;

    } else {

        appointmentInfo =
`Appointment Status: Not Booked`;

    }

    let assessment = [];
    let advice = [];

    if (concernLower.includes("fever")) {
        assessment.push(
            "The patient reports fever symptoms."
        );

        advice.push("• Drink plenty of fluids");
        advice.push("• Monitor body temperature regularly");
        advice.push("• Get adequate rest");
    }

    if (
        concernLower.includes("body pain") ||
        concernLower.includes("body pains")
    ) {
        assessment.push(
            "The patient reports body pain symptoms."
        );

        advice.push("• Take adequate rest");
        advice.push("• Avoid strenuous activity");
    }

    if (concernLower.includes("headache")) {
        assessment.push(
            "The patient reports headache symptoms."
        );

        advice.push("• Reduce screen time");
        advice.push("• Stay hydrated");
        advice.push("• Get adequate sleep");
    }

    if (
        concernLower.includes("vomit") ||
        concernLower.includes("vomiting")
    ) {
        assessment.push(
            "The patient reports vomiting symptoms."
        );

        advice.push("• Drink fluids in small amounts");
        advice.push("• Avoid oily foods");
        advice.push("• Prevent dehydration");
    }

    if (
        concernLower.includes("motion") ||
        concernLower.includes("diarrhea")
    ) {
        assessment.push(
            "The patient reports digestive symptoms."
        );

        advice.push("• Use oral rehydration solutions");
        advice.push("• Eat light meals");
        advice.push("• Avoid spicy foods");
    }

    if (
        concernLower.includes("general") ||
        concernLower.includes("checkup")
    ) {
        assessment.push(
    "The patient is seeking a routine health consultation rather than reporting an urgent medical issue. A general checkup can help assess overall health, identify potential concerns early, and provide preventive healthcare guidance."
);

        advice.push("• Attend the scheduled consultation");
        advice.push("• Carry previous medical records");
        advice.push("• Discuss any health concerns with the doctor");
    }

    if (assessment.length === 0) {

        assessment.push(
            "The patient's concern has been recorded and is awaiting review by a healthcare volunteer or professional."
        );

        advice.push("• Monitor symptoms carefully");
        advice.push("• Follow professional medical guidance");
        advice.push("• Seek medical assistance if symptoms worsen");
    }

    let summary = `

AI HEALTH SUPPORT SUMMARY

Patient Name: ${name}
Age: ${age}
Phone Number: ${phone}
Email: ${email}
City: ${city}

${appointmentInfo}

Patient Concern:
${concern}

AI Assessment:
${assessment.join("\n")}

Suggested Next Steps:
${advice.join("\n")}

Thank you for using the Healthcare Support Portal.
`;

    document.getElementById("result").innerText = summary;
}