function romanToInt(roman) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100,
        'D': 500, 'M': 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const curr = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]];

        if (next > curr) {
            total += next - curr;
            i++; // skip next character
        } else {
            total += curr;
        }
    }

    return total;
}

// Example usage:
const input = prompt("Enter a Roman numeral (e.g. XIV):");
const result = romanToInt(input.toUpperCase());
alert("The integer value is: " + result);


