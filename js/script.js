let active = document.querySelector(".active");
let navItems = document.querySelectorAll(".nav-item");

if (navItems.length > 0) {
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            if (active) {
                active.classList.remove("active");
            }
            item.classList.add("active");
            active = item;
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to update active section
    const updateActiveSection = () => {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);

                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    };

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);

    // Update active section on page load
    updateActiveSection();

    // Smooth scrolling with active state update
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// Typing Animation
const typingAnimationElement = document.getElementById("typing-animation");

// Create an array of typing text
const typingTexts = [ "M N Agency"];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 400); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 400);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);