const searchParam = new URLSearchParams(location.search)
var rangeSlider = document.getElementById("decimal")
noUiSlider.create(rangeSlider, {
    start: [0],
    step: 1,
    range: {
        'min': [0],
        'max': [8**6-1]
    }
})

const rainbow = ["black","red","orange","yellow","green","DeepSkyBlue","blue","purple"]
const main = (val) => {
    document.getElementById("binary").innerHTML = ``
    document.getElementById("octonary").innerHTML = ``
    const decimal = parseInt(val.toString().replace(/\.\d+$/,''))
    document.getElementById("showDecimal").innerText = decimal
    // console.log(`Decimal : ${decimal} => Binary : ${decimal.toString(2)} => Octonary : ${decimal.toString(8)}`)
    const binary = decimal.toString(2).split("")
    const octonary = decimal.toString(8).split("")
    binary.map((val) => document.getElementById("binary").innerHTML += `<td class="${val==="1" ? "w" : "b"}">${val}</td>`)
    octonary.map((val) => document.getElementById("octonary").innerHTML += `<td class="${rainbow[val]}">${val}</td>`)
}
main(0)
rangeSlider.noUiSlider.on('update', function (values, handle) {
    main(values[handle])
});

const randomNumber = () => Math.floor(Math.random() * parseInt(document.querySelector('.noUi-handle.noUi-handle-lower').attributes['aria-valuemax'].value))
const calPercent = (num, max) => {
    return ((1-(num/max))*100).toFixed(4)
}

document.querySelector('#random').addEventListener(`click`, (e) => {
    const num = randomNumber()
    main(num)
    const max = document.querySelector('.noUi-handle.noUi-handle-lower').attributes['aria-valuemax'].value 
    document.querySelector('.noUi-handle.noUi-handle-lower').attributes['aria-valuenow'].value = num.toFixed(1)
    document.querySelector('.noUi-handle.noUi-handle-lower').attributes['aria-valuetext'].value = num.toFixed(1)
    console.log(`translate(${num},-${calPercent(num,max)}%, 0px)`)
    document.querySelector('.noUi-origin').style.transform = `translate(-${calPercent(num,max)}%, 0px)`
})