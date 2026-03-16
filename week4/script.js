
document.getElementById("modeToggle").addEventListener("change",()=>{
document.body.classList.toggle("dark");
});


async function generateUser(){

let res = await fetch("https://randomuser.me/api/");
let data = await res.json();

let user = data.results[0];

document.getElementById("userCard").innerHTML += `
<img src="${user.picture.medium}">
<h3>${user.name.first} ${user.name.last}</h3>
<p>${user.email}</p>
<p>${user.location.country}</p>
`;

}


async function getWeather(){

let city = document.getElementById("cityInput").value;

let geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
let geoData = await geo.json();

if(!geoData.results){
document.getElementById("weatherResult").innerText = "City not found";
return;
}

let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geoData.results[0].latitude}&longitude=${geoData.results[0].longitude}&current_weather=true`);
let data = await weather.json();

let w = data.current_weather;

let conditions = {
0:"Clear Sky ☀️",
1:"Mainly Clear 🌤",
2:"Partly Cloudy ⛅",
3:"Cloudy ☁️",
45:"Fog 🌫",
48:"Depositing Rime Fog 🌫",
51:"Light Drizzle 🌦",
53:"Drizzle 🌦",
55:"Heavy Drizzle 🌧",
61:"Rain 🌧",
63:"Moderate Rain 🌧",
65:"Heavy Rain 🌧",
71:"Snow ❄️",
80:"Rain Showers 🌧",
95:"Thunderstorm ⛈"
};

let condition = conditions[w.weathercode] || "Unknown";

document.getElementById("weatherResult").innerHTML = `
Temperature: ${w.temperature}°C <br>
Wind Speed: ${w.windspeed} km/h <br>
Weather Condition: ${condition}
`;

}


function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task==="") return;

let li = document.createElement("li");
li.innerHTML = `
<span class="task-text">${task}</span>
<div>
<button class="complete-btn">✔</button>
<button class="delete-btn">🗑</button>
</div>
`;
li.querySelector(".complete-btn").onclick = function(){
li.querySelector(".task-text").classList.toggle("completed");
};

li.querySelector(".delete-btn").onclick = function(){
li.remove();
};
document.getElementById("taskList").appendChild(li);
input.value="";
}


function filterProducts(){

let input = document.getElementById("searchBox").value.toLowerCase();

let items = document.querySelectorAll("#productList li");

items.forEach(item=>{
let text = item.innerText.toLowerCase();

item.style.display = text.includes(input) ? "block" : "none";

});

}