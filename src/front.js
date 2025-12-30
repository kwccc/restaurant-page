import restaurantImage from './salle-restaurant-nuit.jpg'

const heading = document.createElement('h1')
heading.textContent = 'The Fat Pig'

const description = document.createElement('p')
description.textContent = 'This is the hottest new restaurant in town guaranteed to satisfy your hunger!'

const image = document.createElement('img')
image.src = restaurantImage

export const frontPage = document.createElement('div')
frontPage.appendChild(heading)
frontPage.appendChild(image)
frontPage.appendChild(description)