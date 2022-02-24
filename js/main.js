/*
 * 配列
*/
'use strict';

{
    // map 配列に処理を加えて配列へ格納
    const prices = [180, 190, 200];
    const updatedPrices = prices.map(price => price + 20);
    console.log(updatedPrices);

    // スプレッド構文
    const otherScores = [10, 20];
    const scores = [80, ...otherScores];

    // foreach
    scores.forEach((score, index) => {
        console.log(`Score ${index}: ${score}`);
    });

    // 分割代入
    const [a, ...others] = scores;
    console.log(a);
    console.log(others);

    let x = 30;
    let y = 70;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);


    console.log(scores);

    function sum(a, b) {
        console.log(a + b);
    }
    sum(...otherScores);


    scores.push(60, 50);
    // 先頭のvalue削除
    scores.shift();

    // splice([始点], [削除する数], ..[追加する値])
    scores.splice(2, 1, 40, 50);

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`)
    }

    scores[2] = 44; // constでも配列のvalueへの代入は可能
    console.log(scores);
    console.log(scores.length);
}
