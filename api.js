
    async function weather(place){

       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`);
       const result =await response.json();
       return result;
    }
    function hello(){
        
        var place=document.getElementById("input").value;
        var data=weather(place);
        data.then(abc=> document.getElementById("lat").innerHTML=abc.coord.lat);
        data.then(abc=> document.getElementById("lon").innerHTML=abc.coord.lon);
        data.then(abc=> document.getElementById("place").innerHTML=abc.name);
        data.then(abc=> document.getElementById)
    }
 
  