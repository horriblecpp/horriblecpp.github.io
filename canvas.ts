let canvas = document.getElementById('canvas') as HTMLCanvasElement;
let context = canvas.getContext('2d') as CanvasRenderingContext2D;

const [w, h] = [context.canvas.width, context.canvas.height];

// CanvasRenderingContext2D.fillStyle:
// color, pattern, or gradient for context subsequently uses to fill shapes.
context.fillStyle = 'cornflowerblue';

// CanvasRenderingContext2D.font:
// font for .strokeText() and .fillText()
context.font = '38pt Arial';

// CanvasRenderingContext2D.globalAlpha:
// is the global alpha setting, which must be in [0.0, 1.0]. The browser multiplies
// the alpha value of every pixel you draw by the globalAlpha property
context.globalAlpha = 1.0;

// CanvasRenderingContext2D.globalCompositeOperation:
// Determines how the browser draws one thing over another
context.globalCompositeOperation

// CanvasRenderingContext2D.lineCap:
// specifies how the browser draws the endpoints of a line
// one of {butt | round | square} with default = 'butt'
context.lineCap = 'butt';

// CanvasRenderingContext2D.lineWidth:
// determines the width, in screen pixels, that you draw in a canvas.
// The value must be a non-negative, non-infinite double (default = 1.0)
context.lineWidth = 1.0;

// CanvasRenderingContext2D.lineJoin:
// how lines are joined when their endpoints meet.
// valid values are {bevel | round | miter} with default = 'miter'.
context.lineJoin = 'miter';

