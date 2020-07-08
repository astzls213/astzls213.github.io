let heyImg = document.querySelector('img');

heyImg.onclick = function() {
	alert('asd');
    let mySrc = heyImg.getAttribute('src');
    if(mySrc === 'photos/nmsl.jpg')
      heyImg.setAttribute ('src','photos/UnnamedGirl.jpg');
    else 
      heyImg.setAttribute ('src','photos/nmsl.jpg');
    
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
	let myName=prompt('Enter name:');
	localStorage.setItem('name',myName);
	myHeading.textContent='Hey, sb. '+myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}