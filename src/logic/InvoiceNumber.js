export const invoiceNumber = () => {
    const alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const random = {
        firstLetter: alphabet[Math.floor(Math.random() * alphabet.length)],
        secondLetter: alphabet[Math.floor(Math.random() * alphabet.length)],
        firstNumber: String(Math.floor(Math.random() * 10)),
        secondNumber: String(Math.floor(Math.random() * 10)),
        thirdNumber: String(Math.floor(Math.random() * 10)),
        fourthNumber: String(Math.floor(Math.random() * 10)),
    };

    const result =
        random.firstLetter +
        random.secondLetter +
        random.firstNumber +
        random.secondNumber +
        random.thirdNumber +
        random.fourthNumber;
    return result;
};
