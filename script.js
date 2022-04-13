const wrapperInner = document.querySelector('.wrapper-inner'),
      slide = document.querySelectorAll('.slide'),
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev'),
      width = window.getComputedStyle(wrapperInner).width

let offset = 0
console.log(width)
slide.forEach(item => item.style.width = width)

wrapperInner.style.transition = '0.5s all'

next.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2) * (slide.length - 1)) {
        offset = 0
    } else {
        offset += +width.slice(0, width.length - 2)
    }

    wrapperInner.style.transform = `translateX(-${offset}px)`
})

prev.addEventListener('click', () => {
    if (offset === 0) {
        offset += +width.slice(0, width.length - 2) * (slide.length - 1)
    } else {
        offset -= +width.slice(0, width.length - 2)
    }

    wrapperInner.style.transform = `translateX(-${offset}px)`
})