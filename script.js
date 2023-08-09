const time=document.getElementById("timer");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");


var starttime = 0;
var currenttime=0;
var paused=true;
var escapetime=0;
var endtime=0;
var resttime=0;
var totalrest=0;
var test=0;

var hr=0;
var min=0;
var sec=0;

function updatetime()
{
   if(! paused)
   {

    // console.log(totalrest);
    currenttime=(new Date() - starttime)- totalrest;
    currenttime=Math.floor(currenttime/1000);
    // console.log(currenttime);

    hr=Math.floor((currenttime/3600)%60);
    min=Math.floor((currenttime/60)%60);
    sec=Math.floor(currenttime%60);
    
    hr=format(hr);
    min=format(min);
    sec=format(sec);
    
    time.textContent=`${hr}:${min}:${sec}`;
    // console.log(paused);

   }

}
function format(data)
{
    return data>=10 ? data : `0${data}`;
}

start.addEventListener("click",() =>{

    if(paused)
    {
        if(test===0)
        {
            test=1;
            starttime=new Date();
        }
        else
        {
            escapetime=new Date();
            resttime=(escapetime-endtime);
            totalrest+=resttime;
        }
        start.disabled=true;
        paused=false;

        setInterval(updatetime,1000)

    }
})

stop.addEventListener("click",() =>{

    if( ! paused)
    {
        paused=true;
        start.disabled=false;
        endtime=new Date();
    }
})

reset.addEventListener("click",()=>{
    start.disabled=false;
    starttime = 0;
    currenttime=0;
    paused=true;
    escapetime=0;
    totalrest=0;
    endtime=0;
    resttime=0;
    test=0;

    hr=0;
    min=0;
    sec=0;
    time.textContent="00:00:00";

})