// Dynamically create header
const header = document.getElementById("header");
header.innerHTML = `
    <a href="#" class="logo">RQ</a>
    <nav>
        <a href="#home" class="active">HOME</a>
        <a href="#education">EDUCATION</a>
        <a href="#contact">CONTACT</a>
        <div class="theme-toggle">
            <span>Light</span>
            <label class="toggle">
                <input type="checkbox" id="theme-toggle">
                <span class="slider"></span>
            </label>
            <span>Dark</span>
        </div>
    </nav>
`;
// Dynamically create home section
const home = document.getElementById("home");
home.innerHTML = `
    <div class="home-img">
        <img src="img/profile.jpg" alt="Profile Picture" onclick="startBinaryRain()" title="Click Me">
    </div>
    <div class="home-content">
        <h1>Hi, I'm <span>Ryan Quiel,</span></h1>
        <h3 class="typing-text">a <span></span></h3>
        <p>I am a dedicated IT student with a knack for solving tech challenges. I love diving into code, exploring innovative solutions, and turning ideas into reality. Always eager to learn, I strive to enhance my skills in software development and create meaningful projects that make a difference.</p>
        <div class="social-icons">
            <a href="https://github.com/ryanquielll" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/qn_rynql" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/ryn_ql/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100085156704790" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        </div>
        <a href="#contact" class="btn">Contact</a>
    </div>
`;
// Dynamically create Education, Expertise, and IT Background sections
const educationContent = `
    <h4>
        <span class="educ_bg">EDUCATIONAL BACKGROUND:</span>
        <table>
            <tbody>
                <tr>
                    <th>Level</th>
                    <th>Name of School</th>
                    <th>Basic Education/Degree/Course</th>
                    <th>Period of Attendance</th>
                </tr>
                <tr>
                    <td>Elementary</td>
                    <td>Bethel Elementary School</td>
                    <td>Primary Education</td>
                    <td>2009-2015</td>
                </tr>
                <tr>
                    <td>Secondary</td>
                    <td>Aurelio Arago National High School</td>
                    <td>Secondary Education</td>
                    <td>2015-2021</td>
                </tr>
                <tr>
                    <td>College</td>
                    <td>Marinduque State College</td>
                    <td>Bachelor of Science in Information Technology</td>
                    <td>2021-Present</td>
                </tr>
            </tbody>
        </table>
    </h4>
    <hr class="section-divider">
    <h3>
        <span class="educ_bg">EXPERTISE:</span>
        <ul>
            <li>Familiar with Python programming language.</li>
            <li>Gained knowledge in C# through hands-on experience, particularly in game development.</li>
            <li>Familiar with HTML, CSS, JavaScript, and PHP for web development.</li>
            <li>Contributed to recreating "The World's Hardest Game" as part of a group project.</li>
            <li>Created this portfolio website to showcase skills and expertise.</li>
        </ul>
    </h3>
`;

// Insert the dynamic content into the Education section
const education = document.getElementById("education");
education.innerHTML = educationContent;

// Dynamically create Contact Section content
const contactContent = `
<div class="contact-box-container">
    <!-- Email Box -->
    <div class="contact-box">
        <i class="fas fa-envelope icon"></i>
        <p><strong>Email:</strong> <a href="mailto:qn.rynql@gmail.com">qn.rynql@gmail.com</a></p>
    </div>

    <!-- Location Box -->
    <div class="contact-box">
        <i class="fas fa-map-marker-alt icon"></i>
        <p><strong>Location:</strong> Marinduque, Philippines</p>
    </div>

    <!-- Phone Box -->
    <div class="contact-box">
        <i class="fas fa-phone icon"></i>
        <p><strong>Phone:</strong> +63 906 593 2105</p>
    </div>
</div>
`;

// Insert dynamic contact content into the contact section
const contactSection = document.getElementById("contact-box-container");
contactSection.innerHTML = contactContent;

// Dynamically create footer section
const footer = document.getElementById("footer");
footer.innerHTML = `
<div class="footer-content">
    <div class="footer-info">
        <h3>About Me</h3>
        <p class="info">I'm Ryan Quiel Aquino, an aspiring IT professional with a passion for technology and software development. Always eager to learn and grow.</p>
    </div>
    <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <div class="footer-social">
        <h3>Follow Me</h3>
        <div class="social-icons">
            <a href="https://github.com/ryanquielll" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/qn_rynql" target="_blank" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/ryn_ql/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100085156704790" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <p>&copy; 2024 Ryan Quiel Aquino. All rights reserved.</p>
</div>
`;


