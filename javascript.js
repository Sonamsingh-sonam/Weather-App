const api_key="1eb4ea42bfc5134890cd0572180c8465";
let web="https://api.openweathermap.org/data/2.5/weather?q=";
const btnn=document.querySelector("#get_weather")

btnn.addEventListener('click',display)

function display(){
    const valuename=document.querySelector("input").value
fetch(`${web}${valuename}&appid=${api_key}&units=metric`)
.then((response)=>{
const data=response.json()
return data
}).then((data)=>{
    console.log(data)
    const weatherinfo=document.querySelector(".lower");
    const name=data['name']
    const temp =data["main"]['temp']
    const feel_like =data["main"]["feels_like"]
    const humidity =data["main"]["humidity"]
    const wind_speed =data["wind"]["speed"]
    const desc =data["weather"][0]["description"]

    weatherinfo.innerHTML=` <h3>${name}</h3>
                <h1>${temp} C</h1>
                <p>${desc}</p>
                <hr>
                <div class="foter">
                    <div class="value">
                        <div>Humidity:</div>
                        <div>${humidity}%</div>
                    </div>
                    <div class="value">
                        <div>Wind speed:</div>
                        <div>${wind_speed}m/s</div>
                    </div>
                    <div class="value">
                        <div>Feels like:</div>
                        <div>${feel_like}</div>
                    </div>
                </div>
`



})
}