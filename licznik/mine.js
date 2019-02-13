const counter = () => {
    let time = 0;
    const howLong = () => {
        time++;
        document.body.textContent = `${time} s`;
    }
    return howLong;
}

const showTime = counter();

setInterval(showTime, 1000);