// Dynamic typing text effect
const typingSpan = document.querySelector(".typing-text span");
const roles = ["Passionate IT Enthusiast.", "Third year IT student.", "Aspiring Back-End Developer.", "Future Tech Innovator."];
let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 100;
let delayBetweenRoles = 1000;

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenRoles);
});
    
    // Disable context menu
    document.addEventListener("contextmenu", function (event) {
        alert("Inspecting elements is disabled.");
        event.preventDefault();
    });  

    // Disable key combinations for inspect tools
    document.addEventListener("keydown", function (event) {
        const forbiddenKeys = [
            { key: "F12" },
            { key: "I", ctrlKey: true, shiftKey: true },
            { key: "J", ctrlKey: true, shiftKey: true },
            { key: "U", ctrlKey: true },
            { key: "S", ctrlKey: true },
            { key: "C", ctrlKey: true, shiftKey: true },
        ];

        forbiddenKeys.forEach(combo => {
            if (
                event.key === combo.key &&
                (combo.ctrlKey === undefined || combo.ctrlKey === event.ctrlKey) &&
                (combo.shiftKey === undefined || combo.shiftKey === event.shiftKey)
            ) {
                alert("Inspecting elements is disabled.");
                event.preventDefault();
            }
        });
    });

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.logo').classList.toggle('dark-mode');
    document.querySelectorAll('nav a').forEach(link => link.classList.toggle('dark-mode'));
    document.querySelector('.home').classList.toggle('dark-mode');
    document.querySelectorAll('.btn').forEach(btn => btn.classList.toggle('dark-mode'));
    document.querySelectorAll('.footer').forEach(btn => btn.classList.toggle('dark-mode'));
    document.querySelectorAll('.footer-links').forEach(btn => btn.classList.toggle('dark-mode'));
    document.querySelectorAll('.education').forEach(btn => btn.classList.toggle('dark-mode'));

    // Toggle z-index for profile image in dark mode
    document.querySelector('.home-img img').classList.toggle('dark-mode');
});
// Function to start the binary rain
function startBinaryRain() {
    // Create the container for the rain if it doesn't exist yet
    let rainContainer = document.querySelector('.rain-container');
    if (!rainContainer) {
        rainContainer = document.createElement('div');
        rainContainer.classList.add('rain-container');
        document.body.appendChild(rainContainer);
    }

    // Show the rain container
    rainContainer.style.display = 'block';

    // Function to generate a single drop of binary numbers
    function createRainDrop() {
        const drop = document.createElement('div');
        drop.classList.add('binary-drop');
        drop.textContent = Math.random() < 0.5 ? '0' : '1'; // Random binary number

        // Randomize the start position (from left to right)
        drop.style.left = `${Math.random() * 100}vw`;

        // Append to the rain container
        rainContainer.appendChild(drop);

        // Remove the drop after it finishes falling (1s duration)
        setTimeout(() => {
            drop.remove();
        }, 1000); // Match with the animation duration
    }

    // Continuously generate drops
    setInterval(createRainDrop, 100); // Drop every 100ms
}

// Optional: You can stop the rain after a certain duration or based on another event
// Example: Stop after 10 seconds
// setTimeout(() => document.querySelector('.rain-container').style.display = 'none', 10000);

function setActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentActive = null; // Track the current active section

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionID = section.getAttribute("id");

        // Check if the section is in view (top of the section is within the viewport)
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentActive = sectionID; // Set the current section in view
        }
    });

    // Update the active link based on the current section
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (currentActive && link.getAttribute("href").includes(currentActive)) {
            link.classList.add("active");
        }
    });

    // Special case for "Home" when scrolled to the very top
    if (window.scrollY === 0) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[0].classList.add("active"); // Set the first link (Home) as active
    }
}

// Add smooth scrolling behavior to the navigation links
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetID = link.getAttribute("href").substring(1); // Extract the section ID
        const targetSection = document.getElementById(targetID);

        // Scroll smoothly to the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Event listener for scrolling
window.addEventListener("scroll", setActiveNav);

