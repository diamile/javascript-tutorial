const form=document.getElementById('my-form');
document.getElementById('gramme').style.backgroundColor="green";
document.getElementById('gramme').style.height="100px";


document.getElementById('kilogramme').style.backgroundColor="red";
document.getElementById('kilogramme').style.height="100px";

document.getElementById('tonne').style.backgroundColor="blue";
document.getElementById('tonne').style.height="100px";

form.addEventListener('input',(e)=>{
    e.preventDefault();
    const val=e.target.value;

    document.getElementById('valueGramme').innerHTML=val/1000;
    document.getElementById('valueKilogramme').innerHTML=val/1000000;
    document.getElementById('valueTonne').innerHTML=val/1000000000;
    
    
   

});