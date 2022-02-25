'use strict'

{
    // 文字列の操作


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
