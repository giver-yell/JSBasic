/*
 *
 */
'use strict'
{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // 要素の複製
        const item0 = document.querySelectorAll('li')[0];
        const item1 = document.querySelectorAll('li')[1];
        const item2 = document.createElement('li');
        const ul    = document.querySelector('ul');
        const li    = document.createElement('li');
        const text  = document.querySelector('input');
        const color = document.querySelector('select');

        // select操作
        li.textContent = `${color.value} - ${color.selectedIndex}`;
        ul.appendChild(li);

        // li操作
        item0.textContent = text.value;
        document.querySelector('ul').appendChild(item0);

        text.value = '';
        text.focus();

        // trueで要素の中身はコピーしない
        const copy = item0.cloneNode(true);

        ul.insertBefore(copy, item1);


        // 要素の追加
        item2.textContent = 'item 2';

        ul.appendChild(item2);

        targetNode.title = 'This is title!';

        // 要素の削除
        // 親Node.removeChild(削除するNode);
        document.querySelector('ul').removeChild(item1);
        // remove() は使えないブラウザあり
        // item1.remove();

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
