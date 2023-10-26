const apiKey="5431cea4928259758e577c8cd26f641d";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

            const searchBox=document.querySelector(".search input");
            const searchBtn=document.querySelector(".search button");
            const weathericon=document.querySelector(".weather-icon");

            async function checkWeather(city){
                const response = await fetch(apiUrl+city+`&appid=${apiKey}`);

                if(response.status==404){
                    document.querySelector(".error").style.display="block";
                    document.querySelector(".weather").style.display="none";
                } else{

                    var data=await response.json();

                console.log(data);
                }
            }