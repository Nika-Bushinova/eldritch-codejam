import brownCardsData from './brown/index.js';
import blueCardsData from './blue/index.js';
import greenCardsData from './green/index.js';
import ancientsData from '../ancients.js'
import difficulties from '../difficulties.js'
let difficultyHTML = document.querySelector('.difficulty-container')
difficultyHTML.style.visibility = "hidden"
let deckHTML = document.querySelector('.deck-container')
let dots = document.querySelectorAll('.dot')
let ancientsHTMLs = document.querySelectorAll('.ancient-card');
let stageContainers = document.querySelectorAll('.stage-container');
let difficultiesHTML=document.querySelectorAll('.difficulty')
let lastCard=document.querySelector('.last-card')
let arrCount=[]
ancientsHTMLs.forEach((ancientsHTML, index) => {
  let arrCountCards = []
  ancientsHTML.addEventListener('click', (event) => {
    ancientsHTMLs.forEach((ancientsHTML) => {
      ancientsHTML.classList.remove('active')
    })
    ancientsHTML.classList.add('active')

    function arrPush(stageNumber) {//функция добавления количества карт в массив по стадиям в зависимости от древнего
      arrCountCards.push(stageNumber.greenCards)
      arrCountCards.push(stageNumber.brownCards)
      arrCountCards.push(stageNumber.blueCards)
      return arrCountCards
    }

    arrPush(ancientsData[index].firstStage)
    arrPush(ancientsData[index].secondStage)
    arrPush(ancientsData[index].thirdStage)

    dots.forEach((dot, dotIndex) => {//заполняем точки-стадии значениями из массива
      dot.textContent = arrCountCards[dotIndex]
      arrCountCards.length>9?arrCountCards.splice(0,arrCountCards.length-9):arrCountCards
      
    })

    difficultyHTML.style.visibility = "visible"

  })
  arrCount=arrCountCards
})
let arrGreen=[]
let arrBrown=[]
let arrBlue=[]
function backgrCard(element){//функция добаления div  с картой
  let card= deckHTML.appendChild(document.createElement('div'))
  card.style.background='url('+element.cardFace+')'
  card.style.backgroundSize='cover'
  card.style.width=130+'px'
  card.style.height=190+'px'
  card.style.position='absolute'
  card.style.top='67%'
  card.addEventListener('click',(event)=>{
   card.style.display='none'
  })
 }

difficultiesHTML[0].addEventListener('click',addCards)

function addCards(){
  this.removeEventListener('click', addCards);//событие произойдет только один раз

  greenCardsData.forEach((element, index)=>{
let countCardGreen=arrCount[0]+arrCount[3]+arrCount[6]
if(arrGreen.length<countCardGreen){
    if(difficulties[0].id===element.difficulty){
      arrGreen.push(element.id)    // backgrCard(element)
    }
  }
  })

  brownCardsData.forEach((element, index)=>{
    if(difficulties[0].id===element.difficulty){
      arrBrown.push(element.id)
      
    //  backgrCard(element)
   //   arr.push(element.id)
    }
 
  })

  blueCardsData.forEach((element, index)=>{
    if(difficulties[0].id===element.difficulty){
      arrBlue.push(element.id)
      
    //  backgrCard(element)
    //  arr.push(element.id)
    }
  })
let arrCommon=[[arrGreen],[arrBrown],[arrBlue]]
console.log(arrCommon)
  console.log(arrGreen)
  console.log(arrBrown)
  console.log(arrBlue)
  console.log(arrCount)

  //lastCard.style.background='url('+greenCardsData[0].cardFace+')'
}




export {
  brownCardsData,
  blueCardsData,
  greenCardsData
}
