function koch_curve(ctx, x1, y1, x2, y2, deep) {
    // точка на 1/3
    let th_x = x1 + (x2 - x1) / 3;
    let th_y = y1 + (y2 - y1) / 3;

    // точка на 2/3
    let sc_x = x1 + 2 * (x2 - x1) / 3;
    let sc_y = y1 + 2 * (y2 - y1) / 3;

    let angle = 60;
    let ang = -angle * (Math.PI / 180);

    // точка на высоте
    let x_n = (sc_x - th_x) * Math.cos(ang) - (sc_y - th_y) * Math.sin(ang) + th_x;
    let y_n = (sc_x - th_x) * Math.sin(ang) + (sc_y - th_y) * Math.cos(ang) + th_y;

    if (deep > 0) {
        koch_curve(ctx, x1, y1, th_x, th_y, deep - 1)
        koch_curve(ctx, sc_x, sc_y, x2, y2, deep - 1)

        koch_curve(ctx, th_x, th_y, x_n, y_n, deep - 1)
        koch_curve(ctx, x_n, y_n, sc_x, sc_y, deep - 1)
        return
    }

    ctx.strokeStyle = get_random_color()
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function koch_showflake(ctx, x1, y1, x2, y2, deep) {
    // точка на 1/3
    let fs_x = x1 + (x2 - x1) / 3;
    let fs_y = y1 + (y2 - y1) / 3;

    // точка на 2/3
    let sc_x = x1 + 2 * (x2 - x1) / 3;
    let sc_y = y1 + 2 * (y2 - y1) / 3;

    let angle = 60;
    let ang = -angle * (Math.PI / 180);

    // точка на высоте
    let th_x = (sc_x - fs_x) * Math.cos(ang) - (sc_y - fs_y) * Math.sin(ang) + fs_x;
    let th_y = (sc_x - fs_x) * Math.sin(ang) + (sc_y - fs_y) * Math.cos(ang) + fs_y;

    koch_curve(ctx, fs_x, fs_y, th_x, th_y, deep)
    koch_curve(ctx, th_x, th_y, sc_x, sc_y, deep)
    koch_curve(ctx, sc_x, sc_y, fs_x, fs_y, deep)
}

function simple_dragon(ctx, x1, y1, x2, y2, deep) {
    if (deep > 0) {
        let sc_x = (x1 + x2) / 2 + (y2 - y1) / 2;
        let sc_y = (y1 + y2) / 2 - (x2 - x1) / 2;

        simple_dragon(ctx, x1, y1, sc_x, sc_y, deep - 1)
        simple_dragon(ctx, x2, y2, sc_x, sc_y, deep - 1)
        return
    }
    ctx.strokeStyle = get_random_color()
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function get_random_color() {
    let r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}