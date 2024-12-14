const leetSpeakDict = {
    A: "4",
    B: "8",
    C: "(",
    D: "|)",
    E: "3",
    F: "|=",
    G: "6",
    H: "#",
    I: "1",
    J: "_|",
    K: "|<",
    L: "1",
    M: "|\\/|",
    N: "|\\|",
    O: "0",
    P: "|*",
    Q: "0_",
    R: "|2",
    S: "5",
    T: "7",
    U: "|_|",
    V: "\\/",
    W: "'//",
    X: "><",
    Y: "`/",
    Z: "2"
    };


function transformText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toUpperCase(); // Example transformation


    document.getElementById('outputText').value = toLeetSpeak(outputText);
}

function toLeetSpeak(text) {

    return text
        .toUpperCase() // Convert the text to uppercase to match dictionary keys
        .split("")      // Split the text into individual characters
        .map(char => leetSpeakDict[char] || char) // Replace with leetspeak or keep original if no match
        .join("");      // Join the characters back into a string
}

// Create a reverse dictionary for decoding
const reverseLeetSpeakDict = Object.fromEntries(
    Object.entries(leetSpeakDict).map(([key, value]) => [value, key])
);

function decodeLeetSpeak(text) {
    let decodedText = "";
    let i = 0;

    while (i < text.length) {
        let found = false;

        // Try to match multi-character leetspeak first
        for (const leet in reverseLeetSpeakDict) {
            if (text.startsWith(leet, i)) {
                decodedText += reverseLeetSpeakDict[leet];
                i += leet.length;
                found = true;
                break;
            }
        }

        // If no match, copy the character as is
        if (!found) {
            decodedText += text[i];
            i++;
        }
    }

    return decodedText;
}

// Example usage
const leetText = "#3110 '//0R1|)";
const decodedText = decodeLeetSpeak(leetText);

console.log(decodedText); // Outputs: "HELLO WORLD"