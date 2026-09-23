    // Variables for chosen theme
    const sport = "Track and Field";
    const events = "110m Hurdles";
    const slowesttime= 23.55;
    const fastesttime = 17.25;
    const isokay = true // My boolean

    const improvement = slowesttime - fastesttime;
    const roomforimprovement = 12.75;
    const total = improvement - roomforimprovement;

    const sports = "My favorite sport is" + sport+" "+ "and the event I ran was"+ events;
    const times = "My slowest time was"+ slowesttime+" "+ "and my fastest time was"+ fastesttime;

    console.log(sports);
    console.log("Is the fastest time okay?" +isokay)
    console.log("Imporvement:" +improvement);
    console.log('Total time needed to shave off' +total);


    document.body.innerHTML += "<p>Result: " + total + "</p>";
    //This adds a new paragraph containing the result of this page
