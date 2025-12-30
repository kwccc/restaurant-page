const heading = document.createElement('h1')
heading.textContent = 'Menu'

const starter = document.createElement('p')
starter.textContent = 'Pea Soup'

const main = document.createElement('p')
main.textContent = 'Roast Swede'

const dessert = document.createElement('p')
dessert.textContent = 'Ice Cream'

export const menu = document.createElement('div')
menu.appendChild(heading)
menu.appendChild(starter)
menu.appendChild(main)
menu.appendChild(dessert)