// Récupérer le formulaire de contact
var contactForm = document.getElementById('contact-form');

// Ajouter un écouteur d'événements pour la soumission du formulaire
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs de formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Valider les champs du formulaire (exemple simplifié)
    if (name === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
    } else {
        // Envoyer le formulaire (remplacer cette partie par votre code d'envoi de formulaire)
        alert('Formulaire envoyé avec succès !');
        contactForm.reset(); // Réinitialiser le formulaire
    }
});
