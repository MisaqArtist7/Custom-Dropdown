const dropdownBtn = document.querySelector('#dropdownBtn');
const options = document.querySelector('#options');
const allOptions = document.querySelectorAll('li');
const btnText = document.querySelector('#btnText');
const arrowIcon = document.querySelector('#arrowIcon');

let selectedItem = "";

// Function to toggle the dropdown menu
const toggleDropdown = () => {
    // Smooth visibility transition (Fade & Slide)
    options.classList.toggle('opacity-0');
    options.classList.toggle('invisible');
    options.classList.toggle('translate-y-[-10px]');
    options.classList.toggle('translate-y-0');

    // Rotate arrow icon
    arrowIcon.classList.toggle('rotate-180');
};

// Button click event
dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing when clicking the button
    toggleDropdown();
});

// Options list click event
options.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {

        // Remove active style from all options
        allOptions.forEach(option => {
            option.classList.remove('bg-white/30', 'text-white');
            option.classList.add('text-gray-300');
        });

        // Add active glassmorphism style to the selected option
        event.target.classList.remove('text-gray-300');
        event.target.classList.add('bg-white/30', 'text-white');

        // Update button text content without re-rendering SVG
        btnText.textContent = event.target.textContent.trim();

        // Save selected value
        selectedItem = event.target.textContent.trim();

        // Close dropdown
        toggleDropdown();
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !options.contains(e.target)) {
        if (!options.classList.contains('invisible')) {
            toggleDropdown();
        }
    }
});