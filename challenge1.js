const reverseString = (str) => {
    if(typeof(str)==='string' && str.length>1 &&   str.length<15) {
    return str.split("").reverse().join("")}
    else throw new Error("Tipo de dato o longitud no admitidos");

}

module.exports = {
    reverseString
}