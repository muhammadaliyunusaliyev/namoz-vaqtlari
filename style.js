fetch('https://islomapi.uz/api/present/day?region=Toshkent')
.then(response => response.json())
.then(data => console.log(data))

const today = new Date();
const prayerTimes = prayTimes.getTimes(today, ['Bamdod', 'Peshin', 'Asr', 'Shom', 'Xufton'], '+05:00');

// Update the HTML with the prayer times
document.getElementById('bamdod').innerHTML = prayerTimes.bamdod;
document.getElementById('peshin').innerHTML = prayerTimes.peshin;
document.getElementById('asr').innerHTML = prayerTimes.asr;
document.getElementById('shom').innerHTML = prayerTimes.shom;
document.getElementById('xufton').innerHTML = prayerTimes.xufton;


prayTimes.setMethod('ISNA');
prayTimes.adjust({ bamdod: -15, xufton: 15 }); 
prayTimes.setTimeFormat(prayTimes.Time12);
prayTimes.setCoordinates(41.3111, 69.2794);