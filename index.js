const app = "I don't do much."

var dodger = document.getElementById('dodger')


document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers = dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
 
    if (right < 360) {
      dodger.style.right = `${right + 1}px`
    }
  }
})