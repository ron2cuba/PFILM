// when DOM is completly loaded
document.addEventListener("DOMContentLoaded", () => {
    // variables declarations
    let closeButton = document.querySelector('.fa-xmark');// cross
    let burgerButton = document.querySelector('.fa-bars');// burger
    let mobileMenu = document.querySelector('.mobile');// menu butons container
    // hide close button
    closeButton.classList.add('hide');
    
    // eventlistener on burger menu button
    burgerButton.addEventListener('click', handleMobileMenuOpening);
    /**
     * mobile menu opening management
     * @param {event} e click
     */
    
    function handleMobileMenuOpening(e) {
        closeButton.classList.toggle('hide');
        burgerButton.classList.toggle('hide');
        mobileMenu.classList.toggle('hide');
        closeButton.addEventListener('click', handleMobileMenuOpening);
    }
});
