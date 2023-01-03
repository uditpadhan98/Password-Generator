function passGenerate(length){
    let password='';
    const data="abcdefghijklmnopqrstuvwxyz"

    for(let i=0;i<length;i++){
        password+=data[Math.floor(Math.random()*data.length)]
    }
    return password;
}


var generate=document.getElementById("generate")
generate.addEventListener('click',()=>{
    var number=document.getElementById("input").value;

    if(number==null || number=='' || number==undefined){
        alert('Please enter a valid number');
    }
    else{
        var number=document.getElementById("input").value;
        var pass=document.getElementById('pass');

        pass.innerHTML=passGenerate(number);
        //btn.style.display='block';
    }

})

var pass=document.getElementById('pass');
var btn=document.getElementById('copy');

btn.addEventListener('click',()=>{
    window.getSelection().removeAllRanges();

    const range=document.createRange();
    range.selectNode(pass);

    window.getSelection().addRange(range)
    document.execCommand('copy');

    window.getSelection().removeAllRanges();

    btn.innerHTML='copied'
})