



function getMessage(){
    // return window.prompt('Enter Task')

    const input = document.getElementById('task_msg')

    const msg = input&& input.value;
    return msg||""

}
function clearInput(){
    document.getElementById('task_msg').value = ''
}
function addTask(){
    
    const msg = getMessage()
    if(msg){
   // const msg = "Lorem Ipsum \n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    
    
    const el = document.createElement('li')
    
    
    el.innerText = msg.trim()
   
   
    const list = document.getElementById('list-container-tasks')
   
   
        // list.append(el)
        list.prepend(el)
        clearInput()
    }else{
        window.alert('Please enter task')
    }

 
}

const addTaskBtn = document.getElementById('add_task_btn')
const form = document.getElementById('task_form');




// addTaskBtn.addEventListener('click',function(e){
//     addTask()
// })

form.addEventListener('submit',function(e){
    e.preventDefault();

    addTask()


})
