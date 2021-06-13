var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var weathericon = document.querySelector('.weathericon');
var hp = document.querySelector('.hp');
var fl = document.querySelector('.fl');
var rangetemp = document.querySelector('.rangetemp');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=909ab9fe44a1e87a3d566d5abc8ad83d')
.then(response => response.json())
.then(data => {
    //var iconcode = a.weather[0].icon;
    //var iconurl = src("http://openweathermap.org/img/w/" + iconcode + ".png");
  var tempValue = Math.round(data.main.temp-273);
  var descValue = data.weather[0].description;
  //var iconimg = src="http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
  var country = data.sys.country.toUpperCase();
  var humidity_Value = data.main.humidity;
 var pressure_Value = data.main.pressure;
 var feelslike = Math.round(data.main.feels_like-273);
 var mintemp = Math.round(data.main.temp_min-273);
 var maxtemp = Math.round(data.main.temp_max-273);

  main.innerHTML = input.value.toUpperCase()+", "+country;
  temp.innerHTML = "Temperature - "+tempValue+" °C";
  desc.innerHTML = descValue;
  hp.innerHTML = "Humidity - "+humidity_Value+" %  |"+"  Pressure - "+pressure_Value;
  fl.innerHTML = "Feels like - "+feelslike+" °C";
  rangetemp.innerHTML = "Lowest - "+mintemp+" °C  |"+" Highest - "+maxtemp+" °C\n";

})

.catch(err => alert("Enter a correct city name!"));
})

var rs = document.querySelector('.rs');
var dollars = document.querySelector('.dollars');
var euro = document.querySelector('.euro');

fetch('https://api.cryptonator.com/api/full/btc-usd')
.then(response => response.json())
.then(value => {
  var usd = value.ticker.price;
  var usd_change = value.ticker.change;
  if(usd_change<0)
    dollars.innerHTML = "USD = "+usd+"$ \nDecrement = "+ usd_change+"$";
  else 
    dollars.innerHTML = "USD = "+usd+"$  \nIncrement = "+ usd_change+"$";
    
    var inr = (value.ticker.price)*73.23;
  var inr_change = (value.ticker.change)*73.23;
  if(usd_change<0)
    rs.innerHTML = "INR = Rs "+inr+"/- \nDecrement = Rs "+ inr_change;
  else 
    rs.innerHTML = "INR = Rs "+inr+"/-  \nIncrement = Rs "+ inr_change;
    
    var eur = (value.ticker.price)*0.83;
  var eur_change = (value.ticker.change)*0.83;
  if(usd_change<0)
  euro.innerHTML = "EURO = "+eur+" Euro  \nDecrement = "+ eur_change+" Euro";
  else 
  euro.innerHTML = "EURO = "+eur+" Euro  \nIncrement = "+ eur_change+" Euro";
})