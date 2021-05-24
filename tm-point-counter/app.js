// Displays-bindings: 
const terraFormDisplay = document.querySelector(".tf-display")
const generationDisplay = document.querySelector(".gen-display")

const moneyProdDisplay = document.querySelector(".stat-money-production-display")
const moneyStoreDisplay = document.querySelector(".stat-money-store-display")

const plantsProdDisplay = document.querySelector(".stat-plants-production-display")
const plantsStoreDisplay = document.querySelector(".stat-plants-store-display")

const titaniumProdDisplay = document.querySelector(".stat-titanium-production-display")
const titaniumStoreDisplay = document.querySelector(".stat-titanium-store-display")

const steelProdDisplay = document.querySelector(".stat-steel-production-display")
const steelStoreDisplay = document.querySelector(".stat-steel-store-display")

const energyProdDisplay = document.querySelector(".stat-energy-production-display")
const energyStoreDisplay = document.querySelector(".stat-energy-store-display")

const heatProdDisplay = document.querySelector(".stat-heat-production-display")
const heatStoreDisplay = document.querySelector(".stat-heat-store-display")

// Buttons-bindings: 
const tfButtonUp = document.querySelector(".tf-button-up")
const tfButtonDown = document.querySelector(".tf-button-down")

const moneyProdUp = document.querySelector(".stat-button-production-up-money")
const moneyProdDown = document.querySelector(".stat-button-production-down-money")
const moneyStoreUp = document.querySelector(".stat-button-store-up-money")
const moneyStoreDown = document.querySelector(".stat-button-store-down-money")

const plantsProdUp = document.querySelector(".stat-button-production-up-plants")
const plantsProdDown = document.querySelector(".stat-button-production-down-plants")
const plantsStoreUp = document.querySelector(".stat-button-store-up-plants")
const plantsStoreDown = document.querySelector(".stat-button-store-down-plants")

const titaniumProdUp = document.querySelector(".stat-button-production-up-titanium")
const titaniumProdDown = document.querySelector(".stat-button-production-down-titanium")
const titaniumStoreUp = document.querySelector(".stat-button-store-up-titanium")
const titaniumStoreDown = document.querySelector(".stat-button-store-down-titanium")

const steelProdUp = document.querySelector(".stat-button-production-up-steel")
const steelProdDown = document.querySelector(".stat-button-production-down-steel")
const steelStoreUp = document.querySelector(".stat-button-store-up-steel")
const steelStoreDown = document.querySelector(".stat-button-store-down-steel")

const energyProdUp = document.querySelector(".stat-button-production-up-energy")
const energyProdDown = document.querySelector(".stat-button-production-down-energy")
const energyStoreUp = document.querySelector(".stat-button-store-up-energy")
const energyStoreDown = document.querySelector(".stat-button-store-down-energy")

const heatProdUp = document.querySelector(".stat-button-production-up-heat")
const heatProdDown = document.querySelector(".stat-button-production-down-heat")
const heatStoreUp = document.querySelector(".stat-button-store-up-heat")
const heatStoreDown = document.querySelector(".stat-button-store-down-heat")

const buttonNextGen = document.querySelector(".button-next-gen")
const buttonCalc = document.querySelector(".button-calculator")
const buttonNewGame = document.querySelector(".button-new")

// ---------------------------


let terraFormFactor = {
    value: 20
}

let generation = {
    value: 1
}

class Resource {
    constructor (production, store) {
        this.production = production
        this.store = store
    }

    addToStore(value) {
        if (value === undefined) {
            this.store ++
        } else {
            this.store = this.store + value
        }
    }

    removeFromStore(value) {
        if (value === undefined) {
            this.store --
        } else {
            this.store = this.store - value
        }
    }

    addToProduction(value) {
        if (value === undefined) {
            this.production++
        } else {
            this.store = this.production + value
        }
    }

    removeFromProduction(value) {
        if (value === undefined) {
            this.production --
        } else {
            this.store = this.production - value
        }
    }

    transferProduction() {
        let valueToTransfer = this.production
        this.production = 0 
    }
}

let money = new Resource (0, 43)
let plants = new Resource (0, 0)
let titanium = new Resource (0, 0)
let steel = new Resource (0, 0)
let energy = new Resource (0, 0)
let heat = new Resource (0, 0)

