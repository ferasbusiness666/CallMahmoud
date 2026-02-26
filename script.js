document.addEventListener('DOMContentLoaded', () => {
    console.log('!!CALL MAHMOUD!! App Loaded V3');
    const mainText = document.getElementById('main-text');
    const root = document.documentElement;

    const bgColorPicker = document.getElementById('bg-color-picker');
    const bgDots = document.querySelectorAll('#bg-dots .dot');

    const textColorPicker = document.getElementById('text-color-picker');
    const textDots = document.querySelectorAll('#text-dots .dot');

    const textSizeSlider = document.getElementById('text-size-slider');

    const updateBgColor = (color) => {
        root.style.setProperty('--bg-color', color);
        if (bgColorPicker) bgColorPicker.value = color;
        bgDots.forEach(dot => dot.classList.toggle('active', dot.dataset.color === color));
    };

    const updateTextColor = (color) => {
        root.style.setProperty('--text-color', color);
        if (textColorPicker) textColorPicker.value = color;
        textDots.forEach(dot => dot.classList.toggle('active', dot.dataset.color === color));
    };

    const updateTextSize = (size) => {
        root.style.setProperty('--text-size', size);
        if (textSizeSlider) textSizeSlider.value = size;
    };

    if (bgColorPicker) bgColorPicker.addEventListener('input', (e) => updateBgColor(e.target.value));
    if (textColorPicker) textColorPicker.addEventListener('input', (e) => updateTextColor(e.target.value));
    if (textSizeSlider) textSizeSlider.addEventListener('input', (e) => updateTextSize(e.target.value));

    bgDots.forEach(dot => dot.addEventListener('click', () => updateBgColor(dot.dataset.color)));
    textDots.forEach(dot => dot.addEventListener('click', () => updateTextColor(dot.dataset.color)));

    // Set clear initial defaults
    updateBgColor('#0f172a');
    updateTextColor('#ffffff');
    updateTextSize(15);
});
