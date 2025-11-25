document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputBinary = document.getElementById('outputBinary');

    // Traducción a binario
    let binaryResult = '';
    for (let i = 0; i < inputText.length; i++) {
        binaryResult += inputText.charCodeAt(i).toString(2) + ' ';
    }

    outputBinary.textContent = binaryResult.trim();
});
