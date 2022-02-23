'use strict';

{
    // 配列
    // スプレッド構文
    const otherScores = [10, 20];
    const scores = [80, 90, 40, ...otherScores];
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
