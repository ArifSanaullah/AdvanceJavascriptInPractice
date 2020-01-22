function calcTemp(temp, cold = 10) {
    console.log(temp, cold);
    if (temp < cold) {
        console.log("It's cold here.");
    } else {
        console.log("It's not so cold here.");
    }
}

calcTemp();