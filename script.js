document.getElementById('hello').addEventListener('click', function(){
    alert('Hello')
})

var changeColor = document.getElementsByClassName('changeColor')

for (var i = 0; i < changeColor.length; i++){
    changeColor[i].addEventListener('click', function(){
        document.getElementById('color').style.backgroundColor=this.id
    })
}

document.getElementById('addColor').addEventListener('click', function(){
    var colorValue = document.getElementById('colorValue').value

    if(colorValue != ''){
        var newButton = document.createElement('button')
        newButton.setAttribute('id', colorValue)
        newButton.setAttribute('class', 'changeColor')
        newButton.innerHTML = colorValue.charAt(0).toUpperCase() + colorValue.slice(1).toLowerCase()
        newButton.addEventListener('click', function(){
            document.getElementById('color').style.backgroundColor=this.id
        })

        var latestColor = changeColor[changeColor.length - 1]
        latestColor.parentNode.insertBefore(newButton, latestColor.nextSibling)
    } else {
        return false
    }  
})
