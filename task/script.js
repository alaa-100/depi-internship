const str=document.getElementById('btn1');
// const reg=document.getElementById('btn2');
// const log=document.getElementById('btn3');
// const sub=document.getElementById('btn4');
// const subb=document.getElementById('btn5');
// const s1=document.getElementById('s1');
// const s2=document.getElementById('s2');
// const s3=document.getElementById('s3');
// const s4=document.getElementById('s4');
// const p1= document.getElementById('p1');
// const p2= document.getElementById('p2');
// const p3= document.getElementById('p3');
// const n= document.getElementById('n');
// const e= document.getElementById('e');
// const ee= document.getElementById('ee');
// const a= document.getElementById('a');
// const form=document.querySelector('form');
// const h2=document.getElementById('h2');

const frag = document.createDocumentFragment();
const s2 = document.createElement('section');
const reg = document.createElement('button');
const log = document.createElement('button');
const sub = document.createElement('button');
const s3 = document.createElement('section');
    const form=document.createElement('form');
    const h2=document.createElement('h2');
    const l0=document.createElement('label');
    const l1=document.createElement('label');
    const l2=document.createElement('label');
    const l3=document.createElement('label');
    const l4=document.createElement('label');
    const l5=document.createElement('label');
    const l6=document.createElement('label');
    const l7=document.createElement('label');
    const i0=document.createElement('input');
    const i1=document.createElement('input');
    const i2=document.createElement('input');
    const i3=document.createElement('input');
    const i4=document.createElement('input');
    const i5=document.createElement('input');
    const i6=document.createElement('input');
    const sel=document.createElement('select');
    const o0=document.createElement('option');
    const o1=document.createElement('option');
    const o2=document.createElement('option');
    const o3=document.createElement('option');
    const o4=document.createElement('option');
    const tx1=document.createTextNode('Female');
    const tx2=document.createTextNode('Male');
    const br0=document.createElement('br');
    const br1=document.createElement('br');
    const br2=document.createElement('br');
    const br3=document.createElement('br');
    const br4=document.createElement('br');
    const br5=document.createElement('br');

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
    // s2.classList.remove('s');  
    s1.remove();
    s2.appendChild(reg);
    reg.innerText='Registration';
    reg.id='btn2';
    reg.classList.add('btn');
    s2.appendChild(log);
    log.innerText='Login';
    log.id='btn3';
    log.classList.add('btn');
    frag.appendChild(s2);
    document.body.appendChild(frag);
});