let updateDisplays = () => {

    if (parseInt(moneyProdDisplay.innerText, 10) > 0) {
        moneyProdDisplay.innerText = `+${money.production}`
    } else {
        moneyProdDisplay.innerText = money.production
    }

    if (parseInt(plantsProdDisplay.innerText, 10) > 0) {
        plantsProdDisplay.innerText = `+${plants.production}`
    } else {
        plantsProdDisplay.innerText = plants.production
    }

    if (parseInt(titaniumProdDisplay.innerText, 10) > 0) {
        titaniumProdDisplay.innerText = `+${titanium.production}`
    } else {
        titaniumProdDisplay.innerText = titanium.production
    }

    if (parseInt(steelProdDisplay.innerText, 10) > 0) {
        steelProdDisplay.innerText = `+${steel.production}`
    } else {
        steelProdDisplay.innerText = steel.production
    }

    if (parseInt(energyProdDisplay.innerText, 10) > 0) {
        energyProdDisplay.innerText = `+${energy.production}`
    } else {
        energyProdDisplay.innerText = energy.production
    }

    if (parseInt(heatProdDisplay.innerText, 10) > 0) {
        heatProdDisplay.innerText = `+${heat.production}`
    } else {
        heatProdDisplay.innerText = heat.production
    }

    moneyStoreDisplay.innerText = money.store
    plantsStoreDisplay.innerText = plants.store
    titaniumStoreDisplay.innerText = titanium.store
    steelStoreDisplay.innerText = steel.store
    energyStoreDisplay.innerText = energy.store
    heatStoreDisplay.innerText = heat.store
    // moneyProdDisplay.innerText = money.production
    // plantsProdDisplay.innerText = plants.production
    // titaniumProdDisplay.innerText = titanium.production
    // steelProdDisplay.innerText = steel.production
    // energyProdDisplay.innerText = energy.production
    // heatProdDisplay.innerText = heat.production

    terraFormDisplay.innerText = terraFormFactor.value
    generationDisplay.innerText = generation.value
}

let resetStats = () => {
    money = new Resource(0, 43)
    plants = new Resource (0, 0)
    titanium = new Resource (0, 0)
    steel = new Resource (0, 0)
    energy = new Resource (0, 0)
    heat = new Resource (0, 0)
}

let advanceGeneration = () => {
    money.addToStore(money.production + terraFormFactor.value)
    plants.addToStore(plants.production)
    titanium.addToStore(titanium.production)
    steel.addToStore(steel.production)
    heat.addToStore(heat.production + energy.store)
    energy.store = 0
    energy.addToStore(energy.production)
    generation.value++

    updateDisplays()

    /// ADD LOCAL STORAGE ???
}

let newGame = () => {
    resetStats()
    updateDisplays()
}

// displays:
terraFormDisplay.innerText = terraFormFactor.value
generationDisplay.innerText = generation.value

// =========================================================
// Event Listeners:


tfButtonDown.addEventListener("click", () => {
    if (terraFormFactor.value === 0) return 0
    terraFormFactor.value--;
    terraFormDisplay.innerText = terraFormFactor.value
})

tfButtonUp.addEventListener("click", () => {
    terraFormFactor.value++;
    terraFormDisplay.innerText = terraFormFactor.value
})

//------------------------------------------------

moneyProdUp.addEventListener("click", () => {
    money.addToProduction()
    updateDisplays()
})

moneyProdDown.addEventListener("click", () => {
    if (money.production === -10) return money.production = -10
    money.removeFromProduction()
    updateDisplays()
})

moneyStoreUp.addEventListener("click", () => {
    money.addToStore()
    updateDisplays()
})
moneyStoreDown.addEventListener("click", () => {
    if (money.store === 0) return money.store = 0
    money.removeFromStore()
    updateDisplays()
})

//------------------------------------------------
plantsProdUp.addEventListener("click", () => {
    plants.addToProduction()
    updateDisplays()
})

plantsProdDown.addEventListener("click", () => {
    if (plants.production === 0) return plants.production = 0   // check
    plants.removeFromProduction()
    updateDisplays()
})

