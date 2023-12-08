const hour=document.getElementById("hour")
const min = document.getElementById("minutes")
const sec= document.getElementById("seconds")
const ampm = document.getElementById("ampm")
function clock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    if(h>12){
        h-=12
        ampm.innerText="PM"
    }
    else{
        ampm.innerText="AM"
    }
    h=h<10 ? "0"+h+":" : h+":"
    m=m<10?"0"+m+":":m+":"
    s=s<10?"0"+s:s
    hour.innerText=h
    min.innerText=m
    sec.innerText=s
    setTimeout(()=>{
        clock()
    },1000)
}
clock()