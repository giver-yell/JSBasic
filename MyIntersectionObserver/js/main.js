'use strict';

{
    const target = document.querySelector('img');

    function callback(entries) {
        console.log(entries[0]);

        // アニメーションで消さない場合
        if (!entries[0].isIntersecting) {
            return;
        }
        entries[0].target.classList.add('appear');

        // アニメーションで消す場合
        // if (entries[0].isIntersecting) {
        //     entries[0].target.classList.add('appear');
        // } else {
        //     entries[0].target.classList.remove('appear');
        // }
    }

    const options = {
        // imgの表示 % を指定
        // threshold: [0.2, 0.8],
        threshold: 1,
        rootMargin: '0px 0px -100px',
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
