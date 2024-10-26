let currentMatchup = 0;
let winningImage;
const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg'
];

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const resultDiv = document.getElementById('result');

function loadInitialImages() {
    image1.src = images[currentMatchup];
    image2.src = images[currentMatchup + 1];
}

function loadNextImages() {
    currentMatchup += 2; // Move to the next pair of images

    if (currentMatchup < images.length) {
        image1.src = winningImage; // Keep the winning image
        image2.src = images[currentMatchup]; // Load the next image
    } else {
        displayWinner();
    }
}

function displayWinner() {
    // Clear previous images
    image1.style.display = 'none';
    image2.style.display = 'none';
    resultDiv.innerHTML = ''; // Clear previous results

    const winnerImage = document.createElement('img');
    winnerImage.src = winningImage;
    winnerImage.style.width = '300px'; // Adjust size as needed
    winnerImage.style.borderRadius = '10px';
    winnerImage.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    winnerImage.style.opacity = '0'; // Start invisible
    winnerImage.classList.add('fade-in'); // Add fade-in class

    resultDiv.appendChild(winnerImage);

    // Create and style the announcement text
    const announcement = document.createElement('div');
    announcement.textContent = 'YO RANDI VAYO WINNER';
    announcement.style.fontSize = '24px';
    announcement.style.fontWeight = 'bold';
    announcement.style.textAlign = 'center';
    announcement.style.opacity = '0'; // Start invisible
    announcement.classList.add('fade-in'); // Add fade-in class

    resultDiv.appendChild(announcement);
    document.querySelector('.buttons').style.display = 'none';

    // Trigger reflow to start the animations
    winnerImage.offsetHeight; 
    winnerImage.style.opacity = '1'; // Fade in winner image
    
    // Trigger reflow to start the text animation
    announcement.offsetHeight; 
    announcement.style.opacity = '1'; // Fade in announcement text
}

// Event listeners for votes
document.getElementById('vote1').addEventListener('click', () => {
    winningImage = image1.src; // Update the winning image
    loadNextImages();
});

document.getElementById('vote2').addEventListener('click', () => {
    winningImage = image2.src; // Update the winning image
    loadNextImages();
});

// Load the initial images
loadInitialImages();
