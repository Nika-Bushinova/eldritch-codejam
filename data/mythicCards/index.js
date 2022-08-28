import brownCardsData from './brown/index.js';
import blueCardsData from './blue/index.js';
import greenCardsData from './green/index.js';
import ancientsData from '../ancients.js'
import difficulties from '../difficulties.js'
let difficultyHTML = document.querySelector('.difficulty-container')
difficultyHTML.style.visibility = "hidden"
let deckHTML = document.querySelector('.deck-container')
deckHTML .style.visibility='hidden'
let deckCard=document.querySelector('.deck')
let dots = document.querySelectorAll('.dot')
let ancientsHTMLs = document.querySelectorAll('.ancient-card');
let stageContainers = document.querySelectorAll('.stage-container');
let difficultiesHTML = document.querySelectorAll('.difficulty')
let lastCard = document.querySelector('.last-card')
let arrCountCards = []
let mixCard=document.querySelector('.div__button')
mixCard.style.visibility='hidden'
//////////////////////////////////////////////////////////////////////////
ancientsHTMLs.forEach((ancientsHTML, index) => {

  ancientsHTML.addEventListener('click', add)
  function add(event){
    ancientsHTMLs.forEach((ancientsHTML) => {
      ancientsHTML.classList.remove('active')
      if(deckHTML .style.visibility==='visible'){
        deckHTML .style.visibility='hidden'
      }
      
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

    difficultyHTML.style.visibility = "visible"
    this.removeEventListener('click', add);//событие произойдет только один раз
  }
  })

/////////////////////////////////////////////////////////////////////////
let arrGreen = []
let arrBrown = []
let arrBlue = []
///////////////////////////////////////////////////////////////////////////////////////////отбор сложностей карт по кнопке ОЧЕНЬ легкий
difficultiesHTML[0].addEventListener('click', ()=>{//события для уровней
  difficultiesHTML.forEach((element)=>{
    element.style.background='none'
  })
  mixCard.style.visibility='visible'
  difficultiesHTML[0].style.background='red'
  let arrGreenLength = arrCountCards[0] + arrCountCards[3] + arrCountCards[6]
  let arrBrownLength = arrCountCards[1] + arrCountCards[4] + arrCountCards[7]
  let arrBlueLength = arrCountCards[2] + arrCountCards[5] + arrCountCards[8]
  //  this.removeEventListener('click', addCards);//событие произойдет только один раз
  shuffle(greenCardsData)
  shuffle(brownCardsData)
  shuffle(blueCardsData)
console.log(greenCardsData)
  function dotsArr(cardsData, arr, arrLength, num) {
    cardsData.forEach((element, index) => {
      if (arr.length < arrLength && difficulties[num].id === element.difficulty) {
        arr.push(element)
       // cardsData.splice(index, 1)
        //  arr.push(element.id)
      }
    })
  }
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 0)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 1)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 0)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 1)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 0)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 1)
})
////////////////////////////////////////////////////////////////////////////////////ЛЕГКИЙ
difficultiesHTML[1].addEventListener('click', ()=>{//события для уровней
  difficultiesHTML.forEach((element)=>{
    element.style.background='none'
  })
  mixCard.style.visibility='visible'
  difficultiesHTML[1].style.background='red'
  let arrGreenLength = arrCountCards[0] + arrCountCards[3] + arrCountCards[6]
  let arrBrownLength = arrCountCards[1] + arrCountCards[4] + arrCountCards[7]
  let arrBlueLength = arrCountCards[2] + arrCountCards[5] + arrCountCards[8]
  //  this.removeEventListener('click', addCards);//событие произойдет только один раз
  shuffle(greenCardsData)
  shuffle(brownCardsData)
  shuffle(blueCardsData)

  function dotsArr(cardsData, arr, arrLength, num) {
    cardsData.forEach((element, index) => {
      if (arr.length < arrLength && difficulties[num].id === element.difficulty) {
        arr.push(element)
        //cardsData.splice(index, 1)
        //  arr.push(element.id)
      }
    })
  }
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 1)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 0)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 1)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 0)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 1)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 0)
})
//////////////////////////////////////////////////////////////////////////////////////////////////НОРМАЛЬНЫЙ
difficultiesHTML[2].addEventListener('click', ()=>{//события для уровней
  difficultiesHTML.forEach((element)=>{
    element.style.background='none'
  })
  mixCard.style.visibility='visible'
  difficultiesHTML[2].style.background='red'
  let arrGreenLength = arrCountCards[0] + arrCountCards[3] + arrCountCards[6]
  let arrBrownLength = arrCountCards[1] + arrCountCards[4] + arrCountCards[7]
  let arrBlueLength = arrCountCards[2] + arrCountCards[5] + arrCountCards[8]
  //  this.removeEventListener('click', addCards);//событие произойдет только один раз
  shuffle(greenCardsData)
  shuffle(brownCardsData)
  shuffle(blueCardsData)

  function dotsArr(cardsData, arr, arrLength, num) {
    cardsData.forEach((element, index) => {
      if (arr.length < arrLength && difficulties[num].id === element.difficulty) {
        arr.push(element)
        //cardsData.splice(index, 1)
        //  arr.push(element.id)
      }
    })
  }
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 1)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 2)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 0)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 1)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 2)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 0)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 1)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 2)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 0)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////высокий
difficultiesHTML[3].addEventListener('click', ()=>{//события для уровней
  difficultiesHTML.forEach((element)=>{
    element.style.background='none'
  })
  mixCard.style.visibility='visible'
  difficultiesHTML[3].style.background='red'
  let arrGreenLength = arrCountCards[0] + arrCountCards[3] + arrCountCards[6]
  let arrBrownLength = arrCountCards[1] + arrCountCards[4] + arrCountCards[7]
  let arrBlueLength = arrCountCards[2] + arrCountCards[5] + arrCountCards[8]
  //  this.removeEventListener('click', addCards);//событие произойдет только один раз
  shuffle(greenCardsData)
  shuffle(brownCardsData)
  shuffle(blueCardsData)

  function dotsArr(cardsData, arr, arrLength, num) {
    cardsData.forEach((element, index) => {
      if (arr.length < arrLength && difficulties[num].id === element.difficulty) {
        arr.push(element)
        //cardsData.splice(index, 1)
        //  arr.push(element.id)
      }
    })
  }
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 1)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 2)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 1)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 2)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 1)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 2)
})
////////////////////////////////////////////////////////////////////////////////////////////ОЧЕНЬ ТЯЖЕЛЫЙ
difficultiesHTML[4].addEventListener('click', ()=>{//события для уровней
  difficultiesHTML.forEach((element)=>{
    element.style.background='none'
  })
  mixCard.style.visibility='visible'
  difficultiesHTML[4].style.background='red'
  let arrGreenLength = arrCountCards[0] + arrCountCards[3] + arrCountCards[6]
  let arrBrownLength = arrCountCards[1] + arrCountCards[4] + arrCountCards[7]
  let arrBlueLength = arrCountCards[2] + arrCountCards[5] + arrCountCards[8]
  //  this.removeEventListener('click', addCards);//событие произойдет только один раз
  shuffle(greenCardsData)
  shuffle(brownCardsData)
  shuffle(blueCardsData)

  function dotsArr(cardsData, arr, arrLength, num) {
    cardsData.forEach((element, index) => {
      if (arr.length < arrLength && difficulties[num].id === element.difficulty) {
        arr.push(element)
       // cardsData.splice(index, 1)
        //  arr.push(element.id)
      }
    })
  }
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 2)
  dotsArr(greenCardsData, arrGreen, arrGreenLength, 1)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 2)
  dotsArr(brownCardsData, arrBrown, arrBrownLength, 1)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 2)
  dotsArr(blueCardsData, arrBlue, arrBlueLength, 1)
})
mixCard.addEventListener('click', addCards)
mixCard.addEventListener('click',()=>{
  mixCard.style.visibility='hidden'
  deckHTML .style.visibility='visible'
})
function shuffle(array) {//перемешать массив
  array.sort(() => Math.random() - 0.5);
}

