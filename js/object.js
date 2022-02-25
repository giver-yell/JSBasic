/*
 * オブジェクト
 */
'use strict'

{
    const otherProps = {
        r: 4,
        color: 'red',
    };

    const point = {
        x: 100,
        y: 180,
        ...otherProps,
    };

    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log(`Key: ${key}, Value: ${point[key]}`);
    });

    const points = [
        { x: 30, y: 10 },
        { x: 10, y: 40 },
    ];
    console.log(points[1].y);

    console.log(point);

    const { x, r, ...others } = point;
    console.log(x);
    console.log(r);
    console.log(others);

    point.x = 120;

    console.log(point.x);
    console.log(point['y']);

    point.z = 90;
    delete point.y;
    console.log(point);
}
