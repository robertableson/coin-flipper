//No semicolons for this file 

class Coin{
    getHeadsOrTails(){
        //do api call to backend here
        const result = 'heads' //test result 
        const domElement_resultDisplay = document.querySelector('#result-display')

        domElement_resultDisplay.innerHTML = `You flipped: ${result}`
    }
}

let coin = new Coin()
coin.getHeadsOrTails()