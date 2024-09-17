export const maskDefinitions = {
    '#': { pattern: /\d/ }, // Number
    'X': { pattern: /[0-9a-zA-Z]/ }, // Alphanumeric character
    'S': { pattern: /[a-zA-Z]/ }, // Letter
    'A': { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() }, // Uppercase
    'a': { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() }, // Lowercase
    '!': { escape: true }, // Escape character
    '@': { pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ }, // Email format
    '+': { pattern: /[\+\-\*\#]/ }, // Mathematical operators
    'd': { pattern: /[0-9]/, transform: v => `0${v}` }, // Number (with prefix 0)
    'H': { pattern: /[0-2][0-9]/ }, // Hour (24-hour format)
    'm': { pattern: /[0-5][0-9]/ },// Minute
    's': { pattern: /[0-5][0-9]/ }, // Second
    'P': { pattern: /[a-zA-Z]/, transform: v => v.toUpperCase() }, // Uppercase (special conversion)
};
