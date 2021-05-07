
gsap.registerPlugin(Flip);

let insert = document.querySelector(`.insert`); 
let  relocate = document.querySelectorAll(`.relocate`); 

/* const items = flip.getState(`.move`);  */

items = gsap.utils.toArray(`.move`); 

const state = Flip.getState(items); 

setTimeout(() => {
    relocate.forEach(rel => {
        insert.appendChild(rel); 
    })

    Flip.from(state, {
        duration: 1, 
        ease: "power1.inOut"
    })

}, 1500); 