'use strict'

// 数値
{
    const scores = [10, 3, 9];
    let sum = 0;

    scores.forEach(score => {
        sum += score;
    });
    const avg = sum / scores.length;
    console.log(sum); // 22
    console.log(avg); // 7.3333

    // 切り捨て
    console.log(Math.floor(avg)); // 7
    // 切り上げ
    console.log(Math.ceil(avg));  // 8
    // 四捨五入
    console.log(Math.round(avg)); // 7
    // 小数点第三位まで表示
    console.log(avg.toFixed(3));  // 7.333

    // 数値をランダムで生成(ゲーム制作で必須)
    console.log(Math.random());

    // ランダムな整数値
    /*
     * 0, 1, 2
     * Math.floor(Math.random() * 3);
     * 0, ..., n
     * Math.floor(Math.random() * (n + 1));
     * min, ...., Max
     * Math.floor(Math.random() * (Max + 1 - Min)) + Min;
     */
    console.log(Math.floor(Math.random() * (3 + 1 - 1)) + 1);
}
