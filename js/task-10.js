function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const inputField = controls.children[0]; // тут я не знаю как лучше сделать ссылку на эелемент
const createBtn = controls.children[1]; // тут я не знаю как лучше сделать ссылку на эелемент, возможно через dataset, но не смог разобраться 
const destroyBtn = controls.children[2] // тут я не знаю как лучше сделать ссылку на эелемент, возможно через dataset, но не смог разобраться 

const onClickCreate = () => {
  console.log(inputField.value);
  
  let x = 20;
  
  if (boxes.children.length === 0) {
    x = 20;
  } else {
    x = boxes.lastChild.clientHeight;
  }

  for (let i = 0; i < inputField.value; i += 1) {
    
    const el = document.createElement('div');

      x += 10;
      
    const widthOfBox = `${x}px`
    const heigthOfBox = `${x}px`

    el.style.width = widthOfBox;
    el.style.height = heigthOfBox;

    el.style.marginTop = '10px';
      
    el.style.backgroundColor = getRandomHexColor();
      
    boxes.append(el);

  }

};

const onClickDestroy = () => {

  const numberOfChildren = boxes.children.length;
  
  for (let i = 0; i < numberOfChildren; i += 1) {
    boxes.lastChild.remove();
  }
  inputField.value = '0';
}

createBtn.addEventListener('click', onClickCreate);

destroyBtn.addEventListener('click', onClickDestroy);

