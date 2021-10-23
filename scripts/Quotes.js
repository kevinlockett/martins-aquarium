import { getQuotes } from './database.js'

// Invoke the function that you imported from the database module
const quotes = getQuotes()

export const Quotes = () => {

    // Stat building a string filled with HTML syntax
    let htmlString ='<section class="quotes">'

    // Create HTMLrepresentations of each fish here
    for (const quote of quotes) {

        htmlString += `
        
            <div class="quote bg-${quote.background}">
                <h2 class="quote__title">${quote.title}</h2>
                <p class="quote__tip">${quote.tip} <span>${quote.tip_span}</span></p>
                <p class="quote__details">${quote.quote}</p>
            </div>`
    }

    htmlString += `</section>`

    return htmlString
}
