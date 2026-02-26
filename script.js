document.addEventListener('DOMContentLoaded', () => {
    console.log('!!CALL MAHMOUD!! Automatic Color Flow V7');

    const root = document.documentElement;
    const textSizeSlider = document.getElementById('text-size-slider');

    const updateTextSize = (size) => {
        root.style.setProperty('--text-size', size);
        if (textSizeSlider) textSizeSlider.value = size;
    };

    if (textSizeSlider) {
        textSizeSlider.addEventListener('input', (e) => updateTextSize(e.target.value));
    }

    // Initialize with a much smaller starting size
    updateTextSize(4);
});
