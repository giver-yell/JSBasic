'use strict'

{
    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('Double click!');
    })

    document.addEventListener('mousemove', () => {
        console.log('moved!');
    });
}
