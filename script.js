document.getElementById('translateToBinaryButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputBinary = document.getElementById('outputBinary');

    // Traducción a binario
    let binaryResult = '';
    for (let i = 0; i < inputText.length; i++) {
        binaryResult += inputText.charCodeAt(i).toString(2).padStart(8, '0') + ' ';
    }

    outputBinary.textContent = binaryResult.trim();
});

document.getElementById('translateToTextButton').addEventListener('click', function() {
    const inputBinary = document.getElementById('inputBinary').value.trim();
    const outputText = document.getElementById('outputText');
    
    // Traducción de binario a texto
    const binaryArray = inputBinary.split(' ');
    let textResult = '';
    
    for (let binary of binaryArray) {
        textResult += String.fromCharCode(parseInt(binary, 2));
    }

    outputText.textContent = textResult;
});
