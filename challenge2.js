const reverseInt = (number) => {
    if(typeof(number)==='number') 
        {if (number<0){
        return parseInt(number.toString().split("").reverse().join(""))*-1}
        else{
        return parseInt(number.toString().split("").reverse().join(""))}}
        else throw new Error("Tipo de dato o longitud no admitidos");
}

module.exports = {
    reverseInt
}