function validEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex and return the result
    return emailRegex.test(email);
}

// Examples
console.log(validEmail('abc@example.com'));    // true
console.log(validEmail('xyz@abc.com.in'));      // true
console.log(validEmail('john.doe@com.'));       // false
console.log(validEmail('@example.com'));        // false
console.log(validEmail(''));                    // false
