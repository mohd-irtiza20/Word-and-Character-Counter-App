const textArea = document.getElementById('area')
const characterCount = document.getElementById('charCount')
const wordCount = document.getElementById('wordCount')


textArea.oninput = () => {
    let characters = textArea.value;
    characterCount.textContent = characters.replace (/\s/g, '').length;

    let words = textArea.value.split(' ').filter((item) => {
        return item != '';
    });
    wordCount.textContent = words.length;
};