


// .class
// #my_container
// h1

// .class tag
// .class > tag
// .class ~ tag
// .class + tag
// .class1,.class2


const el = document.getElementById('my_container')

const elements = document.getElementsByClassName('container')


const tags = document.getElementsByTagName('h1')


// console.log(el)
// console.log(el.innerText)
// console.log(el.innerHTML)

// elements.forEach(element => {
//     console.log(element)
//     element.innerHTML = "Hi_"+element.innerHTML
// });

// for(let element of elements){
//     element.innerHTML = "Hi_"+element.innerHTML
// }


console.log(tags)

tags[0].innerHTML = "Hello Everyone"

// for(let tag of tags){
//     console.log(tag)
// }






el.style.color = "brown";

el.style.fontSize = '30px';




const h1Width = tags&&tags.length?getComputedStyle(tags[0]).width:''

console.log(h1Width)

// el.remove()


const studentList = document.querySelector('.student_list .student_list_item');
const ql = document.querySelector('ul li');
const qlAll = document.querySelectorAll('ul li');

console.log(qlAll)

studentList.style.listStyleType = "none"
qlAll.forEach((item,index)=>{
    // if(index%2===0){
    //     item.style.color = "red"
    // }else{
    //     item.style.color = "blue"
    // }
    item.classList.add('active')
})

// console.log(ql.classList)

ql.classList.add('active')
ql.classList.replace('active','disable')






const data = [
    {
        name:'Mukul',
        marks:40
    },
    {
        name:'Shivam',
        marks:35
    },
    {
        name:'Bikash',
        marks:30
    },
    {
        name:'Vishnu',
        marks:28
    },
    {
        name:'Pallavi',
        marks:28
    },
]


data.forEach((item)=>{
    const li = document.createElement('li')

    const name = document.createElement('p');
    const marks = document.createElement('p');
    name.classList.add('heading')
    name.innerHTML = item.name;
    marks.innerHTML = item.marks;

    li.append(name)
    li.append(marks)

    const list = document.getElementById('topper_list');

    list.append(li)
})

// `<div><h1>${name}</h1><div>` template
