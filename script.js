let circle = document.querySelector('.circle')
let slider = document.querySelector('.slider')
let list = document.querySelector('.list')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let items = document.querySelectorAll('.item') // Fixed typo
let count = items.length
let active = 1
let leftTransform = 0
let width_item = items[active].offsetWidth

next.onclick = () => {
    active = active >= count - 1 ? count - 1 : active + 1 // Fixed increment
    runCarousel(); 
}
prev.onclick = () => {
    active = active <= 0 ? 0 : active - 1 // Fixed decrement
    runCarousel();
}
function runCarousel(){
    prev.style.display = active == 0 ? 'none' : 'block'
    next.style.display = active == count - 1 ? 'none' : 'block'
    let old_active = document.querySelector('.item.active')
    if(old_active) old_active.classList.remove('active')
    items[active].classList.add('active') // Correctly referencing the items NodeList
    leftTransform = width_item * active * -1 // Adjusted leftTransform calculation
    list.style.transform = `translateX(${leftTransform}px)` // Fixed string interpolation
}
runCarousel()
