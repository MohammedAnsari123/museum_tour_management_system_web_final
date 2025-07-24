// 1. Toggle light/dark mode
const toggleModeBtn = document.getElementById('toggle-mode');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  toggleModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. Scroll to a specific section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}



const slider = document.getElementById("imageSlider");
const slides = document.querySelectorAll(".slide");
const slidesPerView = 3;
let currentIndex = 0;

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function slideRight() {
  const maxIndex = Math.ceil(slides.length / slidesPerView) - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
}

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  const offset = currentIndex * slideWidth * slidesPerView;
  slider.style.transform = `translateX(-${offset}px)`;
}

// Optional: responsive fix if image width changes
window.addEventListener("resize", updateSlider);






// 3. Animated visitor counter
let count = 0;
const counter = document.getElementById('visitorCount');
function animateCounter(target) {
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      counter.textContent = count;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
animateCounter(1583); // Example number of visitors



function showTab(tabId) {
  // Hide all forms
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));

  // Deactivate all tabs
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  // Show the selected form
  document.getElementById(tabId).classList.add("active");

  // Activate the selected tab
  if (tabId === "login") {
    document.querySelector(".tab:nth-child(1)").classList.add("active");
  } else if (tabId === "register") {
    document.querySelector(".tab:nth-child(2)").classList.add("active");
  }
}





// 4. Chart.js - Visitor Analysis Graph
const ctx = document.getElementById('chart').getContext('2d');
const visitorChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Visitors',
      data: [100, 120, 90, 150, 200, 250, 180],
      backgroundColor: '#4CAF50',
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// 5. Booking confirmation message
const bookingBtn = document.querySelector('.booking button');
bookingBtn.addEventListener('click', () => {
  const date = document.querySelector('.booking input[type="date"]').value;
  const time = document.querySelector('.booking input[type="time"]').value;
  const people = document.querySelector('.booking input[type="number"]').value;
  const msg = `Booking confirmed for ${people} people on ${date} at ${time}.`;
  bookingBtn.nextElementSibling.textContent = msg;
});

// 6. Rating Submission
const reviewBtn = document.querySelector('.rating button');
reviewBtn.addEventListener('click', () => {
  const rating = document.querySelector('.rating input[type="number"]').value;
  if (rating >= 1 && rating <= 5) {
    alert(`Thanks for rating the tour ${rating} stars!`);
  } else {
    alert('Please enter a rating between 1 and 5.');
  }
});


