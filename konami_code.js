const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  const input = document.querySelector('body')

  input.addEventListener('keydown', function(e) {
  if (e.which === code[alphabet]) {
    return alert("Hurray!")
  }
  else {
    index = 0;
  }
})
}
