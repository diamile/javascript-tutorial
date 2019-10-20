const Name=document.getElementById('inputName');
const Email=document.getElementById('inputEmail');
const form=document.getElementById('my-form');
const users=document.getElementById('users');
const button=document.getElementById('button');
const msg=document.getElementById("msg");


button.addEventListener('click',function(e){
    e.preventDefault();
    if(Name.value==="" && Email.value===""){
     msg.appendChild(document.createTextNode('Veuillez remplire correctement les champs'));
     msg.classList.add('error');

     setTimeout(function(){
      msg.remove();
     },3000)
    }else{
        const p=document.createElement('p');
        p.appendChild(document.createTextNode(`${Name.value}:${Email.value}`));
        p.style.color="black";
        p.style.textAlign="center";
        p.style.backgroundColor="gray";
        p.style.height="30px";
        users.classList.add('list');
        users.style.marginTop="10px";
        users.appendChild(p);

        Name.value="";
        Email.value="";
    
    }
   
    
});


