const board = document.querySelector('#board')
const colors = ['#ff00ff', '#ffa500', '#ff7f50', '#006400', '#daa520',
'#7cfc00', '#32cd32', '#ffe4b5', '#dda0dd', '#87ceeb']
const SQUARES_NUMBERS = 1000

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setcolor(square)
    })

    square.addEventListener('mouseleave', () => {
        removecolor(square)
    })

    board.append(square)
}

function setcolor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color},  0 0 18px ${color}`
}

function removecolor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}