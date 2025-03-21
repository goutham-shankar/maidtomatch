// Function to disable scrolling
function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Lock the scroll position
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };

    // Add a class to the body to prevent scrolling via CSS
    document.body.classList.add('no-scroll');
}

// Function to enable scrolling
function enableScroll() {
    window.onscroll = function() {};
    document.body.classList.remove('no-scroll');

    const loadingScreen = document.getElementById("loadingScreen");
    
    loadingScreen.remove();
}

// Execute when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Disable scrolling immediately
    disableScroll();
    
    // Enable scrolling after 3 seconds
    setTimeout(enableScroll, 3000);
});