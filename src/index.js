import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

const countChar = (text, letter) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countChar('kakkerlak', 'k'));

// const size = 8;
// let chess = '';

// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//         if ((i % 2) !== (j % 2)) {
//             chess += '#';
//         } else {
//             chess += ' ';
//         }
//     }
//     chess += '\n';
// }

// console.log(chess
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
