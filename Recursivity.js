var square = document.querySelector('div#sq')
var dgr = 0; var animationControl; var stat = 0; var rchange
function grandientChange() {
    // Makin RGB codes
    var r = Math.round(Math.random()*255)
    var g = Math.round(Math.random()*255)
    var b = Math.round(Math.random()*255)
    
    var r2 = Math.round(Math.random()*255)
    var g2 = Math.round(Math.random()*255)
    var b2 = Math.round(Math.random()*255)
    // Seting the gradient
    square.style.backgroundImage = `linear-gradient(rgb(${r},${g},${b}), rgb(${r2},${g2},${b2}))`
}
function startSpinning() {
    // Rotate config
    square.style.transform = "rotate("+dgr+"deg)"
    dgr ++
    if (dgr > 360) {
        dgr = 0
    }
    animationControl = requestAnimationFrame(startSpinning)
}
function toggleSpinning() {
    // If it's stoped
    if (stat == 0){
        startSpinning()
        rchange = setInterval(grandientChange, 500)
        stat = 1
    }
    // If it's spinning
    else if (stat == 1){
        cancelAnimationFrame(animationControl)
        clearInterval(rchange)
        stat = 0
    }
}





/*function fact(n) {
    if (n == 1){
        return 1
    }
    return n * fact(n-1)
}*/