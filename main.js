const namesOfParts = {
    leftTop: ".part.left.top",
    leftBot: ".part.left.bottom",
    rightTop: ".part.right.top",
    rightBot: ".part.right.bottom",
    top: ".part.top:not(.right):not(.left)",
    mid: ".part.mid:not(.right):not(.left)",
    bot: ".part.bottom:not(.right):not(.left)",
}
const hashMapNumbers = {
    "0": {
        leftTop: true,
        leftBot: true,
        rightTop: true,
        rightBot: true,
        top: true,
        mid: false,
        bot: true,
    },
    "1": {
        leftTop: false,
        leftBot: false,
        rightTop: true,
        rightBot: true,
        top: false,
        mid: false,
        bot: false,
    },
    "2": {
        leftTop: false,
        leftBot: true,
        rightTop: true,
        rightBot: false,
        top: true,
        mid: true,
        bot: true,
    },
    "3": {
        leftTop: false,
        leftBot: false,
        rightTop: true,
        rightBot: true,
        top: true,
        mid: true,
        bot: true,
    },
    "4": {
        leftTop: true,
        leftBot: false,
        rightTop: true,
        rightBot: true,
        top: false,
        mid: true,
        bot: false,
    },
    "5": {
        leftTop: true,
        leftBot: false,
        rightTop: false,
        rightBot: true,
        top: true,
        mid: true,
        bot: true,
    },
    "6": {
        leftTop: true,
        leftBot: true,
        rightTop: false,
        rightBot: true,
        top: true,
        mid: true,
        bot: true,
    },
    "7": {
        leftTop: false,
        leftBot: false,
        rightTop: true,
        rightBot: true,
        top: true,
        mid: false,
        bot: false,
    },
    "8": {
        leftTop: true,
        leftBot: true,
        rightTop: true,
        rightBot: true,
        top: true,
        mid: true,
        bot: true,
    },
    "9": {
        leftTop: true,
        leftBot: false,
        rightTop: true,
        rightBot: true,
        top: true,
        mid: true,
        bot: true,
    }
}

const applyNumber = (numberId, numberToApply) => {
    const number = hashMapNumbers[numberToApply];
    const numberElement = document.querySelector(numberId);

    for (const part in number) {
        if (number.hasOwnProperty(part)) {
            const partConfig = number[part];
            const partElement = numberElement.querySelector(namesOfParts[part])
            partElement.style = `background-color: ${partConfig ? '#008000' : 'transparent'}`
        }
    }
}


setInterval(() => {
    const atualTiming = new Date()
    const timeObj = {
        hour: atualTiming.getHours(),
        minutes: atualTiming.getMinutes(),
        seconds: atualTiming.getSeconds()
    }

    for (const key in timeObj) {
        if (timeObj.hasOwnProperty(key)) {
            const value = timeObj[key];
            applyNumber(`#decimal-${key}`, (value < 10 ? "0" + value : value.toString())[0])//decimal
            applyNumber(`#unity-${key}`, (value < 10 ? "0" + value : value.toString())[1])//unity
        }
    }
}, 1000)