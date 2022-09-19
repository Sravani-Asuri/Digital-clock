setInterval(setClock,1000)

const hour=document.querySelector('[datahh]')
const min=document.querySelector('[datamh]')
const second=document.querySelector('[datash]')

function setClock(){
    const curdate=new Date()
    const sratio=curdate.getSeconds()/60
    const mratio=(sratio + curdate.getMinutes())/60
    const hratio=(mratio + curdate.getHours())/12
    setRotation(second,sratio)
    setRotation(min,mratio)
    setRotation(hour,hratio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

setClock()