import { FishList } from './FishList.js'
import { Quotes } from './Quotes.js'
import { Places } from './Places.js'
import { Tips } from './Tips.js'

// AQUARIUM

const mainContainer = document.querySelector("#aquarium")

const aquariumHTML = `

    <h2 class="section-title">Meet Martin's fantastic fish</h2>
    ${FishList()}

    `
mainContainer.innerHTML = aquariumHTML



// QUOTES

const quotesContainer = document.querySelector("#travel_tips")

const quotesHTML = `

    <h2 class="section-title">Travel tips from Martin</h2>
    <p class="fs-500">Martin's tips to make your next scuba trip more fun</p>
    ${Quotes()}

    `
quotesContainer.innerHTML = quotesHTML



// PLACES

const placesContainer = document.querySelector("#places")

const placesHTML = `
    
    <h2 class="section-title">Places Martin Harvested His Fish</h2>
    <p class="fs-500">Some of Martin's favorite places to explore</p>
    <div class="places">
        ${Places()}
    </div>
    `
placesContainer.innerHTML = placesHTML



// TIPS


const asideContainer = document.querySelector("#aside")

const asideHTML = `${Tips()}`

asideContainer.innerHTML = asideHTML