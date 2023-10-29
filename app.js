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

                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+' °C';
                document.querySelector(".humidity").innerHTML=data.main.humidity+' %';
                document.querySelector(".wind").innerHTML=data.wind.speed+' km/hr';

                weatherInfo=data.weather[0].main;
                
                iconUrl={
                "Clear":"images/images/clear.png",
                "Clouds":"images/images/clouds.png",
                "Drizzle":"images/images/drizzle.png",
                "Haze":"images/images/mist.png",
                "Rain":"images/images/rain.png",
                "Snow":"images/images/snow.png"
                }
                weathericon.src = iconUrl[weatherInfo];
                
                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";

                

                }
                
            }

            searchBtn.addEventListener("click", ()=>{
                checkWeather(searchBox.value);
            })

            var books=document.querySelector('#book-list li .name');
            books=document.querySelectorAll('#book-list li .name')

            Array.from(books).forEach(function(book){
                console.log(book);
            })

            var btns=document.querySelectorAll('#book-list .delete');

            Array.from(btns).forEach(function(btn){
                btn.addEvent
            })

            
