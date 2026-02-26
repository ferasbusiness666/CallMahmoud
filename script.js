document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.getElementById('main-text');
    const root = document.documentElement;

    // Background Controls
    const bgColorPicker = document.getElementById('bg-color-picker');
    const bgDots = document.querySelectorAll('#bg-dots .dot');

    // Text Controls
    const textColorPicker = document.getElementById('text-color-picker');
    const textDots = document.querySelectorAll('#text-dots .dot');

    // Functions to update colors
    const updateBgColor = (color) => {
        root.style.setProperty('--bg-color', color);
        bgColorPicker.value = color;

        // Update active state for dots
        bgDots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.color === color);
        });
    };

    const updateTextColor = (color) => {
        root.style.setProperty('--text-color', color);
        textColorPicker.value = color;

        // Update active state for dots
        textDots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.color === color);
        });
    };

    // Event Listeners for Pickers
    bgColorPicker.addEventListener('input', (e) => updateBgColor(e.target.value));
    textColorPicker.addEventListener('input', (e) => updateTextColor(e.target.value));

    // Event Listeners for Dots
    bgDots.forEach(dot => {
        dot.addEventListener('click', () => updateBgColor(dot.dataset.color));
    });

    textDots.forEach(dot => {
        dot.addEventListener('click', () => updateTextColor(dot.dataset.color));
    });

    // Text Size Control
    const textSizeSlider = document.getElementById('text-size-slider');

    const updateTextSize = (size) => {
        root.style.setProperty('--text-size', size);
    };

    textSizeSlider.addEventListener('input', (e) => updateTextSize(e.target.value));

    // Initialize States
    updateBgColor('#0f172a');
    updateTextColor('#ffffff');
    updateTextSize(10);

    // Interaction feedback
    mainText.addEventListener('click', () => {
        mainText.style.transform = 'scale(1.05)';
        setTimeout(() => {
            mainText.style.transform = 'scale(1)';
        }, 300);
    });
});
