// zmienne w sekcji lista rzeczy do zrobienia 
const btnAdd = document.querySelector('button.add');
let inputAdd = document.querySelector('input.addinput');

let ul = document.querySelector('ul.uladd');
const liElements = document.querySelectorAll('ul.uladd li');

// zmienne w sekcji wykonano
let ulDone = document.querySelector('ul.ulDone');
const liUlDone = document.querySelector('ul.ulDone li');

//dodawanie elementów do listy 
btnAdd.addEventListener('click', function(){
    
    let flag = false;
    let inputContent = inputAdd.value;
    let newLi = document.createElement('li');
    if(inputContent == "") return;
    
    ul.appendChild(newLi);  
    newLi.innerHTML = '<div></div>' + inputContent + '<i class="fas fa-trash-alt"></i>';
    inputAdd.value = "";

    //usuwanie po kliknieciu ze wykonano i przenoszenie do sekcji wykonano
    newLi.querySelector('li div').addEventListener('click',function() {
       
        flag != flag;

        if(flag = true) {
            newLi.querySelector('ul.uladd li div').innerHTML = '<i class="fas fa-check"></i>';

            setTimeout(function(){
                ulDone.appendChild(newLi);  
                newLiDone.innerHTML = newLi;
                newLi.remove();
            }, 500);
        } 
    });

    //usuwanie koszyk
    newLi.querySelector('i.fa-trash-alt').addEventListener('click', function() {
        newLi.remove();
    });
    newLiDone.querySelector('i.fa-trash-alt').addEventListener('click', function() {
        newLiDone.remove();
    })

})


