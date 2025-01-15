function countElements(tagName) {
    if (typeof tagName !== 'string') return 0;
    const elements = document.getElementsByTagName(tagName)
    return elements.length
}


console.log(countElements('div')); // 10
console.log(countElements('p')); // 5
