(()=>{var e={976:()=>{!function(){var e=document.querySelector(".carousel"),t=document.querySelector(".carousel__box-items"),r=document.querySelectorAll(".carousel__item"),n=e.querySelector("#btnLeft"),o=e.querySelector("#btnRight"),a=100*Math.floor(r.length/2)/r.length,c=-1*a,l=100/r.length,u=0;function s(){n.style.display=u>=a?"none":"block",o.style.display=u<=c?"none":"block"}n.addEventListener("click",(function(){u>=a||(u+=l,t.style.transform="translate(".concat(u.toFixed(2),"%)"),s())})),o.addEventListener("click",(function(){u<=c||(u-=l,t.style.transform="translate(".concat(u.toFixed(2),"%)"),s())}))}()},35:()=>{document.querySelector(".menu").addEventListener("click",(function(){this.classList.toggle("menu--opened"),this.setAttribute("aria-expanded",this.classList.contains("menu--opened"))}))},484:()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var t,r,n,o,a,c,l;t=document.querySelector(".form"),r=document.querySelector("#userFullName"),n=document.querySelector("#userEmail"),o=document.querySelector("#userSubject"),a=document.querySelector("#userMessage"),l=document.querySelectorAll(".form__input, .form__textarea"),c=function(t){if(Array.isArray(t))return e(t)}(l)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t.addEventListener("submit",(function(e){var t,l;e.preventDefault(),t=!0,c.map((function(e){var r=e.previousElementSibling;r.classList.remove("form__label--error"),e.classList.remove("form__input--error"),""===e.value&&(r.classList.add("form__label--error"),e.classList.add("form__input--error"),t=!1)})),t&&(l="\n            <p>Full Name: ".concat(r.value,"</p>\n            <p>Email: ").concat(n.value,"</p>\n            <p>Message: ").concat(a.value,"</p>\n        "),Email.send({SecureToken:"bd39ee86-85e9-401e-b0b6-4cb1c4d396fd",To:"ubi00179@gmail.com",From:"ubi00179@gmail.com",Subject:o.value,Body:l}).then((function(e){"OK"==e&&Swal.fire({title:"Sucess!",text:"Message sent successfully!",icon:"success"})})),c.map((function(e){return e.value=""})))}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(35),r(976),r(484)})()})();