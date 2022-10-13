const myImage = document.querySelector('img');

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gotton_1.jpg'){
        myImage.setAttribute('src','images/gotton_2.jpg');
    } else {
        myImage.setAttribute('src','images/gotton_1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p');

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = `ゴットン星人「${myName}」`;
  }
  
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `ゴットン星人「${storedName}」`;
  }


  myButton.onclick = () => {
    setUserName();
  }

  function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `ゴットン星人「${myName}」`;
    }
  }
  
  
  