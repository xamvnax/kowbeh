const heart = document.getElementById('heart');
const letter = document.getElementById('letter');
const sparkleSound = document.getElementById('sparkle-sound'); // Get the audio element
const runningCatGif = document.getElementById('running-cat-gif'); // Get the GIF element

// Play sound and display letter when the cat is clicked
heart.addEventListener('click', () => {
  // Play the sparkle sound
  sparkleSound.play(); 

  // Show the letter with animation
  letter.style.display = 'block';
  setTimeout(() => {
    letter.classList.add('visible');
  }, 10); // Slight delay to ensure animation triggers

  // Hide the cat after clicking
  heart.style.display = 'none';

  // Show the running cat GIF after clicking the cat icon
  runningCatGif.style.display = 'block';
});

