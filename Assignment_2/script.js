document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent!");
    });
});
