// script.js
emailjs.init("uy_X3OBkRQ-XIepXf");
const form = document.getElementById("contactForm");
if (form) {
form.addEventListener("submit", function(e) {
e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    submitBtn.textContent = "Envoi...";
    submitBtn.disabled = true;

    const params = {
        name: document.getElementById("name").value || "Visiteur",
        email: document.getElementById("email").value || "non-renseigné@email.com",
        subject: document.getElementById("subject").value || "Nouveau message de contact",
        message: document.getElementById("message").value || "Aucun message"
    };

    emailjs.send("service_c15u9kf", "template_u06fmti", params)
        .then(() => {
            statusMessage.innerHTML = "✅ Message envoyé avec succès !";
            statusMessage.style.color = "green";
            form.reset();
        })
        .catch((err) => {
            console.error("Erreur complète :", err);
            statusMessage.innerHTML = "❌ Erreur 400 : Vérifie ton template EmailJS (variables {{name}}, {{email}}, etc.)";
            statusMessage.style.color = "red";
        })
        .finally(() => {
            submitBtn.textContent = "Envoyer le message";
            submitBtn.disabled = false;
        });
});
}