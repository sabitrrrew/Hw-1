const smallBox=document.querySelector('.smallBox')
const BigBox=document.querySelector('.bigBox')


function VerstaBig(){
    BigBox.style.position = 'relative'
    BigBox.style.background = 'Red'
    BigBox.style.height = '300px'
    BigBox.style.width = '1150px'
}
VerstaBig()

function Verstasmall(){
    smallBox.style.position = 'Absolute'
    smallBox.style.background = 'blue'
    smallBox.style.height = '50px'
    smallBox.style.width = '50px'
    smallBox.style.transition = '1s'
    smallBox.style.left = '0'
    smallBox.style.top = '0'
}
Verstasmall()


let Postop = 0
let Posleft = 0

function MoveSmall(){
    if(Posleft<=1000 && Postop===0){
        Posleft+=100
        smallBox.style.left =`${Posleft}px`
        setTimeout(MoveSmall,100)
    // }else if(Posleft===1100 && Postop!==500){
    //     Postop+=100
    //     smallBox.style.top =`${Postop}px`
    //     setTimeout(MoveSmall,100)
    // }else if ( Posleft!==0 && Postop===500){
    //     Posleft-=100
    //     smallBox.style.left =`${Posleft}px`
    //     setTimeout(MoveSmall,100)
    // }else if(Posleft===0 && Postop>=0){
    //     Postop-=100
    //     smallBox.style.top =`${Postop}px`
    //     setTimeout(MoveSmall,100)
    }
}
MoveSmall()
