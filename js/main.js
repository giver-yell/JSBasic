/*
 *
 */
'use strict'
{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        targetNode.textContent = 'Changed';
        targetNode.title = 'This is title!';

        // style
        // targetNode.className = 'my-color';
        // if (targetNode.classList.contains('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }
        targetNode.classList.toggle('my-color');

        // targetNode.style.color = 'red';
        // ハイフン区切りはキャメルケースに
        // targetNode.style.backgroundColor = 'skyblue';
    });


    function update() {
        // document.querySelector('h1').textContent = 'Changed!';
        // document.querySelector('#target').textContent = 'Changed!';
        document.getElementById('target').textContent = 'Changed!';

        // document.querySelector('p').textContent = 'Changed!';
        // document.querySelectorAll('p')[1].textContent = 'Changed!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです`
        });
    }

    // setTimeout(update, 500);
}
