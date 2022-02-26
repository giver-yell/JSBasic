'use strict'

// 文字列
{
    // 文字列の操作
    const date = [2022, 2, 26];
    console.log(date.join('/')); // 2022/2/26
    console.log(date.join('')); 2022226

    const t = '12:13:04';
    console.log(t.split(':')); // [12, 13, 04]
    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);

    const str = 'hello';
    // length
    console.log(str.length); // 5
    // str.substring([開始位置, 終了位置]);
    console.log(str.substring(2, 4)); // ll
    console.log(str[1]); // e


    // 変数
    let x = 1;
    let y = x;
    x = 5;
    console.log(x); // 5
    console.log(y); // 1

    // 配列とobjectは値が大きくなる可能性があるのでメモリの位置を見に行く
    let a = [1, 2];
    let b = a;
    a[0] = 5;
    console.log(a); // [5, 2]
    console.log(b); // [1, 2]

    let c = [1, 2];
    let d = [...c];
    c[0] = 5;
    console.log(c); // [5, 2]
    console.log(d); // [1, 2]
}
