'use strict';

{
    const targets = document.querySelectorAll('img');

    function callback(entries, obs) {
        console.log(entries);

        entries.forEach(entry => {
            // アニメーションで消さない場合
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');

            // アニメーションで消す場合
            // if (entries[0].isIntersecting) {
            //     entries[0].target.classList.add('appear');
            // } else {
            //     entries[0].target.classList.remove('appear');
            // }

            // 帰りの監視を止める
            obs.unobserve(entry.target);
        });
    }

    const options = {
        // imgの表示 % を指定
        // threshold: [0.2, 0.8],

        threshold: 0.2,

        // rootMargin
        // threshold: 1,
        // rootMargin: '0px 0px -100px',
    }

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
    });

}