plantsStoreUp.addEventListener("click", () => {
    plants.addToStore()
    updateDisplays()
})
plantsStoreDown.addEventListener("click", () => {
    if (plants.store === 0) return plants.store = 0   // check
    plants.removeFromStore()
    updateDisplays()
})

//------------------------------------------------
titaniumProdUp.addEventListener("click", () => {
    titanium.addToProduction()
    updateDisplays()
})

titaniumProdDown.addEventListener("click", () => {
    if (titanium.production === 0) return titanium.production = 0   // check
    titanium.removeFromProduction()
    updateDisplays()
})

titaniumStoreUp.addEventListener("click", () => {
    titanium.addToStore()
    updateDisplays()
})
titaniumStoreDown.addEventListener("click", () => {
    if (titanium.store === 0) return titanium.store = 0   // check
    titanium.removeFromStore()
    updateDisplays()
})

//------------------------------------------------
steelProdUp.addEventListener("click", () => {
    steel.addToProduction()
    updateDisplays()
})

steelProdDown.addEventListener("click", () => {
    if (steel.production === 0) return steel.production = 0   // check
    steel.removeFromProduction()
    updateDisplays()
})

steelStoreUp.addEventListener("click", () => {
    steel.addToStore()
    updateDisplays()
})
steelStoreDown.addEventListener("click", () => {
    if (steel.store === 0) return steel.store = 0   // check
    steel.removeFromStore()
    updateDisplays()
})

//------------------------------------------------
energyProdUp.addEventListener("click", () => {
    energy.addToProduction()
    updateDisplays()
})

energyProdDown.addEventListener("click", () => {
    if (energy.production === 0) return energy.production = 0   // check
    energy.removeFromProduction()
    updateDisplays()
})

energyStoreUp.addEventListener("click", () => {
    energy.addToStore()
    updateDisplays()
})
energyStoreDown.addEventListener("click", () => {
    if (energy.store === 0) return energy.store = 0   // check
    energy.removeFromStore()
    updateDisplays()
})

//------------------------------------------------
heatProdUp.addEventListener("click", () => {
    heat.addToProduction()
    updateDisplays()
})

heatProdDown.addEventListener("click", () => {
    if (heat.production === 0) return heat.production = 0   // check
    heat.removeFromProduction()
    updateDisplays()
})

heatStoreUp.addEventListener("click", () => {
    heat.addToStore()
    updateDisplays()
})
heatStoreDown.addEventListener("click", () => {
    if (heat.store === 0) return heat.store = 0   // check
    heat.removeFromStore()
    updateDisplays()
})

buttonNextGen.addEventListener("click", () => {
    if (window.getComputedStyle(pointCounter).display === "block") {
        advanceGeneration()
    }
})
// buttonNewGame.addEventListener("click", newGame)

//------------------------------------------------
//------------------------------------------------

const calcInputTF = document.querySelector("#input-tf")
const calcInputBoard = document.querySelector("#input-b")
const calcInputTA = document.querySelector("#input-ta")
const calcInputOther = document.querySelector("#input-o")
const inputConfirmButton = document.querySelector(".calculator-form-button")

const pointResultDisplay = document.querySelector(".point-calculator-result-display")



inputConfirmButton.addEventListener("click", () => {
    const inputs = [calcInputTF, calcInputBoard, calcInputTA]
    const inputValues = []
    
    inputs.forEach( input => {
        inputValues.push(parseInt(input.value, 10))
    })

    function calculateTotal() {
        let splitOthers = []
        let parsedInputs = []
        let allInputs = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue

        splitOthers = calcInputOther.value.split("+")
        splitOthers.forEach( element => {
            parsedInputs.push(parseInt(element, 10))
        })

        allInputs = inputValues.concat(parsedInputs)
        pointResultDisplay.innerText = allInputs.reduce(reducer)
    }
    calculateTotal()
})

const pointCounter = document.querySelector(".point-counter")
const pointCalculator = document.querySelector(".point-calculator")

buttonCalc.addEventListener("click", () => {
    if (window.getComputedStyle(pointCalculator).display === "none") {
        pointCounter.style.display = "none"
        pointCalculator.style.display = "block"
    }
    else if (window.getComputedStyle(pointCounter).display === "none") {
        pointCounter.style.display = "block"
        pointCalculator.style.display = "none"
    }
})