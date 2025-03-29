function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
