window.onload = function(){
//let misParrafos = document.getElementById('parrafo1');
//let misParrafos = document.querySelector('p');
//let misParrafos = document.querySelector('#parrafo1');
//let misParrafos = document.querySelector('.parrafo');
//let misParrafos = document.querySelectorAll('.parrafo');
let misParrafos = document.querySelectorAll('p');
console.log(misParrafos);
//for (let indice in misParrafos) {
// console.log(misParrafos[indice]);
//    misParrafos[indice].style.color = 'red';    
//}
//for (let indice of misParrafos) {
//    console.log(indice);
//    indice.style.color = 'red';    
//}

for(let i= 0;i < misParrafos.length;i++){
    if(i%2!=0){
        misParrafos[i].style.color = 'red';
    }
    
}

let nombre = "Uriel";
persona = 1;
console.log(nombre);
if(persona==1){
    let nombre = "Juan";    
    console.log(nombre);
}
console.log(nombre);

//Realización de la ejercitación
let c=0;
for (i=0;i<135;i++)
{
    if (i%3==0)
    {
        if (i==0 || i==135)continue
        c++;
        console.log('3 x '+c+ ' = '+i)
    }
}

//Mostrarndo Array - ForEach





}

