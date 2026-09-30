let racetime = number(prompt("What was your last 110m hurdles time in seconds?"));
let hithudrles = prompt("Did you hit any hurdles? (yes/no)").toLowerCase();
let wearingspikes = prompt("Were you wearing spikes? (yes/no)").toLowerCase();

const targettime = 17.25;

if (racetime <= targettime){ //This rule is to help establish the time 
    console.log("Hurray! You tied or beat with your previous time of" + targettime + " seconds.");

}
if(hithudrles === "yes") { // This one adds the variable of hitting hurdles in an actual race.
    console.log("You sure can run fast, but you hit some hurdles.");
} else if(hithudrles === "no"){
    console.log("Great job!");
}

let timetoshave = racetime - targettime; // Math rule to determine the time needed to shave
console.log("You ran" +racetime + "you need to shave off" +timetoshave +"seconds to hit your goal.");
if (wearingspikes === "no"){// this one is just for if you wore spikes or not
    console.log("My advice is to slap on some spikes and try running with them ");
}else if(wearingspikes === "yes"){
    console.log("Well since you wore spikes I don't have anything to say");
}
if (hithudrles !== "no"){ // This one is the last rule
    console.log("Hitting hurdles can really slow you down. That can hurt any record you try to set");
}else{
    console.log("Make sure to pay attention to how you run.");
}