'use strict';

{
    const target = document.querySelector('img');

    function callback() {
        console.log('fired!');
    }

    const options = {
        // imgの表示 % を指定
        threshold: [0.2, 0.8],
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
