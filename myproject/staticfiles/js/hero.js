document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "Machine Learning Engineer",
        "Open Source Contributor",
        "Software Developer",
        "Cybersecurity Enthusiast"
    ];

    const typingText = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
            typingText.textContent = currentWord.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Wait before typing next word
            } else {
                setTimeout(type, 50); // Adjust erasing speed here (milliseconds)
            }
        } else {
            charIndex++;
            typingText.textContent = currentWord.substring(0, charIndex);
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500); // Wait before erasing
            } else {
                setTimeout(type, 100); // Adjust typing speed here (milliseconds)
            }
        }
    }

    type();
});
