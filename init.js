/*
 * HorribleC++ ©
 */

this.window.resume = [
    "Hey! My name is Rob! \nThis is my resume project \nFor Ester",
    "My girlfriend",
    "SKILLS \nC++ and so on...",
    "EDUCATION \nUOIT EE, 2 yrs discontined",
    "As personal projects, I do a lot of stuff, see GitHub",
    ".......... Horrible ...........",
];

function initWebGL(canvas) {
    gl = canvas.getContext('webgl');
    if (!gl) {
        throw "initWebGL()";
    }
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
}

function start() {
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    try {
        initWebGL(canvas);
    } catch (e) {
        console.error(e);
        return;
    }

}
