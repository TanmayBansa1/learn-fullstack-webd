// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(()=>{
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours<10 ? hours = "0" + hours : hours;
    minutes<10 ? minutes = minutes + "0": minutes;

    seconds<10 ? seconds = "0" + seconds : seconds;
    const timeString = `${hours}:${minutes}:${seconds}`;

    console.log(timeString);

},1000);

setInterval(()=>{
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let AM_PM = "AM";
    if(hours>12){
        hours = hours - 12;
        AM_PM = "PM";
    }
    hours<10 ? hours = "0" + hours : hours;
    minutes<10 ? minutes = minutes + "0": minutes;

    seconds<10 ? seconds = "0" + seconds : seconds;
    const timeString = `${hours}:${minutes}:${seconds}:${AM_PM}`;

    console.log("\t"+timeString);

},1000);




