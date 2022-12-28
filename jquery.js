var data = []
var row = []
var inpadd = document.querySelector('#inp-add')
var inpfix = document.querySelector('#inp-fix')
var btnadd = document.querySelector('#btn-add')
var btnfix = document.querySelector('#btn-fix')
var content = document.querySelector('.content')
var text = document.querySelector('p')



function render(){
    content.innerHTML = "" ;
         
    for (let i = 0; i < data.length; i++) {
        const node = document.createElement("p");
        const textnode = document.createTextNode(`${data[i]}`);
        node.appendChild(textnode);
        content.appendChild(node)

        node.addEventListener('click',event=>{
            inpfix.value = event.target.innerHTML
            
        })

        
    }
    inpadd.value = ''
    inpadd.focus()
}

btnadd.addEventListener('click',function(){
    let txt = inpadd.value
    data.push(txt)
    render ()
})







