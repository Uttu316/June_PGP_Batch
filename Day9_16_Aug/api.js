



fetch('https://reqres.in/api/users').then((res)=>res.json()).then((res)=>{
   const users = res.data
   users.forEach(element => {
        const p = document.createElement('p')
        p.innerHTML = element.first_name+ " "+element.last_name
        document.body.append(p)
   });
}).catch((err)=>{
    console.log(err)
})