//No semicolons for this file 

class Coin{
    getHeadsOrTails(){
        //do api call to backend here
        const result = 'heads' //test result 
        const domElement_resultDisplay = document.querySelector('#result-display')

        this.callApi()

        domElement_resultDisplay.innerHTML = `You flipped: ${result}`
    }

    async callApi(){
        try{
            const response = await fetch('http://localhost:8000/api/heads-or-tails')
            const data = await response.json()
    
            console.log(data)
            //document.querySelector('h2').innerText = data.birthName
        }catch(error){
            console.log(error)
        }
    }
}

let coin = new Coin()
coin.getHeadsOrTails()