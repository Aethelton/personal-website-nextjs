import { useEffect, useRef } from "react";

// node_modules/@georgedoescode/generative-utils/src/spline.js
function formatPoints(points, close) {
    points = [...points];
    if (!Array.isArray(points[0])) {
        points = points.map(({x, y}) => [x, y]);
    }
    if (close) {
        const lastPoint = points[points.length - 1];
        const secondToLastPoint = points[points.length - 2];
        const firstPoint = points[0];
        const secondPoint = points[1];
        points.unshift(lastPoint);
        points.unshift(secondToLastPoint);
        points.push(firstPoint);
        points.push(secondPoint);
    }
    return points.flat();
}

function spline(points = [], tension = 1, close = false, cb) {
    points = formatPoints(points, close);
    const size = points.length;
    const last = size - 4;
    const startPointX = close ? points[2] : points[0];
    const startPointY = close ? points[3] : points[1];
    let path = "M" + [startPointX, startPointY];
    cb && cb("MOVE", [startPointX, startPointY]);
    const startIteration = close ? 2 : 0;
    const maxIteration = close ? size - 4 : size - 2;
    const inc = 2;
    for (let i = startIteration; i < maxIteration; i += inc) {
        const x0 = i ? points[i - 2] : points[0];
        const y0 = i ? points[i - 1] : points[1];
        const x1 = points[i + 0];
        const y1 = points[i + 1];
        const x2 = points[i + 2];
        const y2 = points[i + 3];
        const x3 = i !== last ? points[i + 4] : x2;
        const y3 = i !== last ? points[i + 5] : y2;
        const cp1x = x1 + (x2 - x0) / 6 * tension;
        const cp1y = y1 + (y2 - y0) / 6 * tension;
        const cp2x = x2 - (x3 - x1) / 6 * tension;
        const cp2y = y2 - (y3 - y1) / 6 * tension;
        path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
        cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
    }
    return path;
}

// node_modules/@georgedoescode/vector2d/vector2d.js
const Vector2D = class {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static div(v1, v2) {
        return v1.copy().div(v2.copy());
    }

    static lerp(v1, v2, amt) {
        return v1.copy().lerp(v2.copy().x, v2.copy().y, amt);
    }

    copy() {
        return new Vector2D(this.x, this.y);
    }

    div(x, y) {
        const values = this._formatArgs(x, y);
        this.x /= values.x;
        this.y /= values.y;
        return this;
    }

    lerp(x, y, amt) {
        this.x += (x - this.x) * amt;
        this.y += (y - this.y) * amt;
        return this;
    }

    _formatArgs(x, y) {
        switch (x.constructor.name) {
            case "Vector2D":
                return {
                    x: x.x,
                    y: x.y
                };
            default:
                if (!y)
                    y = x;
                return {
                    x,
                    y
                };
        }
    }
};

// fleck-worklet.js
function mulberry32(a) {
    return function (min, max) {
        a |= 0;
        a = a + 1831565813 | 0;
        var t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296 * (max - min) + min;
    };
}

const Fleck = class {
    constructor(seed, count, baseSize, colors) {
        this.seed = seed;
        this.count = count;
        this.baseSize = baseSize;
        this.colors = colors;
    }

    paint(ctx, width, height) {
        const random2 = mulberry32(this.seed);
        for (let i = 0; i < this.count; i++) {
            const numPoints = ~~random2(6, 8);
            const points = [];
            const angleStep = Math.PI * 2 / numPoints;
            const center = new Vector2D(random2(0, width), random2(0, height));
            let radius = this.baseSize;
            if (random2(0, 1) > 0.125)
                radius /= 2;
            if (random2(0, 1) > 0.925)
                radius *= 4;
            radius = Math.max(1, Math.min(radius, 24));
            for (let i2 = 1; i2 <= numPoints; i2++) {
                const theta = i2 * angleStep;
                const point = new Vector2D(center.x + Math.cos(theta) * radius, center.y + Math.sin(theta) * radius);
                points.push(Vector2D.lerp(point, center, random2(0, 0.625)));
            }
            ctx.fillStyle = this.colors[~~random2(0, this.colors.length)];
            ctx.beginPath();
            spline(points, 1, true, (CMD, data) => {
                if (CMD === "MOVE") {
                    ctx.moveTo(...data);
                } else {
                    ctx.bezierCurveTo(...data);
                }
            });
            ctx.fill();
        }
    }
};

const canvasStyles = {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    zIndex: -1
};

const FleckBG = (props) => {
    const canvasRef = useRef(null);
    const fleckRef = useRef(new Fleck(props.fleckSeed, props.fleckCount, props.fleckBaseSize, props.fleckColours));

    useEffect(() => {
        fleckRef.current.paint(canvasRef.current.getContext("2d"), 4000, 3000);
    }, []);

    return (
        <canvas style={{...canvasStyles, backgroundColor: `${props.bgColour}`}} ref={canvasRef} width={4000} height={3000}/>
    );
};

export default FleckBG;