reg.addEventListener('click',() =>{
    // s3.classList.remove('s'); 
    s2.remove();
    const frag=document.createDocumentFragment();
    h2.innerText='Registration Form';
    l0.setAttribute('for','n');
    l0.innerText='Name: ';
    l1.setAttribute('for','e');
    l1.innerText='Email: ';
    l2.setAttribute('for','a');
    l2.innerText='DOB: ';
    l3.innerText='Gender: ';
    l4.classList.add('g');
    l5.classList.add('g');
    l6.setAttribute('for' ,'rol');
    l6.innerText='Role: ';
    l7.setAttribute('for' ,'p');
    l7.innerText='Password: ';
    const attr0 = {
        id: "n",
        type: "text",
        name: "name",
        required: ""
      };
      for (let key in attr0) {
        i0.setAttribute(key, attr0[key]);
      }
    const attr1 = {
        id: "e",
        type: "email",
        name: "email",
        required: ""
      };
      for (let key in attr1) {
        i1.setAttribute(key, attr1[key]);
      }  
      const attr2 = {
        id: "a",
        type: "date",
        name: "age",
        required: ""
      };
      for (let key in attr2) {
        i2.setAttribute(key, attr2[key]);
      }
      const attr3 = {
        type: "radio",
        name: "gender",
        value:"Female",
        checked: ""
      };
      for (let key in attr3) {
        i3.setAttribute(key, attr3[key]);
      }
      const attr4 = {
        id:'m',
        type: "radio",
        name: "gender",
        value:"Male"
      };
      for (let key in attr4) {
        i4.setAttribute(key, attr4[key]);
      }
      const attr5 = {
        id: "p1",
        type: "password",
        name: "password",
        required: ""
      };
      for (let key in attr5) {
        i5.setAttribute(key, attr5[key]);
      }
      const attr6 = {
        id: "p2",
        type: "password",
        name: "password",
        placeholder:"Re-Enter",
        required: ""
      };
      for (let key in attr6) {
        i6.setAttribute(key, attr6[key]);
      }
    sel.id='rol';
    sel.setAttribute('required','');
    o0.setAttribute('disabled','');
    o0.setAttribute('selected','');
    o0.innerText='Current role';
    o1.innerText='Student';
    o2.innerText='Full Time Job';
    o3.innerText='Part Time Job';
    o4.innerText='Other';
    sub.id='btn4';
    sub.classList.add('btnn');
    sub.innerText='Submit';
    s3.appendChild(form);
    form.appendChild(h2);
    // form.appendChild(br0);
    // form.appendChild(br1);
    form.appendChild(l0);
    form.appendChild(i0);
    // form.appendChild(br2);
    // form.appendChild(br3);
    form.appendChild(l1);
    form.appendChild(i1);
    // form.appendChild(br4);
    // form.appendChild(br5);
    form.appendChild(l2);
    form.appendChild(i2);
    form.appendChild(l3);
    form.appendChild(l4);
    l4.appendChild(i3);
    l4.appendChild(tx1);
    form.appendChild(l5);
    l5.appendChild(i4);
    l5.appendChild(tx2);
    form.appendChild(l6);
    form.appendChild(sel);
    sel.appendChild(o0);
    sel.appendChild(o1);
    sel.appendChild(o2);
    sel.appendChild(o3);
    sel.appendChild(o4);
    form.appendChild(l7);
    form.appendChild(i5);
    form.appendChild(i6);
    form.appendChild(sub);
    frag.appendChild(s3);
    document.body.appendChild(frag);
 });

  sub.addEventListener('click',(event) => {
        event.preventDefault(); 
        
        let err1 = document.getElementById('err1');
        let err2 = document.getElementById('err2');
        let err3 = document.getElementById('err3');
        
            // if (err1) 
            //     err1.remove();
            if (err2) 
                err2.remove();
            if (err3) 
                err3.remove();
        // if(p1.value=='' || p2.value=='' || n.value == '' || e.value == '' || a.value == '' || rol.value == 'Current role' ){
        //     console.log('false');
        //    const p = document.createElement('p');
        //    const txt = document.createTextNode('fill the required fields');
        //    p.appendChild(txt);
        //    p.id='err1';
        //    p.classList.add('err');
        //    form.style.top='5%';
        //    sub.insertAdjacentElement('afterend', p);
        // }
        // else if(etest.test(e.value)==false){
        //     console.log('false');
        //    const p = document.createElement('p');
        //    const txt = document.createTextNode('email is not valid');
        //    p.appendChild(txt);
        //    p.id='err2';
        //    p.classList.add('err');
        //    form.style.top='5%';
        //    sub.insertAdjacentElement('afterend', p);
        // }
        if(rol.value == 'Current role' ){
            console.log('false');
            const p = document.createElement('p');
            const txt = document.createTextNode('fill the required fields');
            p.appendChild(txt);
            p.id = 'err1';
            p.classList.add('err');
            form.style.top = '5%';
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
// });

// log.addEventListener('click',() =>{
//     s4.classList.remove('s'); 
// });

// subb.addEventListener('click',(event) =>{
//     event.preventDefault(); 

//     let err1 = document.getElementById('err1');
//     let err2 = document.getElementById('err2');
//     let err3 = document.getElementById('err3');

//     if (err1) {
//         err1.remove();
//     }
//     if (err2) {
//         err2.remove();
//     }

//     if (err3) {
//         err3.remove();
//     }
//     if(ee.value=='' || p3.value=='' ){
//        const p = document.createElement('p');
//        const txt = document.createTextNode('fill the required fields');
//        p.appendChild(txt);
//        p.id='err1';
//        p.classList.add('err');
//        form.style.top='5%';
//        subb.insertAdjacentElement('afterend', p);
//     }
//     else if(etest.test(ee.value)==false){
//         console.log('false');
//        const p = document.createElement('p');
//        const txt = document.createTextNode('email is not valid');
//        p.appendChild(txt);
//        p.id='err2';
//        p.classList.add('err');
//        form.style.top='5%';
//        subb.insertAdjacentElement('afterend', p);
//     }
//  else if(ee.value==='user@tech.org' && p3.value==='passcode'){
//     console.log('true');
//     s5.classList.remove('s');
//     s4.classList.add('s');

//     const text=
//    `Name: user
//     \nEmail: user@tech.org
//     \nAge: 20
//     \nGender: Female
//     \nRole: student`;

//     const tx = document.createTextNode(text);
//     const prg = document.createElement('p');
//     prg.appendChild(tx);
//     prg.id='prg';
//     h2.insertAdjacentElement('afterend', prg);
// }
// else{
//    var p = document.createElement('p');
//    const txt = document.createTextNode('password is incorrect');
//    p.appendChild(txt);
//    p.id='err3';
//    p.classList.add('err');
//    form.style.top='5%';
//    subb.insertAdjacentElement('afterend', p);
// }
// });

// sub.addEventListener('click',(event) => {
// event.preventDefault(); 

// let err1 = document.getElementById('err1');
// let err2 = document.getElementById('err2');
// let err3 = document.getElementById('err3');

//     if (err1) {
//         err1.remove();
//     }
//     if (err2) {
//         err2.remove();
//     }
//     if (err3) {
//         err3.remove();
//     }
// if(p1.value=='' || p2.value=='' || n.value == '' || e.value == '' || a.value == '' || rol.value == 'Current role' ){
//     console.log('false');
//    const p = document.createElement('p');
//    const txt = document.createTextNode('fill the required fields');
//    p.appendChild(txt);
//    p.id='err1';
//    p.classList.add('err');
//    form.style.top='5%';
//    sub.insertAdjacentElement('afterend', p);
// }
// else if(etest.test(e.value)==false){
//     console.log('false');
//    const p = document.createElement('p');
//    const txt = document.createTextNode('email is not valid');
//    p.appendChild(txt);
//    p.id='err2';
//    p.classList.add('err');
//    form.style.top='5%';
//    sub.insertAdjacentElement('afterend', p);
// }
// else if(p1.value===p2.value){
//     console.log('true');
//     s5.classList.remove('s');
//     s3.classList.add('s');
//     const g = document.querySelector('input[name="gender"]:checked');
//     console.log(g);
//     const text=
//    `Name: ${n.value}
//     \nEmail: ${e.value}
//     \nAge: ${calculateAge(a.value)}
//     \nGender: ${g.value}
//     \nRole: ${rol.value}`;

//     const tx = document.createTextNode(text);
//     const prg = document.createElement('p');
//     prg.appendChild(tx);
//     prg.id='prg';
//     h2.insertAdjacentElement('afterend', prg);
// }
// else{
//    var p = document.createElement('p');
//    const txt = document.createTextNode('password does not match');
//    p.appendChild(txt);
//    p.id='err3';
//    p.classList.add('err');
//    form.style.top='5%';
//    sub.insertAdjacentElement('afterend', p);
// }
// });
