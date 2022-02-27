/*
 * タイマー
*/
'use strict'

{
    // setTimeoutは処理終了後にカウントが開始されるので、サーバー負荷を考えて採用される場合が多い
    // タイマー機能 setInterval, setTimeout
    let i = 0;

    // function  showTime() {
    //     console.log(new Date());
    //     i++;
    //     if (i > 2) {
    //         clearInterval(intervalId);
    //     }
    // }

    // // 関数を引数にする場合は()つけない
    // const intervalId = setInterval(showTime, 1000);

    function showTime() {
        console.log(new Date());
        // 1度だけ実行
        const timeoutId = setTimeout(showTime, 1000);
        i++
        if (i > 2) {
            clearTimeout(timeoutId);
        }
    }
    showTime();
}
