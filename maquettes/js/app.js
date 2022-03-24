document.addEventListener("DOMContentLoaded", () => {
    // variables
    let closeButton = document.querySelector('.fa-xmark');
    let burgerButton = document.querySelector('.fa-bars');
    let mobileMenu = document.querySelector('.mobile');
    // hide close button
    closeButton.classList.add('hide');
    
    document.addEventListener('click', handleMobileMenuOpening)
    /**
     * mobile menu opening management
     * @param {event} e click
     */
    function handleMobileMenuOpening(e) {
        closeButton.classList.toggle('hide');
        burgerButton.classList.toggle('hide');
        mobileMenu.classList.toggle('hide');
    }
});
