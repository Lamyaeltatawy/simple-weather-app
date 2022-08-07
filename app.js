const head=document.querySelector('.container');
console.dir(head);
head.style.color='#3973ac';
head.style.background='#cce6ff';
head.style.textAlign = 'center';
head.style.fontSize = '40PX';
head.style.border = "1px solid #80c1ff";
/*head.style.width = "1000px";*/
head.style.alignItems = "center";
const search=document.querySelector('input[name="city"]');
search.setAttribute('placeholder','Search For A City');

/*cont button=document.querySelector('button');*/
let weather ={
"apikey=":"8797b476b47b78b2c3f4035a9e619c5e"
fetchWeather:function(){
fetch(http://api.openweathermap.org/data/2.5/weather%20q=" + town + "app%20id=%208797b476b47b78b2c3f4035a9e619c5e
).then((response)=>response.json())
.then((data)=>console.log(data));
}




}

















