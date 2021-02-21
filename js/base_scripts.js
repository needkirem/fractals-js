function on_change_params() {
    let deep = document.getElementById('deep').value
    document.getElementById('deep-title').innerText = '\nDeep is ' + deep

    let ctx = get_canvas_context(deep)
    let parent = document.getElementById("canvas-container");

    let y = parent.offsetHeight / 1.5;
    let x = parent.offsetWidth;

    let fractal_types = document.getElementById('fractal-types')
    switch (fractal_types.value) {
        case 'Koch curve':
            koch_curve(ctx, 0, y, x, y, deep)
            break
        case 'Koch showflake':
            y = parent.offsetHeight / 4 * 3
            koch_showflake(ctx, 0, y, x, y, deep)
            break
    }
}

function set_start_params() {
    let deep = document.getElementById('deep')
    let fractal_types = document.getElementById('fractal-types')

    deep.oninput = on_change_params
    fractal_types.onchange = on_change_params

    document.getElementById('deep-title').innerText = '\nDeep is ' + deep.value
    on_change_params()
}

function get_canvas_context(deep) {
    let parent = document.getElementById("canvas-container");
    let canvas = document.getElementById("canvas");

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    let ctx = canvas.getContext('2d')
    ctx.lineWidth = 1;

    return ctx
}

set_start_params()