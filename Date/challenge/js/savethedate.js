(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText
    const eventDate = getDate(dateEventDom);
    console.log(eventDate)

    const today = new Date()

    const left = eventDate.getTime() - today.getTime()

    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR

    const  daysLeft = parseInt(left / ONE_DAY)
    //left = left - daysLeft * ONE_DAY;

    const hoursLeft = parseInt(left/ONE_HOUR)
    //left = left - ONE_HOUR * hoursLeft;

    const minuteLeft = parseInt(left/ ONE_MINUTE)
    //left = left - minuteLeft * ONE_MINUTE

    const secondsLeft = parseInt(left / 1000)
    addLeftTime(daysLeft, hoursLeft, minuteLeft, secondsLeft)

    function addLeftTime(d, h, m, s) {
        const p = document.createElement("p");
        p.textContent = `contagem regreciva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
        document.querySelector(".hero-content").appendChild(p);
    }



    function  getDate(str) {
        const [date, hour] = str.split(" ");
        const [day, month, year] = date.split("/");
        const [h,m] = hour.split(":")

        return new Date(year, month-1, day, h, m);
    }
})()