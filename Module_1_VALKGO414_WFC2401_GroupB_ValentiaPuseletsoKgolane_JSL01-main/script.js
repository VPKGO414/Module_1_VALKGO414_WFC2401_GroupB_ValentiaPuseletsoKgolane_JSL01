/*function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
} */

function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to match 'pet_' followed by alphanumeric characters
    let regex = /^pet_\d{4}([a-zA-Z]+)$/;

    // Extracting the name part from the input
    let match = input.match(regex);
    if (match) {
        let petName = match[1]; // Extracted pet name
        result = `Valid Syntax. Pet's name: ${petName}`;
    } else {
        result = 'Invalid Syntax';
    }

    /*switch (match ? 'valid' : 'invalid') {
        case 'valid':
            let petName = match[1]; // Accessing pet name
            result = `Valid Syntax. Pet's name: ${petName}`;
            break;
        case 'invalid':
            result = 'Invalid Syntax';
            break;
        default:
            // Handle unexpected case
            result = 'Unexpected result';
            break;
    }*/


    document.getElementById('result').innerText = result;
}

