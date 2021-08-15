/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let curentDrag;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (curentDrag) {
    curentDrag.style.top = e.clientY - startY + 'px';
    curentDrag.style.left = e.clientX - startX + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  const minSize = 28;
  const maxSize = 200;
  const maxColor = 0xffffff;

  div.className = 'draggable-div';
  div.style.backgroundColor = '#' + random(0, maxColor).toString(16);
  div.style.width = random(minSize, maxSize) + 'px';
  div.style.height = random(minSize, maxSize) + 'px';
  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.left = random(0, window.innerWidth) + 'px';

  div.addEventListener('mousedown', (e) => {
    curentDrag = div;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  div.addEventListener('mouseup', () => (curentDrag = false));

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
