import { getPlaces } from './database.js'

// Invoke the function that you imported from the database module
const places = getPlaces()

const findPlaceClass = (currentPlace) => {
    
}

export const Places = () => {

    // Stat building a string filled with HTML syntax
    let htmlString = ''

    // Create HTMLrepresentations of each fish here
    for (const place of places) {

        htmlString += `
        
            <div class="place place--flip bg-${place.background}">
                <img class="place__img" src="img/${place.image}" alt="${place.img_alt}" />
                <div class="info">
                    <h3 class="place__name">${place.name}</h3>
                    <p class="place__details">${place.details}</p>
                    <p>${place.description}</p>
                </div>
            </div>
            `
    }

    return htmlString
}
