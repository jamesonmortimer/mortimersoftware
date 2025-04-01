document.addEventListener("DOMContentLoaded", function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('.links').style.paddingTop = `${headerHeight + 40}px`;
}); 