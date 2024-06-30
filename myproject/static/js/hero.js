document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "Machine Learning",
        "open source contributor",
        "software developer",
        "cybersecurity enthusiast"
    ];

    const typingText = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here (milliseconds)
        } else {
            setTimeout(erase, 1500); // Wait before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            setTimeout(type, 500); // Wait before typing next word
        }
    }

    setTimeout(type, 1000); // Start typing after 1 second
});
