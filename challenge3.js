const capitalizeLetters = (str) => {
    return(str.replace(/\b[a-z]/g,c=>c.toUpperCase()));
}

module.exports = {
    capitalizeLetters
}