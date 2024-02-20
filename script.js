const form = document.querySelector("form");
const input= document.querySelector("input");
const cityName = document.getElementById("cityname");
const temp =document.getElementById("temp");
const img = document.getElementById("img");
const hum =document.getElementById("humidity");
const cloudly = document.getElementById("cloud")
const time = document.getElementById("time");

// forecastdates get element by
const date1 = document.getElementById("day1");
const date2 = document.getElementById("day2");
const date3 = document.getElementById("day3");
const date4 = document.getElementById("day4");
const date5 = document.getElementById("day5");
const date6 = document.getElementById("day6");
const date7 = document.getElementById("day7");

// forecastdayimges get element by
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
// temp get Element by 
const temp1 = document.getElementById("tem1");
const temp2 = document.getElementById("tem2");
const temp3 = document.getElementById("tem3");
const temp4 = document.getElementById("tem4");
const temp5 = document.getElementById("tem5");
const temp6 = document.getElementById("tem6");
const temp7 = document.getElementById("tem7");
// console.log(temp1)
// console.log(date1,date2,date3,date4,date5,date6,date7)



const getWeatherData = async(e)=>{
    e.preventDefault();
    const response =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e934277d220b43bcbb1102544232407&q=${input.value}&days=7&aqi=yes&alerts=no`)
    const data = await response.json();
    // console.log(data);
    let locationName = data.location.name;
    let temp_c =  data.current.temp_c;
    let icon = data.current.condition.icon;
    let humi = data.current.humidity;
    let clouds =data.current.condition.text;
    let timing =data.location.localtime;
    let forecastDays = data.forecast.forecastday;
   
    //  target on images 
    let forecastDaysimg1 = data.forecast.forecastday[0].day.condition.icon;
    let forecastDaysimg2 = data.forecast.forecastday[1].day.condition.icon;
    let forecastDaysimg3 = data.forecast.forecastday[2].day.condition.icon;
    let forecastDaysimg4 = data.forecast.forecastday[3].day.condition.icon;
    let forecastDaysimg5 = data.forecast.forecastday[4].day.condition.icon;
    let forecastDaysimg6 = data.forecast.forecastday[5].day.condition.icon;
    let forecastDaysimg7 = data.forecast.forecastday[6].day.condition.icon;

    // taget on temperature forecast 
    let forecastDaystemp1 = data.forecast.forecastday[0].day.maxtemp_c;
    let forecastDaystemp2 = data.forecast.forecastday[1].day.maxtemp_c;
    let forecastDaystemp3 = data.forecast.forecastday[2].day.maxtemp_c;
    let forecastDaystemp4 = data.forecast.forecastday[3].day.maxtemp_c;
    let forecastDaystemp5 = data.forecast.forecastday[4].day.maxtemp_c;
    let forecastDaystemp6 = data.forecast.forecastday[5].day.maxtemp_c;
    let forecastDaystemp7 = data.forecast.forecastday[6].day.maxtemp_c;

    // taget on dates 
      let  firstDay = forecastDays[0].date;
      let  secondDay = forecastDays[1].date;
      let  thirdDay = forecastDays[2].date;
      let  fourthDay = forecastDays[3].date;
      let  fifthDay = forecastDays[4].date;
      let  sixthDay = forecastDays[5].date;
      let  seventhDay = forecastDays[6].date;


      

  
      
      // console.log(firstDay)
    //   const forecastDate = firstDay.date;
    // let dayss = data.forecast.forecastday[1].date;
    // let dayss = data.forecast.forecastday[2].date;
    // let dayss = data.forecast.forecastday[3].date;
    // let dayss = data.forecast.forecastday[4].date;
    // let dayss = data.forecast.forecastday[5].date;
    // let dayss = data.forecast.forecastday[6].date;

    cityName.innerText=locationName;
    temp.innerText= `${temp_c}°`;
    hum.innerText = `HUMIDITY:${humi}%`;
    cloudly.innerText = clouds;
    time.innerText = timing;

    // input value  change dates
    date1.innerText = firstDay;
    date2.innerText = secondDay;
    date3.innerText = thirdDay;
    date4.innerText = fourthDay;
    date5.innerText = fifthDay;
    date6.innerText = sixthDay;
    date7.innerText = seventhDay;
    // input value change temp 
    temp1.innerText = forecastDaystemp1;
    temp2.innerText = forecastDaystemp2;
    temp3.innerText = forecastDaystemp3;
    temp4.innerText = forecastDaystemp4;
    temp5.innerText = forecastDaystemp5;
    temp6.innerText = forecastDaystemp6;
    temp7.innerText = forecastDaystemp7;
    // changes images 

    img1.setAttribute("src",forecastDaysimg1);
    img2.setAttribute("src",forecastDaysimg2);
    img3.setAttribute("src",forecastDaysimg3);
    img4.setAttribute("src",forecastDaysimg4);
    img5.setAttribute("src",forecastDaysimg5);
    img6.setAttribute("src",forecastDaysimg6);
    img7.setAttribute("src",forecastDaysimg7);
    img.setAttribute("src",icon);
    form.reset();
}
form.addEventListener("submit",getWeatherData);


