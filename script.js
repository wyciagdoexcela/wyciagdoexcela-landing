// Prosty mock formularza - nie wykonuje żadnych prawdziwych operacji
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('converterForm');
    const convertButton = document.getElementById('convertButton');
    const buttonText = convertButton.querySelector('.button-text');
    const buttonLoading = convertButton.querySelector('.button-loading');
    
    // Obsługa wysłania formularza
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pokaż loading
        buttonText.style.display = 'none';
        buttonLoading.style.display = 'inline';
        convertButton.disabled = true;
        
        // Symuluj czas przetwarzania (2 sekundy)
        setTimeout(function() {
            // Schowaj loading
            buttonText.style.display = 'inline';
            buttonLoading.style.display = 'none';
            convertButton.disabled = false;
            
            // Pokaż komunikat
            alert('Dziękujemy za zainteresowanie! Twój bank będzie wkrótce obsługiwany. Powiadomimy Cię gdy będzie gotowy.');
            
            // Reset formularza
            form.reset();
        }, 2000);
    });
    
    // Smooth scrolling dla linków nawigacyjnych
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}); 