document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    if (!audio) {
        console.error('Audio element not found!');
        return;
    }

    const playMusic = () => {
        audio.play().catch(error => {
            console.error('Music playback failed:', error);
        });
    };

    // Add event listeners for user interactions
    document.body.addEventListener('click', playMusic, { once: true });
    document.body.addEventListener('keydown', playMusic, { once: true });
    document.body.addEventListener('touchstart', playMusic, { once: true });
});
