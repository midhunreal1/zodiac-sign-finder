let day = document.getElementById('day')
let month = document.getElementById('month')
let zodiac = document.getElementById('zodiac')
let year = document.getElementById('year')

function zodiacDisplay(){
    if (month.value == 1 ){if( day.value < 20){zodiac.innerHTML = "You are a Capricorn";}
    else {zodiac.innerHTML = "You are an Aquarius";}}
    else if (month.value == 2 ){if( day.value < 19){zodiac.innerHTML = "You are an Aquarius";}
    else {zodiac.innerHTML = "You are a pisces";}}
    else if(month.value == 3 ){if( day.value < 21){zodiac.innerHTML = "You are a Pisces";}
    else {zodiac.innerHTML = "You are an aries";}}
    else if (month.value == 4 ){if( day.value < 20){zodiac.innerHTML = "You are an Aries";}
    else {zodiac.innerHTML = "You are a taurus";}}
    else if (month.value == 5 ){if( day.value < 21){zodiac.innerHTML = "You are a Taurus";}
    else {zodiac.innerHTML = "You are a gemini";}}
    else if( month.value == 6 ){if( day.value < 21){zodiac.innerHTML = "You are a Gemini";}
    else {zodiac.innerHTML = "You are a cancer";}}
    else if (month.value == 7 ){if( day.value < 23){zodiac.innerHTML = "You are a Cancer";}
    else {zodiac.innerHTML = "You are a leo";}}
    else if( month.value == 8 ){if( day.value < 23){zodiac.innerHTML = "You are a Leo";}
    else {zodiac.innerHTML = "You are a virgo";}}
    else if (month.value == 9 ){if( day.value < 23){zodiac.innerHTML = "You are a Virgo";}
    else {zodiac.innerHTML = "You are a libra";}}
    else if (month.value == 10 ){if( day.value < 23){zodiac.innerHTML = "You are a Libra";}
    else {zodiac.innerHTML = "You are a scorpio";}}
    else if (month.value == 11 ){if( day.value < 22){zodiac.innerHTML = "You are a scorpio";}
    else {zodiac.innerHTML = "You are a sagittarius";}}
    else if (month.value == 12 ){if( day.value < 22){zodiac.innerHTML = "You are a Sagittarius";}
    else {zodiac.innerHTML ="You are a Capricorn"}}
}


