//No semicolons for this file 

class Coin{
    constructor(){
        this.initEvents()
    }

    initEvents(){
        const domElement_getResultBtn = document.querySelector('#btn-heads-or-tails')

        domElement_getResultBtn.addEventListener('click', () => this.getHeadsOrTails())
    }

    async getHeadsOrTails(){
        const result = await this.callApi()
        const domElement_resultDisplay = document.querySelector('#result-display')

        domElement_resultDisplay.innerHTML = `You flipped: ${result}`
    }
    async callApi(){
        try{
            const response = await fetch('http://localhost:8000/api/heads-or-tails')
            const data = await response.json()

            console.log(data)

            return data
        }catch(error){
            console.log(error)
            return data
        }
    }
}

let coin = new Coin()