// <div class="Hello" title="Bonjour">
//   Hello <span id="prenom">Romain</span>
// </div>

// import React from 'react';

// DOM API
// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.title = 'Bonjour';

//   const spanEl = document.createElement('span');
//   spanEl.id = "prenom";
//   spanEl.append('Romain');

//   divEl.append('Hello ', spanEl);

//   return divEl;
// }

// React API
// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello', title: 'Bonjour' },
//     'Hello ',
//     React.createElement('span', { id: 'prenom' }, 'Romain'),
//   );
// }

// React API avec JSX
function Hello() {
  return (
    <div className="Hello" title="Bonjour">
      Hello <span>Romain</span>
    </div>
  );
}

export default Hello;
