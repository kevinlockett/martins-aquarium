import { getTips } from './database.js'

// Invoke the function that you imported from the database module
const tips = getTips()

export const Tips = () => {

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="tips"><h2 class="section-title">Tank Maintenance Tips</h2>'

    // Create HTML representations of each fish here
    for (const tip of tips) {

        htmlString += `
        
            <div class="tip bg-${tip.background}">
                <div class="tip__text">
                    <img class="tip__img" src="./img/${tip.image}" alt="${tip.image_alt}" />
                    <h4 class="tip__title">${tip.title}</h4>
                    <p>${tip.instructions}</p>
                </div>
            </div>`
    }

    htmlString += `</section>`

    return htmlString
}
