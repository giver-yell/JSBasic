/*
 * 日時
*/
'use strict'

{
    const d = new Date();
    console.log(d);

    console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);

    console.log(d.getFullYear());     // 2022
    console.log(d.getMonth());        // 0-11 (Jan:0, Feb:1, ...)
    console.log(d.getDate());         // 1-31
    console.log(d.getDay());          // 0-6 (Sun:0, Mon:1, ...)
    console.log(d.getHours());        // 0-23
    console.log(d.getMinutes());      // 0-59
    console.log(d.getSeconds());      // 0-59
    console.log(d.getMilliseconds()); // 0-999  1ms = 1/1000sec
}
