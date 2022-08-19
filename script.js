document.getElementById("decimal").max = searchParam.get('max') || 65535
const main = () => {
    document.getElementById("binary").innerHTML = ``
    const decimal = parseInt(document.getElementById("decimal").value)
    document.getElementById("showDecimal").innerText = decimal
    console.log(`Decimal : ${decimal} => Binary : ${decimal.toString(2)} => Octonary : ${decimal.toString(8)}`)
    decimal.toString(2).split("").map((val) => document.getElementById("binary").innerHTML += `<td class="${val==1 ? "w" : "b"}">${val}</td>`)
}