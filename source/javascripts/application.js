window.onload = function () {
    let text = document.createElement('p')
    text.setAttribute('id', 'foo')
    text.textContent = "The hog demons have arisen from their fiery pigpen."
    document.querySelector('#test').appendChild(text)

    console.log('onload', document.querySelector('#foo'))
}

console.log('outside', document.querySelector('#foo'))



