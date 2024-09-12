const str=document.getElementById('btn1');
const reg=document.getElementById('btn2');
const log=document.getElementById('btn3');
const sub=document.getElementById('btn4');
const subb=document.getElementById('btn5');
const s2=document.getElementById('s2');
const s3=document.getElementById('s3');
const s4=document.getElementById('s4');
const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const p3= document.getElementById('p3');
const n= document.getElementById('n');
const e= document.getElementById('e');
const ee= document.getElementById('ee');
const a= document.getElementById('a');
const form=document.querySelector('form');
const h2=document.getElementById('h2');

var etest=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

str.addEventListener('click',() =>{
    s2.classList.remove('s');
});

reg.addEventListener('click',() =>{
    s3.classList.remove('s'); 
});

log.addEventListener('click',() =>{
    s4.classList.remove('s'); 
});

subb.addEventListener('click',(event) =>{
    event.preventDefault(); 

    let err1 = document.getElementById('err1');
    let err2 = document.getElementById('err2');
    let err3 = document.getElementById('err3');

    if (err1) {
        err1.remove();
    }
    if (err2) {
        err2.remove();
    }

    if (err3) {
        err3.remove();
    }
    if(ee.value=='' || p3.value=='' ){
       const p = document.createElement('p');
       const txt = document.createTextNode('fill the required fields');
       p.appendChild(txt);
       p.id='err1';
       p.classList.add('err');
       form.style.top='5%';
       subb.insertAdjacentElement('afterend', p);
    }
    else if(etest.test(ee.value)==false){
        console.log('false');
       const p = document.createElement('p');
       const txt = document.createTextNode('email is not valid');
       p.appendChild(txt);
       p.id='err2';
       p.classList.add('err');
       form.style.top='5%';
       subb.insertAdjacentElement('afterend', p);
    }
 else if(ee.value==='user@tech.org' && p3.value==='passcode'){
    console.log('true');
    s5.classList.remove('s');
    s4.classList.add('s');

    const text=
   `Name: user
    \nEmail: user@tech.org
    \nAge: 20
    \nGender: Female
    \nRole: student`;

    const tx = document.createTextNode(text);
    const prg = document.createElement('p');
    prg.appendChild(tx);
    prg.id='prg';
    h2.insertAdjacentElement('afterend', prg);
}
else{
   var p = document.createElement('p');
   const txt = document.createTextNode('password is incorrect');
   p.appendChild(txt);
   p.id='err3';
   p.classList.add('err');
   form.style.top='5%';
   subb.insertAdjacentElement('afterend', p);
}
});

sub.addEventListener('click',(event) => {
event.preventDefault(); 

let err1 = document.getElementById('err1');
let err2 = document.getElementById('err2');
let err3 = document.getElementById('err3');

    if (err1) {
        err1.remove();
    }
    if (err2) {
        err2.remove();
    }
    if (err3) {
        err3.remove();
    }
if(p1.value=='' || p2.value=='' || n.value == '' || e.value == '' || a.value == '' || rol.value == 'Current role' ){
    console.log('false');
   const p = document.createElement('p');
   const txt = document.createTextNode('fill the required fields');
   p.appendChild(txt);
   p.id='err1';
   p.classList.add('err');
   form.style.top='5%';
   sub.insertAdjacentElement('afterend', p);
}
else if(etest.test(e.value)==false){
    console.log('false');
   const p = document.createElement('p');
   const txt = document.createTextNode('email is not valid');
   p.appendChild(txt);
   p.id='err2';
   p.classList.add('err');
   form.style.top='5%';
   sub.insertAdjacentElement('afterend', p);
}
else if(p1.value===p2.value){
    console.log('true');
    s5.classList.remove('s');
    s3.classList.add('s');
    const g = document.querySelector('input[name="gender"]:checked');
    console.log(g);
    const text=
   `Name: ${n.value}
    \nEmail: ${e.value}
    \nAge: ${calculateAge(a.value)}
    \nGender: ${g.value}
    \nRole: ${rol.value}`;

    const tx = document.createTextNode(text);
    const prg = document.createElement('p');
    prg.appendChild(tx);
    prg.id='prg';
    h2.insertAdjacentElement('afterend', prg);
}
else{
   var p = document.createElement('p');
   const txt = document.createTextNode('password does not match');
   p.appendChild(txt);
   p.id='err3';
   p.classList.add('err');
   form.style.top='5%';
   sub.insertAdjacentElement('afterend', p);
}
});