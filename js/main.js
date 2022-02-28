'use strict'

{
    // form
    // リロードを中止
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        console.log('submit');
    })

    // textarea
    const text = document.querySelector('textarea');

    // focus
    text.addEventListener('focus', () => {
        console.log('focus');
    })

    // blur(focusを外す)
    text.addEventListener('blur', () => {
        console.log('blur');
    })

    // input
    text.addEventListener('input', () => {
        // console.log('input');
        console.log(text.value.length);
    })

    // change(input確定)
    text.addEventListener('change', () => {
        console.log('change');
    })


    // ダブルクリック
    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('Double click!');
    })

    // マウス操作
    // document.addEventListener('mousemove', e => {
    //     console.log(e.clientX, e.clientY);
    // });

    // キーボード操作
    // document.addEventListener('keydown', e => {
    //     console.log(e.key);
    // });
}
