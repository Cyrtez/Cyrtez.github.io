document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('autoplay-video');

    // Attempt to play the video
    video.play().catch(error => {
        console.error('Video playback failed:', error);
    });

    video.addEventListener('ended', () => {
        window.location.href = 'index.html'; // Redirect to another HTML page
    });
});
