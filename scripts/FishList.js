// Import the FishList function from the correct module
import { getFish } from './database.js'

// Invoke the function that you imported from the database module
const fishes = getFish()

const revisedFishList = []

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishObj of fishes) {
        if (fishObj.length % 3 === 0) {
            holyFish.push(fishObj)
        }
    }
    return holyFish
}

revisedFishList.push(...mostHolyFish())

export const soldiers = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []

    for (const fishObj of fishes) {
        if (fishObj.length % 5 === 0) {
            soldierFish.push(fishObj)
        }
    }
    return soldierFish
}

revisedFishList.push(...soldiers())

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fishObj of fishes) {
        if (fishObj.length % 3 != 0 && fishObj.length % 5 != 0) {
            regularFish.push(fishObj)
        }
    }
    return regularFish
}

revisedFishList.push(...nonHolyFish())

export const FishList = () => {

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of revisedFishList) {

        htmlString += `<section class="fish__list">
            <div class="fish__image"><img  class="fish__img" src="img/${fish.image}" alt=""/></div>
            <ul class="fish__details">
                <li class="fish__name">Name: &nbsp; &nbsp; &nbsp; ${fish.name}</li>
                <li class="fish__species">Species: &nbsp; ${fish.species}</li>
                <li class="fish__length">Length: &nbsp; &nbsp; ${fish.length} inches</li>
                <li class="fish__diet">Diet: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${fish.diet}</li>
                <li class="fish__origin">Origin: &nbsp; &nbsp; &nbsp; ${fish.origin}</li>
            </ul>
        </section>`
    }
    htmlString += `</section>`

    return htmlString
}