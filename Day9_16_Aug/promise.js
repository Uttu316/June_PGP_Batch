const output = 0

console.log('Promise Started')
const p = new Promise((resolve,reject)=>{
    
  //    asynchronus task
  
  
  
  setTimeout(()=>{
    
    
      const value = output;
   
    if(value){
        resolve(value)
    }else{
      reject(new Error('oops, No money next time please'))
    }
   
 
    
  },3000)
  
  
})

console.log('Promise In Process')

p.then((response)=>{
  console.log('Yaay, let go on date with ',response)
}).catch((error)=>{
  console.log(error.message)
})

console.log('Promise passed')

