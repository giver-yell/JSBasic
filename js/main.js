/*
 *
 */
'use strict'
{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // 要素の追加
        const item2 = document.createElement('li');
        item2.textContent = 'item 2';

        const ul = document.querySelector('ul');
        ul.appendChild(item2);

        targetNode.title = 'This is title!';

        // style
        // targetNode.className = 'my-color';
        // if (targetNode.classList.contains('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }

        // classの変更
        targetNode.classList.toggle('my-color');

        // data-* の追加
        targetNode.textContent = targetNode.dataset.translation;



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
