class Shapes {
    // Constructor initializing the responses object with default value of an empty array
    constructor(responses = []) {
        this.responses = responses;
    }

    //Implemented by child classes
    render() {
        throw new Error('Child class must implement a render() method.');
    }

    renderGradient() {
        // Extracting shape colors from user responses
        const shapeColor1 = this.responses.shapeColor1;
        let shapeColor2;

        // Check if gradient background is enabled
        if (!this.responses.gradientBG) {
            shapeColor2 = this.responses.shapeColor1; // If not, use the same color for both stops
        } else {
            shapeColor2 = this.responses.shapeColor2; // If yes, use the specified second color
        }

        return `
        <defs>
            <linearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:${shapeColor1}; stop-opacity:1" />
                <stop offset="100%" style="stop-color:${shapeColor2}; stop-opacity:1" />
            </linearGradient>
        </defs>`;
    }

    // Function to validate the length of the input text, throwing an error if more than 3 characters
    validateText() {
        if (this.responses.text.length > 3) {
            throw new Error('max 3 characters');
        } else {
            return this.responses.text;
        }
    }

    // Renders the logo text with validated input and specified text color
    renderLogoText() {
        const text = this.validateText(this.responses.text);
        const textColor = this.responses.textColor;
        
        // Generates SVG text element with specified attributes and styles
        return `<text x="135" y="135" font-size="60" text-anchor="middle" 
        style="font-weight: bold; font-family: Arial, Sans;" fill="${textColor}">${text}</text>`;
    }
}
module.exports = Shapes