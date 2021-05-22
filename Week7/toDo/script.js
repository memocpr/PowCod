/*let list=[];
let done=[];
let isOk="y";
while(isOk=="y"){
  if(isOk=="y"){
    let work=prompt("enter a work");
  list.push(work);
  }
  isOk=prompt("do you want to add work: y/n");
};
for(let x of list){
 
  let isDone=prompt( x + " is done : y/n");
  if(isDone=="y"){
   done.push(x);
  }
}
for(let x of done){
  console.log(x + "is done");
}*/

const password = "123";
let btn = document.querySelector("#password + button");
btn.addEventListener('click', login);
let userPassword = document.querySelector("#password");

let wrong = document.createElement('p');
btn.insertAdjacentElement('afterend', wrong);

function login() {

    if (userPassword.value == password) {

        document.querySelector('.invisible').className = 'visible';
        document.querySelector('.visible').className = 'invisible';

    } else {

        wrong.innerText = 'please enter correct password';
        userPassword.value = "";
    }
}


// ===============================================

let ul = document.querySelector('ul');
let btn2 = document.querySelector("#todo + button ");
btn2.addEventListener('click', toDo);
let userToDo = document.querySelector("#todo")

let arr2 = [];

function toDo() {

    /**let heroString = localStorage.getItem('favHero');
            let heroArr = heroString === null ? [] : JSON.parse(heroString);

            let inArr = -1;
            for (let i = 0; i < heroArr.length; i++) {
                if (heroArr[i].id === hero.id) {
                    inArr = i;
                }
            }
 */


    let str =
        arr2.push(userToDo.value);
    localStorage.setItem('toDo', JSON.stringify(arr2));
    createUI();
}

function createUI() {
    let arr = [];
    let li;
    ul.innerHTML = "";

    let player = JSON.parse(localStorage.getItem('toDo'));

    player.sort();

    console.log(arr);
    for (let i = 0; i < player.length; i++) {
        li = document.createElement('li');
        li.innerText = player[i];
        ul.appendChild(li);
    }
    userToDo.value = "";
}
createUI();