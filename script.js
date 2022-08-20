document.getElementById("decimal").max = searchParam.get('max') || 65535
const rainbow = ["black","red","orange","yellow","green","DeepSkyBlue","blue","purple"]
const main = () => {
    document.getElementById("binary").innerHTML = ``
    document.getElementById("octonary").innerHTML = ``
    const decimal = parseInt(document.getElementById("decimal").value)
    document.getElementById("showDecimal").innerText = decimal
    console.log(`Decimal : ${decimal} => Binary : ${decimal.toString(2)} => Octonary : ${decimal.toString(8)}`)
    decimal.toString(2).split("").map((val) => document.getElementById("binary").innerHTML += `<td class="${val==1 ? "w" : "b"}">${val}</td>`)
    decimal.toString(8).split("").map((val) => document.getElementById("octonary").innerHTML += `<td class="${rainbow[val]}">${val}</td>`)
}