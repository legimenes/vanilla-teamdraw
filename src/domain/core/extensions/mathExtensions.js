class MathExtensions {
    static divideAndAddOne(a, b) {
        const result = a / b;
        const decimalPart = result % 1;

        if (decimalPart !== 0) {
            return Math.floor(result) + 1;
        } else {
            return result;
        }
    }
}

module.exports = MathExtensions;
