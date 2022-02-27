/*
 * 例外処理
*/
'use strict'

{
    // const name = 'taguchi';
    const name = 5;

    try {
        console.log(name.toUpperCase());
    } catch (e) {
        console.log(e);
    }

    console.log('finish!');
}
