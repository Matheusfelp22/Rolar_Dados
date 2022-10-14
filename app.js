let RandomNumber = Math.floor(Math.random() * 6) + 1

let DiceNumber = 'dice' + RandomNumber + '.png'

let DiceImg = 'img/' + DiceNumber

let Image1 = document.querySelectorAll('img')[0]

Image1.setAttribute('src',DiceImg )

let RandomNumber2 = Math.floor(Math.random() * 6) + 1

let DiceNumber2 = 'dice' + RandomNumber2 + '.png'

let DiceImg2 = 'img/' + DiceNumber2

let Image2 = document.querySelectorAll('img')[1]

Image2.setAttribute('src',DiceImg2 )

if(RandomNumber > RandomNumber2){
    document.querySelector('h1').innerHTML = '🎉 Jogador 1 ganhou'
}
else if(RandomNumber < RandomNumber2){
    document.querySelector('h1').innerHTML = '🎉 Jogador 2 ganhou'
}
else {
document.querySelector('h1').innerHTML = 'Empatou'
}