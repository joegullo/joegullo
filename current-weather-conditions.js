const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://devapi.qweather.com/v7/weather/now?location=73.75,42.65&unit=i&lang=en&key=c9b1bb2c019b4a79ae139442d0109b16', options)
  .then(response => response.json())
  .then(response => {
    const temperature = response.now.temp;
    const feelslike = response.now.feelsLike;
    const weather = response.now.text;
    const icon = response.now.icon;
 
  
 //Gets the current time
  
 const date = new Date();
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
});
const formattedTime = timeFormatter.format(date); 
  
  
// Exports data into DIV for website.   
 document.getElementById('current-weather').innerHTML += `The current time in Albany, New York is <b>${formattedTime}</b>. The weather is <b><i class="qi-${icon}-fill"></i> ${weather}</b> with a temperature of <b>${temperature}°F</b> <i>(feels like: ${feelslike}°F)</i>.`;
  }) 
