
function operate_nav() {
  let elems = document.querySelectorAll('.menu_object')
  for (el of elems) {
    if (el.style.display == 'none') {
      el.style.display = 'flex'
    } else {
      el.style.display = 'none'
    }
  }
}

window.addEventListener('resize', checkSizeLarge)

function checkSizeLarge(elems=elems) {
  if (window.innerWidth > 768) {
    let elems = document.querySelectorAll('.menu_object')
    for (el of elems) {
      el.style.display = 'none'
    }
    window.removeEventListener('resize', checkSizeLarge)
    window.addEventListener('resize', checkSizeSmall)
  }
}

function checkSizeSmall() {
  if (window.innerWidth <= 768) {
    window.removeEventListener('resize', checkSizeSmall)
    window.addEventListener('resize', checkSizeLarge)
  }
}