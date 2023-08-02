

let sec = 0;

setInterval(()=>{
    sec++;
    const h = parseInt(sec / 3600);
    const m = parseInt((sec % 3600) / 60);
    const s = parseInt(sec % 60);
    const str = h+":"+m+":"+s
    document.getElementById('timer').innerHTML = str
},1000)