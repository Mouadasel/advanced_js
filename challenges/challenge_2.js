// import INITIAL, {
//   add as addMethod, subtract, multiply,
// } from './utils.js';

// import * as util from './utils.js';
import _ from 'lodash';

// const add = addMethod(5, 4);
const INITIAL2 = 150;

// console.log(util.default);
console.log(_.add(15, 4));
console.log(_.subtract(5, 4));
console.log(_.multiply(5, 4));
console.log(_.divide(10, 2));

// document.querySelector('.say-hi-link')?.addEventListener('click', async (e) => {
//   e.preventDefault();
//   //   const { add, multiply, default: INITIAL } = await import('./utils.js');
//   const util = await import('./utils.js');

//   console.log(_.add(10, 4));
//   console.log(util.default);
//   console.log(util.multiply(5, 4));
// });