function addCards() {
  let commonArr = []
  
  function dotArrs(arr, num) {
    let dotArr = []
    arr.forEach((elem, ind) => {
      if (dotArr.length < arrCountCards[num]) {
        // arr.splice(ind,1)
        dotArr.push(elem)
      }
    })
    commonArr.push(dotArr)
  }
  function dotArrs2(arr, num) {
    let dotArr = []
    arr.forEach((elem, ind) => {
      if (dotArr.length < arrCountCards[num]) {
        dotArr.push(elem)

      }
    })
    commonArr.push(dotArr)

  }
  function dotArrs3(arr) {
    arr.splice(0,arr.length)
  }
  dotArrs(arrGreen, 0)
  dotArrs(arrBrown, 1)
  dotArrs(arrBlue, 2)
  dotArrs(arrGreen, 3)
  dotArrs(arrBrown, 4)
  dotArrs(arrBlue, 5)
  dotArrs2(arrGreen, 6)
  dotArrs2(arrBrown, 7)
  dotArrs2(arrBlue, 8)
  dotArrs3(arrGreen)
  dotArrs3(arrBrown)
  dotArrs3(arrBlue)
  
  function dotFull(arr) {
    dots.forEach((dot, dotIndex) => {//заполняем точки-стадии значениями из массива
      dot.textContent = arr[dotIndex].length
     if(arrCountCards.length >= 9){
      arrCountCards.splice(0, arrCountCards.length)
     }
    })
  }
  dotFull(commonArr)//заполняем точки пока неперевернутым массивом
  let commonArrNotReversed = []
  commonArr.reverse()//переворачиваем массив
  commonArr.forEach((el) => {
    commonArrNotReversed.unshift(el)//сохраняем неперевернутый массив

  })
  const sliced_array = [];//разбиваем перевернутый общий массив на подмассивы по три элемента по уровням
  for (let i = 0; i < commonArr.length; i += 3) {
    sliced_array.push(commonArr.slice(i, i + 3));
  }
  sliced_array.forEach((el) => {//перемешиваем элементы в рамках уровня
    shuffle(el)
    shuffle(el)
    shuffle(el)
   
  })

  sliced_array.forEach((element) => {//показываем карты согласно перемешенному массиву и удаляем показанные элементы по клику
    element.forEach((el) => {
      el.forEach((e, i) => {  
        
        let card = deckHTML.appendChild(document.createElement('div'))
        card.style.background = 'url(' + e.cardFace + ')'+'bottom no-repeat'
        card.style.backgroundSize = '130px 190px'
        card.style.width = 130 + 'px'
        card.style.height = 500 + 'px'////если поедет верстка, то изменить этот параметр
        card.style.position = 'absolute'
        card.style.top = '37%'
        card.addEventListener('click', (event) => {
          card.style.display = 'none'
         // sliced_array.splice(i, 1)
          dotFull(commonArrNotReversed)
        })
        
        card.addEventListener('click', (event) => {
          console.log(el)
          card.style.display = 'none'
          el.splice(i, 1)
          dotFull(commonArrNotReversed)
        })
      
      })
    })
  })
}
export {
  brownCardsData,
  blueCardsData,
  greenCardsData
}
