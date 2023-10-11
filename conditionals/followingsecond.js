let hour=Number(prompt(`Enter hour:`));
let mins=Number(prompt(`Enter minutes:`));
let secs=Number(prompt(`Enter seconds:`));
if(hour>=0 && hour<=23 && mins>=0 && mins<=59 && secs>=0 && secs<=59){
    nextSecond=secs+1;
    nextMins=mins;
    nextHour=hour;
}else{
    console.log(`Invalid time. Please enter a valid time.`);
}
if(nextSecond===60){
    nextSecond=0;
    nextMins++;
    if(nextMins===60){
        nextMins=0;
        nextHour++;
        if(nextHour===24){
            nextHour=0;
        }
        
    }
    
}

console.log(`${hour}h${mins}m${secs}s should give ${nextHour}h${nextMins}m${nextSecond}s`);