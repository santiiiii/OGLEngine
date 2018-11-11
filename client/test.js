
    // glMatrix v0.9.5
glMatrixArrayType = typeof Float32Array != "undefined" ? Float32Array : typeof WebGLFloatArray != "undefined" ? WebGLFloatArray : Array;
var vec3 = {};
vec3.create = function(a) {
    var b = new glMatrixArrayType(3);
    if (a) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2]
    }
    return b
};
vec3.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    return b
};
vec3.add = function(a, b, c) {
    if (!c || a == c) {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
        return a
    }
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    return c
};
/*
a - b = c
a=vec3
b=vec3
c=return value
*/
vec3.subtract = function(a, b, c) {
    if (!c || a == c) {
        a[0] -= b[0];
        a[1] -= b[1];
        a[2] -= b[2];
        return a
    }
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
    c[2] = a[2] - b[2];
    return c
};
vec3.negate = function(a, b) {
    b || (b = a);
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    return b
};
vec3.scale = function(a, b, c) {
    if (!c || a == c) {
        a[0] *= b;
        a[1] *= b;
        a[2] *= b;
        return a
    }
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    return c
};
vec3.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = Math.sqrt(c * c + d * d + e * e);
    if (g) {
        if (g == 1) {
            b[0] = c;
            b[1] = d;
            b[2] = e;
            return b
        }
    } else {
        b[0] = 0;
        b[1] = 0;
        b[2] = 0;
        return b
    }
    g = 1 / g;
    b[0] = c * g;
    b[1] = d * g;
    b[2] = e * g;
    return b
};
vec3.cross = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1];
    a = a[2];
    var g = b[0],
        f = b[1];
    b = b[2];
    c[0] = e * b - a * f;
    c[1] = a * g - d * b;
    c[2] = d * f - e * g;
    return c
};
vec3.length = function(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    return Math.sqrt(b * b + c * c + a * a)
};
/*
computes the dot product of two vec3 "a" and "b" and returns a scalar
*/
vec3.dot = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
vec3.direction = function(a, b, c) {
    c || (c = a);
    var d = a[0] - b[0],
        e = a[1] - b[1];
    a = a[2] - b[2];
    b = Math.sqrt(d * d + e * e + a * a);
    if (!b) {
        c[0] = 0;
        c[1] = 0;
        c[2] = 0;
        return c
    }
    b = 1 / b;
    c[0] = d * b;
    c[1] = e * b;
    c[2] = a * b;
    return c
};
vec3.lerp = function(a, b, c, d) {
    d || (d = a);
    d[0] = a[0] + c * (b[0] - a[0]);
    d[1] = a[1] + c * (b[1] - a[1]);
    d[2] = a[2] + c * (b[2] - a[2]);
    return d
};
vec3.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};
vec3.multiply = function(a, b) {
    return [
        a[0] * b[0],
        a[1] * b[1],
        a[2] * b[2]
    ];
};
vec3.multiplyScalar = function(a, b) {
    return [
        a[0] * b,
        a[1] * b,
        a[2] * b
    ];
};
vec3.divide = function(a, b) {
    return [
        a[0] / b[0],
        a[1] / b[1],
        a[2] / b[2]
    ];
};
var mat3 = {};
mat3.create = function(a) {
    var b = new glMatrixArrayType(9);
    if (a) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        b[9] = a[9]
    }
    return b
};
mat3.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    return b
};
mat3.identity = function(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;
    return a
};
mat3.transpose = function(a, b) {
    if (!b || a == b) {
        var c = a[1],
            d = a[2],
            e = a[5];
        a[1] = a[3];
        a[2] = a[6];
        a[3] = c;
        a[5] = a[7];
        a[6] = d;
        a[7] = e;
        return a
    }
    b[0] = a[0];
    b[1] = a[3];
    b[2] = a[6];
    b[3] = a[1];
    b[4] = a[4];
    b[5] = a[7];
    b[6] = a[2];
    b[7] = a[5];
    b[8] = a[8];
    return b
};
mat3.toMat4 = function(a, b) {
    b || (b = mat4.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = 0;
    b[4] = a[3];
    b[5] = a[4];
    b[6] = a[5];
    b[7] = 0;
    b[8] = a[6];
    b[9] = a[7];
    b[10] = a[8];
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
mat3.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
var mat4 = {};
mat4.create = function(a) {
    var b = new glMatrixArrayType(16);
    if (a) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        b[9] = a[9];
        b[10] = a[10];
        b[11] = a[11];
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        b[15] = a[15]
    }
    return b
};
mat4.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b
};
mat4.identity = function(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
mat4.transpose = function(a, b) {
    if (!b || a == b) {
        var c = a[1],
            d = a[2],
            e = a[3],
            g = a[6],
            f = a[7],
            h = a[11];
        a[1] = a[4];
        a[2] = a[8];
        a[3] = a[12];
        a[4] = c;
        a[6] = a[9];
        a[7] = a[13];
        a[8] = d;
        a[9] = g;
        a[11] = a[14];
        a[12] = e;
        a[13] = f;
        a[14] = h;
        return a
    }
    b[0] = a[0];
    b[1] = a[4];
    b[2] = a[8];
    b[3] = a[12];
    b[4] = a[1];
    b[5] = a[5];
    b[6] = a[9];
    b[7] = a[13];
    b[8] = a[2];
    b[9] = a[6];
    b[10] = a[10];
    b[11] = a[14];
    b[12] = a[3];
    b[13] = a[7];
    b[14] = a[11];
    b[15] = a[15];
    return b
};
mat4.determinant = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        g = a[4],
        f = a[5],
        h = a[6],
        i = a[7],
        j = a[8],
        k = a[9],
        l = a[10],
        o = a[11],
        m = a[12],
        n = a[13],
        p = a[14];
    a = a[15];
    return m * k * h * e - j * n * h * e - m * f * l * e + g * n * l * e + j * f * p * e - g * k * p * e - m * k * d * i + j * n * d * i + m * c * l * i - b * n * l * i - j * c * p * i + b * k * p * i + m * f * d * o - g * n * d * o - m * c * h * o + b * n * h * o + g * c * p * o - b * f * p * o - j * f * d * a + g * k * d * a + j * c * h * a - b * k * h * a - g * c * l * a + b * f * l * a
};
mat4.inverse = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = a[4],
        h = a[5],
        i = a[6],
        j = a[7],
        k = a[8],
        l = a[9],
        o = a[10],
        m = a[11],
        n = a[12],
        p = a[13],
        r = a[14],
        s = a[15],
        A = c * h - d * f,
        B = c * i - e * f,
        t = c * j - g * f,
        u = d * i - e * h,
        v = d * j - g * h,
        w = e * j - g * i,
        x = k * p - l * n,
        y = k * r - o * n,
        z = k * s - m * n,
        C = l * r - o * p,
        D = l * s - m * p,
        E = o * s - m * r,
        q = 1 / (A * E - B * D + t * C + u * z - v * y + w * x);
    b[0] = (h * E - i * D + j * C) * q;
    b[1] = (-d * E + e * D - g * C) * q;
    b[2] = (p * w - r * v + s * u) * q;
    b[3] = (-l * w + o * v - m * u) * q;
    b[4] = (-f * E + i * z - j * y) * q;
    b[5] = (c * E - e * z + g * y) * q;
    b[6] = (-n * w + r * t - s * B) * q;
    b[7] = (k * w - o * t + m * B) * q;
    b[8] = (f * D - h * z + j * x) * q;
    b[9] = (-c * D + d * z - g * x) * q;
    b[10] = (n * v - p * t + s * A) * q;
    b[11] = (-k * v + l * t - m * A) * q;
    b[12] = (-f * C + h * y - i * x) * q;
    b[13] = (c * C - d * y + e * x) * q;
    b[14] = (-n * u + p * B - r * A) * q;
    b[15] = (k * u - l * B + o * A) * q;
    return b
};
mat4.toRotationMat = function(a, b) {
    b || (b = mat4.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
mat4.toMat3 = function(a, b) {
    b || (b = mat3.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[4];
    b[4] = a[5];
    b[5] = a[6];
    b[6] = a[8];
    b[7] = a[9];
    b[8] = a[10];
    return b
};
mat4.toInverseMat3 = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[4],
        f = a[5],
        h = a[6],
        i = a[8],
        j = a[9],
        k = a[10],
        l = k * f - h * j,
        o = -k * g + h * i,
        m = j * g - f * i,
        n = c * l + d * o + e * m;
    if (!n) return null;
    n = 1 / n;
    b || (b = mat3.create());
    b[0] = l * n;
    b[1] = (-k * d + e * j) * n;
    b[2] = (h * d - e * f) * n;
    b[3] = o * n;
    b[4] = (k * c - e * i) * n;
    b[5] = (-h * c + e * g) * n;
    b[6] = m * n;
    b[7] = (-j * c + d * i) * n;
    b[8] = (f * c - d * g) * n;
    return b
};
mat4.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        g = a[2],
        f = a[3],
        h = a[4],
        i = a[5],
        j = a[6],
        k = a[7],
        l = a[8],
        o = a[9],
        m = a[10],
        n = a[11],
        p = a[12],
        r = a[13],
        s = a[14];
    a = a[15];
    var A = b[0],
        B = b[1],
        t = b[2],
        u = b[3],
        v = b[4],
        w = b[5],
        x = b[6],
        y = b[7],
        z = b[8],
        C = b[9],
        D = b[10],
        E = b[11],
        q = b[12],
        F = b[13],
        G = b[14];
    b = b[15];
    c[0] = A * d + B * h + t * l + u * p;
    c[1] = A * e + B * i + t * o + u * r;
    c[2] = A * g + B * j + t * m + u * s;
    c[3] = A * f + B * k + t * n + u * a;
    c[4] = v * d + w * h + x * l + y * p;
    c[5] = v * e + w * i + x * o + y * r;
    c[6] = v * g + w * j + x * m + y * s;
    c[7] = v * f + w * k + x * n + y * a;
    c[8] = z * d + C * h + D * l + E * p;
    c[9] = z * e + C * i + D * o + E * r;
    c[10] = z *
        g + C * j + D * m + E * s;
    c[11] = z * f + C * k + D * n + E * a;
    c[12] = q * d + F * h + G * l + b * p;
    c[13] = q * e + F * i + G * o + b * r;
    c[14] = q * g + F * j + G * m + b * s;
    c[15] = q * f + F * k + G * n + b * a;
    return c
};
mat4.multiplyVec3 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1];
    b = b[2];
    c[0] = a[0] * d + a[4] * e + a[8] * b + a[12];
    c[1] = a[1] * d + a[5] * e + a[9] * b + a[13];
    c[2] = a[2] * d + a[6] * e + a[10] * b + a[14];
    return c
};
mat4.multiplyVec4 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        g = b[2];
    b = b[3];
    c[0] = a[0] * d + a[4] * e + a[8] * g + a[12] * b;
    c[1] = a[1] * d + a[5] * e + a[9] * g + a[13] * b;
    c[2] = a[2] * d + a[6] * e + a[10] * g + a[14] * b;
    c[3] = a[3] * d + a[7] * e + a[11] * g + a[15] * b;
    return c
};
mat4.translate = function(a, b, c) {
    var d = b[0],
        e = b[1];
    b = b[2];
    if (!c || a == c) {
        a[12] = a[0] * d + a[4] * e + a[8] * b + a[12];
        a[13] = a[1] * d + a[5] * e + a[9] * b + a[13];
        a[14] = a[2] * d + a[6] * e + a[10] * b + a[14];
        a[15] = a[3] * d + a[7] * e + a[11] * b + a[15];
        return a
    }
    var g = a[0],
        f = a[1],
        h = a[2],
        i = a[3],
        j = a[4],
        k = a[5],
        l = a[6],
        o = a[7],
        m = a[8],
        n = a[9],
        p = a[10],
        r = a[11];
    c[0] = g;
    c[1] = f;
    c[2] = h;
    c[3] = i;
    c[4] = j;
    c[5] = k;
    c[6] = l;
    c[7] = o;
    c[8] = m;
    c[9] = n;
    c[10] = p;
    c[11] = r;
    c[12] = g * d + j * e + m * b + a[12];
    c[13] = f * d + k * e + n * b + a[13];
    c[14] = h * d + l * e + p * b + a[14];
    c[15] = i * d + o * e + r * b + a[15];
    return c
};
mat4.scale = function(a, b, c) {
    var d = b[0],
        e = b[1];
    b = b[2];
    if (!c || a == c) {
        a[0] *= d;
        a[1] *= d;
        a[2] *= d;
        a[3] *= d;
        a[4] *= e;
        a[5] *= e;
        a[6] *= e;
        a[7] *= e;
        a[8] *= b;
        a[9] *= b;
        a[10] *= b;
        a[11] *= b;
        return a
    }
    c[0] = a[0] * d;
    c[1] = a[1] * d;
    c[2] = a[2] * d;
    c[3] = a[3] * d;
    c[4] = a[4] * e;
    c[5] = a[5] * e;
    c[6] = a[6] * e;
    c[7] = a[7] * e;
    c[8] = a[8] * b;
    c[9] = a[9] * b;
    c[10] = a[10] * b;
    c[11] = a[11] * b;
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15];
    return c
};
mat4.rotate = function(a, b, c, d) {
    var e = c[0],
        g = c[1];
    c = c[2];
    var f = Math.sqrt(e * e + g * g + c * c);
    if (!f) return null;
    if (f != 1) {
        f = 1 / f;
        e *= f;
        g *= f;
        c *= f
    }
    var h = Math.sin(b),
        i = Math.cos(b),
        j = 1 - i;
    b = a[0];
    f = a[1];
    var k = a[2],
        l = a[3],
        o = a[4],
        m = a[5],
        n = a[6],
        p = a[7],
        r = a[8],
        s = a[9],
        A = a[10],
        B = a[11],
        t = e * e * j + i,
        u = g * e * j + c * h,
        v = c * e * j - g * h,
        w = e * g * j - c * h,
        x = g * g * j + i,
        y = c * g * j + e * h,
        z = e * c * j + g * h;
    e = g * c * j - e * h;
    g = c * c * j + i;
    if (d) {
        if (a != d) {
            d[12] = a[12];
            d[13] = a[13];
            d[14] = a[14];
            d[15] = a[15]
        }
    } else d = a;
    d[0] = b * t + o * u + r * v;
    d[1] = f * t + m * u + s * v;
    d[2] = k * t + n * u + A * v;
    d[3] = l * t + p * u + B *
        v;
    d[4] = b * w + o * x + r * y;
    d[5] = f * w + m * x + s * y;
    d[6] = k * w + n * x + A * y;
    d[7] = l * w + p * x + B * y;
    d[8] = b * z + o * e + r * g;
    d[9] = f * z + m * e + s * g;
    d[10] = k * z + n * e + A * g;
    d[11] = l * z + p * e + B * g;
    return d
};
mat4.rotateX = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[4],
        g = a[5],
        f = a[6],
        h = a[7],
        i = a[8],
        j = a[9],
        k = a[10],
        l = a[11];
    if (c) {
        if (a != c) {
            c[0] = a[0];
            c[1] = a[1];
            c[2] = a[2];
            c[3] = a[3];
            c[12] = a[12];
            c[13] = a[13];
            c[14] = a[14];
            c[15] = a[15]
        }
    } else c = a;
    c[4] = e * b + i * d;
    c[5] = g * b + j * d;
    c[6] = f * b + k * d;
    c[7] = h * b + l * d;
    c[8] = e * -d + i * b;
    c[9] = g * -d + j * b;
    c[10] = f * -d + k * b;
    c[11] = h * -d + l * b;
    return c
};
mat4.rotateY = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[0],
        g = a[1],
        f = a[2],
        h = a[3],
        i = a[8],
        j = a[9],
        k = a[10],
        l = a[11];
    if (c) {
        if (a != c) {
            c[4] = a[4];
            c[5] = a[5];
            c[6] = a[6];
            c[7] = a[7];
            c[12] = a[12];
            c[13] = a[13];
            c[14] = a[14];
            c[15] = a[15]
        }
    } else c = a;
    c[0] = e * b + i * -d;
    c[1] = g * b + j * -d;
    c[2] = f * b + k * -d;
    c[3] = h * b + l * -d;
    c[8] = e * d + i * b;
    c[9] = g * d + j * b;
    c[10] = f * d + k * b;
    c[11] = h * d + l * b;
    return c
};
mat4.rotateZ = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[0],
        g = a[1],
        f = a[2],
        h = a[3],
        i = a[4],
        j = a[5],
        k = a[6],
        l = a[7];
    if (c) {
        if (a != c) {
            c[8] = a[8];
            c[9] = a[9];
            c[10] = a[10];
            c[11] = a[11];
            c[12] = a[12];
            c[13] = a[13];
            c[14] = a[14];
            c[15] = a[15]
        }
    } else c = a;
    c[0] = e * b + i * d;
    c[1] = g * b + j * d;
    c[2] = f * b + k * d;
    c[3] = h * b + l * d;
    c[4] = e * -d + i * b;
    c[5] = g * -d + j * b;
    c[6] = f * -d + k * b;
    c[7] = h * -d + l * b;
    return c
};
mat4.frustum = function(a, b, c, d, e, g, f) {
    f || (f = mat4.create());
    var h = b - a,
        i = d - c,
        j = g - e;
    f[0] = e * 2 / h;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    f[4] = 0;
    f[5] = e * 2 / i;
    f[6] = 0;
    f[7] = 0;
    f[8] = (b + a) / h;
    f[9] = (d + c) / i;
    f[10] = -(g + e) / j;
    f[11] = -1;
    f[12] = 0;
    f[13] = 0;
    f[14] = -(g * e * 2) / j;
    f[15] = 0;
    return f
};
mat4.perspective = function(a, b, c, d, e) {
    a = c * Math.tan(a * Math.PI / 360);
    b = a * b;
    return mat4.frustum(-b, b, -a, a, c, d, e)
};
mat4.ortho = function(a, b, c, d, e, g, f) {
    f || (f = mat4.create());
    var h = b - a,
        i = d - c,
        j = g - e;
    f[0] = 2 / h;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    f[4] = 0;
    f[5] = 2 / i;
    f[6] = 0;
    f[7] = 0;
    f[8] = 0;
    f[9] = 0;
    f[10] = -2 / j;
    f[11] = 0;
    f[12] = -(a + b) / h;
    f[13] = -(d + c) / i;
    f[14] = -(g + e) / j;
    f[15] = 1;
    return f
};
mat4.lookAt = function(a, b, c, d) {
    d || (d = mat4.create());
    var e = a[0],
        g = a[1];
    a = a[2];
    var f = c[0],
        h = c[1],
        i = c[2];
    c = b[1];
    var j = b[2];
    if (e == b[0] && g == c && a == j) return mat4.identity(d);
    var k, l, o, m;
    c = e - b[0];
    j = g - b[1];
    b = a - b[2];
    m = 1 / Math.sqrt(c * c + j * j + b * b);
    c *= m;
    j *= m;
    b *= m;
    k = h * b - i * j;
    i = i * c - f * b;
    f = f * j - h * c;
    if (m = Math.sqrt(k * k + i * i + f * f)) {
        m = 1 / m;
        k *= m;
        i *= m;
        f *= m
    } else f = i = k = 0;
    h = j * f - b * i;
    l = b * k - c * f;
    o = c * i - j * k;
    if (m = Math.sqrt(h * h + l * l + o * o)) {
        m = 1 / m;
        h *= m;
        l *= m;
        o *= m
    } else o = l = h = 0;
    d[0] = k;
    d[1] = h;
    d[2] = c;
    d[3] = 0;
    d[4] = i;
    d[5] = l;
    d[6] = j;
    d[7] = 0;
    d[8] = f;
    d[9] =
        o;
    d[10] = b;
    d[11] = 0;
    d[12] = -(k * e + i * g + f * a);
    d[13] = -(h * e + l * g + o * a);
    d[14] = -(c * e + j * g + b * a);
    d[15] = 1;
    return d
};
mat4.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
quat4 = {};
quat4.create = function(a) {
    var b = new glMatrixArrayType(4);
    if (a) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3]
    }
    return b
};
quat4.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    return b
};
quat4.calculateW = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2];
    if (!b || a == b) {
        a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
        return a
    }
    b[0] = c;
    b[1] = d;
    b[2] = e;
    b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
    return b
};
quat4.inverse = function(a, b) {
    if (!b || a == b) {
        a[0] *= 1;
        a[1] *= 1;
        a[2] *= 1;
        return a
    }
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    b[3] = a[3];
    return b
};
quat4.length = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2];
    a = a[3];
    return Math.sqrt(b * b + c * c + d * d + a * a)
};
quat4.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = Math.sqrt(c * c + d * d + e * e + g * g);
    if (f == 0) {
        b[0] = 0;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        return b
    }
    f = 1 / f;
    b[0] = c * f;
    b[1] = d * f;
    b[2] = e * f;
    b[3] = g * f;
    return b
};
quat4.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        g = a[2];
    a = a[3];
    var f = b[0],
        h = b[1],
        i = b[2];
    b = b[3];
    c[0] = d * b + a * f + e * i - g * h;
    c[1] = e * b + a * h + g * f - d * i;
    c[2] = g * b + a * i + d * h - e * f;
    c[3] = a * b - d * f - e * h - g * i;
    return c
};
quat4.multiplyVec3 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        g = b[2];
    b = a[0];
    var f = a[1],
        h = a[2];
    a = a[3];
    var i = a * d + f * g - h * e,
        j = a * e + h * d - b * g,
        k = a * g + b * e - f * d;
    d = -b * d - f * e - h * g;
    c[0] = i * a + d * -b + j * -h - k * -f;
    c[1] = j * a + d * -f + k * -b - i * -h;
    c[2] = k * a + d * -h + i * -f - j * -b;
    return c
};
quat4.toMat3 = function(a, b) {
    b || (b = mat3.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = c + c,
        h = d + d,
        i = e + e,
        j = c * f,
        k = c * h;
    c = c * i;
    var l = d * h;
    d = d * i;
    e = e * i;
    f = g * f;
    h = g * h;
    g = g * i;
    b[0] = 1 - (l + e);
    b[1] = k - g;
    b[2] = c + h;
    b[3] = k + g;
    b[4] = 1 - (j + e);
    b[5] = d - f;
    b[6] = c - h;
    b[7] = d + f;
    b[8] = 1 - (j + l);
    return b
};
quat4.toMat4 = function(a, b) {
    b || (b = mat4.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = c + c,
        h = d + d,
        i = e + e,
        j = c * f,
        k = c * h;
    c = c * i;
    var l = d * h;
    d = d * i;
    e = e * i;
    f = g * f;
    h = g * h;
    g = g * i;
    b[0] = 1 - (l + e);
    b[1] = k - g;
    b[2] = c + h;
    b[3] = 0;
    b[4] = k + g;
    b[5] = 1 - (j + e);
    b[6] = d - f;
    b[7] = 0;
    b[8] = c - h;
    b[9] = d + f;
    b[10] = 1 - (j + l);
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
quat4.slerp = function(a, b, c, d) {
    d || (d = a);
    var e = c;
    if (a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] < 0) e = -1 * c;
    d[0] = 1 - c * a[0] + e * b[0];
    d[1] = 1 - c * a[1] + e * b[1];
    d[2] = 1 - c * a[2] + e * b[2];
    d[3] = 1 - c * a[3] + e * b[3];
    return d
};
quat4.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};
quat4.scale = function(a, b, c) {
    if (!c || a == c) {
        a[0] *= b;
        a[1] *= b;
        a[2] *= b;
        a[3] *= b;
        return a
    }
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    c[3] = a[3] * b;
    return c
};
    function Transform (transform = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
    this.matrix = transform;
    this.translation = [0, 0, 0];
    this.x_angle = 0;
    this.y_angle = 0;
    this.z_angle = 0;
    this.scale = 1.0;
}

Transform.prototype.translate = function (x, y, z) {

    const right = vec3.multiplyScalar(vec3.normalize([
        this.matrix[0], this.matrix[4], this.matrix[8]
    ]), x);

    const up = vec3.multiplyScalar(vec3.normalize([
        this.matrix[1], this.matrix[5], this.matrix[9]
    ]), y);

    const back = vec3.multiplyScalar(vec3.normalize([
        this.matrix[2], this.matrix[6], this.matrix[10]
    ]), z);

    this.translation = vec3.add(
        this.translation, vec3.add(vec3.add(right, up), back)
    );

    this.calculateTransform();

}

Transform.prototype.rotate = function (x, y, z) {
    this.x_angle += x;
    this.y_angle += y;
    this.z_angle += z;
    this.calculateTransform();
}

Transform.prototype.calculateTransform = function () {
    this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

    this.matrix = mat4.rotate(this.matrix, this.y_angle, [
        this.matrix[1], this.matrix[5], this.matrix[9]
    ]);

    this.matrix = mat4.rotate(this.matrix, this.x_angle, [
        this.matrix[0], this.matrix[4], this.matrix[8]
    ]);

    this.matrix = mat4.rotate(this.matrix, this.z_angle, [
        this.matrix[2], this.matrix[6], this.matrix[10]
    ]);

    this.matrix = mat4.translate(this.matrix, this.translation);
}

    function EventScheduler (canvas, update) {

    // DIsable context menu
    canvas.oncontextmenu  = () => false;

    // Event attribute calculations
    this.isMousePressed = false;
    this.prevXPosition = 0;
    this.prevYPosition = 0;

    // Schedules Lists
    this.drag_schedules = [];
    this.key_down_schedules = [];
    this.key_press_schedules = {};

    // Active Events List
    this.active_events = {};

    canvas.addEventListener('mousedown', (event) => {
        this.isMousePressed = event.button;
        this.prevXPosition = event.x;
        this.prevYPosition = event.y;
    });
 
    document.addEventListener('mouseup', (event) => {
        this.isMousePressed = false;
    });

    document.addEventListener('keydown', (event) => {
        if (event.repeat) {
            return;
        }

        this.active_events[event.key] = true;
    });

    document.addEventListener('keyup', (event) => {
        this.active_events[event.key] = false;
    });

    canvas.addEventListener('mousemove', (event) => this.ondrag(event));
    document.addEventListener('keydown', (event) => this.keydown(event));

    /*
    * Start event loop - WOrk on the delay to make it once every 16ms
    */
    const EventLoop = () => {
        const active_events = Object.keys(this.active_events)
            .filter(key => this.active_events[key]);

        if (!active_events.length) {
            requestAnimationFrame(() => EventLoop());
            return;
        }

        for (const key of active_events) {
            if (this.key_press_schedules[key]) {
                for (const schedule of this.key_press_schedules[key]) {
                    schedule();
                }
            }
        }
        
        requestAnimationFrame(() => this.update());
        requestAnimationFrame(() => EventLoop());
    };

    requestAnimationFrame(() => EventLoop());

    this.update = update;
}

EventScheduler.prototype.ondrag = function (event) {
    if (this.isMousePressed === false) {
        return;
    }

    const variables = {
        delta_x: (event.x - this.prevXPosition) * 0.001,
        delta_y: -(event.y - this.prevYPosition) * 0.001,
        up: [0, 1, 0], right: [1, 0 , 0], back: [0, 0, 1],
        button: this.isMousePressed
    }

    for (const schedule of this.drag_schedules) {
        schedule(variables);
    }

    this.prevXPosition = event.x;
    this.prevYPosition = event.y;
    this.update();
}

EventScheduler.prototype.scheduleDrag = function (schedule) {
    this.drag_schedules.push(schedule);
}

EventScheduler.prototype.scheduleKeyPress = function (schedule, key) {
    if (!this.key_press_schedules[key]) {
        this.key_press_schedules[key] = [];
    }

    this.key_press_schedules[key].push(schedule);
}

EventScheduler.prototype.keydown = function (event) {
    const variables = {
        key: event.key
    }

    for (const schedule of this.key_down_schedules) {
        schedule(variables);
    }

    this.update();
}

EventScheduler.prototype.scheduleKeyDown = function (schedule) {
    this.key_down_schedules.push(schedule);
}

EventScheduler.prototype.scheduleInterval = function (schedule, timer) {
    setInterval(() => { schedule(); requestAnimationFrame(() => this.update()); }, timer);
}
    function viewer (container) {

    /*
    * Canvas Configuration
    */
    const canvas = document.createElement('canvas');
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    container.appendChild(canvas);

    /*
    * WebGL Context Configuration
    */
    const webgl = canvas.getContext("webgl");
    webgl.viewport(0, 0, container.clientWidth, container.clientHeight);
    webgl.clearColor(0.0, 0.0, 0.0, 0.0);
    webgl.getExtension('OES_standard_derivatives');
    webgl.enable(webgl.DEPTH_TEST);

    /*
    * Geometries COnfiguration
    */
    const geometries = [];

    /*
    * Events Configuration
    */
    const eventScheduler = new EventScheduler(canvas, updateMatrix);

    /*
    * There are multiple cameras but only one active
    */
    const cameras = [];
    let activeCamera = null;

    

            const v_buff_vcahwttk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff_vcahwttk);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                0.000001,-0.177742,-2.45157,-0.3489,-0.177742,-2.42666,-0.349792,-0.000002,-2.43286,0.000001,-0.000002,-2.45783,-0.346232,-0.354582,-2.4081,-0.685403,-0.354582,-2.33427,-0.690686,-0.177742,-2.35226,-0.692451,-0.000002,-2.35827,-0.690686,0.177738,-2.35226,-0.3489,0.177738,-2.42666,0.346232,-0.354582,-2.4081,0.000001,-0.354582,-2.43282,0.348901,-0.177742,-2.42666,0.349793,-0.000002,-2.43286,0.000001,0.177738,-2.45157,0.348901,0.177738,-2.42666,-0.341798,-0.529612,-2.37726,-0.676626,-0.529612,-2.30438,-0.997704,-0.529612,-2.18467,-1.01065,-0.354582,-2.21301,-1.01844,-0.177742,-2.23006,-1.02104,-0.000002,-2.23576,0.000001,-0.529612,-2.40166,-1.01844,0.177738,-2.23006,-0.685403,0.354578,-2.33427,-0.346232,0.354578,-2.4081,-1.01065,0.354578,-2.213011,0.000001,0.354578,-2.43282,0.341798,-0.529612,-2.37726,0.676626,-0.529612,-2.30438,0.685404,-0.354582,-2.33427,0.690687,-0.177742,-2.35226,0.692452,-0.000002,-2.35827,0.690687,0.177738,-2.35226,0.346232,0.354578,-2.4081,0.685404,0.354578,-2.33427,-0.335623,-0.701942,-2.33431,-0.664402,-0.701942,-2.26275,-0.979679,-0.701942,-2.1452,0.000001,-0.701942,-2.35827,-1.27498,-0.701942,-1.98391,-1.29844,-0.529612,-2.02041,-1.31528,-0.354582,-2.04662,-1.32542,-0.177742,-2.06239,-1.3288,-0.000002,-2.06766,-1.32542,0.177738,-2.06239,0.335624,-0.701942,-2.33431,-1.31528,0.354578,-2.04662,-0.676626,0.529608,-2.30438,-0.341798,0.529608,-2.37726,-0.997704,0.529608,-2.18467,0.000001,0.529608,-2.40166,-1.29844,0.529608,-2.020411,0.341798,0.529608,-2.37726,0.664403,-0.701942,-2.26275,0.97968,-0.701942,-2.1452,0.997704,-0.529612,-2.18467,1.01065,-0.354582,-2.21301,1.018441,-0.177742,-2.23006,1.02104,-0.000002,-2.23576,1.018441,0.177738,-2.23006,1.01065,0.354578,-2.21301,0.676626,0.529608,-2.30438,0.997704,0.529608,-2.18467,-0.327737,-0.870702,-2.27946,-0.648791,-0.870702,-2.20958,-0.956661,-0.870702,-2.0948,0.000001,-0.870702,-2.30286,-1.24502,-0.870702,-1.93729,0.327738,-0.870702,-2.27946,-1.50808,-0.870702,-1.74042,-1.54437,-0.701942,-1.7823,-1.57278,-0.529612,-1.81509,-1.59318,-0.354582,-1.83863,-1.60546,-0.177742,-1.8528,-1.60957,-0.000002,-1.85754,-1.60546,0.177738,-1.8528,-1.59318,0.354578,-1.83863,0.648792,-0.870702,-2.20958,-1.57278,0.529608,-1.81509,-0.664402,0.701938,-2.26275,-0.335623,0.701938,-2.33431,-0.979679,0.701938,-2.1452,0.000001,0.701938,-2.35827,-1.27498,0.701938,-1.98391,0.335624,0.701938,-2.33431,-1.54437,0.701938,-1.7823,0.664403,0.701938,-2.26275,0.956661,-0.870702,-2.0948,1.24502,-0.870702,-1.93729,1.27498,-0.701942,-1.98391,1.29844,-0.529612,-2.02041,1.31528,-0.354582,-2.04661,1.32542,-0.177742,-2.06239,1.32881,-0.000002,-2.06766,1.32542,0.177738,-2.06239,1.31528,0.354578,-2.04661,1.29844,0.529608,-2.02041,0.97968,0.701938,-2.1452,1.27498,0.701938,-1.98391,-0.318182,-1.035012,-2.21301,-0.629876,-1.035012,-2.14516,-0.928769,-1.035012,-2.03372,0.000001,-1.035012,-2.23572,-1.20872,-1.035012,-1.88081,0.318183,-1.035012,-2.21301,-1.46411,-1.035012,-1.68968,0.629876,-1.035012,-2.14516,-1.68965,-1.035012,-1.46409,-1.74039,-0.870702,-1.50806,-1.78226,-0.701942,-1.54434,-1.81505,-0.529612,-1.57275,-1.8386,-0.354582,-1.59316,-1.85277,-0.177742,-1.60544,-1.85751,-0.000002,-1.60954,-1.85277,0.177738,-1.60544,-1.8386,0.354578,-1.59316,-1.81505,0.529608,-1.57275,0.92877,-1.035012,-2.03372,-1.78226,0.701938,-1.54434,-0.648791,0.870698,-2.20958,-0.327737,0.870698,-2.27946,-0.956661,0.870698,-2.0948,0.000001,0.870698,-2.30286,-1.24502,0.870698,-1.93729,0.327738,0.870698,-2.27946,-1.50808,0.870698,-1.74042,0.648792,0.870698,-2.20958,-1.74039,0.870698,-1.50806,0.956661,0.870698,-2.0948,1.20872,-1.035012,-1.88081,1.50808,-0.870702,-1.740419,1.46411,-1.035012,-1.689679,1.54437,-0.701942,-1.7823,1.57278,-0.529612,-1.815089,1.59318,-0.354582,-1.838629,1.60546,-0.177742,-1.8528,1.60957,-0.000002,-1.85754,1.60546,0.177738,-1.8528,1.59318,0.354578,-1.83863,1.57278,0.529608,-1.81509,1.54437,0.701938,-1.7823,1.24502,0.870698,-1.93729,1.50808,0.870698,-1.74042,-0.307005,-1.194062,-2.13527,-0.607749,-1.194062,-2.0698,-0.896143,-1.194062,-1.96228,0.000001,-1.194062,-2.15719,-1.16626,-1.194062,-1.81474,0.307005,-1.194062,-2.13527,-1.41268,-1.194062,-1.63032,0.60775,-1.194062,-2.0698,-1.63029,-1.194062,-1.41266,0.896144,-1.194062,-1.96228,-1.81477,-1.194062,-1.16628,-1.88084,-1.035012,-1.20875,-1.93733,-0.870702,-1.24504,-1.98394,-0.701942,-1.275,-2.02044,-0.529612,-1.29846,-2.04665,-0.354582,-1.3153,-2.06243,-0.177742,-1.32544,-2.0677,-0.000002,-1.32883,-2.06243,0.177738,-1.32544,-2.04665,0.354578,-1.3153,-2.02044,0.529608,-1.29846,-1.98394,0.701938,-1.275,1.16626,-1.194062,-1.81474,-1.93733,0.870698,-1.245041,-0.629876,1.035008,-2.14516,-0.318182,1.035008,-2.213011,-0.928769,1.035008,-2.03372,0.000001,1.035008,-2.23572,-1.20872,1.035008,-1.88081,0.318183,1.035008,-2.213011,-1.46411,1.035009,-1.68968,0.629876,1.035008,-2.14516,-1.68965,1.035009,-1.46409,0.92877,1.035008,-2.03372,-1.88084,1.035009,-1.20875,1.20872,1.035008,-1.88081,1.41268,-1.194062,-1.63032,1.68965,-1.035012,-1.46409,1.63029,-1.194062,-1.41266,1.74039,-0.870702,-1.50805,1.78226,-0.701942,-1.54434,1.81505,-0.529612,-1.57275,1.8386,-0.354582,-1.59316,1.85277,-0.177742,-1.60544,1.85751,-0.000002,-1.60954,1.85277,0.177738,-1.60544,1.8386,0.354578,-1.59316,1.81505,0.529608,-1.57275,1.78226,0.701938,-1.54434,1.74039,0.870698,-1.50805,1.46411,1.035009,-1.68968,1.68965,1.035009,-1.46409,-0.294264,-1.347022,-2.04665,-0.582527,-1.347022,-1.98391,-0.858952,-1.347022,-1.88084,0.000001,-1.347022,-2.06766,-1.11786,-1.347022,-1.73943,0.294264,-1.347022,-2.04665,-1.35405,-1.347022,-1.56266,0.582528,-1.347022,-1.98391,-1.56263,-1.347022,-1.35403,0.858953,-1.347022,-1.88084,-1.73946,-1.347022,-1.11788,1.11786,-1.347022,-1.739429,-1.88081,-1.347022,-0.858938,-1.96225,-1.194062,-0.896128,-2.03369,-1.035012,-0.928753,-2.09476,-0.870702,-0.956644,-2.14516,-0.701942,-0.979662,-2.18463,-0.529612,-0.997686,-2.21297,-0.354582,-1.01063,-2.23002,-0.177742,-1.01842,-2.23572,-0.000002,-1.02102,-2.23002,0.177739,-1.01842,-2.21297,0.354578,-1.01063,-2.18463,0.529608,-0.997686,-2.14516,0.701938,-0.979662,-2.09476,0.870698,-0.956644,1.35405,-1.347022,-1.56266,-2.03369,1.035009,-0.928753,-0.607749,1.194058,-2.0698,-0.307005,1.194058,-2.13527,-0.896143,1.194058,-1.962281,0.000001,1.194058,-2.15719,-1.16626,1.194059,-1.81474,0.307005,1.194058,-2.13527,-1.41268,1.194059,-1.63032,0.60775,1.194058,-2.0698,-1.63029,1.194059,-1.41266,0.896144,1.194058,-1.96228,-1.81477,1.194059,-1.166281,1.16626,1.194059,-1.81474,-1.96225,1.194059,-0.896128,1.41268,1.194059,-1.63032,1.56263,-1.347022,-1.35403,1.73946,-1.347022,-1.11788,1.81477,-1.194062,-1.16628,1.88084,-1.035012,-1.20874,1.93733,-0.870702,-1.24504,1.98394,-0.701942,-1.275,2.02044,-0.529612,-1.29846,2.04665,-0.354582,-1.3153,2.06243,-0.177742,-1.32544,2.0677,-0.000002,-1.32883,2.06243,0.177738,-1.32544,2.04665,0.354578,-1.3153,2.02044,0.529608,-1.29846,1.98394,0.701938,-1.275,1.93733,0.870698,-1.24504,1.88084,1.035009,-1.20874,1.63029,1.194059,-1.41266,1.81477,1.194059,-1.16628,-0.280023,-1.493112,-1.9476,-0.554335,-1.493112,-1.88789,-0.817383,-1.493112,-1.78982,0.000001,-1.493112,-1.96759,-1.06376,-1.493112,-1.65525,0.280023,-1.493112,-1.9476,-1.28852,-1.493112,-1.48704,0.554336,-1.493112,-1.88789,-1.48701,-1.493112,-1.2885,0.817383,-1.493112,-1.789819,-1.65527,-1.493111,-1.06378,1.06376,-1.493112,-1.65525,-1.78979,-1.493111,-0.817369,1.28852,-1.493112,-1.48704,-1.88793,-1.493111,-0.554345,-1.98394,-1.347022,-0.582538,-2.06984,-1.194062,-0.60776,-2.1452,-1.035012,-0.629887,-2.20962,-0.870702,-0.648803,-2.26279,-0.701941,-0.664414,-2.30442,-0.529612,-0.676638,-2.33431,-0.354581,-0.685416,-2.3523,-0.177742,-0.690699,-2.35831,-0.000002,-0.692464,-2.3523,0.177739,-0.690699,-2.33431,0.354578,-0.685416,-2.30442,0.529608,-0.676638,-2.26279,0.701939,-0.664414,-2.20962,0.870698,-0.648803,-2.1452,1.035009,-0.629887,1.48701,-1.493112,-1.288499,-2.06984,1.194059,-0.607761,-0.582527,1.347018,-1.98391,-0.294264,1.347018,-2.04665,-0.858952,1.347018,-1.88084,0.000001,1.347018,-2.06766,-1.11786,1.347018,-1.73943,0.294264,1.347018,-2.04665,-1.35405,1.347018,-1.56266,0.582528,1.347018,-1.98391,-1.56263,1.347018,-1.35403,0.858953,1.347018,-1.88084,-1.73946,1.347018,-1.11788,1.11786,1.347018,-1.73943,-1.88081,1.347018,-0.858938,1.35405,1.347018,-1.56266,-1.98394,1.347018,-0.582539,1.56263,1.347018,-1.35403,1.65528,-1.493111,-1.063779,1.78979,-1.493111,-0.817367,1.88081,-1.347022,-0.858937,1.96225,-1.194062,-0.896127,2.03369,-1.035012,-0.928753,2.09476,-0.870702,-0.956644,2.14516,-0.701942,-0.979662,2.18463,-0.529612,-0.997686,2.21297,-0.354582,-1.01063,2.23002,-0.177742,-1.01842,2.23572,-0.000002,-1.02102,2.23002,0.177739,-1.01842,2.21297,0.354578,-1.01063,2.18463,0.529608,-0.997686,2.14516,0.701938,-0.979662,2.09476,0.870698,-0.956644,2.03369,1.035009,-0.928753,1.96225,1.194059,-0.896127,1.73946,1.347018,-1.11788,1.88081,1.347018,-0.858937,-0.264355,-1.631599,-1.83863,-0.52332,-1.631599,-1.78226,-0.77165,-1.631599,-1.68968,0,-1.631599,-1.85751,-1.00424,-1.631599,-1.56263,0.264356,-1.631599,-1.838629,-1.21643,-1.631599,-1.40383,0.52332,-1.631599,-1.78226,-1.40381,-1.631599,-1.21641,0.77165,-1.631599,-1.689679,-1.56266,-1.631599,-1.00426,1.00424,-1.631599,-1.56263,-1.68965,-1.631599,-0.771636,1.21643,-1.631599,-1.40383,-1.7823,-1.631599,-0.523329,1.40381,-1.631599,-1.21641,-1.8386,-1.631599,-0.264351,-1.94757,-1.493111,-0.280018,-2.04661,-1.347022,-0.294259,-2.13523,-1.194061,-0.307,-2.21297,-1.035011,-0.318177,-2.27942,-0.870701,-0.327732,-2.33427,-0.701941,-0.335617,-2.37722,-0.529612,-0.341792,-2.40805,-0.354581,-0.346226,-2.42661,-0.177742,-0.348895,-2.43282,-0.000001,-0.349786,-2.42661,0.177739,-0.348895,-2.40805,0.354578,-0.346226,-2.37722,0.529608,-0.341792,-2.33427,0.701939,-0.335617,-2.27942,0.870698,-0.327732,-2.21297,1.035009,-0.318178,-2.13523,1.194059,-0.307001,1.56266,-1.631599,-1.004259,-2.04661,1.347019,-0.29426,-0.554335,1.493108,-1.88789,-0.280023,1.493108,-1.9476,-0.817383,1.493108,-1.78982,0.000001,1.493108,-1.96759,-1.06376,1.493108,-1.65525,0.280023,1.493108,-1.9476,-1.28852,1.493108,-1.487041,0.554336,1.493108,-1.88789,-1.48701,1.493108,-1.2885,0.817383,1.493108,-1.78982,-1.65527,1.493109,-1.06378,1.06376,1.493108,-1.65525,-1.78979,1.493109,-0.817369,1.28852,1.493108,-1.48703,-1.88793,1.493109,-0.554346,1.48701,1.493108,-1.2885,-1.94757,1.493109,-0.280019,1.65528,1.493109,-1.06378,1.68965,-1.631599,-0.771635,1.7823,-1.631599,-0.523328,1.88793,-1.493111,-0.554344,1.98394,-1.347022,-0.582536,2.06984,-1.194062,-0.607759,2.1452,-1.035012,-0.629887,2.20962,-0.870702,-0.648803,2.26279,-0.701941,-0.664414,2.30442,-0.529612,-0.676638,2.33431,-0.354581,-0.685415,2.3523,-0.177742,-0.690698,2.35832,-0.000002,-0.692464,2.3523,0.177739,-0.690698,2.33431,0.354578,-0.685415,2.30442,0.529608,-0.676638,2.26279,0.701939,-0.664414,2.20962,0.870698,-0.648803,2.1452,1.035009,-0.629887,2.06984,1.194059,-0.60776,1.98394,1.347018,-0.582537,1.78979,1.493109,-0.817368,1.88793,1.493109,-0.554345,-0.24734,-1.761769,-1.72029,-0.489637,-1.761769,-1.66755,-0.721983,-1.761769,-1.58092,0,-1.761769,-1.73795,-0.939606,-1.761769,-1.46206,0.24734,-1.761769,-1.72029,-1.13813,-1.761769,-1.31348,0.489637,-1.761769,-1.66755,-1.31345,-1.761769,-1.13811,0.721983,-1.761769,-1.58092,-1.46208,-1.761768,-0.939623,0.939606,-1.761769,-1.462059,-1.58089,-1.761768,-0.72197,1.13813,-1.761769,-1.31348,-1.66758,-1.761768,-0.489646,1.31345,-1.761769,-1.13811,-1.72026,-1.761768,-0.247336,1.46208,-1.761768,-0.939622,-1.73798,-1.761768,0,-1.85754,-1.631599,0,-1.96763,-1.493111,0,-2.0677,-1.347022,0,-2.15722,-1.194061,0,-2.23576,-1.035011,0,-2.3029,-0.870701,0,-2.35832,-0.701941,0,-2.4017,-0.529611,-0.000001,-2.43286,-0.354581,-0.000001,-2.45161,-0.177742,-0.000001,-2.45788,-0.000001,-0.000001,-2.45161,0.177739,-0.000001,-2.43286,0.354578,-0.000001,-2.4017,0.529608,-0.000001,-2.35832,0.701939,-0.000001,-2.3029,0.870698,-0.000001,-2.23576,1.035009,-0.000001,-2.15722,1.194059,-0.000001,-2.0677,1.347019,-0.000001,1.58089,-1.761768,-0.721969,-1.96763,1.493109,-0.000001,-0.52332,1.631598,-1.78226,-0.264355,1.631598,-1.83863,-0.77165,1.631598,-1.68968,0,1.631598,-1.85751,-1.00424,1.631598,-1.562631,0.264356,1.631598,-1.83863,-1.21643,1.631598,-1.403831,0.52332,1.631598,-1.78226,-1.40381,1.631598,-1.216411,0.77165,1.631598,-1.68968,-1.56266,1.631598,-1.00426,1.00424,1.631598,-1.56263,-1.68965,1.631598,-0.771637,1.21643,1.631598,-1.40383,-1.7823,1.631598,-0.52333,1.40381,1.631598,-1.21641,-1.8386,1.631599,-0.264352,1.56266,1.631598,-1.00426,-1.85754,1.631599,-0.000001,1.68965,1.631598,-0.771636,1.66758,-1.761768,-0.489644,1.72026,-1.761768,-0.247335,1.8386,-1.631599,-0.264349,1.94757,-1.493111,-0.280017,2.04661,-1.347022,-0.294257,2.13523,-1.194061,-0.306998,2.21297,-1.035011,-0.318175,2.27942,-0.870701,-0.327731,2.33427,-0.701941,-0.335617,2.37722,-0.529612,-0.341792,2.40805,-0.354581,-0.346225,2.42661,-0.177742,-0.348894,2.43282,-0.000001,-0.349786,2.42661,0.177739,-0.348894,2.40805,0.354578,-0.346225,2.37722,0.529608,-0.341792,2.33427,0.701939,-0.335617,2.27942,0.870698,-0.327731,2.21297,1.035009,-0.318176,2.13523,1.194059,-0.306999,2.04661,1.347019,-0.294258,1.94757,1.493109,-0.280018,1.7823,1.631598,-0.523329,1.8386,1.631599,-0.26435,-0.229065,-1.882965,-1.59318,-0.453459,-1.882965,-1.54434,-0.668638,-1.882965,-1.46411,0,-1.882965,-1.60954,-0.870182,-1.882965,-1.35403,0.229065,-1.882965,-1.59318,-1.05404,-1.882965,-1.21643,0.45346,-1.882965,-1.54434,-1.21641,-1.882964,-1.05402,0.668638,-1.882965,-1.46411,-1.35405,-1.882964,-0.870198,0.870182,-1.882965,-1.35403,-1.46409,-1.882964,-0.668627,1.05404,-1.882965,-1.216429,-1.54437,-1.882964,-0.453468,1.21641,-1.882964,-1.05402,-1.59316,-1.882964,-0.229061,1.35405,-1.882964,-0.870197,-1.60957,-1.882964,0,1.46409,-1.882964,-0.668625,-1.59316,-1.882964,0.229061,-1.72026,-1.761768,0.247336,-1.8386,-1.631599,0.26435,-1.94757,-1.493111,0.280018,-2.04661,-1.347022,0.294258,-2.13523,-1.194061,0.306999,-2.21297,-1.035011,0.318176,-2.27942,-0.870701,0.327731,-2.33427,-0.701941,0.335617,-2.37722,-0.529611,0.341792,-2.40805,-0.354581,0.346225,-2.42661,-0.177741,0.348894,-2.43282,-0.000001,0.349786,-2.42661,0.177739,0.348894,-2.40805,0.354579,0.346225,-2.37722,0.529609,0.341792,-2.33427,0.701939,0.335617,-2.27942,0.870699,0.327731,-2.21297,1.035009,0.318175,-2.13523,1.194059,0.306998,-2.04661,1.347019,0.294257,-1.94757,1.493109,0.280017,1.54437,-1.882964,-0.453466,-1.8386,1.631599,0.264349,-0.489637,1.761768,-1.66755,-0.24734,1.761768,-1.72029,-0.721983,1.761768,-1.58092,0,1.761768,-1.73795,-0.939606,1.761768,-1.46206,0.24734,1.761768,-1.72029,-1.13813,1.761768,-1.31348,0.489637,1.761768,-1.66755,-1.31345,1.761768,-1.138111,0.721983,1.761768,-1.58092,-1.46208,1.761768,-0.939623,0.939606,1.761768,-1.46206,-1.58089,1.761768,-0.721971,1.13813,1.761768,-1.31348,-1.66758,1.761768,-0.489646,1.31345,1.761768,-1.13811,-1.72026,1.761768,-0.247337,1.46208,1.761768,-0.939623,-1.73798,1.761768,-0.000001,1.58089,1.761768,-0.72197,-1.72026,1.761768,0.247335,1.66758,1.761768,-0.489645,1.59316,-1.882964,-0.22906,1.60957,-1.882964,0.000001,1.73798,-1.761768,0.000001,1.85754,-1.631599,0.000001,1.96763,-1.493111,0.000001,2.0677,-1.347022,0.000001,2.15722,-1.194061,0.000001,2.23576,-1.035011,0.000001,2.3029,-0.870701,0.000001,2.35832,-0.701941,0.000001,2.4017,-0.529611,0.000001,2.43286,-0.354581,0.000001,2.45161,-0.177742,0.000001,2.45788,-0.000001,0.000001,2.45161,0.177739,0.000001,2.43286,0.354578,0.000001,2.4017,0.529608,0.000001,2.35832,0.701939,0.000001,2.3029,0.870698,0.000001,2.23576,1.035009,0.000001,2.15722,1.194059,0.000001,2.0677,1.347019,0.000001,1.96763,1.493109,0,1.85754,1.631599,0,1.72026,1.761768,-0.247336,1.73798,1.761768,0,-0.209622,-1.994562,-1.45796,-0.41497,-1.994562,-1.41326,-0.611885,-1.994562,-1.33984,0,-1.994562,-1.47292,-0.796322,-1.994562,-1.2391,0.209623,-1.994562,-1.45796,-0.964576,-1.994562,-1.11318,0.414971,-1.994562,-1.41326,-1.11316,-1.994562,-0.96456,0.611885,-1.994562,-1.33984,-1.23912,-1.994562,-0.796336,0.796322,-1.994562,-1.2391,-1.33982,-1.994562,-0.611874,0.964577,-1.994562,-1.11318,-1.41328,-1.994562,-0.414978,1.11316,-1.994562,-0.964559,-1.45793,-1.994562,-0.209619,1.23912,-1.994562,-0.796335,-1.47295,-1.994562,0,1.33982,-1.994562,-0.611873,-1.45793,-1.994562,0.209618,1.41328,-1.994562,-0.414977,-1.41328,-1.994561,0.414977,-1.54437,-1.882964,0.453467,-1.66758,-1.761768,0.489645,-1.7823,-1.631598,0.523329,-1.88793,-1.493111,0.554345,-1.98394,-1.347021,0.582537,-2.06984,-1.194061,0.60776,-2.1452,-1.035011,0.629887,-2.20962,-0.870701,0.648802,-2.26279,-0.701941,0.664414,-2.30442,-0.529611,0.676637,-2.33431,-0.354581,0.685415,-2.3523,-0.177741,0.690698,-2.35832,-0.000001,0.692463,-2.3523,0.177739,0.690698,-2.33431,0.354579,0.685415,-2.30442,0.529609,0.676637,-2.26279,0.701939,0.664414,-2.20962,0.870699,0.648802,-2.1452,1.035009,0.629887,-2.06984,1.194059,0.607759,-1.98394,1.347019,0.582536,-1.88793,1.493109,0.554344,-1.7823,1.631599,0.523328,1.45793,-1.994562,-0.209618,-1.66758,1.761768,0.489644,-0.453459,1.882958,-1.54434,-0.229065,1.882958,-1.59318,-0.668638,1.882958,-1.46411,0,1.882958,-1.60954,-0.870182,1.882958,-1.35403,0.229065,1.882958,-1.59318,-1.05404,1.882958,-1.21643,0.45346,1.882958,-1.54434,-1.21641,1.882958,-1.054021,0.668638,1.882958,-1.46411,-1.35405,1.882958,-0.870199,0.870182,1.882958,-1.35403,-1.46409,1.882958,-0.668628,1.05404,1.882958,-1.21643,-1.54437,1.882958,-0.453469,1.21641,1.882958,-1.05402,-1.59316,1.882958,-0.229062,1.35405,1.882958,-0.870198,-1.60957,1.882958,-0.000001,1.46409,1.882958,-0.668626,-1.59316,1.882958,0.22906,1.54437,1.882958,-0.453467,-1.54437,1.882959,0.453466,1.59316,1.882958,-0.229061,1.47295,-1.994562,0.000001,1.45793,-1.994562,0.20962,1.59316,-1.882964,0.229063,1.72026,-1.761768,0.247337,1.8386,-1.631599,0.264352,1.94757,-1.493111,0.280019,2.04661,-1.347022,0.29426,2.13523,-1.194061,0.307001,2.21297,-1.035011,0.318178,2.27942,-0.870701,0.327732,2.33427,-0.701941,0.335618,2.37722,-0.529611,0.341793,2.40805,-0.354581,0.346226,2.42661,-0.177741,0.348895,2.43282,-0.000001,0.349787,2.42661,0.177739,0.348895,2.40805,0.354579,0.346226,2.37722,0.529609,0.341793,2.33427,0.701939,0.335618,2.27942,0.870699,0.327732,2.21297,1.035009,0.318177,2.13523,1.194059,0.307,2.04661,1.347019,0.294259,1.94757,1.493109,0.280018,1.8386,1.631599,0.264351,1.72026,1.761768,0.247336,1.60957,1.882958,0,1.59316,1.882958,0.229061,-0.189112,-2.096,-1.3153,-0.374368,-2.096,-1.27498,-0.552015,-2.096,-1.20874,0,-2.096,-1.3288,-0.718406,-2.096,-1.11786,0.189112,-2.096,-1.3153,-0.870198,-2.096,-1.00426,0.374368,-2.096,-1.27498,-1.00424,-2.096,-0.870182,0.552015,-2.096,-1.20874,-1.11788,-2.095999,-0.718419,0.718406,-2.096,-1.117859,-1.20872,-2.095999,-0.552006,0.870198,-2.096,-1.004259,-1.275,-2.095999,-0.374374,1.00424,-2.096,-0.870182,-1.31528,-2.095999,-0.189109,1.11788,-2.095999,-0.718418,-1.32883,-2.095999,0,1.20872,-2.095999,-0.552005,-1.31528,-2.095999,0.189108,1.275,-2.095999,-0.374373,-1.275,-2.095999,0.374374,1.31528,-2.095999,-0.189107,-1.20872,-2.095999,0.552005,-1.33982,-1.994561,0.611874,-1.46409,-1.882964,0.668626,-1.58089,-1.761768,0.721969,-1.68965,-1.631598,0.771635,-1.78979,-1.493111,0.817368,-1.88081,-1.347021,0.858937,-1.96225,-1.194061,0.896127,-2.03369,-1.035011,0.928752,-2.09476,-0.870701,0.956643,-2.14516,-0.701941,0.979661,-2.18463,-0.529611,0.997685,-2.21297,-0.354581,1.01063,-2.23003,-0.177741,1.01842,-2.23572,-0.000001,1.02102,-2.23003,0.177739,1.01842,-2.21297,0.354579,1.01063,-2.18463,0.529609,0.997685,-2.14516,0.701939,0.979661,-2.09476,0.870699,0.956643,-2.03369,1.035009,0.928752,-1.96225,1.194059,0.896127,-1.88081,1.347019,0.858937,-1.78979,1.493109,0.817367,-1.68965,1.631599,0.771634,-1.58089,1.761768,0.721969,1.32883,-2.095999,0.000001,-1.46409,1.882959,0.668625,-0.41497,1.994558,-1.41326,-0.209622,1.994558,-1.45796,-0.611885,1.994558,-1.339841,0,1.994558,-1.47292,-0.796322,1.994558,-1.2391,0.209623,1.994558,-1.45796,-0.964576,1.994558,-1.113181,0.414971,1.994558,-1.41326,-1.11316,1.994558,-0.96456,0.611885,1.994558,-1.33984,-1.23912,1.994558,-0.796337,0.796323,1.994558,-1.2391,-1.33982,1.994558,-0.611875,0.964577,1.994558,-1.11318,-1.41328,1.994558,-0.414979,1.11316,1.994558,-0.964559,-1.45793,1.994558,-0.20962,1.23912,1.994558,-0.796336,-1.47295,1.994558,-0.000001,1.33982,1.994558,-0.611874,-1.45793,1.994558,0.209617,1.41328,1.994558,-0.414978,-1.41328,1.994559,0.414976,1.45793,1.994558,-0.209619,-1.33982,1.994559,0.611873,1.47295,1.994558,0,1.31528,-2.095999,0.18911,1.41328,-1.994561,0.414979,1.275,-2.095999,0.374375,1.54437,-1.882964,0.453469,1.66758,-1.761768,0.489647,1.7823,-1.631598,0.523331,1.88793,-1.493111,0.554347,1.98394,-1.347021,0.582539,2.06984,-1.194061,0.607762,2.1452,-1.035011,0.629888,2.20962,-0.870701,0.648803,2.26279,-0.701941,0.664415,2.30442,-0.529611,0.676639,2.33431,-0.354581,0.685416,2.3523,-0.177741,0.690699,2.35831,-0.000001,0.692464,2.3523,0.177739,0.690699,2.33431,0.354579,0.685416,2.30442,0.529609,0.676639,2.26279,0.701939,0.664415,2.20962,0.870699,0.648803,2.1452,1.035009,0.629888,2.06984,1.194059,0.607761,1.98394,1.347019,0.582538,1.88793,1.493109,0.554346,1.7823,1.631599,0.523329,1.66758,1.761768,0.489646,1.54437,1.882959,0.453468,1.45793,1.994558,0.209619,1.41328,1.994559,0.414978,-0.167637,-2.186751,-1.16594,-0.331856,-2.186751,-1.1302,-0.489331,-2.186751,-1.07149,0,-2.186751,-1.17791,-0.636828,-2.186751,-0.990923,0.167638,-2.186751,-1.16594,-0.771382,-2.186751,-0.890223,0.331857,-2.186751,-1.1302,-0.890207,-2.186751,-0.771369,0.489331,-2.186751,-1.07149,-0.990941,-2.186751,-0.636839,0.636828,-2.186751,-0.990923,-1.07147,-2.186751,-0.489323,0.771383,-2.186751,-0.890223,-1.13022,-2.186751,-0.331862,0.890207,-2.186751,-0.771369,-1.16592,-2.186751,-0.167635,0.990941,-2.186751,-0.636838,-1.17793,-2.186751,0,1.07147,-2.186751,-0.489322,-1.16592,-2.186751,0.167634,1.13022,-2.186751,-0.331861,-1.13022,-2.186751,0.331862,1.16592,-2.186751,-0.167633,-1.07147,-2.186751,0.489322,1.17793,-2.186751,0.000001,-0.990941,-2.186751,0.636838,-1.11788,-2.095999,0.718418,-1.23912,-1.994561,0.796336,-1.35405,-1.882964,0.870197,-1.46208,-1.761768,0.939622,-1.56266,-1.631598,1.00426,-1.65528,-1.493111,1.06378,-1.73946,-1.347021,1.11788,-1.81477,-1.194061,1.16628,-1.88084,-1.035011,1.20874,-1.93733,-0.870701,1.24504,-1.98394,-0.701941,1.275,-2.02044,-0.529611,1.29846,-2.04665,-0.354581,1.3153,-2.06243,-0.177741,1.32544,-2.0677,-0.000001,1.32883,-2.06243,0.177739,1.32544,-2.04665,0.354579,1.3153,-2.02044,0.529609,1.29846,-1.98394,0.701939,1.275,-1.93733,0.870699,1.24504,-1.88084,1.035009,1.20874,-1.81477,1.194059,1.16628,-1.73946,1.347019,1.11788,-1.65528,1.493109,1.063779,-1.56266,1.631599,1.004259,-1.46208,1.761768,0.939621,-1.35405,1.882959,0.870196,1.16592,-2.186751,0.167636,-1.23912,1.994559,0.796335,-0.374368,2.095999,-1.27498,-0.189112,2.095999,-1.3153,-0.552015,2.095999,-1.20875,0,2.095999,-1.3288,-0.718406,2.095999,-1.11786,0.189112,2.095999,-1.3153,-0.870198,2.095999,-1.00426,0.374368,2.095999,-1.27498,-1.00424,2.095999,-0.870182,0.552015,2.095999,-1.20874,-1.11788,2.095999,-0.71842,0.718406,2.095999,-1.11786,-1.20872,2.095999,-0.552007,0.870198,2.095999,-1.00426,-1.275,2.095999,-0.374375,1.00424,2.095999,-0.870182,-1.31528,2.095999,-0.18911,1.11788,2.095999,-0.718419,-1.32883,2.095999,-0.000001,1.20872,2.095999,-0.552006,-1.31528,2.095999,0.189107,1.275,2.095999,-0.374374,-1.275,2.095999,0.374373,1.31528,2.095999,-0.189108,-1.20872,2.095999,0.552004,1.32883,2.095999,0,-1.11788,2.095999,0.718417,1.31528,2.095999,0.189109,1.13022,-2.186751,0.331863,1.20872,-2.095999,0.552007,1.07147,-2.186751,0.489323,1.33982,-1.994561,0.611875,1.46409,-1.882964,0.668628,1.58089,-1.761768,0.721971,1.68965,-1.631598,0.771637,1.78979,-1.493111,0.81737,1.88081,-1.347021,0.858938,1.96225,-1.194061,0.896128,2.03369,-1.035011,0.928753,2.09476,-0.870701,0.956644,2.14516,-0.701941,0.979663,2.18463,-0.529611,0.997687,2.21297,-0.354581,1.01063,2.23002,-0.177741,1.01842,2.23572,-0.000001,1.02102,2.23002,0.177739,1.01842,2.21297,0.354579,1.01063,2.18463,0.529609,0.997687,2.14516,0.701939,0.979663,2.09476,0.870699,0.956644,2.03369,1.035009,0.928753,1.96225,1.194059,0.896128,1.88081,1.347019,0.858938,1.78979,1.493109,0.817369,1.68965,1.631599,0.771636,1.58089,1.761768,0.72197,1.46409,1.882959,0.668627,1.33982,1.994559,0.611874,1.275,2.095999,0.374374,1.20872,2.095999,0.552006,-0.145309,-2.266366,-1.01065,-0.287655,-2.266366,-0.979662,-0.424155,-2.266366,-0.92877,0,-2.266366,-1.02102,-0.552005,-2.266366,-0.858937,0.145309,-2.266366,-1.01065,-0.668638,-2.266366,-0.77165,0.287655,-2.266366,-0.979662,-0.771636,-2.266366,-0.668626,0.424155,-2.266366,-0.92877,-0.858952,-2.266366,-0.552015,0.552006,-2.266366,-0.858937,-0.928753,-2.266366,-0.424147,0.668638,-2.266366,-0.77165,-0.979679,-2.266366,-0.28766,0.771636,-2.266366,-0.668626,-1.01063,-2.266366,-0.145307,0.858953,-2.266366,-0.552015,-1.02104,-2.266366,0,0.928753,-2.266366,-0.424147,-1.01063,-2.266366,0.145306,0.97968,-2.266366,-0.287659,-0.97968,-2.266366,0.287659,1.01063,-2.266366,-0.145305,-0.928753,-2.266366,0.424147,1.02104,-2.266366,0.000001,-0.858953,-2.266366,0.552015,1.01063,-2.266366,0.145308,-0.771636,-2.266366,0.668626,-0.890207,-2.186751,0.771368,-1.00424,-2.095999,0.870182,-1.11316,-1.994561,0.964559,-1.21641,-1.882964,1.05402,-1.31345,-1.761768,1.13811,-1.40381,-1.631598,1.21641,-1.48701,-1.493111,1.2885,-1.56263,-1.347021,1.35403,-1.63029,-1.194061,1.41266,-1.68965,-1.035011,1.46409,-1.74039,-0.870701,1.50805,-1.78226,-0.701941,1.54434,-1.81506,-0.529611,1.57275,-1.8386,-0.354581,1.59315,-1.85277,-0.177741,1.60543,-1.85751,-0.000001,1.60954,-1.85277,0.177739,1.60543,-1.8386,0.354579,1.59315,-1.81506,0.529609,1.57275,-1.78226,0.701939,1.54434,-1.74039,0.870699,1.50805,-1.68965,1.035009,1.46409,-1.63029,1.194059,1.41266,-1.56263,1.347019,1.35403,-1.48701,1.493109,1.288499,-1.40381,1.631599,1.21641,-1.31345,1.761769,1.13811,-1.21641,1.882959,1.05402,-1.11316,1.994559,0.964559,0.979679,-2.266366,0.287661,-1.00424,2.095999,0.870182,-0.331856,2.186748,-1.1302,-0.167637,2.186748,-1.16594,-0.489331,2.186748,-1.071491,0,2.186748,-1.17791,-0.636828,2.186748,-0.990923,0.167638,2.186748,-1.16594,-0.771382,2.186748,-0.890224,0.331856,2.186748,-1.1302,-0.890207,2.186748,-0.771369,0.489331,2.186748,-1.07149,-0.990941,2.186749,-0.636839,0.636828,2.186748,-0.990923,-1.07147,2.186749,-0.489323,0.771383,2.186748,-0.890223,-1.13022,2.186749,-0.331863,0.890207,2.186748,-0.771369,-1.16592,2.186749,-0.167636,0.990941,2.186749,-0.636839,-1.17793,2.186749,-0.000001,1.07147,2.186749,-0.489323,-1.16592,2.186749,0.167633,1.13022,2.186749,-0.331862,-1.13022,2.186749,0.331861,1.16592,2.186749,-0.167634,-1.07147,2.186749,0.489322,1.17793,2.186749,0,-0.990941,2.186749,0.636838,1.16592,2.186749,0.167635,-0.890207,2.186749,0.771368,1.13022,2.186749,0.331862,0.928753,-2.266366,0.424148,0.990941,-2.186751,0.636839,0.858952,-2.266366,0.552015,1.11788,-2.095999,0.71842,1.23912,-1.994561,0.796337,1.35405,-1.882964,0.870199,1.46208,-1.761768,0.939623,1.56266,-1.631598,1.00426,1.65527,-1.493111,1.06378,1.73946,-1.347021,1.11788,1.81477,-1.194061,1.166281,1.88084,-1.035011,1.20875,1.93733,-0.870701,1.245041,1.98394,-0.701941,1.275,2.02044,-0.529611,1.29846,2.04665,-0.354581,1.3153,2.06243,-0.177741,1.32544,2.0677,-0.000001,1.32883,2.06243,0.177739,1.32544,2.04665,0.354579,1.3153,2.02044,0.529609,1.29846,1.98394,0.701939,1.275,1.93733,0.870699,1.24504,1.88084,1.035009,1.20875,1.81477,1.194059,1.16628,1.73946,1.347019,1.11788,1.65527,1.493109,1.06378,1.56266,1.631599,1.00426,1.46208,1.761768,0.939623,1.35405,1.882959,0.870198,1.23912,1.994559,0.796336,1.11788,2.095999,0.718419,1.07147,2.186749,0.489323,0.990941,2.186749,0.636839,-0.12224,-2.334426,-0.850196,-0.241987,-2.334426,-0.824131,-0.356816,-2.334426,-0.781318,0,-2.334426,-0.858924,-0.464369,-2.334426,-0.722573,0.12224,-2.334426,-0.850196,-0.562485,-2.334426,-0.649143,0.241987,-2.334426,-0.824131,-0.649131,-2.334426,-0.562475,0.356816,-2.334426,-0.781318,-0.722585,-2.334426,-0.464377,0.464369,-2.334426,-0.722573,-0.781304,-2.334426,-0.35681,0.562485,-2.334426,-0.649143,-0.824146,-2.334426,-0.241991,0.649131,-2.334426,-0.562475,-0.850181,-2.334426,-0.122238,0.722585,-2.334426,-0.464377,-0.858939,-2.334426,0,0.781304,-2.334426,-0.356809,-0.850181,-2.334426,0.122237,0.824146,-2.334426,-0.24199,-0.824146,-2.334426,0.241991,0.850181,-2.334426,-0.122236,-0.781305,-2.334426,0.356809,0.858939,-2.334426,0.000001,-0.722585,-2.334426,0.464377,0.850181,-2.334426,0.122239,-0.649131,-2.334426,0.562475,0.824146,-2.334426,0.241992,-0.562486,-2.334426,0.649142,-0.668638,-2.266365,0.771649,-0.771383,-2.186751,0.890222,-0.870198,-2.095999,1.00426,-0.964577,-1.994561,1.11318,-1.05404,-1.882964,1.21643,-1.13813,-1.761768,1.31348,-1.21643,-1.631598,1.40383,-1.28852,-1.493111,1.48703,-1.35405,-1.347021,1.56266,-1.41268,-1.194061,1.63032,-1.46411,-1.035011,1.68968,-1.50808,-0.870701,1.74042,-1.54437,-0.701941,1.78229,-1.57278,-0.529611,1.81509,-1.59318,-0.354581,1.83863,-1.60546,-0.177741,1.8528,-1.60957,-0.000001,1.85754,-1.60546,0.177739,1.8528,-1.59318,0.354579,1.838629,-1.57278,0.529609,1.815089,-1.54437,0.701939,1.7823,-1.50808,0.870699,1.740419,-1.46411,1.035009,1.689679,-1.41268,1.194059,1.63032,-1.35405,1.347019,1.56266,-1.28852,1.493109,1.48703,-1.21643,1.631599,1.40383,-1.13813,1.761769,1.31348,-1.05404,1.882959,1.216429,-0.964577,1.994559,1.11318,-0.870198,2.095999,1.004259,0.781304,-2.334426,0.356811,-0.771383,2.186749,0.890222,-0.287655,2.266358,-0.979662,-0.145309,2.266358,-1.01065,-0.424155,2.266358,-0.92877,0,2.266358,-1.02102,-0.552005,2.266358,-0.858938,0.145309,2.266358,-1.01065,-0.668638,2.266358,-0.77165,0.287655,2.266358,-0.979662,-0.771636,2.266358,-0.668626,0.424155,2.266358,-0.928769,-0.858952,2.266358,-0.552015,0.552006,2.266358,-0.858937,-0.928753,2.266358,-0.424148,0.668638,2.266358,-0.77165,-0.979679,2.266358,-0.287661,0.771636,2.266358,-0.668626,-1.01063,2.266358,-0.145308,0.858952,2.266358,-0.552015,-1.02104,2.266358,-0.000001,0.928753,2.266358,-0.424147,-1.01063,2.266358,0.145305,0.97968,2.266358,-0.28766,-0.97968,2.266358,0.287658,1.01063,2.266358,-0.145306,-0.928753,2.266358,0.424147,1.02104,2.266358,0,-0.858953,2.266358,0.552015,1.01063,2.266358,0.145307,-0.771636,2.266358,0.668626,0.979679,2.266358,0.28766,-0.668638,2.266359,0.771649,0.928753,2.266358,0.424147,0.722585,-2.334426,0.464377,0.649131,-2.334426,0.562476,0.771636,-2.266366,0.668626,0.890207,-2.186751,0.771369,1.00424,-2.095999,0.870182,1.11316,-1.994561,0.964559,1.21641,-1.882964,1.054021,1.31345,-1.761768,1.138111,1.40381,-1.631598,1.216411,1.48701,-1.493111,1.2885,1.56263,-1.347021,1.35403,1.63029,-1.194061,1.41266,1.68965,-1.035011,1.46409,1.74039,-0.870701,1.50806,1.78226,-0.701941,1.54434,1.81505,-0.529611,1.57275,1.8386,-0.354581,1.59316,1.85277,-0.177741,1.60544,1.85751,-0.000001,1.60954,1.85277,0.177739,1.60544,1.8386,0.354579,1.59316,1.81505,0.529609,1.57275,1.78226,0.701939,1.54434,1.74039,0.870699,1.50806,1.68965,1.035009,1.46409,1.63029,1.194059,1.41266,1.56263,1.347019,1.35403,1.48701,1.493109,1.2885,1.40381,1.631599,1.21641,1.31345,1.761769,1.13811,1.21641,1.882959,1.05402,1.11316,1.994559,0.96456,1.00424,2.095999,0.870182,0.890207,2.186749,0.771369,0.858952,2.266358,0.552015,0.771636,2.266358,0.668626,-0.098548,-2.390596,-0.685416,-0.195086,-2.390596,-0.664402,-0.28766,-2.390596,-0.629887,0,-2.390596,-0.692452,-0.374368,-2.390596,-0.582527,0.098548,-2.390596,-0.685416,-0.453467,-2.390596,-0.523329,0.195086,-2.390596,-0.664402,-0.52332,-2.390596,-0.453459,0.28766,-2.390596,-0.629887,-0.582538,-2.390596,-0.374374,0.374368,-2.390596,-0.582527,-0.629876,-2.390596,-0.287655,0.453467,-2.390596,-0.523329,-0.664414,-2.390596,-0.19509,0.52332,-2.390596,-0.453459,-0.685403,-2.390596,-0.098546,0.582538,-2.390596,-0.374374,-0.692464,-2.390596,0,0.629876,-2.390596,-0.287655,-0.685403,-2.390596,0.098546,0.664414,-2.390596,-0.19509,-0.664414,-2.390596,0.195089,0.685403,-2.390596,-0.098546,-0.629876,-2.390596,0.287654,0.692464,-2.390596,0.000001,-0.582538,-2.390596,0.374374,0.685403,-2.390596,0.098547,-0.52332,-2.390596,0.453459,0.664414,-2.390596,0.19509,-0.453468,-2.390596,0.523329,0.629876,-2.390596,0.287655,-0.374368,-2.390596,0.582527,-0.464369,-2.334426,0.722572,-0.552006,-2.266365,0.858937,-0.636828,-2.186751,0.990923,-0.718406,-2.095999,1.11786,-0.796323,-1.994561,1.2391,-0.870182,-1.882964,1.35403,-0.939606,-1.761768,1.46205,-1.00424,-1.631598,1.56263,-1.06376,-1.493111,1.65525,-1.11786,-1.347021,1.73943,-1.16626,-1.194061,1.81474,-1.20872,-1.035011,1.88081,-1.24502,-0.870701,1.93729,-1.27498,-0.701941,1.98391,-1.29844,-0.529611,2.02041,-1.31528,-0.354581,2.04661,-1.32542,-0.177741,2.06239,-1.32881,-0.000001,2.06766,-1.32542,0.177739,2.06239,-1.31528,0.354579,2.04661,-1.29844,0.529609,2.02041,-1.27498,0.701939,1.98391,-1.24502,0.870699,1.93729,-1.20872,1.035009,1.88081,-1.16626,1.194059,1.81474,-1.11786,1.347019,1.739429,-1.06376,1.493109,1.65525,-1.00424,1.631599,1.56263,-0.939606,1.761769,1.462049,-0.870182,1.882959,1.35403,-0.796323,1.994559,1.2391,-0.718406,2.095999,1.117859,-0.636828,2.186749,0.990923,0.582538,-2.390596,0.374374,-0.552006,2.266359,0.858937,-0.241987,2.334419,-0.824131,-0.12224,2.334419,-0.850196,-0.356816,2.334419,-0.781318,0,2.334419,-0.858924,-0.464369,2.334419,-0.722573,0.12224,2.334419,-0.850196,-0.562485,2.334419,-0.649143,0.241987,2.334419,-0.824131,-0.649131,2.334419,-0.562476,0.356816,2.334419,-0.781318,-0.722585,2.334419,-0.464377,0.464369,2.334419,-0.722572,-0.781304,2.334419,-0.356811,0.562485,2.334419,-0.649143,-0.824146,2.334419,-0.241992,0.649131,2.334419,-0.562475,-0.850181,2.334419,-0.122239,0.722585,2.334419,-0.464377,-0.858939,2.334419,-0.000001,0.781304,2.334419,-0.35681,-0.850181,2.334419,0.122236,0.824146,2.334419,-0.241991,-0.824146,2.334419,0.24199,0.850181,2.334419,-0.122237,-0.781304,2.334419,0.356808,0.858939,2.334419,0,-0.722585,2.334419,0.464377,0.850181,2.334419,0.122238,-0.649131,2.334419,0.562475,0.824146,2.334419,0.241991,-0.562485,2.334419,0.649142,0.781304,2.334419,0.35681,-0.464369,2.334419,0.722572,0.722585,2.334419,0.464377,0.52332,-2.390596,0.453459,0.453467,-2.390596,0.523329,0.562485,-2.334426,0.649143,0.668638,-2.266365,0.77165,0.771382,-2.186751,0.890224,0.870197,-2.095999,1.00426,0.964576,-1.994561,1.113181,1.05404,-1.882964,1.21643,1.13813,-1.761768,1.31348,1.21643,-1.631598,1.403831,1.28852,-1.493111,1.487041,1.35405,-1.347021,1.56266,1.41268,-1.194061,1.63032,1.46411,-1.035011,1.68968,1.50808,-0.870701,1.74042,1.54437,-0.701941,1.7823,1.57278,-0.529611,1.81509,1.59318,-0.354581,1.83863,1.60546,-0.177741,1.8528,1.60957,-0.000001,1.85754,1.60546,0.177739,1.8528,1.59318,0.354579,1.83863,1.57278,0.529609,1.81509,1.54437,0.701939,1.7823,1.50808,0.870699,1.74042,1.46411,1.035009,1.68968,1.41268,1.194059,1.63032,1.35405,1.347019,1.56266,1.28852,1.493109,1.48704,1.21643,1.631599,1.40383,1.13813,1.761769,1.31348,1.05404,1.882959,1.21643,0.964576,1.994559,1.11318,0.870197,2.095999,1.00426,0.771382,2.186749,0.890223,0.668638,2.266359,0.77165,0.649131,2.334419,0.562475,0.562485,2.334419,0.649143,-0.074614,-2.434445,-0.51895,-0.147318,-2.434544,-0.501721,-0.217797,-2.434445,-0.476908,0,-2.434544,-0.522902,-0.282702,-2.434544,-0.439893,0.074614,-2.434445,-0.51895,-0.343335,-2.434445,-0.39623,0.147319,-2.434544,-0.501721,-0.395183,-2.434544,-0.342428,0.217797,-2.434445,-0.476908,-0.441058,-2.434445,-0.283451,0.282702,-2.434544,-0.439893,-0.475648,-2.434544,-0.217221,0.343335,-2.434445,-0.39623,-0.503049,-2.434445,-0.147709,0.395183,-2.434544,-0.342428,-0.517579,-2.434544,-0.074416,0.441058,-2.434445,-0.283451,-0.524287,-2.434445,0,0.475648,-2.434544,-0.217221,-0.517579,-2.434544,0.074417,0.503049,-2.434445,-0.147709,-0.503049,-2.434445,0.147708,0.517579,-2.434544,-0.074416,-0.475648,-2.434544,0.217221,0.524287,-2.434445,0.000001,-0.441058,-2.434445,0.283451,0.517579,-2.434544,0.074417,-0.395183,-2.434544,0.342428,0.503049,-2.434445,0.147709,-0.343335,-2.434445,0.396229,0.475648,-2.434544,0.217221,-0.282702,-2.434544,0.439893,0.441058,-2.434445,0.283451,-0.217797,-2.434445,0.476908,-0.28766,-2.390596,0.629887,-0.356816,-2.334425,0.781318,-0.424155,-2.266365,0.928769,-0.489331,-2.186751,1.07149,-0.552015,-2.095999,1.20874,-0.611885,-1.994561,1.33984,-0.668638,-1.882964,1.46411,-0.721983,-1.761768,1.58092,-0.77165,-1.631598,1.68968,-0.817383,-1.493111,1.78982,-0.858953,-1.347021,1.88084,-0.896144,-1.194061,1.96228,-0.92877,-1.035011,2.03372,-0.956661,-0.870701,2.0948,-0.97968,-0.701941,2.1452,-0.997704,-0.529611,2.18467,-1.01065,-0.354581,2.21301,-1.018441,-0.177741,2.23006,-1.02104,-0.000001,2.23576,-1.018441,0.177739,2.23006,-1.01065,0.354579,2.21301,-0.997704,0.529609,2.18467,-0.97968,0.701939,2.1452,-0.956661,0.870699,2.0948,-0.92877,1.035009,2.03372,-0.896144,1.194059,1.96228,-0.858953,1.347019,1.88084,-0.817383,1.493109,1.789819,-0.77165,1.631599,1.689679,-0.721983,1.761769,1.58092,-0.668638,1.882959,1.46411,-0.611885,1.994559,1.33984,-0.552015,2.095999,1.20874,-0.489331,2.186749,1.07149,-0.424155,2.266359,0.928769,0.395183,-2.434544,0.342428,-0.356816,2.334419,0.781318,-0.195086,2.390589,-0.664402,-0.098548,2.390589,-0.685415,-0.28766,2.390589,-0.629887,0,2.390589,-0.692451,-0.374367,2.390589,-0.582527,0.098548,2.390589,-0.685415,-0.453467,2.390589,-0.523329,0.195086,2.390589,-0.664402,-0.52332,2.390589,-0.453459,0.28766,2.390589,-0.629887,-0.582537,2.390589,-0.374374,0.374368,2.390589,-0.582527,-0.629876,2.390589,-0.287655,0.453467,2.390589,-0.523329,-0.664414,2.390589,-0.19509,0.52332,2.390589,-0.453459,-0.685403,2.390589,-0.098547,0.582537,2.390589,-0.374374,-0.692464,2.390589,-0.000001,0.629876,2.390589,-0.287655,-0.685403,2.390589,0.098545,0.664414,2.390589,-0.19509,-0.664414,2.390589,0.195089,0.685403,2.390589,-0.098546,-0.629876,2.390589,0.287654,0.692464,2.390589,0,-0.582538,2.390589,0.374374,0.685403,2.390589,0.098546,-0.52332,2.390589,0.453459,0.664414,2.390589,0.19509,-0.453467,2.390589,0.523329,0.629876,2.390589,0.287655,-0.374368,2.390589,0.582527,0.582537,2.390589,0.374374,-0.28766,2.390589,0.629887,0.52332,2.390589,0.453459,0.343335,-2.434445,0.396229,0.282702,-2.434544,0.439893,0.374367,-2.390596,0.582527,0.464369,-2.334426,0.722573,0.552005,-2.266365,0.858938,0.636827,-2.186751,0.990923,0.718406,-2.095999,1.11786,0.796322,-1.994561,1.2391,0.870182,-1.882964,1.35403,0.939606,-1.761768,1.46206,1.00424,-1.631598,1.562631,1.06376,-1.493111,1.65525,1.11786,-1.347021,1.73943,1.16626,-1.194061,1.81474,1.20872,-1.035011,1.88081,1.24502,-0.870701,1.93729,1.27498,-0.701941,1.98391,1.29844,-0.529611,2.020411,1.31528,-0.354581,2.04662,1.32542,-0.177741,2.06239,1.3288,-0.000001,2.06766,1.32542,0.177739,2.06239,1.31528,0.354579,2.04662,1.29844,0.529609,2.02041,1.27498,0.701939,1.98391,1.24502,0.870699,1.93729,1.20872,1.035009,1.88081,1.16626,1.194059,1.81474,1.11786,1.347019,1.73943,1.06376,1.493109,1.65525,1.00424,1.631599,1.56263,0.939605,1.761769,1.46206,0.870182,1.882959,1.35403,0.796322,1.994559,1.2391,0.718406,2.095999,1.11786,0.636827,2.186749,0.990923,0.552005,2.266359,0.858937,0.464369,2.334419,0.722572,0.453467,2.390589,0.523329,0.374367,2.390589,0.582527,-0.051862,-2.465099,-0.360708,-0.099566,-2.465894,-0.33909,-0.151384,-2.465099,-0.331485,0,-2.465894,-0.353405,-0.191065,-2.465894,-0.297303,0.051862,-2.465099,-0.360707,-0.238642,-2.465099,-0.275408,0.099566,-2.465894,-0.33909,-0.267086,-2.465894,-0.231431,0.151384,-2.465099,-0.331485,-0.306567,-2.465099,-0.197019,0.191065,-2.465894,-0.297303,-0.321469,-2.465894,-0.14681,0.238642,-2.465099,-0.275408,-0.349655,-2.465099,-0.102668,0.267086,-2.465894,-0.231431,-0.349808,-2.465894,-0.050295,0.306567,-2.465099,-0.197019,-0.364417,-2.465099,0,0.321469,-2.465894,-0.14681,-0.349808,-2.465894,0.050295,0.349655,-2.465099,-0.102668,-0.349655,-2.465099,0.102668,0.349808,-2.465894,-0.050294,-0.321469,-2.465894,0.14681,0.364417,-2.465099,0,-0.306567,-2.465099,0.197018,0.349808,-2.465894,0.050295,-0.267086,-2.465894,0.231431,0.349655,-2.465099,0.102668,-0.238642,-2.465099,0.275407,0.321468,-2.465894,0.14681,-0.191065,-2.465894,0.297303,0.306567,-2.465099,0.197018,-0.151384,-2.465099,0.331485,0.267086,-2.465894,0.231431,-0.099566,-2.465894,0.339089,-0.147319,-2.434544,0.50172,-0.195086,-2.390596,0.664402,-0.241987,-2.334425,0.824131,-0.287655,-2.266365,0.979662,-0.331857,-2.186751,1.1302,-0.374368,-2.095999,1.27498,-0.414971,-1.994561,1.41326,-0.45346,-1.882964,1.54434,-0.489637,-1.761768,1.66755,-0.52332,-1.631598,1.78226,-0.554336,-1.493111,1.88789,-0.582528,-1.347021,1.98391,-0.60775,-1.194061,2.0698,-0.629876,-1.035011,2.14516,-0.648792,-0.870701,2.20958,-0.664403,-0.701941,2.26275,-0.676627,-0.529611,2.30438,-0.685404,-0.354581,2.33427,-0.690687,-0.177741,2.35226,-0.692452,-0.000001,2.35827,-0.690687,0.177739,2.35226,-0.685404,0.354579,2.33427,-0.676627,0.529609,2.30438,-0.664403,0.701939,2.26275,-0.648792,0.870699,2.20958,-0.629876,1.035009,2.14516,-0.60775,1.194059,2.0698,-0.582528,1.347019,1.98391,-0.554336,1.493109,1.88789,-0.52332,1.631599,1.78226,-0.489637,1.761769,1.66755,-0.45346,1.882959,1.54434,-0.414971,1.994559,1.41326,-0.374368,2.095999,1.27498,-0.331857,2.186749,1.1302,-0.287655,2.266359,0.979662,-0.241987,2.334419,0.824131,0.238642,-2.465099,0.275408,-0.195086,2.390589,0.664402,-0.147318,2.434538,-0.501721,-0.074614,2.434439,-0.51895,-0.217796,2.434439,-0.476908,0,2.434538,-0.522902,-0.282702,2.434538,-0.439893,0.074614,2.434439,-0.51895,-0.343335,2.434439,-0.396229,0.147318,2.434538,-0.501721,-0.395183,2.434538,-0.342428,0.217797,2.434439,-0.476908,-0.441058,2.434439,-0.283451,0.282702,2.434538,-0.439893,-0.475648,2.434538,-0.217221,0.343335,2.434439,-0.396229,-0.503049,2.434439,-0.147709,0.395183,2.434538,-0.342428,-0.517579,2.434538,-0.074417,0.441058,2.434439,-0.283451,-0.524287,2.434439,-0.000001,0.475648,2.434538,-0.217221,-0.517579,2.434538,0.074416,0.503049,2.434439,-0.147709,-0.503049,2.434439,0.147708,0.517579,2.434538,-0.074417,-0.475648,2.434538,0.217221,0.524287,2.434439,0,-0.441058,2.434439,0.28345,0.517579,2.434538,0.074416,-0.395183,2.434538,0.342427,0.503049,2.434439,0.147709,-0.343335,2.434439,0.396229,0.475648,2.434538,0.217221,-0.282702,2.434538,0.439893,0.441058,2.434439,0.283451,-0.217797,2.434439,0.476908,0.395183,2.434538,0.342428,-0.147318,2.434538,0.50172,0.343335,2.434439,0.396229,0.191065,-2.465894,0.297303,0.217796,-2.434445,0.476908,0.151384,-2.465099,0.331485,0.28766,-2.390596,0.629887,0.356816,-2.334425,0.781318,0.424155,-2.266365,0.928769,0.489331,-2.186751,1.071491,0.552015,-2.095999,1.20874,0.611885,-1.994561,1.339841,0.668638,-1.882964,1.46411,0.721982,-1.761768,1.58092,0.771649,-1.631598,1.68968,0.817382,-1.493111,1.78982,0.858952,-1.347021,1.88084,0.896143,-1.194061,1.962281,0.928769,-1.035011,2.03372,0.95666,-0.870701,2.0948,0.979679,-0.701941,2.1452,0.997703,-0.529611,2.18467,1.01065,-0.354581,2.213011,1.01844,-0.177741,2.23006,1.02104,-0.000001,2.23576,1.01844,0.177739,2.23006,1.01065,0.354579,2.21301,0.997703,0.529609,2.18467,0.979679,0.701939,2.1452,0.95666,0.870699,2.0948,0.928769,1.035009,2.03372,0.896143,1.194059,1.96228,0.858952,1.347019,1.88084,0.817382,1.493109,1.78982,0.771649,1.631599,1.68968,0.721982,1.761769,1.58092,0.668638,1.882959,1.46411,0.611885,1.994559,1.33984,0.552015,2.095999,1.20874,0.489331,2.186749,1.07149,0.424154,2.266359,0.928769,0.356816,2.334419,0.781318,0.28766,2.390589,0.629887,0.282702,2.434538,0.439893,0.217796,2.434439,0.476908,-0.031287,-2.481325,-0.217605,-0.091326,-2.481325,-0.199976,0.031287,-2.481325,-0.217605,-0.143966,-2.481325,-0.166146,0.091326,-2.481325,-0.199976,-0.184943,-2.481325,-0.118856,0.143966,-2.481325,-0.166146,-0.210938,-2.481325,-0.061937,0.184943,-2.481325,-0.118856,-0.219843,-2.481325,0,0.210938,-2.481325,-0.061936,-0.210938,-2.481325,0.061937,0.219843,-2.481325,0,-0.184943,-2.481325,0.118856,0.210938,-2.481325,0.061937,-0.143966,-2.481325,0.166146,0.184943,-2.481325,0.118856,-0.091326,-2.481325,0.199976,0.143966,-2.481325,0.166146,-0.051862,-2.465099,0.360707,-0.074614,-2.434445,0.51895,-0.098548,-2.390596,0.685415,-0.031287,-2.481325,0.217605,-0.12224,-2.334425,0.850196,-0.145309,-2.266365,1.01065,-0.167638,-2.186751,1.16594,-0.189112,-2.095999,1.3153,-0.209623,-1.994561,1.45796,-0.229066,-1.882964,1.59318,-0.247341,-1.761768,1.72029,-0.264356,-1.631598,1.83863,-0.280023,-1.493111,1.9476,-0.294264,-1.347021,2.04665,-0.307005,-1.194061,2.13527,-0.318183,-1.035011,2.213011,-0.327738,-0.870701,2.27946,-0.335624,-0.701941,2.33431,-0.341799,-0.529611,2.37726,-0.346232,-0.354581,2.4081,-0.348901,-0.177741,2.42666,-0.349793,-0.000001,2.43286,-0.348901,0.177739,2.42666,-0.346232,0.354579,2.4081,-0.341799,0.529609,2.37726,-0.335624,0.701939,2.33431,-0.327738,0.870699,2.27946,-0.318183,1.035009,2.21301,-0.307005,1.194059,2.13527,-0.294264,1.347019,2.04665,-0.280023,1.493109,1.9476,-0.264356,1.631599,1.838629,-0.247341,1.761769,1.72029,-0.229066,1.882959,1.59318,-0.209623,1.994559,1.45796,-0.189112,2.095999,1.3153,-0.167638,2.186749,1.16594,-0.145309,2.266359,1.01065,-0.12224,2.334419,0.850196,-0.098548,2.390589,0.685415,-0.074614,2.434439,0.51895,-0.099566,2.465889,-0.33909,-0.051862,2.465098,-0.360707,-0.151384,2.465098,-0.331485,0,2.465889,-0.353405,-0.191065,2.465889,-0.297303,0.051862,2.465098,-0.360707,-0.238642,2.465098,-0.275408,0.099566,2.465889,-0.33909,-0.267086,2.465889,-0.231431,0.151384,2.465098,-0.331485,-0.306567,2.465098,-0.197019,0.191065,2.465889,-0.297303,-0.321468,2.465889,-0.14681,0.238642,2.465098,-0.275408,-0.349655,2.465098,-0.102668,0.267086,2.465889,-0.231431,-0.349808,2.465889,-0.050295,0.306567,2.465098,-0.197019,-0.364417,2.465098,-0.000001,0.321468,2.465889,-0.14681,-0.349808,2.465889,0.050294,0.349655,2.465098,-0.102668,-0.349655,2.465098,0.102668,0.349808,2.465889,-0.050295,-0.321469,2.465889,0.14681,0.364417,2.465098,0,-0.306567,2.465098,0.197018,0.349808,2.465889,0.050294,-0.267086,2.465889,0.231431,0.349655,2.465098,0.102668,-0.238642,2.465098,0.275407,0.321468,2.465889,0.14681,-0.191065,2.465889,0.297303,0.306567,2.465098,0.197018,-0.151384,2.465098,0.331485,0.267086,2.465889,0.231431,-0.099566,2.465889,0.339089,0.238642,2.465098,0.275408,-0.051862,2.465098,0.360707,0.191065,2.465889,0.297303,0.091326,-2.481325,0.199976,0.099566,-2.465894,0.33909,0.147318,-2.434544,0.501721,0.195086,-2.390596,0.664402,0.241986,-2.334425,0.824131,0.287654,-2.266365,0.979662,0.331856,-2.186751,1.1302,0.374367,-2.095999,1.27498,0.41497,-1.994561,1.41326,0.453459,-1.882964,1.54434,0.489636,-1.761768,1.66755,0.523319,-1.631598,1.78226,0.554335,-1.493111,1.88789,0.582527,-1.347021,1.98391,0.607749,-1.194061,2.0698,0.629875,-1.035011,2.14516,0.648791,-0.870701,2.20958,0.664402,-0.701941,2.26275,0.676625,-0.529611,2.30438,0.685403,-0.354581,2.33427,0.690686,-0.177741,2.35226,0.692451,-0.000001,2.35827,0.690686,0.177739,2.35226,0.685403,0.354579,2.33427,0.676625,0.529609,2.30438,0.664402,0.701939,2.26275,0.648791,0.870699,2.20958,0.629875,1.035009,2.14516,0.607749,1.194059,2.0698,0.582527,1.347019,1.98391,0.554335,1.493109,1.88789,0.523319,1.631599,1.78226,0.489636,1.761769,1.66755,0.453459,1.882959,1.54434,0.41497,1.994559,1.41326,0.374367,2.095999,1.27498,0.331856,2.186749,1.1302,0.287654,2.266359,0.979662,0.241986,2.334419,0.824131,0.195086,2.390589,0.664402,0.147318,2.434538,0.50172,0.151384,2.465098,0.331485,0.099566,2.465889,0.339089,0,-2.487278,0,0,-2.465894,0.353405,0,-2.434544,0.522902,0,-2.390596,0.692451,0,-2.334425,0.858923,0.031287,-2.481325,0.217605,0,-2.266365,1.02102,0,-2.186751,1.17791,-0.000001,-2.095999,1.3288,-0.000001,-1.994561,1.47292,-0.000001,-1.882964,1.60954,-0.000001,-1.761768,1.73795,-0.000001,-1.631598,1.85751,-0.000001,-1.493111,1.96759,-0.000001,-1.347021,2.06766,-0.000001,-1.194061,2.15719,-0.000001,-1.035011,2.23572,-0.000001,-0.870701,2.30286,-0.000001,-0.701941,2.35827,-0.000001,-0.529611,2.40166,-0.000001,-0.354581,2.43282,-0.000001,-0.177741,2.45157,-0.000001,-0.000001,2.45783,-0.000001,0.177739,2.45157,-0.000001,0.354579,2.43282,-0.000001,0.529609,2.40166,-0.000001,0.701939,2.35827,-0.000001,0.870699,2.30286,-0.000001,1.035009,2.23572,-0.000001,1.194059,2.15719,-0.000001,1.347019,2.06766,-0.000001,1.493109,1.96759,-0.000001,1.631599,1.85751,-0.000001,1.761769,1.73795,-0.000001,1.882959,1.60954,-0.000001,1.994559,1.47292,-0.000001,2.095999,1.3288,0,2.186749,1.17791,0,2.266359,1.02102,0,2.334419,0.858923,0,2.390589,0.692451,0,2.434538,0.522902,0,2.465889,0.353405,-0.091326,2.481318,-0.199976,-0.031287,2.481318,-0.217605,0.031287,2.481318,-0.217605,-0.143966,2.481318,-0.166146,0.091326,2.481318,-0.199976,-0.184943,2.481318,-0.118856,0.143966,2.481318,-0.166146,-0.210938,2.481318,-0.061937,0.184943,2.481318,-0.118856,-0.219843,2.481318,-0.000001,0.210938,2.481318,-0.061937,-0.210938,2.481318,0.061936,0.219843,2.481318,0,-0.184943,2.481318,0.118856,0.210938,2.481318,0.061936,-0.143966,2.481318,0.166146,0.184943,2.481318,0.118856,-0.091326,2.481318,0.199976,0.143966,2.481318,0.166146,-0.031287,2.481318,0.217605,0.091326,2.481318,0.199976,0.074614,-2.434445,0.51895,0.051862,-2.465099,0.360707,0.098548,-2.390596,0.685415,0.122239,-2.334425,0.850196,0.145309,-2.266365,1.01065,0.167637,-2.186751,1.16594,0.189112,-2.095999,1.3153,0.209622,-1.994561,1.45796,0.229065,-1.882964,1.59318,0.24734,-1.761768,1.72029,0.264355,-1.631598,1.83863,0.280022,-1.493111,1.9476,0.294263,-1.347021,2.04665,0.307004,-1.194061,2.13527,0.318182,-1.035011,2.213011,0.327737,-0.870701,2.27946,0.335623,-0.701941,2.33431,0.341797,-0.529611,2.37726,0.346231,-0.354581,2.4081,0.3489,-0.177741,2.42666,0.349792,-0.000001,2.43286,0.3489,0.177739,2.42666,0.346231,0.354579,2.4081,0.341797,0.529609,2.37726,0.335623,0.701939,2.33431,0.327737,0.870699,2.27946,0.318182,1.035009,2.21301,0.307004,1.194059,2.13527,0.294263,1.347019,2.04665,0.280022,1.493109,1.9476,0.264355,1.631599,1.83863,0.24734,1.761769,1.72029,0.229065,1.882959,1.59318,0.209622,1.994559,1.45796,0.189112,2.095999,1.3153,0.167637,2.186749,1.16594,0.145309,2.266359,1.01065,0.122239,2.334419,0.850196,0.098547,2.390589,0.685415,0.074614,2.434439,0.51895,0.051862,2.465098,0.360707,0.031287,2.481318,0.217605,0,2.487278,-0.000001
            ]).buffer, webgl.STATIC_DRAW);

            const n_buff_vcahwttk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, n_buff_vcahwttk);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                -0.1419,-0.0703,-0.9874,0,0,-1,0,-0.0702,-0.9975,-0.1409,-0.1402,-0.98,-0.281,-0.0703,-0.9571,-0.2817,0,-0.9595,-0.1423,0,-0.9898,-0.1419,0.0703,-0.9874,0.1409,-0.1402,-0.98,0.1419,-0.0703,-0.9874,0.1423,0,-0.9898,0.1419,0.0703,-0.9874,-0.1391,-0.2095,-0.9678,-0.2789,-0.1402,-0.95,-0.4062,-0.2095,-0.8894,-0.4113,-0.1402,-0.9006,-0.4154,0,-0.9096,0,-0.1402,-0.9901,0,-0.2095,-0.9778,-0.281,0.0703,-0.9571,-0.1409,0.1402,-0.98,-0.4113,0.1402,-0.9006,-0.4144,0.0702,-0.9074,0,0.0702,-0.9975,0.1391,-0.2095,-0.9678,0.2789,-0.1402,-0.95,0.2755,-0.2095,-0.9382,0.281,-0.0703,-0.9571,0.2817,0,-0.9595,0.1409,0.1402,-0.98,0.281,0.0703,-0.9571,-0.1367,-0.2778,-0.9508,-0.2755,-0.2095,-0.9382,-0.3991,-0.2778,-0.8738,0,-0.2778,-0.9606,-0.5286,-0.2095,-0.8226,-0.5353,-0.1402,-0.8329,-0.4144,-0.0702,-0.9074,-0.5393,-0.0703,-0.8392,-0.5406,0,-0.8412,0.1367,-0.2778,-0.9508,-0.5353,0.1402,-0.8329,-0.5393,0.0703,-0.8392,-0.1391,0.2095,-0.9678,-0.2789,0.1402,-0.95,-0.2755,0.2095,-0.9382,-0.4062,0.2095,-0.8894,0,0.1402,-0.9901,-0.5286,0.2095,-0.8226,0.1391,0.2095,-0.9678,0,0.2095,-0.9778,0.3991,-0.2778,-0.8738,0.4062,-0.2095,-0.8894,0.4113,-0.1402,-0.9006,0.4144,-0.0702,-0.9074,0.4154,0,-0.9096,0.4113,0.1402,-0.9006,0.2789,0.1402,-0.95,0.4062,0.2095,-0.8894,-0.1336,-0.3448,-0.9291,-0.2706,-0.2778,-0.9217,-0.3899,-0.3448,-0.8538,-0.2644,-0.3448,-0.9006,0,-0.3448,-0.9387,-0.5193,-0.2778,-0.8081,0.1336,-0.3448,-0.9291,-0.6147,-0.3448,-0.7094,-0.6291,-0.2778,-0.726,-0.6403,-0.2095,-0.7389,-0.6484,-0.1402,-0.7483,-0.6548,0,-0.7557,-0.6484,0.1402,-0.7483,-0.6532,0.0703,-0.7539,0.2706,-0.2778,-0.9217,-0.6403,0.2095,-0.7389,-0.1367,0.2778,-0.9508,-0.2706,0.2778,-0.9217,-0.3991,0.2778,-0.8738,0.1367,0.2778,-0.9508,-0.6291,0.2778,-0.726,0.2755,0.2095,-0.9382,0.3899,-0.3448,-0.8538,0.5193,-0.2778,-0.8081,0.5075,-0.3448,-0.7896,0.5286,-0.2094,-0.8226,0.5353,-0.1402,-0.8329,0.5393,-0.0703,-0.8392,0.5406,0,-0.8412,0.4144,0.0702,-0.9074,0.5393,0.0703,-0.8392,0.5353,0.1402,-0.8329,0.3991,0.2778,-0.8738,0.2706,0.2778,-0.9217,0.5286,0.2094,-0.8226,-0.1298,-0.4101,-0.9027,-0.3789,-0.4102,-0.8296,-0.2569,-0.4101,-0.8751,-0.5075,-0.3448,-0.7896,0.1298,-0.4101,-0.9027,-0.5972,-0.4102,-0.6892,0.2644,-0.3448,-0.9006,-0.7094,-0.3448,-0.6147,-0.726,-0.2778,-0.6291,-0.739,-0.2095,-0.6403,-0.7483,-0.1402,-0.6484,-0.7539,-0.0703,-0.6532,-0.6532,-0.0703,-0.7539,-0.7539,0.0703,-0.6532,-0.7557,0,-0.6548,-0.7483,0.1402,-0.6484,0.3789,-0.4102,-0.8296,-0.739,0.2095,-0.6403,-0.1336,0.3448,-0.9291,-0.3899,0.3448,-0.8538,0,0.2778,-0.9606,-0.5193,0.2778,-0.8081,-0.5075,0.3448,-0.7896,0.1336,0.3448,-0.9291,0,0.3448,-0.9387,-0.6147,0.3448,-0.7094,-0.726,0.2778,-0.6291,0.3899,0.3448,-0.8538,0.4931,-0.4101,-0.7672,0.5972,-0.4101,-0.6892,0.6147,-0.3448,-0.7094,0.6291,-0.2778,-0.726,0.6403,-0.2095,-0.739,0.6484,-0.1402,-0.7483,0.6532,-0.0703,-0.7539,0.6548,0,-0.7557,0.6532,0.0703,-0.7539,0.6484,0.1402,-0.7483,0.6403,0.2095,-0.739,0.6291,0.2778,-0.726,0.5193,0.2778,-0.8081,0.6147,0.3448,-0.7094,-0.1253,-0.4736,-0.8718,-0.3659,-0.4736,-0.8011,-0.2481,-0.4736,-0.8451,0,-0.4101,-0.912,0,-0.4736,-0.8807,-0.4931,-0.4101,-0.7672,0.1253,-0.4736,-0.8718,-0.5767,-0.4736,-0.6656,-0.4761,-0.4736,-0.7409,0.2569,-0.4101,-0.8751,0.2481,-0.4736,-0.8451,-0.6892,-0.4102,-0.5972,0.3659,-0.4736,-0.8011,-0.7409,-0.4736,-0.4761,-0.7672,-0.4102,-0.4931,-0.7897,-0.3448,-0.5075,-0.8081,-0.2778,-0.5194,-0.8226,-0.2095,-0.5286,-0.8329,-0.1402,-0.5353,-0.8392,-0.0703,-0.5393,-0.8392,0.0703,-0.5393,-0.8412,0,-0.5406,-0.8329,0.1402,-0.5353,-0.8226,0.2095,-0.5286,-0.8081,0.2778,-0.5194,-0.7897,0.3448,-0.5075,-0.1298,0.4101,-0.9027,-0.2644,0.3448,-0.9006,-0.2569,0.4101,-0.8751,-0.3789,0.4102,-0.8296,-0.4931,0.4101,-0.7672,0.1298,0.4101,-0.9027,-0.5972,0.4102,-0.6892,0.2644,0.3448,-0.9006,-0.7094,0.3448,-0.6147,0.3789,0.4102,-0.8296,0.2569,0.4101,-0.8751,-0.7672,0.4102,-0.4931,0.5075,0.3448,-0.7896,0.5767,-0.4736,-0.6656,0.6892,-0.4101,-0.5972,0.7094,-0.3448,-0.6147,0.726,-0.2778,-0.6291,0.739,-0.2095,-0.6403,0.7483,-0.1402,-0.6484,0.7539,-0.0703,-0.6532,0.7557,0,-0.6548,0.7539,0.0703,-0.6532,0.7483,0.1402,-0.6484,0.739,0.2095,-0.6403,0.726,0.2778,-0.6291,0.5972,0.4101,-0.6892,0.4931,0.4101,-0.7672,0.7094,0.3448,-0.6147,-0.1202,-0.5347,-0.8364,-0.351,-0.5347,-0.7686,0.1202,-0.5347,-0.8364,-0.5534,-0.5347,-0.6386,-0.4568,-0.5347,-0.7109,-0.6656,-0.4736,-0.5768,0.351,-0.5347,-0.7686,-0.7109,-0.5347,-0.4568,0.4761,-0.4736,-0.7409,0.4568,-0.5347,-0.7109,-0.8011,-0.4736,-0.3659,-0.8296,-0.4101,-0.3789,-0.8538,-0.3448,-0.3899,-0.8738,-0.2778,-0.3991,-0.8894,-0.2095,-0.4062,-0.9006,-0.1402,-0.4113,-0.9074,-0.0703,-0.4144,-0.9096,0,-0.4154,-0.9074,0.0703,-0.4144,-0.9006,0.1402,-0.4113,-0.8894,0.2095,-0.4062,-0.8738,0.2778,-0.3991,0.5534,-0.5347,-0.6386,-0.8538,0.3448,-0.3899,-0.8296,0.4101,-0.3789,-0.1253,0.4736,-0.8718,-0.3659,0.4736,-0.8011,0,0.4101,-0.912,0.1253,0.4736,-0.8718,-0.5767,0.4736,-0.6656,-0.6892,0.4102,-0.5972,-0.6656,0.4736,-0.5768,0.3659,0.4736,-0.8011,-0.7409,0.4736,-0.4761,0.5767,0.4736,-0.6656,0.6656,-0.4736,-0.5768,0.6386,-0.5347,-0.5534,0.7109,-0.5347,-0.4568,0.7409,-0.4736,-0.4761,0.7672,-0.4102,-0.4931,0.7896,-0.3448,-0.5075,0.8081,-0.2778,-0.5194,0.8226,-0.2095,-0.5286,0.8329,-0.1402,-0.5353,0.8392,-0.0703,-0.5393,0.8412,0,-0.5406,0.8392,0.0703,-0.5393,0.8329,0.1402,-0.5353,0.8226,0.2095,-0.5286,0.8081,0.2778,-0.5194,0.7896,0.3448,-0.5075,0.7672,0.4102,-0.4931,0.6892,0.4101,-0.5972,0.7409,0.4736,-0.4761,0.6656,0.4736,-0.5768,-0.1145,-0.5933,-0.7968,-0.238,-0.5347,-0.8108,-0.3344,-0.5933,-0.7322,-0.2268,-0.5933,-0.7724,0,-0.5347,-0.845,0,-0.5933,-0.805,0.1145,-0.5933,-0.7968,-0.5271,-0.5933,-0.6084,0.238,-0.5347,-0.8108,0.2268,-0.5933,-0.7724,-0.6386,-0.5347,-0.5534,0.3344,-0.5933,-0.7322,-0.6772,-0.5933,-0.4352,-0.6084,-0.5933,-0.5271,-0.7686,-0.5347,-0.351,0.5271,-0.5933,-0.6084,-0.7724,-0.5933,-0.2268,-0.7322,-0.5933,-0.3344,-0.8108,-0.5347,-0.238,-0.8451,-0.4736,-0.2481,-0.8751,-0.4101,-0.2569,-0.9006,-0.3448,-0.2644,-0.9217,-0.2778,-0.2706,-0.9382,-0.2095,-0.2755,-0.95,-0.1402,-0.2789,-0.9571,-0.0703,-0.281,-0.9571,0.0703,-0.281,-0.9595,0,-0.2817,-0.95,0.1402,-0.2789,-0.9382,0.2095,-0.2755,-0.9217,0.2778,-0.2706,-0.9006,0.3448,-0.2644,-0.8751,0.4101,-0.2569,-0.8451,0.4736,-0.2481,-0.2481,0.4736,-0.8451,-0.1202,0.5347,-0.8364,-0.351,0.5347,-0.7686,0,0.4736,-0.8807,-0.4761,0.4736,-0.7409,0.1202,0.5347,-0.8364,0,0.5347,-0.845,-0.5534,0.5347,-0.6386,0.2481,0.4736,-0.8451,0.351,0.5347,-0.7686,-0.7109,0.5347,-0.4568,0.4761,0.4736,-0.7409,-0.8011,0.4736,-0.3659,0.5534,0.5347,-0.6386,-0.8108,0.5347,-0.238,0.6772,-0.5933,-0.4352,0.7686,-0.5347,-0.351,0.7322,-0.5933,-0.3344,0.8011,-0.4736,-0.3659,0.8296,-0.4101,-0.3789,0.8538,-0.3448,-0.3899,0.8738,-0.2778,-0.3991,0.8894,-0.2095,-0.4062,0.9006,-0.1402,-0.4113,0.9074,-0.0703,-0.4144,0.9096,0,-0.4154,0.9074,0.0703,-0.4144,0.9006,0.1402,-0.4113,0.8894,0.2095,-0.4062,0.8738,0.2778,-0.3991,0.8538,0.3448,-0.3899,0.8296,0.4101,-0.3789,0.7109,0.5347,-0.4568,0.6386,0.5347,-0.5534,0.8011,0.4736,-0.3659,-0.1083,-0.6489,-0.753,-0.316,-0.649,-0.692,-0.4352,-0.5933,-0.6772,0.1083,-0.6489,-0.753,-0.4982,-0.649,-0.575,0.316,-0.649,-0.692,-0.64,-0.6489,-0.4113,-0.575,-0.649,-0.4982,0.4352,-0.5933,-0.6772,0.4982,-0.649,-0.575,-0.73,-0.649,-0.2143,0.6084,-0.5933,-0.5271,0.575,-0.649,-0.4982,-0.7968,-0.5933,-0.1145,-0.8364,-0.5347,-0.1202,-0.8718,-0.4736,-0.1253,-0.9027,-0.4101,-0.1298,-0.9291,-0.3448,-0.1336,-0.9508,-0.2778,-0.1367,-0.9678,-0.2095,-0.1391,-0.98,-0.1402,-0.1409,-0.9874,-0.0703,-0.1419,-0.9898,0,-0.1423,-0.9874,0.0703,-0.1419,-0.98,0.1402,-0.1409,-0.9678,0.2095,-0.1391,-0.9508,0.2778,-0.1367,-0.9291,0.3448,-0.1336,-0.9027,0.4101,-0.1298,0.64,-0.649,-0.4113,-0.8718,0.4736,-0.1253,-0.8364,0.5347,-0.1202,-0.1145,0.5933,-0.7968,-0.238,0.5347,-0.8108,-0.2268,0.5933,-0.7724,-0.3344,0.5933,-0.7322,-0.4568,0.5347,-0.7109,-0.4352,0.5933,-0.6772,0.1145,0.5933,-0.7968,0,0.5933,-0.805,-0.5271,0.5933,-0.6084,0.238,0.5347,-0.8108,-0.6386,0.5347,-0.5534,0.3344,0.5933,-0.7322,0.2268,0.5933,-0.7724,-0.6772,0.5933,-0.4352,0.4568,0.5347,-0.7109,-0.7686,0.5347,-0.351,-0.7322,0.5933,-0.3344,0.5271,0.5933,-0.6084,0.4352,0.5933,-0.6772,-0.7724,0.5933,-0.2268,-0.7968,0.5933,-0.1145,0.6772,0.5933,-0.4352,0.692,-0.649,-0.316,0.73,-0.649,-0.2143,0.7724,-0.5933,-0.2268,0.8108,-0.5347,-0.238,0.8451,-0.4736,-0.2481,0.8751,-0.4101,-0.2569,0.9006,-0.3448,-0.2644,0.9217,-0.2778,-0.2706,0.9382,-0.2095,-0.2755,0.95,-0.1402,-0.2789,0.9571,-0.0703,-0.281,0.9595,0,-0.2817,0.9571,0.0703,-0.281,0.95,0.1402,-0.2789,0.9382,0.2095,-0.2755,0.9217,0.2778,-0.2706,0.9006,0.3448,-0.2644,0.8751,0.4101,-0.2569,0.8451,0.4736,-0.2481,0.8108,0.5347,-0.238,0.7686,0.5347,-0.351,0.7724,0.5933,-0.2268,0.7322,0.5933,-0.3344,-0.1014,-0.7015,-0.7054,-0.2143,-0.6489,-0.73,-0.296,-0.7015,-0.6483,-0.2008,-0.7015,-0.6838,0,-0.6489,-0.7608,0,-0.7015,-0.7127,-0.4113,-0.649,-0.64,0.1014,-0.7015,-0.7054,-0.4667,-0.7015,-0.5386,0.2143,-0.6489,-0.73,0.296,-0.7015,-0.6483,-0.5995,-0.7015,-0.3853,0.4113,-0.649,-0.64,0.3853,-0.7015,-0.5995,-0.692,-0.649,-0.316,0.4667,-0.7015,-0.5386,-0.6838,-0.7015,-0.2008,-0.753,-0.649,-0.1082,0.5995,-0.7015,-0.3853,-0.7127,-0.7015,0,-0.7054,-0.7015,-0.1014,-0.7608,-0.649,0,-0.805,-0.5933,0,-0.845,-0.5347,0,-0.8807,-0.4736,0,-0.912,-0.4101,0,-0.9387,-0.3448,0,-0.9606,-0.2778,0,-0.9778,-0.2095,0,-0.9901,-0.1402,0,-0.9975,-0.0703,0,-0.9975,0.0703,0,-1,0,0,-0.9901,0.1402,0,-0.9778,0.2095,0,-0.9606,0.2778,0,-0.9387,0.3448,0,-0.912,0.4101,0,-0.8807,0.4736,0,-0.845,0.5347,0,0.6483,-0.7015,-0.2961,-0.805,0.5933,0,-0.1083,0.6489,-0.753,-0.316,0.649,-0.692,-0.4113,0.649,-0.64,0.1083,0.6489,-0.753,0,0.6489,-0.7608,-0.4982,0.649,-0.575,-0.6084,0.5933,-0.5271,0.316,0.649,-0.692,-0.64,0.6489,-0.4113,-0.692,0.649,-0.316,0.4982,0.6489,-0.575,0.4113,0.649,-0.64,-0.73,0.649,-0.2143,0.6084,0.5933,-0.5271,0.64,0.649,-0.4113,-0.7608,0.649,0,0.6838,-0.7015,-0.2008,0.753,-0.649,-0.1082,0.7054,-0.7015,-0.1014,0.7968,-0.5933,-0.1145,0.8364,-0.5347,-0.1202,0.8718,-0.4736,-0.1253,0.9027,-0.4101,-0.1298,0.9291,-0.3448,-0.1336,0.9508,-0.2778,-0.1367,0.9678,-0.2095,-0.1391,0.98,-0.1402,-0.1409,0.9874,-0.0703,-0.1419,0.9898,0,-0.1423,0.9874,0.0703,-0.1419,0.98,0.1402,-0.1409,0.9678,0.2095,-0.1391,0.9508,0.2778,-0.1367,0.9291,0.3448,-0.1336,0.9027,0.4101,-0.1298,0.8718,0.4736,-0.1253,0.8364,0.5347,-0.1202,0.73,0.649,-0.2143,0.692,0.649,-0.316,0.7968,0.5933,-0.1145,-0.094,-0.7505,-0.6541,-0.2745,-0.7505,-0.6011,0,-0.7505,-0.6608,-0.3853,-0.7015,-0.5995,0.094,-0.7505,-0.6541,-0.4328,-0.7505,-0.4994,-0.3572,-0.7505,-0.5559,0.2008,-0.7015,-0.6838,0.1862,-0.7505,-0.6341,-0.5386,-0.7015,-0.4667,0.2745,-0.7505,-0.6011,-0.5559,-0.7505,-0.3573,-0.4994,-0.7505,-0.4328,0.3572,-0.7505,-0.5559,-0.6483,-0.7015,-0.2961,0.4328,-0.7505,-0.4994,-0.6341,-0.7505,-0.1862,0.5386,-0.7015,-0.4667,0.4994,-0.7505,-0.4328,0.5559,-0.7505,-0.3573,-0.6608,-0.7505,0,-0.7054,-0.7015,0.1014,-0.753,-0.649,0.1082,-0.7968,-0.5933,0.1145,-0.8364,-0.5347,0.1202,-0.8718,-0.4736,0.1253,-0.9027,-0.4101,0.1298,-0.9291,-0.3448,0.1336,-0.9508,-0.2778,0.1367,-0.9678,-0.2095,0.1391,-0.98,-0.1402,0.1409,-0.9874,-0.0703,0.1419,-0.9898,0,0.1423,-0.9874,0.0703,0.1419,-0.98,0.1402,0.1409,-0.9678,0.2095,0.1391,-0.9508,0.2778,0.1367,-0.9291,0.3448,0.1336,-0.9027,0.4101,0.1298,-0.8718,0.4736,0.1253,-0.8364,0.5347,0.1202,0.6341,-0.7505,-0.1862,-0.7968,0.5933,0.1145,-0.2143,0.6489,-0.73,-0.1014,0.7015,-0.7054,-0.296,0.7015,-0.6482,-0.3853,0.7015,-0.5995,0.1014,0.7015,-0.7054,-0.4667,0.7015,-0.5386,0.2143,0.6489,-0.73,-0.575,0.649,-0.4982,0.296,0.7015,-0.6482,0.2008,0.7015,-0.6838,-0.5995,0.7015,-0.3853,-0.6482,0.7015,-0.296,0.4667,0.7015,-0.5386,-0.6838,0.7015,-0.2008,0.575,0.649,-0.4982,-0.753,0.649,-0.1082,0.5995,0.7015,-0.3853,-0.7127,0.7015,0,-0.753,0.649,0.1082,0.6838,0.7015,-0.2008,0.6541,-0.7505,-0.094,0.6608,-0.7505,0,0.7127,-0.7015,0,0.7608,-0.649,0,0.805,-0.5933,0,0.845,-0.5347,0,0.8807,-0.4736,0,0.912,-0.4101,0,0.9387,-0.3448,0,0.9606,-0.2778,0,0.9778,-0.2095,0,0.9901,-0.1402,0,0.9975,-0.0703,0,1,0,0,0.9975,0.0703,0,0.9901,0.1402,0,0.9778,0.2095,0,0.9606,0.2778,0,0.9387,0.3448,0,0.912,0.4101,0,0.8807,0.4736,0,0.845,0.5347,0,0.805,0.5933,0,0.7608,0.649,0,0.753,0.649,-0.1082,0.7127,0.7015,0,-0.0862,-0.7958,-0.5993,-0.1862,-0.7505,-0.6341,-0.2515,-0.7958,-0.5508,-0.1706,-0.7958,-0.581,0.0862,-0.7958,-0.5993,-0.3965,-0.7958,-0.4576,-0.3273,-0.7958,-0.5094,0.2515,-0.7958,-0.5508,-0.5094,-0.7958,-0.3273,0.3273,-0.7958,-0.5094,-0.6011,-0.7505,-0.2745,0.3965,-0.7958,-0.4576,-0.581,-0.7958,-0.1706,-0.5508,-0.7958,-0.2515,0.4576,-0.7958,-0.3965,-0.6541,-0.7505,-0.094,0.5094,-0.7958,-0.3273,-0.6055,-0.7958,0,-0.5993,-0.7958,-0.0862,0.6011,-0.7505,-0.2745,0.5508,-0.7958,-0.2515,-0.6541,-0.7505,0.094,0.581,-0.7958,-0.1706,-0.581,-0.7958,0.1706,-0.5993,-0.7958,0.0862,-0.6341,-0.7505,0.1862,-0.6838,-0.7015,0.2008,-0.73,-0.649,0.2143,-0.7724,-0.5933,0.2268,-0.8108,-0.5347,0.238,-0.8451,-0.4736,0.2481,-0.8751,-0.4101,0.2569,-0.9006,-0.3448,0.2644,-0.9217,-0.2778,0.2706,-0.9382,-0.2095,0.2755,-0.95,-0.1402,0.2789,-0.9571,-0.0703,0.281,-0.9595,0,0.2817,-0.95,0.1402,0.2789,-0.9571,0.0703,0.281,-0.9382,0.2095,0.2755,-0.9217,0.2778,0.2706,-0.9006,0.3448,0.2644,-0.8751,0.4101,0.2569,-0.8451,0.4736,0.2481,-0.8108,0.5347,0.238,-0.7724,0.5933,0.2268,-0.73,0.649,0.2143,-0.6838,0.7015,0.2008,-0.094,0.7505,-0.6541,-0.2008,0.7015,-0.6838,-0.1862,0.7505,-0.6341,-0.2745,0.7505,-0.6011,0,0.7015,-0.7127,0.094,0.7505,-0.6541,0,0.7505,-0.6608,-0.4328,0.7505,-0.4994,-0.5386,0.7015,-0.4667,0.2745,0.7505,-0.6011,-0.5559,0.7505,-0.3572,0.3853,0.7015,-0.5995,0.4328,0.7505,-0.4994,-0.6341,0.7505,-0.1862,0.5386,0.7015,-0.4667,-0.7054,0.7015,-0.1014,0.5559,0.7505,-0.3572,0.4994,0.7505,-0.4328,-0.6608,0.7505,0,0.6482,0.7015,-0.296,-0.7054,0.7015,0.1014,0.6341,0.7505,-0.1862,-0.6341,0.7505,0.1862,0.7054,0.7015,-0.1014,0.6055,-0.7958,0,0.6541,-0.7505,0.094,0.5993,-0.7958,0.0862,0.7054,-0.7015,0.1014,0.753,-0.649,0.1082,0.7968,-0.5933,0.1145,0.8364,-0.5347,0.1202,0.8718,-0.4736,0.1253,0.9027,-0.4101,0.1298,0.9291,-0.3448,0.1336,0.9508,-0.2778,0.1367,0.9678,-0.2095,0.1391,0.98,-0.1402,0.1409,0.9874,-0.0703,0.1419,0.9898,0,0.1423,0.9874,0.0703,0.1419,0.98,0.1402,0.1409,0.9678,0.2095,0.1391,0.9508,0.2778,0.1367,0.9291,0.3448,0.1336,0.9027,0.4101,0.1298,0.8718,0.4736,0.1253,0.8364,0.5347,0.1202,0.7968,0.5933,0.1145,0.753,0.649,0.1082,0.6608,0.7505,0,0.7054,0.7015,0.1014,-0.0778,-0.8371,-0.5414,-0.2272,-0.8371,-0.4975,-0.1541,-0.8371,-0.5248,0,-0.7958,-0.6055,0,-0.8371,-0.547,0.0778,-0.8371,-0.5414,-0.3582,-0.8371,-0.4134,-0.2957,-0.8371,-0.4601,0.1706,-0.7958,-0.581,-0.4576,-0.7958,-0.3965,0.2272,-0.8371,-0.4975,-0.4601,-0.8371,-0.2957,0.3582,-0.8371,-0.4134,-0.5248,-0.8371,-0.1541,0.4134,-0.8371,-0.3582,0.4601,-0.8371,-0.2957,-0.547,-0.8371,0,-0.5414,-0.8371,-0.0778,0.5248,-0.8371,-0.1541,-0.5248,-0.8371,0.1541,-0.5414,-0.8371,0.0778,0.5993,-0.7958,-0.0862,0.5414,-0.8371,-0.0778,-0.5508,-0.7958,0.2515,-0.6011,-0.7505,0.2745,-0.6483,-0.7015,0.2961,-0.692,-0.649,0.316,-0.7322,-0.5933,0.3344,-0.7686,-0.5347,0.351,-0.8011,-0.4736,0.3659,-0.8296,-0.4101,0.3789,-0.8538,-0.3448,0.3899,-0.8738,-0.2778,0.3991,-0.8894,-0.2095,0.4062,-0.9006,-0.1402,0.4113,-0.9074,-0.0702,0.4144,-0.9096,0,0.4154,-0.9074,0.0702,0.4144,-0.9006,0.1402,0.4113,-0.8894,0.2095,0.4062,-0.8738,0.2778,0.3991,-0.8538,0.3448,0.3899,-0.8296,0.4101,0.3789,-0.8011,0.4736,0.3659,-0.7686,0.5347,0.351,-0.7322,0.5933,0.3344,-0.692,0.649,0.316,-0.6482,0.7015,0.296,0.547,-0.8371,0,-0.0862,0.7958,-0.5994,-0.2515,0.7958,-0.5508,-0.3572,0.7505,-0.5559,-0.3274,0.7958,-0.5094,0.0862,0.7958,-0.5994,-0.3965,0.7958,-0.4576,0.1862,0.7505,-0.6341,-0.4994,0.7505,-0.4328,-0.4576,0.7958,-0.3965,0.2515,0.7958,-0.5508,-0.5094,0.7958,-0.3274,0.3572,0.7505,-0.5559,-0.6011,0.7505,-0.2745,0.3965,0.7958,-0.4576,0.3273,0.7958,-0.5094,-0.581,0.7958,-0.1706,-0.6541,0.7505,-0.094,-0.5994,0.7958,-0.0862,0.5094,0.7958,-0.3274,0.4576,0.7958,-0.3965,-0.6055,0.7958,0,0.6011,0.7505,-0.2745,-0.6541,0.7505,0.094,0.581,0.7958,-0.1706,-0.581,0.7958,0.1706,0.6541,0.7505,-0.094,-0.6011,0.7505,0.2745,-0.5508,0.7958,0.2515,0.6055,0.7958,0,0.5248,-0.8371,0.1541,0.581,-0.7958,0.1706,0.6341,-0.7505,0.1862,0.6838,-0.7015,0.2008,0.73,-0.649,0.2143,0.7724,-0.5933,0.2268,0.8108,-0.5347,0.238,0.8451,-0.4736,0.2481,0.8751,-0.4101,0.2569,0.9006,-0.3448,0.2644,0.9217,-0.2778,0.2706,0.9382,-0.2095,0.2755,0.95,-0.1402,0.2789,0.9571,-0.0703,0.281,0.9595,0,0.2817,0.9571,0.0703,0.281,0.95,0.1402,0.2789,0.9382,0.2095,0.2755,0.9217,0.2778,0.2706,0.9006,0.3448,0.2644,0.8751,0.4101,0.2569,0.8451,0.4736,0.2481,0.8108,0.5347,0.238,0.7724,0.5933,0.2268,0.73,0.649,0.2143,0.6838,0.7015,0.2008,0.6341,0.7505,0.1862,0.6541,0.7505,0.094,0.581,0.7958,0.1706,0.5994,0.7958,0.0862,-0.0691,-0.8742,-0.4806,-0.2017,-0.8742,-0.4416,-0.1368,-0.8742,-0.4658,0.0691,-0.8742,-0.4806,-0.3179,-0.8742,-0.3669,0.1541,-0.8371,-0.5248,0.1368,-0.8742,-0.4658,-0.4134,-0.8371,-0.3582,0.2017,-0.8742,-0.4416,-0.4084,-0.8742,-0.2625,-0.3669,-0.8742,-0.3179,0.2957,-0.8371,-0.4601,-0.4975,-0.8371,-0.2272,0.3179,-0.8742,-0.3669,-0.4658,-0.8742,-0.1368,-0.4416,-0.8742,-0.2017,0.4084,-0.8742,-0.2625,-0.4855,-0.8742,0,0.4975,-0.8371,-0.2272,0.4416,-0.8742,-0.2017,0.4658,-0.8742,-0.1368,-0.4658,-0.8742,0.1368,0.4806,-0.8742,-0.0691,-0.4975,-0.8371,0.2272,0.4855,-0.8742,0,-0.4084,-0.8742,0.2625,-0.4416,-0.8742,0.2017,-0.4601,-0.8371,0.2957,-0.5094,-0.7958,0.3273,-0.5559,-0.7505,0.3573,-0.5995,-0.7015,0.3853,-0.64,-0.649,0.4113,-0.6772,-0.5933,0.4352,-0.7109,-0.5347,0.4568,-0.7409,-0.4736,0.4761,-0.7672,-0.4102,0.4931,-0.7896,-0.3448,0.5075,-0.8081,-0.2778,0.5193,-0.8226,-0.2095,0.5286,-0.8329,-0.1402,0.5353,-0.8392,-0.0703,0.5393,-0.8392,0.0703,0.5393,-0.8412,0,0.5406,-0.8329,0.1402,0.5353,-0.8226,0.2095,0.5286,-0.8081,0.2778,0.5193,-0.7896,0.3448,0.5075,-0.7672,0.4102,0.4931,-0.7409,0.4736,0.4761,-0.7109,0.5347,0.4568,-0.6772,0.5933,0.4352,-0.64,0.649,0.4113,-0.5995,0.7015,0.3853,-0.5559,0.7505,0.3572,0.5414,-0.8371,0.0778,0.4806,-0.8742,0.0691,-0.5094,0.7958,0.3274,-0.0778,0.8371,-0.5414,-0.1706,0.7958,-0.581,-0.1541,0.8371,-0.5248,-0.2272,0.8371,-0.4975,0,0.7958,-0.6055,0.0778,0.8371,-0.5414,-0.3582,0.8371,-0.4134,0.1706,0.7958,-0.581,-0.4134,0.8371,-0.3582,0.2272,0.8371,-0.4975,-0.4601,0.8371,-0.2957,-0.5508,0.7958,-0.2515,0.3582,0.8371,-0.4134,-0.5248,0.8371,-0.1541,0.4601,0.8371,-0.2957,0.4134,0.8371,-0.3582,-0.547,0.8371,0,0.5508,0.7958,-0.2515,-0.5994,0.7958,0.0862,0.5248,0.8371,-0.1541,0.4975,0.8371,-0.2272,-0.5248,0.8371,0.1541,0.5994,0.7958,-0.0862,-0.4975,0.8371,0.2272,0.547,0.8371,0,-0.4601,0.8371,0.2957,0.4658,-0.8742,0.1368,0.4975,-0.8371,0.2272,0.5508,-0.7958,0.2515,0.6011,-0.7505,0.2745,0.6483,-0.7015,0.2961,0.692,-0.649,0.316,0.7322,-0.5933,0.3344,0.7686,-0.5347,0.351,0.8011,-0.4736,0.3659,0.8296,-0.4101,0.3789,0.8538,-0.3448,0.3899,0.8738,-0.2778,0.3991,0.8894,-0.2095,0.4062,0.9006,-0.1402,0.4113,0.9074,-0.0703,0.4144,0.9096,0,0.4154,0.9074,0.0703,0.4144,0.9006,0.1402,0.4113,0.8894,0.2095,0.4062,0.8738,0.2778,0.3991,0.8538,0.3448,0.3899,0.8296,0.4101,0.3789,0.8011,0.4736,0.3659,0.7686,0.5347,0.351,0.7322,0.5933,0.3344,0.692,0.649,0.316,0.6482,0.7015,0.296,0.6011,0.7505,0.2745,0.5248,0.8371,0.1541,0.5414,0.8371,0.0778,0.5508,0.7958,0.2515,-0.06,-0.9068,-0.4171,-0.1751,-0.9068,-0.3833,-0.1187,-0.9068,-0.4043,0,-0.8742,-0.4855,0,-0.9068,-0.4214,-0.2625,-0.8742,-0.4084,0.06,-0.9068,-0.4171,-0.276,-0.9068,-0.3185,-0.2278,-0.9068,-0.3545,0.1751,-0.9068,-0.3833,-0.3545,-0.9068,-0.2278,-0.3185,-0.9068,-0.276,0.2625,-0.8742,-0.4084,0.2278,-0.9068,-0.3545,0.276,-0.9068,-0.3185,-0.4043,-0.9068,-0.1187,-0.3833,-0.9068,-0.1751,0.3669,-0.8742,-0.3179,-0.4806,-0.8742,-0.0691,0.3545,-0.9068,-0.2278,-0.4214,-0.9068,0,-0.4172,-0.9068,-0.06,0.3833,-0.9068,-0.1751,-0.4806,-0.8742,0.0691,0.4043,-0.9068,-0.1187,-0.4043,-0.9068,0.1187,-0.4172,-0.9068,0.06,0.4214,-0.9068,0,-0.3545,-0.9068,0.2278,-0.3669,-0.8742,0.3179,-0.4134,-0.8371,0.3582,-0.4576,-0.7958,0.3965,-0.4994,-0.7505,0.4328,-0.5386,-0.7015,0.4667,-0.575,-0.649,0.4982,-0.6084,-0.5933,0.5271,-0.6386,-0.5347,0.5534,-0.6656,-0.4736,0.5768,-0.6892,-0.4101,0.5972,-0.7094,-0.3448,0.6147,-0.726,-0.2778,0.6291,-0.739,-0.2095,0.6403,-0.7483,-0.1402,0.6484,-0.7539,-0.0703,0.6532,-0.7539,0.0703,0.6532,-0.7557,0,0.6548,-0.7483,0.1402,0.6484,-0.739,0.2095,0.6403,-0.726,0.2778,0.6291,-0.7094,0.3448,0.6147,-0.6892,0.4101,0.5972,-0.6656,0.4736,0.5768,-0.6386,0.5347,0.5534,-0.6084,0.5933,0.5271,-0.575,0.649,0.4982,-0.5386,0.7015,0.4667,-0.4994,0.7505,0.4328,-0.4576,0.7958,0.3965,0.4043,-0.9068,0.1187,-0.0691,0.8742,-0.4805,-0.1368,0.8742,-0.4658,-0.2017,0.8742,-0.4416,0,0.8371,-0.547,-0.2957,0.8371,-0.4601,0.0691,0.8742,-0.4805,0,0.8742,-0.4855,-0.3179,0.8742,-0.3669,0.1541,0.8371,-0.5248,0.2017,0.8742,-0.4416,-0.4084,0.8742,-0.2625,0.2957,0.8371,-0.4601,-0.4975,0.8371,-0.2272,-0.4416,0.8742,-0.2017,0.3179,0.8742,-0.3669,-0.4658,0.8742,-0.1368,-0.5414,0.8371,-0.0778,0.4084,0.8742,-0.2625,-0.4855,0.8742,0,-0.5414,0.8371,0.0778,-0.4805,0.8742,0.0691,0.4658,0.8742,-0.1368,0.4416,0.8742,-0.2017,-0.4658,0.8742,0.1368,0.5414,0.8371,-0.0778,0.4855,0.8742,0,0.4805,0.8742,-0.0691,-0.4084,0.8742,0.2625,-0.4134,0.8371,0.3582,0.4658,0.8742,0.1368,0.4416,-0.8742,0.2017,0.3833,-0.9068,0.1751,0.3545,-0.9068,0.2278,0.4084,-0.8742,0.2625,0.4601,-0.8371,0.2957,0.5094,-0.7958,0.3273,0.5559,-0.7505,0.3573,0.5995,-0.7015,0.3853,0.64,-0.6489,0.4113,0.6772,-0.5933,0.4352,0.7109,-0.5347,0.4568,0.7409,-0.4736,0.4761,0.7672,-0.4102,0.4931,0.7897,-0.3448,0.5075,0.8081,-0.2778,0.5194,0.8226,-0.2095,0.5286,0.8329,-0.1402,0.5353,0.8392,-0.0703,0.5393,0.8412,0,0.5406,0.8392,0.0703,0.5393,0.8329,0.1402,0.5353,0.8226,0.2095,0.5286,0.8081,0.2778,0.5194,0.7897,0.3448,0.5075,0.7672,0.4102,0.4931,0.7409,0.4736,0.4761,0.7109,0.5347,0.4568,0.6772,0.5933,0.4352,0.64,0.6489,0.4113,0.5995,0.7015,0.3853,0.5559,0.7505,0.3572,0.5094,0.7958,0.3274,0.4601,0.8371,0.2957,0.4975,0.8371,0.2272,0.4084,0.8742,0.2625,0.4416,0.8742,0.2017,-0.0505,-0.9348,-0.3515,-0.1475,-0.9348,-0.323,0,-0.9348,-0.3551,0.0505,-0.9348,-0.3515,-0.2325,-0.9348,-0.2683,-0.192,-0.9348,-0.2987,0.1187,-0.9068,-0.4043,0.1,-0.9348,-0.3407,0.1475,-0.9348,-0.323,-0.2987,-0.9348,-0.192,0.2325,-0.9348,-0.2683,-0.3407,-0.9348,-0.1,0.3185,-0.9068,-0.276,0.2987,-0.9348,-0.192,-0.3551,-0.9348,0,-0.3515,-0.9348,-0.0505,0.3407,-0.9348,-0.1,-0.3407,-0.9348,0.1,-0.3515,-0.9348,0.0505,0.4172,-0.9068,-0.06,-0.3833,-0.9068,0.1751,0.3551,-0.9348,0,-0.2987,-0.9348,0.192,0.4172,-0.9068,0.06,0.3515,-0.9348,0.0505,-0.3185,-0.9068,0.276,0.3407,-0.9348,0.1,-0.2325,-0.9348,0.2683,-0.2683,-0.9348,0.2325,-0.276,-0.9068,0.3185,-0.3179,-0.8742,0.3669,-0.3582,-0.8371,0.4134,-0.3965,-0.7958,0.4576,-0.4328,-0.7505,0.4994,-0.4667,-0.7015,0.5386,-0.4982,-0.6489,0.575,-0.5271,-0.5933,0.6084,-0.5534,-0.5347,0.6386,-0.5767,-0.4736,0.6656,-0.5972,-0.4101,0.6892,-0.6147,-0.3448,0.7094,-0.6291,-0.2778,0.726,-0.6403,-0.2095,0.739,-0.6484,-0.1402,0.7483,-0.6532,-0.0703,0.7539,-0.6532,0.0703,0.7539,-0.6548,0,0.7557,-0.6484,0.1402,0.7483,-0.6403,0.2094,0.739,-0.6291,0.2778,0.726,-0.6147,0.3448,0.7094,-0.5972,0.4101,0.6892,-0.5767,0.4736,0.6656,-0.5534,0.5347,0.6386,-0.5271,0.5933,0.6084,-0.4982,0.6489,0.575,-0.4667,0.7015,0.5386,-0.4328,0.7505,0.4994,-0.3965,0.7958,0.4576,-0.3582,0.8371,0.4134,0.323,-0.9348,0.1475,-0.3179,0.8742,0.3669,-0.06,0.9069,-0.4171,-0.1751,0.9069,-0.3833,-0.2625,0.8742,-0.4084,-0.2278,0.9069,-0.3545,0.06,0.9069,-0.4171,0,0.9069,-0.4214,-0.2759,0.9069,-0.3185,0.1368,0.8742,-0.4658,-0.3669,0.8742,-0.3179,-0.3185,0.9069,-0.276,0.1751,0.9069,-0.3833,-0.3545,0.9069,-0.2278,0.2625,0.8742,-0.4084,-0.3833,0.9069,-0.1751,0.2759,0.9069,-0.3185,0.2278,0.9069,-0.3545,-0.4043,0.9069,-0.1187,0.3669,0.8742,-0.3179,-0.4805,0.8742,-0.0691,-0.4171,0.9068,-0.06,0.3545,0.9069,-0.2278,-0.4214,0.9069,0,0.4043,0.9069,-0.1187,-0.4043,0.9069,0.1187,-0.4416,0.8742,0.2017,0.4214,0.9069,0,0.4171,0.9069,-0.06,-0.3545,0.9069,0.2278,0.4805,0.8742,0.0691,-0.3669,0.8742,0.3179,-0.3185,0.9069,0.2759,0.4043,0.9069,0.1187,-0.2759,0.9069,0.3185,0.2987,-0.9348,0.192,0.3185,-0.9068,0.276,0.2683,-0.9348,0.2325,0.3669,-0.8742,0.3179,0.4134,-0.8371,0.3582,0.4576,-0.7958,0.3965,0.4994,-0.7505,0.4328,0.5386,-0.7015,0.4667,0.575,-0.649,0.4982,0.6084,-0.5933,0.5271,0.6386,-0.5347,0.5534,0.6656,-0.4736,0.5768,0.6892,-0.4102,0.5972,0.7094,-0.3448,0.6147,0.726,-0.2777,0.6291,0.739,-0.2095,0.6403,0.7483,-0.1402,0.6484,0.7539,-0.0703,0.6532,0.7557,0,0.6548,0.7539,0.0703,0.6532,0.7483,0.1402,0.6484,0.739,0.2095,0.6403,0.726,0.2778,0.6291,0.7094,0.3448,0.6147,0.6892,0.4102,0.5972,0.6656,0.4736,0.5768,0.6386,0.5347,0.5534,0.6084,0.5933,0.5271,0.575,0.649,0.4982,0.5386,0.7015,0.4667,0.4994,0.7505,0.4328,0.4576,0.7958,0.3965,0.4134,0.8371,0.3582,0.3545,0.9069,0.2278,0.3669,0.8742,0.3179,-0.0409,-0.9577,-0.2847,-0.1,-0.9348,-0.3407,-0.1195,-0.9577,-0.2616,-0.081,-0.9578,-0.2758,0,-0.9578,-0.2875,0.0409,-0.9577,-0.2847,-0.1884,-0.9577,-0.2174,0.081,-0.9578,-0.2758,-0.2683,-0.9348,-0.2325,0.1195,-0.9577,-0.2616,-0.242,-0.9577,-0.1555,-0.2172,-0.9578,-0.1882,0.192,-0.9348,-0.2987,-0.323,-0.9348,-0.1475,0.1884,-0.9577,-0.2174,-0.276,-0.9577,-0.081,-0.2615,-0.9578,-0.1194,0.2683,-0.9348,-0.2325,0.2172,-0.9578,-0.1882,0.242,-0.9577,-0.1555,-0.2876,-0.9577,0,-0.2845,-0.9578,-0.0409,0.323,-0.9348,-0.1475,0.276,-0.9577,-0.081,-0.276,-0.9577,0.081,0.3515,-0.9348,-0.0505,-0.323,-0.9348,0.1475,0.2876,-0.9577,0,-0.242,-0.9577,0.1555,-0.2615,-0.9578,0.1194,0.2845,-0.9578,0.0409,0.276,-0.9577,0.081,-0.1884,-0.9577,0.2174,0.2615,-0.9578,0.1194,-0.192,-0.9348,0.2987,-0.2278,-0.9068,0.3545,-0.2625,-0.8742,0.4084,-0.2957,-0.8371,0.4601,-0.3273,-0.7958,0.5094,-0.3572,-0.7505,0.5559,-0.3853,-0.7015,0.5995,-0.4113,-0.649,0.64,-0.4352,-0.5933,0.6772,-0.4568,-0.5347,0.7109,-0.4761,-0.4736,0.7409,-0.4931,-0.4101,0.7672,-0.5075,-0.3448,0.7896,-0.5193,-0.2778,0.8081,-0.5286,-0.2095,0.8226,-0.5353,-0.1402,0.8329,-0.5393,-0.0703,0.8392,-0.5406,0,0.8412,-0.5393,0.0703,0.8392,-0.5353,0.1402,0.8329,-0.5286,0.2094,0.8226,-0.5193,0.2778,0.8081,-0.5075,0.3448,0.7896,-0.4931,0.4101,0.7672,-0.4761,0.4736,0.7409,-0.4568,0.5347,0.7109,-0.4352,0.5933,0.6772,-0.4113,0.649,0.64,-0.3853,0.7015,0.5995,-0.3572,0.7505,0.5559,-0.3273,0.7958,0.5094,-0.2957,0.8371,0.4601,0.242,-0.9577,0.1555,-0.2625,0.8742,0.4084,-0.0505,0.9348,-0.3515,-0.1187,0.9069,-0.4043,-0.1,0.9348,-0.3407,-0.1475,0.9348,-0.323,0.0505,0.9348,-0.3515,-0.2325,0.9348,-0.2683,0.1187,0.9069,-0.4043,0.1475,0.9348,-0.323,0.1,0.9348,-0.3407,-0.2987,0.9348,-0.192,0.2325,0.9348,-0.2683,0.192,0.9348,-0.2987,-0.3407,0.9348,-0.1,0.3185,0.9069,-0.276,-0.3515,0.9348,-0.0505,0.2987,0.9348,-0.192,-0.3551,0.9348,0,0.3833,0.9069,-0.1751,-0.4171,0.9069,0.06,-0.3515,0.9348,0.0505,0.3407,0.9348,-0.1,-0.3407,0.9348,0.1,-0.3833,0.9069,0.1751,-0.323,0.9348,0.1475,0.3551,0.9348,0,0.3515,0.9348,-0.0505,-0.2987,0.9348,0.192,0.4171,0.9068,0.06,0.3407,0.9348,0.1,0.3515,0.9348,0.0505,-0.2325,0.9348,0.2683,0.3833,0.9069,0.1751,-0.2278,0.9069,0.3545,0.2987,0.9348,0.192,0.323,0.9348,0.1475,0.1884,-0.9577,0.2174,0.2325,-0.9348,0.2683,0.276,-0.9068,0.3185,0.3179,-0.8742,0.3669,0.3582,-0.8371,0.4134,0.3965,-0.7958,0.4576,0.4328,-0.7505,0.4994,0.4667,-0.7015,0.5386,0.4982,-0.649,0.575,0.5271,-0.5933,0.6084,0.5534,-0.5347,0.6386,0.5767,-0.4736,0.6656,0.5972,-0.4102,0.6892,0.6147,-0.3448,0.7094,0.6291,-0.2778,0.726,0.6403,-0.2095,0.7389,0.6484,-0.1402,0.7483,0.6532,-0.0703,0.7539,0.6548,0,0.7557,0.6484,0.1402,0.7483,0.6532,0.0703,0.7539,0.6403,0.2095,0.7389,0.6291,0.2778,0.726,0.6147,0.3448,0.7094,0.5972,0.4102,0.6892,0.5767,0.4736,0.6656,0.5534,0.5347,0.6386,0.5271,0.5933,0.6084,0.4982,0.649,0.575,0.4667,0.7015,0.5386,0.4328,0.7505,0.4994,0.3965,0.7958,0.4576,0.3582,0.8371,0.4134,0.3179,0.8742,0.3669,0.2759,0.9069,0.3185,0.3185,0.9069,0.2759,0.2325,0.9348,0.2683,-0.0315,-0.9751,-0.2193,-0.092,-0.9751,-0.2015,-0.062,-0.9754,-0.2113,0,-0.9754,-0.2202,-0.1554,-0.9578,-0.2418,0.0315,-0.9751,-0.2193,-0.1451,-0.9751,-0.1674,-0.1191,-0.9754,-0.1853,0.062,-0.9754,-0.2113,0.092,-0.9751,-0.2015,-0.1864,-0.9751,-0.1198,-0.1664,-0.9754,-0.1442,0.1554,-0.9578,-0.2418,0.1191,-0.9754,-0.1853,0.1451,-0.9751,-0.1674,-0.2126,-0.9751,-0.0624,-0.2003,-0.9754,-0.0915,0.1664,-0.9754,-0.1442,0.1864,-0.9751,-0.1198,-0.2215,-0.9751,0,-0.218,-0.9754,-0.0313,0.2615,-0.9578,-0.1194,0.2003,-0.9754,-0.0915,-0.2845,-0.9578,0.0409,0.2126,-0.9751,-0.0624,-0.2126,-0.9751,0.0624,-0.218,-0.9754,0.0313,0.2845,-0.9578,-0.0409,0.218,-0.9754,-0.0313,0.2215,-0.9751,0,-0.1864,-0.9751,0.1198,-0.2003,-0.9754,0.0915,0.218,-0.9754,0.0313,-0.2172,-0.9578,0.1882,0.2126,-0.9751,0.0624,-0.1451,-0.9751,0.1674,-0.1664,-0.9754,0.1442,0.2003,-0.9754,0.0915,-0.1554,-0.9578,0.2418,0.1864,-0.9751,0.1198,-0.092,-0.9751,0.2015,-0.1191,-0.9754,0.1853,-0.1195,-0.9577,0.2616,-0.1475,-0.9348,0.323,-0.1751,-0.9068,0.3833,-0.2017,-0.8742,0.4416,-0.2272,-0.8371,0.4975,-0.2515,-0.7958,0.5508,-0.2745,-0.7505,0.6011,-0.2961,-0.7015,0.6482,-0.316,-0.649,0.692,-0.3344,-0.5933,0.7322,-0.351,-0.5347,0.7686,-0.3659,-0.4736,0.8011,-0.3789,-0.4102,0.8296,-0.3899,-0.3448,0.8538,-0.3991,-0.2778,0.8738,-0.4062,-0.2095,0.8894,-0.4113,-0.1402,0.9006,-0.4144,-0.0702,0.9074,-0.4154,0,0.9096,-0.4144,0.0702,0.9074,-0.4113,0.1402,0.9006,-0.4062,0.2095,0.8894,-0.3991,0.2778,0.8738,-0.3899,0.3448,0.8538,-0.3789,0.4102,0.8296,-0.3659,0.4736,0.8011,-0.351,0.5347,0.7686,-0.3344,0.5933,0.7322,-0.316,0.649,0.692,-0.296,0.7015,0.6482,-0.2745,0.7505,0.6011,-0.2515,0.7958,0.5508,-0.2272,0.8371,0.4975,-0.2017,0.8742,0.4416,-0.1751,0.9069,0.3833,0.2172,-0.9578,0.1882,0.1664,-0.9754,0.1442,-0.1475,0.9348,0.323,-0.0409,0.9577,-0.2847,-0.081,0.9578,-0.2758,-0.1195,0.9577,-0.2616,0,0.9348,-0.3551,-0.192,0.9348,-0.2987,0.0409,0.9577,-0.2847,-0.1884,0.9577,-0.2174,-0.2683,0.9348,-0.2325,0.1195,0.9577,-0.2616,0.081,0.9578,-0.2758,-0.242,0.9577,-0.1555,-0.323,0.9348,-0.1475,0.1884,0.9577,-0.2174,-0.276,0.9577,-0.081,0.2683,0.9348,-0.2325,0.242,0.9577,-0.1555,0.2172,0.9578,-0.1882,-0.2876,0.9577,0,0.323,0.9348,-0.1475,-0.2845,0.9578,0.0409,0.276,0.9577,-0.081,-0.276,0.9577,0.081,-0.2615,0.9578,0.1194,0.2876,0.9577,0,-0.242,0.9577,0.1555,-0.2683,0.9348,0.2325,0.276,0.9577,0.081,-0.1884,0.9577,0.2174,-0.192,0.9348,0.2987,-0.1554,0.9578,0.2418,0.242,0.9577,0.1555,-0.1195,0.9577,0.2616,0.2683,0.9348,0.2325,0.1451,-0.9751,0.1674,0.1554,-0.9578,0.2418,0.1191,-0.9754,0.1853,0.192,-0.9348,0.2987,0.2278,-0.9068,0.3545,0.2625,-0.8742,0.4084,0.2957,-0.8371,0.4601,0.3273,-0.7958,0.5094,0.3572,-0.7505,0.5559,0.3853,-0.7015,0.5995,0.4113,-0.649,0.64,0.4352,-0.5933,0.6772,0.4568,-0.5347,0.7109,0.4761,-0.4736,0.7409,0.4931,-0.4101,0.7672,0.5075,-0.3448,0.7896,0.5193,-0.2778,0.8081,0.5286,-0.2095,0.8226,0.5353,-0.1402,0.8329,0.5393,-0.0703,0.8392,0.5406,0,0.8412,0.5393,0.0703,0.8392,0.5353,0.1402,0.8329,0.5286,0.2095,0.8226,0.5193,0.2778,0.8081,0.5075,0.3448,0.7896,0.4931,0.4101,0.7672,0.4761,0.4736,0.7409,0.4568,0.5347,0.7109,0.4352,0.5933,0.6772,0.4113,0.649,0.64,0.3853,0.7015,0.5995,0.3572,0.7505,0.5559,0.3273,0.7958,0.5094,0.2957,0.8371,0.4601,0.2625,0.8742,0.4084,0.2278,0.9069,0.3545,0.1884,0.9577,0.2174,0.192,0.9348,0.2987,-0.0217,-0.9883,-0.151,-0.0634,-0.9883,-0.1388,-0.0407,-0.9895,-0.1385,0,-0.9895,-0.1443,0.0217,-0.9883,-0.151,-0.0999,-0.9883,-0.1153,-0.078,-0.9895,-0.1214,0.0407,-0.9895,-0.1385,0.0634,-0.9883,-0.1388,-0.1283,-0.9883,-0.0825,-0.109,-0.9895,-0.0945,0.078,-0.9895,-0.1214,0.0999,-0.9883,-0.1153,-0.1464,-0.9883,-0.043,-0.1313,-0.9895,-0.0599,0.109,-0.9895,-0.0945,0.1283,-0.9883,-0.0825,-0.1525,-0.9883,0,-0.1428,-0.9895,-0.0205,0.1313,-0.9895,-0.0599,0.1464,-0.9883,-0.043,-0.1464,-0.9883,0.043,-0.1428,-0.9895,0.0205,0.1428,-0.9895,-0.0205,0.1525,-0.9883,0,-0.1283,-0.9883,0.0825,-0.1313,-0.9895,0.0599,0.1428,-0.9895,0.0205,0.1464,-0.9883,0.043,-0.0999,-0.9883,0.1153,-0.109,-0.9895,0.0945,0.1313,-0.9895,0.0599,0.1283,-0.9883,0.0825,-0.0634,-0.9883,0.1388,-0.078,-0.9895,0.1214,0.109,-0.9895,0.0945,-0.062,-0.9754,0.2113,-0.081,-0.9578,0.2758,-0.1,-0.9348,0.3407,-0.1187,-0.9068,0.4043,-0.1368,-0.8742,0.4658,-0.1541,-0.8371,0.5248,-0.1706,-0.7958,0.581,-0.1862,-0.7505,0.6341,-0.2008,-0.7015,0.6838,-0.2143,-0.6489,0.73,-0.2268,-0.5933,0.7724,-0.238,-0.5347,0.8108,-0.2481,-0.4736,0.8451,-0.2569,-0.4101,0.8751,-0.2644,-0.3448,0.9006,-0.2706,-0.2778,0.9217,-0.2755,-0.2095,0.9382,-0.2789,-0.1402,0.95,-0.281,-0.0703,0.9571,-0.2817,0,0.9595,-0.281,0.0703,0.9571,-0.2789,0.1402,0.95,-0.2755,0.2095,0.9382,-0.2706,0.2778,0.9217,-0.2644,0.3448,0.9006,-0.2569,0.4101,0.8751,-0.2481,0.4736,0.8451,-0.238,0.5347,0.8108,-0.2268,0.5933,0.7724,-0.2143,0.6489,0.73,-0.2008,0.7015,0.6838,-0.1862,0.7505,0.6341,-0.1706,0.7958,0.581,-0.1541,0.8371,0.5248,-0.1368,0.8742,0.4658,-0.1187,0.9069,0.4043,0.0999,-0.9883,0.1153,-0.1,0.9348,0.3407,-0.081,0.9578,0.2758,-0.0315,0.9751,-0.2193,-0.062,0.9754,-0.2113,-0.092,0.9751,-0.2015,0,0.9578,-0.2875,-0.1554,0.9578,-0.2418,-0.1191,0.9754,-0.1853,0.0315,0.9751,-0.2193,0,0.9754,-0.2203,-0.1451,0.9751,-0.1674,-0.2172,0.9578,-0.1882,-0.1664,0.9754,-0.1442,0.092,0.9751,-0.2015,0.062,0.9754,-0.2113,-0.1864,0.9751,-0.1198,0.1554,0.9578,-0.2418,-0.2615,0.9578,-0.1194,-0.2004,0.9754,-0.0915,0.1451,0.9751,-0.1674,0.1191,0.9754,-0.1853,-0.2126,0.9751,-0.0624,-0.2845,0.9578,-0.0409,-0.218,0.9754,-0.0313,0.1864,0.9751,-0.1198,0.1664,0.9754,-0.1442,-0.2216,0.9751,0,0.2615,0.9578,-0.1194,-0.218,0.9754,0.0313,0.2126,0.9751,-0.0624,0.2004,0.9754,-0.0915,-0.2126,0.9751,0.0624,0.2845,0.9578,-0.0409,-0.2004,0.9754,0.0915,0.2216,0.9751,0,0.218,0.9754,-0.0313,-0.1864,0.9751,0.1198,0.2845,0.9578,0.0409,-0.2172,0.9578,0.1882,-0.1664,0.9754,0.1442,0.2126,0.9751,0.0624,0.218,0.9754,0.0313,-0.1451,0.9751,0.1674,0.2615,0.9578,0.1194,-0.1191,0.9754,0.1853,0.1864,0.9751,0.1198,0.2004,0.9754,0.0915,-0.092,0.9751,0.2015,0.2172,0.9578,0.1882,-0.062,0.9754,0.2113,0.1451,0.9751,0.1674,0.1664,0.9754,0.1442,0.078,-0.9895,0.1214,0.0634,-0.9883,0.1388,0.092,-0.9751,0.2015,0.1195,-0.9577,0.2616,0.1475,-0.9348,0.323,0.1751,-0.9068,0.3833,0.2017,-0.8742,0.4416,0.2272,-0.8371,0.4975,0.2515,-0.7958,0.5508,0.2745,-0.7505,0.6011,0.296,-0.7015,0.6483,0.316,-0.649,0.692,0.3344,-0.5933,0.7322,0.351,-0.5347,0.7686,0.3659,-0.4736,0.8011,0.3789,-0.4102,0.8296,0.3899,-0.3448,0.8538,0.3991,-0.2778,0.8738,0.4062,-0.2095,0.8894,0.4113,-0.1402,0.9006,0.4144,-0.0702,0.9074,0.4154,0,0.9096,0.4144,0.0702,0.9074,0.4062,0.2095,0.8894,0.4113,0.1402,0.9006,0.3991,0.2778,0.8738,0.3899,0.3448,0.8538,0.3789,0.4102,0.8296,0.3659,0.4736,0.8011,0.351,0.5347,0.7686,0.3344,0.5933,0.7322,0.316,0.649,0.692,0.296,0.7015,0.6482,0.2745,0.7505,0.6011,0.2515,0.7958,0.5508,0.2272,0.8371,0.4975,0.2017,0.8742,0.4416,0.1751,0.9069,0.3833,0.1475,0.9348,0.323,0.1195,0.9577,0.2616,0.1554,0.9578,0.2418,0.092,0.9751,0.2015,0.1191,0.9754,0.1853,-0.0104,-0.9973,-0.0725,-0.0304,-0.9973,-0.0667,0.0104,-0.9973,-0.0725,-0.048,-0.9973,-0.0554,0.0304,-0.9973,-0.0667,-0.0616,-0.9973,-0.0396,0.048,-0.9973,-0.0554,-0.0703,-0.9973,-0.0206,0.0616,-0.9973,-0.0396,-0.0733,-0.9973,0,0.0703,-0.9973,-0.0206,-0.0703,-0.9973,0.0206,0.0733,-0.9973,0,-0.0616,-0.9973,0.0396,0.0703,-0.9973,0.0206,-0.048,-0.9973,0.0554,0.0616,-0.9973,0.0396,-0.0304,-0.9973,0.0667,-0.0407,-0.9895,0.1385,0.048,-0.9973,0.0554,-0.0217,-0.9883,0.151,-0.0315,-0.9751,0.2193,-0.0104,-0.9973,0.0725,-0.0409,-0.9577,0.2847,-0.0505,-0.9348,0.3515,-0.06,-0.9068,0.4171,-0.0691,-0.8742,0.4806,-0.0778,-0.8371,0.5414,-0.0862,-0.7958,0.5993,-0.094,-0.7505,0.6541,-0.1014,-0.7015,0.7054,-0.1083,-0.6489,0.753,-0.1145,-0.5933,0.7968,-0.1202,-0.5347,0.8364,-0.1253,-0.4736,0.8718,-0.1298,-0.4101,0.9027,-0.1336,-0.3448,0.9291,-0.1367,-0.2778,0.9508,-0.1391,-0.2095,0.9678,-0.1409,-0.1402,0.98,-0.1419,-0.0703,0.9874,-0.1423,0,0.9898,-0.1419,0.0703,0.9874,-0.1409,0.1402,0.98,-0.1391,0.2095,0.9678,-0.1367,0.2778,0.9508,-0.1336,0.3448,0.9291,-0.1298,0.4101,0.9027,-0.1253,0.4736,0.8718,-0.1202,0.5347,0.8364,-0.1145,0.5933,0.7968,-0.1083,0.6489,0.753,-0.1014,0.7015,0.7054,-0.094,0.7505,0.6541,-0.0862,0.7958,0.5994,-0.0778,0.8371,0.5414,-0.0691,0.8742,0.4805,-0.06,0.9069,0.4171,-0.0505,0.9348,0.3515,-0.0409,0.9577,0.2847,-0.0315,0.9751,0.2193,-0.0217,0.9883,-0.151,-0.0407,0.9895,-0.1385,-0.0634,0.9883,-0.1387,-0.078,0.9895,-0.1214,0.0217,0.9883,-0.151,0,0.9895,-0.1443,-0.0999,0.9883,-0.1153,-0.109,0.9895,-0.0945,0.0634,0.9883,-0.1387,0.0407,0.9895,-0.1385,-0.1283,0.9883,-0.0825,-0.1313,0.9895,-0.0599,0.0999,0.9883,-0.1153,0.078,0.9895,-0.1214,-0.1463,0.9883,-0.043,-0.1428,0.9895,-0.0205,0.1283,0.9883,-0.0825,0.109,0.9895,-0.0945,-0.1525,0.9883,0,-0.1428,0.9895,0.0205,0.1463,0.9883,-0.043,0.1313,0.9895,-0.0599,-0.1463,0.9883,0.043,-0.1313,0.9895,0.0599,0.1525,0.9883,0,0.1428,0.9895,-0.0205,-0.1283,0.9883,0.0825,-0.109,0.9895,0.0945,0.1463,0.9883,0.043,0.1428,0.9895,0.0205,-0.0999,0.9883,0.1153,-0.078,0.9895,0.1214,0.1283,0.9883,0.0825,0.1313,0.9895,0.0599,-0.0634,0.9883,0.1387,-0.0407,0.9895,0.1385,0.0999,0.9883,0.1153,0.109,0.9895,0.0945,-0.0217,0.9883,0.151,0.0304,-0.9973,0.0667,0.062,-0.9754,0.2113,0.0407,-0.9895,0.1385,0.081,-0.9578,0.2758,0.1,-0.9348,0.3407,0.1187,-0.9068,0.4043,0.1368,-0.8742,0.4658,0.1541,-0.8371,0.5248,0.1706,-0.7958,0.581,0.1862,-0.7505,0.6341,0.2008,-0.7015,0.6838,0.2143,-0.6489,0.73,0.2268,-0.5933,0.7724,0.238,-0.5347,0.8108,0.2481,-0.4736,0.8451,0.2569,-0.4101,0.8751,0.2644,-0.3448,0.9006,0.2706,-0.2778,0.9217,0.2755,-0.2095,0.9382,0.2789,-0.1402,0.95,0.281,-0.0703,0.9571,0.2817,0,0.9595,0.281,0.0703,0.9571,0.2789,0.1402,0.95,0.2755,0.2095,0.9382,0.2706,0.2778,0.9217,0.2644,0.3448,0.9006,0.2569,0.4101,0.8751,0.2481,0.4736,0.8451,0.238,0.5347,0.8108,0.2268,0.5933,0.7724,0.2143,0.6489,0.73,0.2008,0.7015,0.6838,0.1862,0.7505,0.6341,0.1706,0.7958,0.581,0.1541,0.8371,0.5248,0.1368,0.8742,0.4658,0.1187,0.9069,0.4043,0.1,0.9348,0.3407,0.081,0.9578,0.2758,0.0634,0.9883,0.1387,0.078,0.9895,0.1214,0.062,0.9754,0.2113,0,-1,0,0,-0.9754,0.2202,0,-0.9578,0.2875,0,-0.9895,0.1443,0,-0.9348,0.3551,0.0104,-0.9973,0.0725,0,-0.9068,0.4214,0,-0.8742,0.4855,0,-0.8371,0.547,0,-0.7958,0.6055,0,-0.7505,0.6608,0,-0.7015,0.7127,0,-0.6489,0.7608,0,-0.5933,0.805,0,-0.5347,0.845,0,-0.4736,0.8807,0,-0.4101,0.912,0,-0.3448,0.9387,0,-0.2778,0.9606,0,-0.2095,0.9778,0,-0.1402,0.9901,0,-0.0702,0.9975,0,0,1,0,0.0702,0.9975,0,0.1402,0.9901,0,0.2095,0.9778,0,0.2778,0.9606,0,0.3448,0.9387,0,0.4101,0.912,0,0.4736,0.8807,0,0.5347,0.845,0,0.5933,0.805,0,0.6489,0.7608,0,0.7015,0.7127,0,0.7505,0.6608,0,0.7958,0.6055,0,0.8371,0.547,0,0.8742,0.4855,0,0.9069,0.4214,0,0.9348,0.3551,0,0.9578,0.2875,0,0.9754,0.2203,0,0.9895,0.1443,-0.0304,0.9973,-0.0667,-0.0104,0.9973,-0.0725,0.0104,0.9973,-0.0725,-0.048,0.9973,-0.0554,0.0304,0.9973,-0.0667,-0.0616,0.9973,-0.0396,0.048,0.9973,-0.0554,-0.0703,0.9973,-0.0206,0.0616,0.9973,-0.0396,-0.0733,0.9973,0,0.0703,0.9973,-0.0206,-0.0703,0.9973,0.0206,0.0733,0.9973,0,-0.0616,0.9973,0.0396,0.0703,0.9973,0.0206,-0.048,0.9973,0.0554,0.0616,0.9973,0.0396,-0.0304,0.9973,0.0667,0.048,0.9973,0.0554,-0.0104,0.9973,0.0725,0.0304,0.9973,0.0667,0.0217,-0.9883,0.151,0.0315,-0.9751,0.2193,0.0409,-0.9577,0.2847,0.0505,-0.9348,0.3515,0.06,-0.9068,0.4171,0.0691,-0.8742,0.4806,0.0778,-0.8371,0.5414,0.0862,-0.7958,0.5993,0.094,-0.7505,0.6541,0.1014,-0.7015,0.7054,0.1083,-0.6489,0.753,0.1145,-0.5933,0.7968,0.1202,-0.5347,0.8364,0.1253,-0.4736,0.8718,0.1298,-0.4101,0.9027,0.1336,-0.3448,0.9291,0.1367,-0.2778,0.9508,0.1391,-0.2095,0.9678,0.1409,-0.1402,0.98,0.1419,-0.0703,0.9874,0.1423,0,0.9898,0.1419,0.0703,0.9874,0.1409,0.1402,0.98,0.1391,0.2095,0.9678,0.1367,0.2778,0.9508,0.1336,0.3448,0.9291,0.1298,0.4101,0.9027,0.1253,0.4736,0.8718,0.1202,0.5347,0.8364,0.1145,0.5933,0.7968,0.1083,0.6489,0.753,0.1014,0.7015,0.7054,0.094,0.7505,0.6541,0.0862,0.7958,0.5994,0.0778,0.8371,0.5414,0.0691,0.8742,0.4805,0.06,0.9069,0.4171,0.0505,0.9348,0.3515,0.0409,0.9577,0.2847,0.0315,0.9751,0.2193,0.0217,0.9883,0.151,0.0407,0.9895,0.1385,0.0104,0.9973,0.0725,0,1,0
            ]).buffer, webgl.STATIC_DRAW);

            const uvs_buff_vcahwttk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, n_buff_vcahwttk);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                0.227273,0.477273,0.25,0.5,0.25,0.477273,0.227273,0.454545,0.204545,0.477273,0.204545,0.5,0.227273,0.5,0.227273,0.522727,0.272727,0.454545,0.272727,0.477273,0.272727,0.5,0.272727,0.522727,0.227273,0.431818,0.204545,0.454545,0.181818,0.431818,0.181818,0.454545,0.181818,0.5,0.25,0.454545,0.25,0.431818,0.204545,0.522727,0.227273,0.545455,0.181818,0.545455,0.181818,0.522727,0.25,0.522727,0.272727,0.431818,0.295455,0.454545,0.295455,0.431818,0.295455,0.477273,0.295455,0.5,0.272727,0.545455,0.295455,0.522727,0.227273,0.409091,0.204545,0.431818,0.181818,0.409091,0.25,0.409091,0.159091,0.431818,0.159091,0.454545,0.181818,0.477273,0.159091,0.477273,0.159091,0.5,0.272727,0.409091,0.159091,0.545455,0.159091,0.522727,0.227273,0.568182,0.204545,0.545455,0.204545,0.568182,0.181818,0.568182,0.25,0.545455,0.159091,0.568182,0.272727,0.568182,0.25,0.568182,0.318182,0.409091,0.318182,0.431818,0.318182,0.454545,0.318182,0.477273,0.318182,0.5,0.318182,0.545455,0.295455,0.545455,0.318182,0.568182,0.227273,0.386364,0.204545,0.409091,0.181818,0.386364,0.204545,0.386364,0.25,0.386364,0.159091,0.409091,0.272727,0.386364,0.136364,0.386364,0.136364,0.409091,0.136364,0.431818,0.136364,0.454545,0.136364,0.5,0.136364,0.545455,0.136364,0.522727,0.295455,0.409091,0.136364,0.568182,0.227273,0.590909,0.204545,0.590909,0.181818,0.590909,0.272727,0.590909,0.136364,0.590909,0.295455,0.568182,0.318182,0.386364,0.340909,0.409091,0.340909,0.386364,0.340909,0.431818,0.340909,0.454545,0.340909,0.477273,0.340909,0.5,0.318182,0.522727,0.340909,0.522727,0.340909,0.545455,0.318182,0.590909,0.295455,0.590909,0.340909,0.568182,0.227273,0.363636,0.181818,0.363636,0.204545,0.363636,0.159091,0.386364,0.272727,0.363636,0.136364,0.363636,0.295455,0.386364,0.113636,0.386364,0.113636,0.409091,0.113636,0.431818,0.113636,0.454545,0.113636,0.477273,0.136364,0.477273,0.113636,0.522727,0.113636,0.5,0.113636,0.545455,0.318182,0.363636,0.113636,0.568182,0.227273,0.613636,0.181818,0.613636,0.25,0.590909,0.159091,0.590909,0.159091,0.613636,0.272727,0.613636,0.25,0.613636,0.136364,0.613636,0.113636,0.590909,0.318182,0.613636,0.340909,0.363636,0.363636,0.363636,0.363636,0.386364,0.363636,0.409091,0.363636,0.431818,0.363636,0.454545,0.363636,0.477273,0.363636,0.5,0.363636,0.522727,0.363636,0.545455,0.363636,0.568182,0.363636,0.590909,0.340909,0.590909,0.363636,0.613636,0.227273,0.340909,0.181818,0.340909,0.204545,0.340909,0.25,0.363636,0.25,0.340909,0.159091,0.363636,0.272727,0.340909,0.136364,0.340909,0.159091,0.340909,0.295455,0.363636,0.295455,0.340909,0.113636,0.363636,0.318182,0.340909,0.090909,0.340909,0.090909,0.363636,0.090909,0.386364,0.090909,0.409091,0.090909,0.431818,0.090909,0.454545,0.090909,0.477273,0.090909,0.522727,0.090909,0.5,0.090909,0.545455,0.090909,0.568182,0.090909,0.590909,0.090909,0.613636,0.227273,0.636364,0.204545,0.613636,0.204545,0.636364,0.181818,0.636364,0.159091,0.636364,0.272727,0.636364,0.136364,0.636364,0.295455,0.613636,0.113636,0.613636,0.318182,0.636364,0.295455,0.636364,0.090909,0.636364,0.340909,0.613636,0.363636,0.340909,0.386364,0.363636,0.386364,0.386364,0.386364,0.409091,0.386364,0.431818,0.386364,0.454545,0.386364,0.477273,0.386364,0.5,0.386364,0.522727,0.386364,0.545455,0.386364,0.568182,0.386364,0.590909,0.363636,0.636364,0.340909,0.636364,0.386364,0.613636,0.227273,0.318182,0.181818,0.318182,0.272727,0.318182,0.136364,0.318182,0.159091,0.318182,0.113636,0.340909,0.318182,0.318182,0.090909,0.318182,0.340909,0.340909,0.340909,0.318182,0.068182,0.340909,0.068182,0.363636,0.068182,0.386364,0.068182,0.409091,0.068182,0.431818,0.068182,0.454545,0.068182,0.477273,0.068182,0.5,0.068182,0.522727,0.068182,0.545455,0.068182,0.568182,0.068182,0.590909,0.363636,0.318182,0.068182,0.613636,0.068182,0.636364,0.227273,0.659091,0.181818,0.659091,0.25,0.636364,0.272727,0.659091,0.136364,0.659091,0.113636,0.636364,0.113636,0.659091,0.318182,0.659091,0.090909,0.659091,0.363636,0.659091,0.386364,0.340909,0.386364,0.318182,0.409091,0.318182,0.409091,0.340909,0.409091,0.363636,0.409091,0.386364,0.409091,0.409091,0.409091,0.431818,0.409091,0.454545,0.409091,0.477273,0.409091,0.5,0.409091,0.522727,0.409091,0.545455,0.409091,0.568182,0.409091,0.590909,0.409091,0.613636,0.409091,0.636364,0.386364,0.636364,0.409091,0.659091,0.386364,0.659091,0.227273,0.295455,0.204545,0.318182,0.181818,0.295455,0.204545,0.295455,0.25,0.318182,0.25,0.295455,0.272727,0.295455,0.136364,0.295455,0.295455,0.318182,0.295455,0.295455,0.113636,0.318182,0.318182,0.295455,0.090909,0.295455,0.113636,0.295455,0.068182,0.318182,0.363636,0.295455,0.045454,0.295455,0.068182,0.295455,0.045454,0.318182,0.045454,0.340909,0.045454,0.363636,0.045454,0.386364,0.045454,0.409091,0.045454,0.431818,0.045454,0.454545,0.045454,0.477273,0.045454,0.522727,0.045454,0.5,0.045454,0.545455,0.045454,0.568182,0.045454,0.590909,0.045454,0.613636,0.045454,0.636364,0.045454,0.659091,0.204545,0.659091,0.227273,0.681818,0.181818,0.681818,0.25,0.659091,0.159091,0.659091,0.272727,0.681818,0.25,0.681818,0.136364,0.681818,0.295455,0.659091,0.318182,0.681818,0.090909,0.681818,0.340909,0.659091,0.068182,0.659091,0.363636,0.681818,0.045454,0.681818,0.409091,0.295455,0.431818,0.318182,0.431818,0.295455,0.431818,0.340909,0.431818,0.363636,0.431818,0.386364,0.431818,0.409091,0.431818,0.431818,0.431818,0.454545,0.431818,0.477273,0.431818,0.5,0.431818,0.522727,0.431818,0.545455,0.431818,0.568182,0.431818,0.590909,0.431818,0.613636,0.431818,0.636364,0.409091,0.681818,0.386364,0.681818,0.431818,0.659091,0.227273,0.272727,0.181818,0.272727,0.159091,0.295455,0.272727,0.272727,0.136364,0.272727,0.318182,0.272727,0.090909,0.272727,0.113636,0.272727,0.340909,0.295455,0.363636,0.272727,0.045454,0.272727,0.386364,0.295455,0.386364,0.272727,0.022727,0.295455,0.022727,0.318182,0.022727,0.340909,0.022727,0.363636,0.022727,0.386364,0.022727,0.409091,0.022727,0.431818,0.022727,0.454545,0.022727,0.477273,0.022727,0.5,0.022727,0.522727,0.022727,0.545455,0.022727,0.568182,0.022727,0.590909,0.022727,0.613636,0.022727,0.636364,0.409091,0.272727,0.022727,0.659091,0.022727,0.681818,0.227273,0.704545,0.204545,0.681818,0.204545,0.704545,0.181818,0.704545,0.159091,0.681818,0.159091,0.704545,0.272727,0.704545,0.25,0.704545,0.136364,0.704545,0.295455,0.681818,0.113636,0.681818,0.318182,0.704545,0.295455,0.704545,0.090909,0.704545,0.340909,0.681818,0.068182,0.681818,0.068182,0.704545,0.363636,0.704545,0.340909,0.704545,0.045454,0.704545,0.022727,0.704545,0.409091,0.704545,0.431818,0.272727,0.454545,0.272727,0.454545,0.295455,0.454545,0.318182,0.454545,0.340909,0.454545,0.363636,0.454545,0.386364,0.454545,0.409091,0.454545,0.431818,0.454545,0.454545,0.454545,0.477273,0.454545,0.5,0.454545,0.522727,0.454545,0.545455,0.454545,0.568182,0.454545,0.590909,0.454545,0.613636,0.454545,0.636364,0.454545,0.659091,0.454545,0.681818,0.431818,0.681818,0.454545,0.704545,0.431818,0.704545,0.227273,0.25,0.204545,0.272727,0.181818,0.25,0.204545,0.25,0.25,0.272727,0.25,0.25,0.159091,0.272727,0.272727,0.25,0.136364,0.25,0.295455,0.272727,0.318182,0.25,0.090909,0.25,0.340909,0.272727,0.340909,0.25,0.068182,0.272727,0.363636,0.25,0.045454,0.25,0.022727,0.272727,0.409091,0.25,0,0.25,0.022727,0.25,0,0.272727,0,0.295455,0,0.318182,0,0.340909,0,0.363636,0,0.386364,0,0.409091,0,0.431818,0,0.454545,0,0.477273,0,0.522727,0,0.5,0,0.545455,0,0.568182,0,0.590909,0,0.613636,0,0.636364,0,0.659091,0,0.681818,0.431818,0.25,0,0.704545,0.227273,0.727273,0.181818,0.727273,0.159091,0.727273,0.272727,0.727273,0.25,0.727273,0.136364,0.727273,0.113636,0.704545,0.318182,0.727273,0.090909,0.727273,0.068182,0.727273,0.363636,0.727273,0.340909,0.727273,0.045454,0.727273,0.386364,0.704545,0.409091,0.727273,0,0.727273,0.454545,0.25,0.477273,0.272727,0.477273,0.25,0.477273,0.295455,0.477273,0.318182,0.477273,0.340909,0.477273,0.363636,0.477273,0.386364,0.477273,0.409091,0.477273,0.431818,0.477273,0.454545,0.477273,0.477273,0.477273,0.5,0.477273,0.522727,0.477273,0.545455,0.477273,0.568182,0.477273,0.590909,0.477273,0.613636,0.477273,0.636364,0.477273,0.659091,0.477273,0.681818,0.454545,0.727273,0.431818,0.727273,0.477273,0.704545,0.227273,0.227273,0.181818,0.227273,0.25,0.227273,0.159091,0.25,0.272727,0.227273,0.136364,0.227273,0.159091,0.227273,0.295455,0.25,0.295455,0.227273,0.113636,0.25,0.318182,0.227273,0.090909,0.227273,0.113636,0.227273,0.340909,0.227273,0.068182,0.25,0.363636,0.227273,0.045454,0.227273,0.386364,0.25,0.386364,0.227273,0.409091,0.227273,0,0.227273,1,0.227273,0.977273,0.25,1,0.25,0.977273,0.272727,1,0.272727,0.977273,0.295455,1,0.295455,0.977273,0.318182,1,0.318182,0.977273,0.340909,1,0.340909,0.977273,0.363636,1,0.363636,0.977273,0.386364,1,0.386364,0.977273,0.409091,1,0.409091,0.977273,0.431818,1,0.431818,0.977273,0.454545,1,0.454545,0.977273,0.477273,1,0.477273,0.977273,0.5,1,0.5,1,0.522727,0.977273,0.522727,1,0.545455,0.977273,0.545455,1,0.568182,1,0.590909,0.977273,0.568182,0.977273,0.590909,1,0.613636,1,0.636364,0.977273,0.613636,0.977273,0.636364,1,0.659091,1,0.681818,0.977273,0.659091,0.977273,0.681818,1,0.704545,0.454545,0.227273,0.977273,0.704545,1,0.727273,0.204545,0.727273,0.227273,0.75,0.181818,0.75,0.159091,0.75,0.272727,0.75,0.136364,0.75,0.295455,0.727273,0.113636,0.727273,0.318182,0.75,0.295455,0.75,0.090909,0.75,0.068182,0.75,0.363636,0.75,0.045454,0.75,0.386364,0.727273,0.022727,0.727273,0.409091,0.75,0,0.75,0.977273,0.727273,1,0.75,0.454545,0.75,0.477273,0.227273,0.5,0.227273,0.5,0.25,0.5,0.272727,0.5,0.295455,0.5,0.318182,0.5,0.340909,0.5,0.363636,0.5,0.386364,0.5,0.409091,0.5,0.431818,0.5,0.454545,0.5,0.477273,0.5,0.5,0.5,0.522727,0.5,0.545455,0.5,0.568182,0.5,0.590909,0.5,0.613636,0.5,0.636364,0.5,0.659091,0.5,0.681818,0.5,0.704545,0.5,0.727273,0.477273,0.727273,0.5,0.75,0.227273,0.204545,0.204545,0.227273,0.181818,0.204545,0.204545,0.204545,0.272727,0.204545,0.136364,0.204545,0.159091,0.204545,0.318182,0.204545,0.090909,0.204545,0.340909,0.204545,0.068182,0.227273,0.363636,0.204545,0.045454,0.204545,0.068182,0.204545,0.386364,0.204545,0.022727,0.227273,0.409091,0.204545,0,0.204545,0.022727,0.204545,0.431818,0.227273,0.431818,0.204545,1,0.204545,0.977273,0.227273,0.454545,0.204545,0.954545,0.204545,0.977273,0.204545,0.954545,0.227273,0.954545,0.25,0.954545,0.272727,0.954545,0.295455,0.954545,0.318182,0.954545,0.340909,0.954545,0.363636,0.954545,0.386364,0.954545,0.409091,0.954545,0.431818,0.954545,0.454545,0.954545,0.477273,0.954545,0.5,0.954545,0.545455,0.954545,0.522727,0.954545,0.568182,0.954545,0.590909,0.954545,0.613636,0.954545,0.636364,0.954545,0.659091,0.954545,0.681818,0.954545,0.704545,0.954545,0.727273,0.954545,0.75,0.227273,0.772727,0.204545,0.75,0.204545,0.772727,0.181818,0.772727,0.25,0.75,0.272727,0.772727,0.25,0.772727,0.136364,0.772727,0.113636,0.75,0.318182,0.772727,0.090909,0.772727,0.340909,0.75,0.363636,0.772727,0.045454,0.772727,0.386364,0.75,0.022727,0.75,0.409091,0.772727,0.386364,0.772727,0,0.772727,0.431818,0.75,0.977273,0.75,1,0.772727,0.454545,0.772727,0.954545,0.772727,0.477273,0.75,0.5,0.204545,0.522727,0.227273,0.522727,0.204545,0.522727,0.25,0.522727,0.272727,0.522727,0.295455,0.522727,0.318182,0.522727,0.340909,0.522727,0.363636,0.522727,0.386364,0.522727,0.409091,0.522727,0.431818,0.522727,0.454545,0.522727,0.477273,0.522727,0.5,0.522727,0.522727,0.522727,0.545455,0.522727,0.568182,0.522727,0.590909,0.522727,0.613636,0.522727,0.636364,0.522727,0.659091,0.522727,0.681818,0.522727,0.704545,0.522727,0.727273,0.5,0.772727,0.522727,0.75,0.227273,0.181818,0.181818,0.181818,0.204545,0.181818,0.25,0.204545,0.25,0.181818,0.272727,0.181818,0.136364,0.181818,0.159091,0.181818,0.295455,0.204545,0.113636,0.204545,0.318182,0.181818,0.090909,0.181818,0.363636,0.181818,0.045454,0.181818,0.386364,0.181818,0.409091,0.181818,0,0.181818,0.022727,0.181818,1,0.181818,0.454545,0.181818,0.954545,0.181818,0.977273,0.181818,0.477273,0.204545,0.477273,0.181818,0.931818,0.204545,0.931818,0.227273,0.931818,0.25,0.931818,0.272727,0.931818,0.295455,0.931818,0.318182,0.931818,0.340909,0.931818,0.363636,0.931818,0.386364,0.931818,0.409091,0.931818,0.431818,0.931818,0.454545,0.931818,0.477273,0.931818,0.5,0.931818,0.522727,0.931818,0.545455,0.931818,0.568182,0.931818,0.590909,0.931818,0.613636,0.931818,0.636364,0.931818,0.659091,0.931818,0.681818,0.931818,0.704545,0.931818,0.727273,0.931818,0.75,0.5,0.181818,0.227273,0.795455,0.181818,0.795455,0.159091,0.772727,0.159091,0.795455,0.272727,0.795455,0.136364,0.795455,0.295455,0.772727,0.113636,0.772727,0.113636,0.795455,0.318182,0.795455,0.090909,0.795455,0.340909,0.772727,0.068182,0.772727,0.363636,0.795455,0.340909,0.795455,0.045454,0.795455,0.022727,0.772727,0.022727,0.795455,0.409091,0.795455,0.386364,0.795455,0,0.795455,0.431818,0.772727,0.977273,0.772727,1,0.795455,0.454545,0.795455,0.954545,0.795455,0.477273,0.772727,0.931818,0.772727,0.931818,0.795455,0.5,0.795455,0.545455,0.181818,0.545455,0.204545,0.545455,0.227273,0.545455,0.25,0.545455,0.272727,0.545455,0.295455,0.545455,0.318182,0.545455,0.340909,0.545455,0.363636,0.545455,0.386364,0.545455,0.409091,0.545455,0.431818,0.545455,0.454545,0.545455,0.477273,0.545455,0.5,0.545455,0.522727,0.545455,0.545455,0.545455,0.568182,0.545455,0.590909,0.545455,0.613636,0.545455,0.636364,0.545455,0.659091,0.545455,0.681818,0.545455,0.704545,0.545455,0.727273,0.545455,0.75,0.545455,0.772727,0.522727,0.772727,0.545455,0.795455,0.522727,0.795455,0.227273,0.159091,0.181818,0.159091,0.204545,0.159091,0.272727,0.159091,0.136364,0.159091,0.295455,0.181818,0.295455,0.159091,0.113636,0.181818,0.318182,0.159091,0.090909,0.159091,0.113636,0.159091,0.340909,0.181818,0.068182,0.181818,0.363636,0.159091,0.045454,0.159091,0.068182,0.159091,0.409091,0.159091,0,0.159091,0.431818,0.181818,0.431818,0.159091,1,0.159091,0.454545,0.159091,0.954545,0.159091,0.477273,0.159091,0.931818,0.181818,0.5,0.159091,0.909091,0.159091,0.931818,0.159091,0.909091,0.181818,0.909091,0.204545,0.909091,0.227273,0.909091,0.25,0.909091,0.272727,0.909091,0.295455,0.909091,0.318182,0.909091,0.340909,0.909091,0.363636,0.909091,0.386364,0.909091,0.409091,0.909091,0.431818,0.909091,0.454545,0.909091,0.477273,0.909091,0.522727,0.909091,0.5,0.909091,0.545455,0.909091,0.568182,0.909091,0.590909,0.909091,0.613636,0.909091,0.636364,0.909091,0.659091,0.909091,0.681818,0.909091,0.704545,0.909091,0.727273,0.909091,0.75,0.909091,0.772727,0.522727,0.181818,0.522727,0.159091,0.909091,0.795455,0.227273,0.818182,0.204545,0.795455,0.204545,0.818182,0.181818,0.818182,0.25,0.795455,0.272727,0.818182,0.136364,0.818182,0.295455,0.795455,0.113636,0.818182,0.318182,0.818182,0.090909,0.818182,0.068182,0.795455,0.363636,0.818182,0.045454,0.818182,0.409091,0.818182,0.386364,0.818182,0,0.818182,0.431818,0.795455,0.977273,0.795455,1,0.818182,0.454545,0.818182,0.431818,0.818182,0.954545,0.818182,0.477273,0.795455,0.931818,0.818182,0.5,0.818182,0.909091,0.818182,0.545455,0.159091,0.568182,0.181818,0.568182,0.204545,0.568182,0.227273,0.568182,0.25,0.568182,0.272727,0.568182,0.295455,0.568182,0.318182,0.568182,0.340909,0.568182,0.363636,0.568182,0.386364,0.568182,0.409091,0.568182,0.431818,0.568182,0.454545,0.568182,0.477273,0.568182,0.5,0.568182,0.522727,0.568182,0.545455,0.568182,0.568182,0.568182,0.590909,0.568182,0.613636,0.568182,0.636364,0.568182,0.659091,0.568182,0.681818,0.568182,0.704545,0.568182,0.727273,0.568182,0.75,0.568182,0.772727,0.545455,0.818182,0.522727,0.818182,0.568182,0.795455,0.227273,0.136364,0.181818,0.136364,0.204545,0.136364,0.25,0.159091,0.25,0.136364,0.159091,0.159091,0.272727,0.136364,0.136364,0.136364,0.159091,0.136364,0.318182,0.136364,0.090909,0.136364,0.113636,0.136364,0.340909,0.159091,0.340909,0.136364,0.363636,0.136364,0.045454,0.136364,0.068182,0.136364,0.386364,0.159091,0.022727,0.159091,0.409091,0.136364,0,0.136364,0.022727,0.136364,0.431818,0.136364,1,0.136364,0.977273,0.159091,0.454545,0.136364,0.954545,0.136364,0.977273,0.136364,0.5,0.136364,0.909091,0.136364,0.886364,0.159091,0.886364,0.181818,0.886364,0.204545,0.886364,0.227273,0.886364,0.25,0.886364,0.272727,0.886364,0.295455,0.886364,0.318182,0.886364,0.340909,0.886364,0.363636,0.886364,0.386364,0.886364,0.409091,0.886364,0.431818,0.886364,0.454545,0.886364,0.477273,0.886364,0.522727,0.886364,0.5,0.886364,0.545455,0.886364,0.568182,0.886364,0.590909,0.886364,0.613636,0.886364,0.636364,0.886364,0.659091,0.886364,0.681818,0.886364,0.704545,0.886364,0.727273,0.886364,0.75,0.886364,0.772727,0.886364,0.795455,0.545455,0.136364,0.227273,0.840909,0.204545,0.840909,0.181818,0.840909,0.25,0.818182,0.159091,0.818182,0.272727,0.840909,0.25,0.840909,0.136364,0.840909,0.295455,0.818182,0.318182,0.840909,0.090909,0.840909,0.340909,0.818182,0.068182,0.818182,0.068182,0.840909,0.363636,0.840909,0.045454,0.840909,0.022727,0.818182,0.409091,0.840909,0,0.840909,1,0.840909,0.977273,0.818182,0.977273,0.840909,0.454545,0.840909,0.431818,0.840909,0.954545,0.840909,0.477273,0.818182,0.5,0.840909,0.477273,0.840909,0.909091,0.840909,0.886364,0.818182,0.545455,0.840909,0.568182,0.159091,0.568182,0.136364,0.590909,0.136364,0.590909,0.159091,0.590909,0.181818,0.590909,0.204545,0.590909,0.227273,0.590909,0.25,0.590909,0.272727,0.590909,0.295455,0.590909,0.318182,0.590909,0.340909,0.590909,0.363636,0.590909,0.386364,0.590909,0.409091,0.590909,0.431818,0.590909,0.454545,0.590909,0.477273,0.590909,0.5,0.590909,0.522727,0.590909,0.545455,0.590909,0.568182,0.590909,0.590909,0.590909,0.613636,0.590909,0.636364,0.590909,0.659091,0.590909,0.681818,0.590909,0.704545,0.590909,0.727273,0.590909,0.75,0.590909,0.772727,0.590909,0.795455,0.590909,0.818182,0.568182,0.818182,0.590909,0.840909,0.568182,0.840909,0.227273,0.113636,0.181818,0.113636,0.25,0.113636,0.272727,0.113636,0.136364,0.113636,0.159091,0.113636,0.295455,0.136364,0.295455,0.113636,0.318182,0.113636,0.090909,0.113636,0.363636,0.113636,0.045454,0.113636,0.386364,0.136364,0.409091,0.113636,0,0.113636,0.022727,0.113636,1,0.113636,0.454545,0.113636,0.954545,0.113636,0.977273,0.113636,0.477273,0.136364,0.931818,0.136364,0.5,0.113636,0.909091,0.113636,0.522727,0.136364,0.522727,0.113636,0.886364,0.136364,0.545455,0.113636,0.863636,0.113636,0.886364,0.113636,0.863636,0.136364,0.863636,0.159091,0.863636,0.181818,0.863636,0.204545,0.863636,0.227273,0.863636,0.25,0.863636,0.272727,0.863636,0.295455,0.863636,0.318182,0.863636,0.340909,0.863636,0.363636,0.863636,0.386364,0.863636,0.409091,0.863636,0.431818,0.863636,0.454545,0.863636,0.477273,0.863636,0.522727,0.863636,0.5,0.863636,0.545455,0.863636,0.568182,0.863636,0.590909,0.863636,0.613636,0.863636,0.636364,0.863636,0.659091,0.863636,0.681818,0.863636,0.704545,0.863636,0.727273,0.863636,0.75,0.863636,0.772727,0.863636,0.795455,0.863636,0.818182,0.568182,0.113636,0.863636,0.840909,0.227273,0.863636,0.181818,0.863636,0.159091,0.840909,0.159091,0.863636,0.272727,0.863636,0.25,0.863636,0.136364,0.863636,0.295455,0.840909,0.113636,0.840909,0.113636,0.863636,0.318182,0.863636,0.090909,0.863636,0.340909,0.840909,0.068182,0.863636,0.363636,0.863636,0.340909,0.863636,0.045454,0.863636,0.386364,0.840909,0.022727,0.840909,0.022727,0.863636,0.409091,0.863636,0,0.863636,1,0.863636,0.454545,0.863636,0.954545,0.863636,0.931818,0.840909,0.5,0.863636,0.477273,0.863636,0.909091,0.863636,0.522727,0.840909,0.886364,0.840909,0.886364,0.863636,0.545455,0.863636,0.863636,0.863636,0.590909,0.113636,0.613636,0.136364,0.613636,0.113636,0.613636,0.159091,0.613636,0.181818,0.613636,0.204545,0.613636,0.227273,0.613636,0.25,0.613636,0.272727,0.613636,0.295455,0.613636,0.318182,0.613636,0.340909,0.613636,0.363636,0.613636,0.386364,0.613636,0.409091,0.613636,0.431818,0.613636,0.454545,0.613636,0.477273,0.613636,0.5,0.613636,0.522727,0.613636,0.545455,0.613636,0.568182,0.613636,0.590909,0.613636,0.613636,0.613636,0.636364,0.613636,0.659091,0.613636,0.681818,0.613636,0.704545,0.613636,0.727273,0.613636,0.75,0.613636,0.772727,0.613636,0.795455,0.613636,0.818182,0.590909,0.863636,0.613636,0.840909,0.227273,0.090909,0.204545,0.113636,0.181818,0.090909,0.204545,0.090909,0.25,0.090909,0.272727,0.090909,0.136364,0.090909,0.295455,0.090909,0.113636,0.113636,0.318182,0.090909,0.090909,0.090909,0.113636,0.090909,0.340909,0.113636,0.068182,0.113636,0.363636,0.090909,0.045454,0.090909,0.068182,0.090909,0.386364,0.113636,0.386364,0.090909,0.409091,0.090909,0,0.090909,0.022727,0.090909,0.431818,0.113636,1,0.090909,0.454545,0.090909,0.954545,0.090909,0.477273,0.113636,0.931818,0.113636,0.5,0.090909,0.909091,0.090909,0.931818,0.090909,0.522727,0.090909,0.545455,0.090909,0.863636,0.090909,0.568182,0.090909,0.840909,0.113636,0.840909,0.136364,0.840909,0.159091,0.840909,0.181818,0.840909,0.204545,0.840909,0.227273,0.840909,0.25,0.840909,0.272727,0.840909,0.295455,0.840909,0.318182,0.840909,0.340909,0.840909,0.363636,0.840909,0.386364,0.840909,0.409091,0.840909,0.431818,0.840909,0.454545,0.840909,0.477273,0.840909,0.5,0.840909,0.522727,0.840909,0.545455,0.840909,0.568182,0.840909,0.590909,0.840909,0.613636,0.840909,0.636364,0.840909,0.659091,0.840909,0.681818,0.840909,0.704545,0.840909,0.727273,0.840909,0.75,0.840909,0.772727,0.840909,0.795455,0.840909,0.818182,0.590909,0.090909,0.840909,0.840909,0.227273,0.886364,0.204545,0.863636,0.204545,0.886364,0.181818,0.886364,0.272727,0.886364,0.136364,0.886364,0.295455,0.863636,0.318182,0.886364,0.295455,0.886364,0.090909,0.886364,0.363636,0.886364,0.340909,0.886364,0.045454,0.886364,0.386364,0.863636,0.022727,0.886364,0.409091,0.886364,0,0.886364,0.431818,0.863636,1,0.886364,0.977273,0.863636,0.977273,0.886364,0.454545,0.886364,0.954545,0.886364,0.931818,0.863636,0.931818,0.886364,0.5,0.886364,0.477273,0.886364,0.909091,0.886364,0.522727,0.863636,0.545455,0.886364,0.522727,0.886364,0.863636,0.886364,0.568182,0.863636,0.840909,0.863636,0.590909,0.886364,0.568182,0.886364,0.636364,0.090909,0.636364,0.113636,0.636364,0.136364,0.636364,0.159091,0.636364,0.181818,0.636364,0.204545,0.636364,0.227273,0.636364,0.25,0.636364,0.272727,0.636364,0.295455,0.636364,0.318182,0.636364,0.340909,0.636364,0.363636,0.636364,0.386364,0.636364,0.409091,0.636364,0.431818,0.636364,0.454545,0.636364,0.477273,0.636364,0.5,0.636364,0.545455,0.636364,0.522727,0.636364,0.568182,0.636364,0.590909,0.636364,0.613636,0.636364,0.636364,0.636364,0.659091,0.636364,0.681818,0.636364,0.704545,0.636364,0.727273,0.636364,0.75,0.636364,0.772727,0.636364,0.795455,0.636364,0.818182,0.636364,0.840909,0.636364,0.863636,0.613636,0.863636,0.636364,0.886364,0.227273,0.068182,0.181818,0.068182,0.204545,0.068182,0.25,0.068182,0.159091,0.090909,0.272727,0.068182,0.136364,0.068182,0.159091,0.068182,0.295455,0.068182,0.318182,0.068182,0.090909,0.068182,0.113636,0.068182,0.340909,0.090909,0.340909,0.068182,0.363636,0.068182,0.045454,0.068182,0.068182,0.068182,0.386364,0.068182,0.409091,0.068182,0,0.068182,0.022727,0.068182,0.431818,0.090909,0.431818,0.068182,1,0.068182,0.977273,0.090909,0.454545,0.068182,0.954545,0.068182,0.977273,0.068182,0.477273,0.090909,0.477273,0.068182,0.5,0.068182,0.909091,0.068182,0.931818,0.068182,0.522727,0.068182,0.886364,0.090909,0.545455,0.068182,0.863636,0.068182,0.886364,0.068182,0.568182,0.068182,0.840909,0.090909,0.590909,0.068182,0.818182,0.068182,0.840909,0.068182,0.818182,0.090909,0.818182,0.113636,0.818182,0.136364,0.818182,0.159091,0.818182,0.181818,0.818182,0.204545,0.818182,0.227273,0.818182,0.25,0.818182,0.272727,0.818182,0.295455,0.818182,0.318182,0.818182,0.340909,0.818182,0.363636,0.818182,0.386364,0.818182,0.409091,0.818182,0.431818,0.818182,0.454545,0.818182,0.477273,0.818182,0.5,0.818182,0.522727,0.818182,0.545455,0.818182,0.568182,0.818182,0.590909,0.818182,0.613636,0.818182,0.636364,0.818182,0.659091,0.818182,0.681818,0.818182,0.704545,0.818182,0.727273,0.818182,0.75,0.818182,0.772727,0.818182,0.795455,0.818182,0.818182,0.818182,0.840909,0.818182,0.863636,0.613636,0.090909,0.613636,0.068182,0.818182,0.886364,0.227273,0.909091,0.204545,0.909091,0.181818,0.909091,0.25,0.886364,0.159091,0.886364,0.272727,0.909091,0.136364,0.909091,0.113636,0.886364,0.318182,0.909091,0.295455,0.909091,0.090909,0.909091,0.068182,0.886364,0.363636,0.909091,0.045454,0.909091,0.386364,0.886364,0.409091,0.909091,0.386364,0.909091,0,0.909091,0.431818,0.886364,1,0.909091,0.977273,0.909091,0.454545,0.909091,0.954545,0.909091,0.931818,0.909091,0.5,0.909091,0.909091,0.909091,0.886364,0.886364,0.545455,0.909091,0.863636,0.909091,0.840909,0.886364,0.840909,0.909091,0.590909,0.909091,0.818182,0.909091,0.613636,0.886364,0.636364,0.068182,0.659091,0.090909,0.659091,0.068182,0.659091,0.113636,0.659091,0.136364,0.659091,0.159091,0.659091,0.181818,0.659091,0.204545,0.659091,0.227273,0.659091,0.25,0.659091,0.272727,0.659091,0.295455,0.659091,0.318182,0.659091,0.340909,0.659091,0.363636,0.659091,0.386364,0.659091,0.409091,0.659091,0.431818,0.659091,0.454545,0.659091,0.477273,0.659091,0.5,0.659091,0.522727,0.659091,0.545455,0.659091,0.568182,0.659091,0.590909,0.659091,0.613636,0.659091,0.636364,0.659091,0.659091,0.659091,0.681818,0.659091,0.704545,0.659091,0.727273,0.659091,0.75,0.659091,0.772727,0.659091,0.795455,0.659091,0.818182,0.659091,0.840909,0.659091,0.863636,0.636364,0.909091,0.659091,0.886364,0.227273,0.045455,0.181818,0.045455,0.204545,0.045455,0.25,0.045455,0.272727,0.045455,0.136364,0.045455,0.159091,0.045455,0.295455,0.045455,0.318182,0.045455,0.090909,0.045455,0.113636,0.045455,0.340909,0.045455,0.363636,0.045455,0.045454,0.045455,0.068182,0.045455,0.386364,0.045455,0.409091,0.045455,0,0.045455,0.022727,0.045455,0.431818,0.045455,1,0.045455,0.454545,0.045455,0.954545,0.045455,0.977273,0.045455,0.477273,0.045455,0.5,0.045455,0.909091,0.045455,0.931818,0.045455,0.522727,0.045455,0.545455,0.045455,0.863636,0.045455,0.886364,0.045455,0.568182,0.045455,0.590909,0.045455,0.818182,0.045455,0.840909,0.045455,0.613636,0.045455,0.795455,0.068182,0.795455,0.090909,0.795455,0.113636,0.795455,0.136364,0.795455,0.159091,0.795455,0.181818,0.795455,0.204545,0.795455,0.227273,0.795455,0.25,0.795455,0.272727,0.795455,0.295455,0.795455,0.318182,0.795455,0.340909,0.795455,0.363636,0.795455,0.386364,0.795455,0.409091,0.795455,0.431818,0.795455,0.454545,0.795455,0.477273,0.795455,0.5,0.795455,0.522727,0.795455,0.545455,0.795455,0.568182,0.795455,0.590909,0.795455,0.613636,0.795455,0.636364,0.795455,0.659091,0.795455,0.681818,0.795455,0.704545,0.795455,0.727273,0.795455,0.75,0.795455,0.772727,0.795455,0.795455,0.795455,0.818182,0.795455,0.840909,0.795455,0.863636,0.636364,0.045455,0.795455,0.886364,0.795455,0.909091,0.227273,0.931818,0.204545,0.931818,0.181818,0.931818,0.25,0.909091,0.159091,0.909091,0.159091,0.931818,0.272727,0.931818,0.25,0.931818,0.136364,0.931818,0.113636,0.909091,0.113636,0.931818,0.318182,0.931818,0.295455,0.931818,0.090909,0.931818,0.340909,0.909091,0.068182,0.909091,0.068182,0.931818,0.363636,0.931818,0.340909,0.931818,0.045454,0.931818,0.022727,0.909091,0.022727,0.931818,0.409091,0.931818,0.386364,0.931818,0,0.931818,0.431818,0.909091,1,0.931818,0.977273,0.931818,0.454545,0.931818,0.431818,0.931818,0.954545,0.931818,0.477273,0.909091,0.931818,0.931818,0.5,0.931818,0.477273,0.931818,0.909091,0.931818,0.522727,0.909091,0.886364,0.909091,0.886364,0.931818,0.545455,0.931818,0.522727,0.931818,0.863636,0.931818,0.568182,0.909091,0.840909,0.931818,0.590909,0.931818,0.568182,0.931818,0.818182,0.931818,0.613636,0.909091,0.795455,0.931818,0.636364,0.931818,0.613636,0.931818,0.659091,0.045455,0.681818,0.045455,0.681818,0.068182,0.681818,0.090909,0.681818,0.113636,0.681818,0.136364,0.681818,0.159091,0.681818,0.181818,0.681818,0.204545,0.681818,0.227273,0.681818,0.25,0.681818,0.272727,0.681818,0.295455,0.681818,0.318182,0.681818,0.340909,0.681818,0.363636,0.681818,0.386364,0.681818,0.409091,0.681818,0.431818,0.681818,0.454545,0.681818,0.477273,0.681818,0.5,0.681818,0.522727,0.681818,0.568182,0.681818,0.545455,0.681818,0.590909,0.681818,0.613636,0.681818,0.636364,0.681818,0.659091,0.681818,0.681818,0.681818,0.704545,0.681818,0.727273,0.681818,0.75,0.681818,0.772727,0.681818,0.795455,0.681818,0.818182,0.681818,0.840909,0.681818,0.863636,0.681818,0.886364,0.681818,0.909091,0.659091,0.909091,0.681818,0.931818,0.659091,0.931818,0.215909,0.022727,0.193182,0.022727,0.238636,0.022727,0.170455,0.022727,0.261364,0.022727,0.147727,0.022727,0.284091,0.022727,0.125,0.022727,0.306818,0.022727,0.102273,0.022727,0.329545,0.022727,0.079546,0.022727,0.352273,0.022727,0.056818,0.022727,0.375,0.022727,0.034091,0.022727,0.397727,0.022727,0.011364,0.022727,0.420455,0.022727,0.988636,0.022727,0.443182,0.022727,0.965909,0.022727,0.465909,0.022727,0.943182,0.022727,0.488636,0.022727,0.920455,0.022727,0.511364,0.022727,0.897727,0.022727,0.534091,0.022727,0.875,0.022727,0.556818,0.022727,0.852273,0.022727,0.579545,0.022727,0.829545,0.022727,0.602273,0.022727,0.806818,0.022727,0.795455,0.045455,0.625,0.022727,0.772727,0.045455,0.772727,0.068182,0.784091,0.022727,0.772727,0.090909,0.772727,0.113636,0.772727,0.136364,0.772727,0.159091,0.772727,0.181818,0.772727,0.204545,0.772727,0.227273,0.772727,0.25,0.772727,0.272727,0.772727,0.295455,0.772727,0.318182,0.772727,0.340909,0.772727,0.363636,0.772727,0.386364,0.772727,0.409091,0.772727,0.431818,0.772727,0.454545,0.772727,0.477273,0.772727,0.5,0.772727,0.522727,0.772727,0.545455,0.772727,0.568182,0.772727,0.590909,0.772727,0.613636,0.772727,0.636364,0.772727,0.659091,0.772727,0.681818,0.772727,0.704545,0.772727,0.727273,0.772727,0.75,0.772727,0.772727,0.772727,0.795455,0.772727,0.818182,0.772727,0.840909,0.772727,0.863636,0.772727,0.886364,0.772727,0.909091,0.647727,0.022727,0.772727,0.931818,0.227273,0.954545,0.204545,0.954545,0.181818,0.954545,0.159091,0.954545,0.272727,0.954545,0.25,0.954545,0.136364,0.954545,0.113636,0.954545,0.318182,0.954545,0.295455,0.954545,0.090909,0.954545,0.068182,0.954545,0.363636,0.954545,0.340909,0.954545,0.045454,0.954545,0.022727,0.954545,0.409091,0.954545,0.386364,0.954545,0,0.954545,1,0.954545,0.977273,0.954545,0.454545,0.954545,0.431818,0.954545,0.954545,0.954545,0.931818,0.954545,0.5,0.954545,0.477273,0.954545,0.909091,0.954545,0.886364,0.954545,0.545455,0.954545,0.522727,0.954545,0.863636,0.954545,0.840909,0.954545,0.590909,0.954545,0.568182,0.954545,0.818182,0.954545,0.795455,0.954545,0.636364,0.954545,0.613636,0.954545,0.772727,0.954545,0.670455,0.022727,0.704545,0.068182,0.704545,0.045455,0.704545,0.090909,0.693182,0.022727,0.704545,0.113636,0.704545,0.136364,0.704545,0.159091,0.704545,0.181818,0.704545,0.204545,0.704545,0.227273,0.704545,0.25,0.704545,0.272727,0.704545,0.295455,0.704545,0.318182,0.704545,0.340909,0.704545,0.363636,0.704545,0.386364,0.704545,0.409091,0.704545,0.431818,0.704545,0.454545,0.704545,0.477273,0.704545,0.5,0.704545,0.522727,0.704545,0.545455,0.704545,0.568182,0.704545,0.590909,0.704545,0.613636,0.704545,0.636364,0.704545,0.659091,0.704545,0.681818,0.704545,0.704545,0.704545,0.727273,0.704545,0.75,0.704545,0.772727,0.704545,0.795455,0.704545,0.818182,0.704545,0.840909,0.704545,0.863636,0.704545,0.886364,0.704545,0.909091,0.681818,0.954545,0.659091,0.954545,0.704545,0.931818,0.159091,0,0.204545,0,0.25,0,0.295455,0,0.113636,0,0.340909,0,0.068182,0,0.386364,0,0.022727,0,0.431818,0,0.977273,0,0.477273,0,0.931818,0,0.522727,0,0.886364,0,0.568182,0,0.840909,0,0.613636,0,0.795455,0,0.659091,0,0.75,0.068182,0.75,0.090909,0.761364,0.022727,0.75,0.045455,0.75,0.113636,0.75,0,0.738636,0.022727,0.75,0.136364,0.75,0.159091,0.75,0.181818,0.75,0.204545,0.75,0.227273,0.75,0.25,0.75,0.272727,0.75,0.295455,0.75,0.318182,0.75,0.340909,0.75,0.363636,0.75,0.386364,0.75,0.409091,0.75,0.431818,0.75,0.454545,0.75,0.477273,0.75,0.5,0.75,0.522727,0.75,0.545455,0.75,0.568182,0.75,0.590909,0.75,0.613636,0.75,0.636364,0.75,0.659091,0.75,0.681818,0.75,0.704545,0.75,0.727273,0.75,0.75,0.75,0.772727,0.75,0.795455,0.75,0.818182,0.75,0.840909,0.75,0.863636,0.75,0.886364,0.75,0.909091,0.75,0.931818,0.75,0.954545,0.193182,0.977273,0.215909,0.977273,0.238636,0.977273,0.170455,0.977273,0.261364,0.977273,0.147727,0.977273,0.284091,0.977273,0.125,0.977273,0.306818,0.977273,0.102273,0.977273,0.329545,0.977273,0.079546,0.977273,0.352273,0.977273,0.056818,0.977273,0.375,0.977273,0.034091,0.977273,0.397727,0.977273,0.011364,0.977273,0.420455,0.977273,0.988636,0.977273,0.443182,0.977273,0.965909,0.977273,0.465909,0.977273,0.943182,0.977273,0.488636,0.977273,0.920455,0.977273,0.511364,0.977273,0.897727,0.977273,0.534091,0.977273,0.875,0.977273,0.556818,0.977273,0.852273,0.977273,0.579545,0.977273,0.829545,0.977273,0.602273,0.977273,0.806818,0.977273,0.625,0.977273,0.784091,0.977273,0.647727,0.977273,0.761364,0.977273,0.670455,0.977273,0.715909,0.022727,0.704545,0,0.727273,0.045455,0.727273,0.068182,0.727273,0.090909,0.727273,0.113636,0.727273,0.136364,0.727273,0.159091,0.727273,0.181818,0.727273,0.204545,0.727273,0.227273,0.727273,0.25,0.727273,0.272727,0.727273,0.295455,0.727273,0.318182,0.727273,0.340909,0.727273,0.363636,0.727273,0.386364,0.727273,0.409091,0.727273,0.431818,0.727273,0.454545,0.727273,0.477273,0.727273,0.5,0.727273,0.522727,0.727273,0.545455,0.727273,0.568182,0.727273,0.590909,0.727273,0.613636,0.727273,0.636364,0.727273,0.659091,0.727273,0.681818,0.727273,0.704545,0.727273,0.727273,0.727273,0.75,0.727273,0.772727,0.727273,0.795455,0.727273,0.818182,0.727273,0.840909,0.727273,0.863636,0.727273,0.886364,0.727273,0.909091,0.727273,0.931818,0.727273,0.954545,0.704545,0.954545,0.693182,0.977273,0.715909,0.977273,0.738636,0.977273,0.159091,1,0.204545,1,0.25,1,0.295455,1,0.113636,1,0.340909,1,0.068182,1,0.386364,1,0.022727,1,0.431818,1,0.977273,1,0.477273,1,0.931818,1,0.522727,1,0.886364,1,0.568182,1,0.840909,1,0.613636,1,0.795455,1,0.659091,1,0.75,1,0.704545,1
            ]).buffer, webgl.STATIC_DRAW);

            const f_buff_vcahwttk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff_vcahwttk);
            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                1,3,0,4,6,1,1,7,2,7,9,2,10,0,12,0,4,1,12,3,13,3,15,13,9,3,2,16,5,4,5,18,19,19,6,5,6,21,7,16,11,22,21,8,7,8,25,9,26,8,23,25,14,9,28,11,10,28,30,29,10,31,30,32,12,13,15,32,13,14,34,15,34,33,15,36,17,16,17,38,18,36,22,39,38,41,18,18,42,19,20,42,43,20,44,21,44,23,21,46,22,28,47,23,45,49,24,48,50,24,26,49,27,25,50,47,52,53,27,51,29,46,28,55,29,56,56,30,57,57,31,58,31,59,58,33,59,32,61,33,35,53,35,34,35,63,61,64,37,36,66,37,65,64,39,67,66,40,38,69,39,46,40,70,71,41,71,72,72,42,41,73,43,42,43,75,44,75,45,44,77,45,76,54,69,46,79,47,77,81,48,80,82,48,50,81,51,49,52,82,50,51,85,53,86,52,79,85,62,53,88,54,55,88,90,89,55,91,90,92,56,57,57,93,92,58,94,93,60,94,59,61,95,60,63,96,61,98,62,87,98,97,63,100,65,64,102,65,101,67,100,64,102,68,66,105,67,69,68,106,70,78,105,69,106,109,70,70,110,71,71,111,72,72,112,73,73,113,74,113,75,74,115,75,114,115,77,76,116,79,77,118,78,88,117,86,79,80,121,81,122,80,82,121,83,81,122,84,124,125,83,123,126,84,86,125,87,85,119,126,86,87,129,98,118,89,130,132,89,131,131,90,133,133,91,134,134,92,135,135,93,136,136,94,137,94,138,137,139,95,96,140,96,97,141,97,99,129,99,98,99,143,141,144,101,100,146,101,145,144,103,147,146,104,102,149,103,105,150,104,148,149,107,151,150,108,106,153,107,118,108,154,155,155,109,108,156,110,109,157,111,110,112,158,159,159,113,112,160,114,113,162,114,161,163,115,162,164,116,163,165,117,164,130,153,118,167,119,165,169,120,168,170,120,122,169,123,121,170,124,172,123,173,125,174,124,126,173,127,125,128,174,126,177,127,175,178,128,167,177,142,129,180,130,132,181,180,132,132,183,181,131,184,183,185,133,134,134,186,185,135,187,186,187,137,188,137,189,188,139,189,138,140,190,139,141,191,140,143,192,141,194,142,179,194,193,143,196,145,144,145,198,146,147,196,144,198,148,146,201,147,149,202,148,200,151,201,149,202,152,150,205,151,153,152,206,154,205,166,207,206,209,154,154,210,155,155,211,156,156,212,157,157,213,158,158,214,159,159,215,160,160,216,161,216,162,161,217,163,162,218,164,163,165,219,220,220,167,165,222,166,180,178,221,223,168,225,169,226,168,170,225,171,169,172,226,170,171,229,173,230,172,174,229,175,173,230,176,232,175,233,177,234,176,178,233,179,177,223,234,178,179,237,194,222,182,238,239,182,240,240,181,241,241,183,242,242,184,243,243,185,244,244,186,245,245,187,246,246,188,247,188,248,247,189,249,248,190,250,249,251,191,192,192,252,251,193,253,252,237,195,194,255,195,254,256,197,196,258,197,257,256,199,259,258,200,198,261,199,201,200,262,202,261,203,263,262,204,202,265,203,205,266,204,264,207,265,205,266,208,206,269,207,222,270,208,268,271,209,208,210,272,273,273,211,210,212,274,275,275,213,212,214,276,277,277,215,214,278,216,215,280,216,279,281,217,280,282,218,281,283,219,282,284,220,283,285,221,284,238,269,222,287,223,285,224,289,225,290,224,226,289,227,225,228,290,226,293,227,291,294,228,230,293,231,229,232,294,230,231,297,233,298,232,234,297,235,233,236,298,234,235,301,237,302,236,287,301,254,237,304,238,239,304,306,305,239,307,306,308,240,241,241,309,308,310,242,243,243,311,310,312,244,245,245,313,312,246,314,313,248,314,247,249,315,248,250,316,249,251,317,250,252,318,251,253,319,252,255,320,253,322,254,303,322,321,255,324,257,256,257,326,258,259,324,256,326,260,258,329,259,261,260,330,262,263,329,261,330,264,262,333,263,265,334,264,332,267,333,265,334,268,266,337,267,269,268,338,270,337,286,339,338,341,270,270,342,271,271,343,272,272,344,273,273,345,274,274,346,275,275,347,276,276,348,277,277,349,278,279,349,350,351,279,350,351,281,280,352,282,281,283,353,354,354,284,283,285,355,356,356,287,285,358,286,304,302,357,359,361,288,360,362,288,290,361,291,289,362,292,364,365,291,363,366,292,294,365,295,293,296,366,294,369,295,367,370,296,298,369,299,297,370,300,372,373,299,371,374,300,302,373,303,301,374,359,376,303,377,322,358,305,378,379,305,380,380,306,381,381,307,382,382,308,383,383,309,384,384,310,385,385,311,386,386,312,387,387,313,388,388,314,389,314,390,389,315,391,390,392,316,317,317,393,392,318,394,393,395,319,320,320,396,395,397,321,323,377,323,322,399,323,398,400,325,324,402,325,401,400,327,403,402,328,326,405,327,329,328,406,330,331,405,329,406,332,330,409,331,333,332,410,334,409,335,411,410,336,334,413,335,337,336,414,338,339,413,337,414,340,338,417,339,358,418,340,416,419,341,340,342,420,421,421,343,342,344,422,423,423,345,344,346,424,425,425,347,346,426,348,347,349,427,428,428,350,349,430,350,429,431,351,430,432,352,431,433,353,432,434,354,433,435,355,434,436,356,435,437,357,436,417,378,438,439,359,437,360,441,361,442,360,362,441,363,361,442,364,444,445,363,443,446,364,366,445,367,365,368,446,366,367,449,369,450,368,370,449,371,369,450,372,452,453,371,451,454,372,374,453,375,373,376,454,374,375,457,377,458,376,439,457,398,377,460,378,379,460,462,461,463,379,380,464,380,381,381,465,464,466,382,383,383,467,466,384,468,467,469,385,386,386,470,469,471,387,388,471,389,472,389,473,472,391,473,390,392,474,391,393,475,392,394,476,393,395,477,394,396,478,395,397,479,396,399,480,397,482,398,459,482,481,399,484,401,400,401,486,402,484,403,487,486,404,402,489,403,405,490,404,488,489,407,491,490,408,406,493,407,409,494,408,492,493,411,495,494,412,410,497,411,413,412,498,414,497,415,499,498,416,414,501,415,417,416,502,418,438,501,417,502,505,418,418,506,419,419,507,420,420,508,421,421,509,422,422,510,423,423,511,424,424,512,425,425,513,426,426,514,427,427,515,428,428,516,429,516,430,429,517,431,430,518,432,431,433,519,520,520,434,433,435,521,522,522,436,435,437,523,524,524,439,437,526,438,460,525,458,439,440,529,441,530,440,442,529,443,441,530,444,532,443,533,445,534,444,446,533,447,445,448,534,446,537,447,535,538,448,450,537,451,449,538,452,540,451,541,453,542,452,454,541,455,453,456,542,454,455,545,457,546,456,458,545,459,457,527,546,458,459,549,482,526,461,550,551,461,552,552,462,553,553,463,554,554,464,555,555,465,556,556,466,557,557,467,558,558,468,559,559,469,560,560,470,561,561,471,562,562,472,563,472,564,563,473,565,564,474,566,565,567,475,476,476,568,567,569,477,478,478,570,569,479,571,570,572,480,481,573,481,483,549,483,482,483,575,573,576,485,484,578,485,577,487,576,484,578,488,486,581,487,489,582,488,580,491,581,489,582,492,490,585,491,493,492,586,494,585,495,587,586,496,494,589,495,497,590,496,588,589,499,591,590,500,498,593,499,501,594,500,592,593,503,595,594,504,502,597,503,526,598,504,596,599,505,504,506,600,601,507,601,602,602,508,507,603,509,508,510,604,605,605,511,510,606,512,511,513,607,608,608,514,513,515,609,610,515,611,516,611,517,516,613,517,612,614,518,613,615,519,614,616,520,615,617,521,616,618,522,617,619,523,618,620,524,619,621,525,620,550,597,526,623,527,621,625,528,624,626,528,530,625,531,529,532,626,530,629,531,627,630,532,534,629,535,533,536,630,534,535,633,537,634,536,538,633,539,537,540,634,538,539,637,541,638,540,542,637,543,541,544,638,542,641,543,639,642,544,546,641,547,545,548,642,546,547,645,549,646,548,623,645,574,549,648,550,551,648,650,649,551,651,650,652,552,553,553,653,652,554,654,653,655,555,556,556,656,655,657,557,558,658,558,559,559,659,658,560,660,659,661,561,562,562,662,661,564,662,563,565,663,564,566,664,565,567,665,566,568,666,567,569,667,568,570,668,569,571,669,570,572,670,571,573,671,572,575,672,573,574,674,575,674,673,575,676,577,576,678,577,677,676,579,679,678,580,578,681,579,581,682,580,680,583,681,581,682,584,582,685,583,585,584,686,586,587,685,585,686,588,586,689,587,589,588,690,590,689,591,691,690,592,590,693,591,593,694,592,692,595,693,593,694,596,594,697,595,597,698,596,696,697,622,699,698,701,598,598,702,599,599,703,600,600,704,601,601,705,602,602,706,603,603,707,604,604,708,605,605,709,606,606,710,607,607,711,608,608,712,609,609,713,610,610,714,611,714,612,611,715,613,612,614,716,717,717,615,614,718,616,615,719,617,616,618,720,721,721,619,618,620,722,723,723,621,620,623,724,725,726,622,648,725,646,623,624,729,625,730,624,626,729,627,625,730,628,732,627,733,629,734,628,630,733,631,629,734,632,736,631,737,633,738,632,634,737,635,633,636,738,634,741,635,739,742,636,638,741,639,637,742,640,744,745,639,743,746,640,642,745,643,641,644,746,642,643,749,645,750,644,646,749,647,645,750,727,752,647,753,674,649,726,648,756,649,755,755,650,757,757,651,758,758,652,759,759,653,760,760,654,761,761,655,762,762,656,763,763,657,764,764,658,765,765,659,766,766,660,767,767,661,768,768,662,769,662,770,769,663,771,770,772,664,665,665,773,772,774,666,667,667,775,774,776,668,669,777,669,670,670,778,777,671,779,778,672,780,779,781,673,675,753,675,674,783,675,782,784,677,676,786,677,785,679,784,676,786,680,678,789,679,681,680,790,682,789,683,791,790,684,682,793,683,685,794,684,792,687,793,685,794,688,686,797,687,689,798,688,796,691,797,689,798,692,690,801,691,693,692,802,694,801,695,803,802,696,694,805,695,697,696,806,698,805,699,807,806,700,698,809,699,726,810,700,808,701,811,812,812,702,701,703,813,814,704,814,815,815,705,704,706,816,817,817,707,706,708,818,819,819,709,708,710,820,821,821,711,710,712,822,823,823,713,712,824,714,713,826,714,825,827,715,826,828,716,827,829,717,828,830,718,829,831,719,830,832,720,831,833,721,832,834,722,833,835,723,834,836,724,835,837,725,836,809,754,838,839,727,837,841,728,840,842,728,730,841,731,729,732,842,730,731,845,733,846,732,734,845,735,733,846,736,848,735,849,737,850,736,738,849,739,737,740,850,738,739,853,741,854,740,742,853,743,741,744,854,742,857,743,855,858,744,746,857,747,745,748,858,746,861,747,859,862,748,750,861,751,749,862,752,864,751,865,753,866,752,839,865,782,753,868,754,756,869,868,756,756,871,869,755,872,871,873,757,758,758,874,873,875,759,760,760,876,875,761,877,876,762,878,877,879,763,764,880,764,765,881,765,766,882,766,767,767,883,882,768,884,883,770,884,769,771,885,770,772,886,771,773,887,772,774,888,773,775,889,774,776,890,775,777,891,776,778,892,777,779,893,778,780,894,779,781,895,780,783,896,781,898,782,867,898,897,783,900,785,784,902,785,901,900,787,903,902,788,786,905,787,789,906,788,904,791,905,789,906,792,790,909,791,793,910,792,908,909,795,911,910,796,794,913,795,797,914,796,912,799,913,797,914,800,798,917,799,801,918,800,916,917,803,919,918,804,802,921,803,805,922,804,920,807,921,805,922,808,806,925,807,809,808,926,810,838,925,809,926,929,810,810,930,811,811,931,812,812,932,813,813,933,814,814,934,815,815,935,816,816,936,817,817,937,818,818,938,819,819,939,820,820,940,821,821,941,822,822,942,823,823,943,824,943,825,824,945,825,944,945,827,826,946,828,827,829,947,948,948,830,829,949,831,830,832,950,951,833,951,952,952,834,833,953,835,834,836,954,955,837,955,956,839,956,957,958,838,868,957,866,839,961,840,960,962,840,842,961,843,841,844,962,842,965,843,963,966,844,846,965,847,845,848,966,846,847,969,849,970,848,850,969,851,849,970,852,972,851,973,853,974,852,854,973,855,853,856,974,854,855,977,857,978,856,858,977,859,857,978,860,980,981,859,979,982,860,862,981,863,861,864,982,862,985,863,983,986,864,866,985,867,865,959,986,866,867,989,898,958,870,990,992,870,991,991,869,993,993,871,994,994,872,995,995,873,996,996,874,997,997,875,998,998,876,999,999,877,1000,1000,878,1001,1001,879,1002,1002,880,1003,1003,881,1004,1004,882,1005,1005,883,1006,1006,884,1007,1008,884,885,885,1009,1008,1010,886,887,1011,887,888,888,1012,1011,889,1013,1012,1014,890,891,1015,891,892,1016,892,893,893,1017,1016,894,1018,1017,1019,895,896,1020,896,897,897,1021,1020,989,899,898,1023,899,1022,1024,901,900,901,1026,902,1024,903,1027,1026,904,902,1029,903,905,1030,904,1028,1029,907,1031,1030,908,906,1033,907,909,908,1034,910,911,1033,909,1034,912,910,1037,911,913,912,1038,914,915,1037,913,1038,916,914,1041,915,917,1042,916,1040,919,1041,917,1042,920,918,1045,919,921,1046,920,1044,923,1045,921,1046,924,922,1049,923,925,924,1050,926,1049,927,1051,1050,928,926,1053,927,958,1054,928,1052,1055,929,928,1056,930,929,1057,931,930,932,1058,1059,1059,933,932,934,1060,1061,1061,935,934,1062,936,935,937,1063,1064,938,1064,1065,1065,939,938,940,1066,1067,941,1067,1068,1068,942,941,1069,943,942,1070,944,943,1072,944,1071,1073,945,1072,1074,946,1073,1075,947,1074,1076,948,1075,1077,949,1076,1078,950,1077,1079,951,1078,1080,952,1079,1081,953,1080,1082,954,1081,1083,955,1082,1084,956,1083,1085,957,1084,1053,990,1086,1087,959,1085,960,1089,961,1090,960,962,1089,963,961,1090,964,1092,1093,963,1091,1094,964,966,1093,967,965,1094,968,1096,967,1097,969,1098,968,970,1097,971,969,1098,972,1100,1101,971,1099,1102,972,974,1101,975,973,1102,976,1104,975,1105,977,1106,976,978,1105,979,977,980,1106,978,979,1109,981,1110,980,982,1109,983,981,984,1110,982,1113,983,1111,1114,984,986,1113,987,985,1114,988,1116,987,1117,989,1118,988,1087,1117,1022,989,1120,990,992,1120,1122,1121,1123,992,991,1124,991,993,1125,993,994,994,1126,1125,1127,995,996,1128,996,997,1129,997,998,998,1130,1129,999,1131,1130,1000,1132,1131,1133,1001,1002,1134,1002,1003,1135,1003,1004,1136,1004,1005,1005,1137,1136,1006,1138,1137,1008,1138,1007,1009,1139,1008,1010,1140,1009,1011,1141,1010,1012,1142,1011,1013,1143,1012,1014,1144,1013,1015,1145,1014,1016,1146,1015,1017,1147,1016,1018,1148,1017,1019,1149,1018,1020,1150,1019,1021,1151,1020,1023,1152,1021,1022,1154,1023,1154,1153,1023,1156,1025,1024,1158,1025,1157,1156,1027,1159,1158,1028,1026,1161,1027,1029,1028,1162,1030,1161,1031,1163,1162,1032,1030,1165,1031,1033,1166,1032,1164,1035,1165,1033,1166,1036,1034,1169,1035,1037,1170,1036,1168,1169,1039,1171,1170,1040,1038,1173,1039,1041,1174,1040,1172,1043,1173,1041,1174,1044,1042,1177,1043,1045,1044,1178,1046,1047,1177,1045,1178,1048,1046,1181,1047,1049,1182,1048,1180,1181,1051,1183,1182,1052,1050,1185,1051,1053,1052,1186,1054,1185,1086,1187,1186,1189,1054,1054,1190,1055,1055,1191,1056,1056,1192,1057,1057,1193,1058,1058,1194,1059,1059,1195,1060,1060,1196,1061,1061,1197,1062,1062,1198,1063,1063,1199,1064,1064,1200,1065,1065,1201,1066,1066,1202,1067,1067,1203,1068,1068,1204,1069,1069,1205,1070,1070,1206,1071,1206,1072,1071,1073,1207,1208,1074,1208,1209,1209,1075,1074,1076,1210,1211,1211,1077,1076,1212,1078,1077,1079,1213,1214,1214,1080,1079,1081,1215,1216,1216,1082,1081,1217,1083,1082,1084,1218,1219,1085,1219,1220,1220,1087,1085,1222,1086,1120,1221,1118,1087,1225,1088,1224,1226,1088,1090,1225,1091,1089,1092,1226,1090,1091,1229,1093,1230,1092,1094,1229,1095,1093,1096,1230,1094,1233,1095,1231,1234,1096,1098,1233,1099,1097,1100,1234,1098,1237,1099,1235,1238,1100,1102,1237,1103,1101,1238,1104,1240,1103,1241,1105,1242,1104,1106,1241,1107,1105,1242,1108,1244,1107,1245,1109,1246,1108,1110,1245,1111,1109,1246,1112,1248,1249,1111,1247,1250,1112,1114,1249,1115,1113,1116,1250,1114,1253,1115,1251,1254,1116,1118,1253,1119,1117,1223,1254,1118,1257,1119,1255,1121,1222,1120,1259,1121,1260,1260,1122,1261,1261,1123,1262,1262,1124,1263,1263,1125,1264,1264,1126,1265,1265,1127,1266,1266,1128,1267,1267,1129,1268,1268,1130,1269,1269,1131,1270,1270,1132,1271,1271,1133,1272,1272,1134,1273,1273,1135,1274,1274,1136,1275,1275,1137,1276,1137,1277,1276,1139,1277,1138,1139,1279,1278,1140,1280,1279,1141,1281,1280,1282,1142,1143,1143,1283,1282,1284,1144,1145,1145,1285,1284,1146,1286,1285,1147,1287,1286,1148,1288,1287,1149,1289,1288,1290,1150,1151,1151,1291,1290,1292,1152,1153,1293,1153,1155,1257,1155,1154,1155,1295,1293,1296,1157,1156,1298,1157,1297,1296,1159,1299,1298,1160,1158,1301,1159,1161,1302,1160,1300,1301,1163,1303,1302,1164,1162,1305,1163,1165,1306,1164,1304,1305,1167,1307,1306,1168,1166,1309,1167,1169,1310,1168,1308,1309,1171,1311,1310,1172,1170,1313,1171,1173,1314,1172,1312,1313,1175,1315,1314,1176,1174,1317,1175,1177,1318,1176,1316,1317,1179,1319,1318,1180,1178,1321,1179,1181,1322,1180,1320,1321,1183,1323,1322,1184,1182,1325,1183,1185,1326,1184,1324,1325,1187,1327,1326,1188,1186,1329,1187,1222,1330,1188,1328,1189,1331,1332,1190,1332,1333,1333,1191,1190,1192,1334,1335,1193,1335,1336,1336,1194,1193,1195,1337,1338,1338,1196,1195,1197,1339,1340,1198,1340,1341,1341,1199,1198,1342,1200,1199,1201,1343,1344,1344,1202,1201,1203,1345,1346,1346,1204,1203,1205,1347,1348,1206,1348,1349,1350,1206,1349,1351,1207,1350,1352,1208,1351,1353,1209,1352,1354,1210,1353,1355,1211,1354,1356,1212,1355,1357,1213,1356,1358,1214,1357,1359,1215,1358,1360,1216,1359,1361,1217,1360,1362,1218,1361,1363,1219,1362,1364,1220,1363,1365,1221,1364,1329,1258,1366,1367,1223,1365,1369,1224,1368,1370,1224,1226,1369,1227,1225,1228,1370,1226,1227,1373,1229,1374,1228,1230,1373,1231,1229,1232,1374,1230,1377,1231,1375,1378,1232,1234,1377,1235,1233,1236,1378,1234,1235,1381,1237,1382,1236,1238,1381,1239,1237,1240,1382,1238,1385,1239,1383,1386,1240,1242,1385,1243,1241,1386,1244,1388,1243,1389,1245,1390,1244,1246,1389,1247,1245,1390,1248,1392,1247,1393,1249,1394,1248,1250,1393,1251,1249,1252,1394,1250,1251,1397,1253,1398,1252,1254,1397,1255,1253,1398,1256,1400,1255,1401,1257,1402,1256,1367,1401,1294,1257,1404,1258,1259,1404,1406,1405,1259,1407,1406,1408,1260,1261,1261,1409,1408,1410,1262,1263,1263,1411,1410,1264,1412,1411,1413,1265,1266,1414,1266,1267,1267,1415,1414,1416,1268,1269,1269,1417,1416,1418,1270,1271,1419,1271,1272,1272,1420,1419,1421,1273,1274,1274,1422,1421,1275,1423,1422,1423,1277,1424,1277,1425,1424,1279,1425,1278,1280,1426,1279,1281,1427,1280,1282,1428,1281,1283,1429,1282,1284,1430,1283,1285,1431,1284,1286,1432,1285,1287,1433,1286,1288,1434,1287,1289,1435,1288,1290,1436,1289,1291,1437,1290,1292,1438,1291,1293,1439,1292,1295,1440,1293,1294,1442,1295,1442,1441,1295,1444,1297,1296,1446,1297,1445,1444,1299,1447,1446,1300,1298,1449,1299,1301,1450,1300,1448,1449,1303,1451,1450,1304,1302,1453,1303,1305,1454,1304,1452,1453,1307,1455,1454,1308,1306,1457,1307,1309,1458,1308,1456,1457,1311,1459,1458,1312,1310,1461,1311,1313,1462,1312,1460,1461,1315,1463,1462,1316,1314,1465,1315,1317,1466,1316,1464,1465,1319,1467,1466,1320,1318,1469,1319,1321,1470,1320,1468,1469,1323,1471,1470,1324,1322,1473,1323,1325,1474,1324,1472,1473,1327,1475,1474,1328,1326,1477,1327,1329,1478,1328,1476,1477,1366,1479,1478,1481,1330,1330,1482,1331,1331,1483,1332,1332,1484,1333,1333,1485,1334,1334,1486,1335,1335,1487,1336,1336,1488,1337,1337,1489,1338,1338,1490,1339,1339,1491,1340,1340,1492,1341,1341,1493,1342,1342,1494,1343,1343,1495,1344,1344,1496,1345,1345,1497,1346,1346,1498,1347,1347,1499,1348,1349,1499,1500,1501,1349,1500,1501,1351,1350,1352,1502,1503,1353,1503,1504,1504,1354,1353,1505,1355,1354,1506,1356,1355,1357,1507,1508,1508,1358,1357,1509,1359,1358,1360,1510,1511,1511,1361,1360,1512,1362,1361,1363,1513,1514,1364,1514,1515,1515,1365,1364,1516,1367,1365,1518,1366,1404,1402,1517,1519,1521,1368,1520,1522,1368,1370,1521,1371,1369,1522,1372,1524,1525,1371,1523,1526,1372,1374,1525,1375,1373,1526,1376,1528,1529,1375,1527,1530,1376,1378,1529,1379,1377,1530,1380,1532,1533,1379,1531,1534,1380,1382,1533,1383,1381,1534,1384,1536,1537,1383,1535,1538,1384,1386,1537,1387,1385,1538,1388,1540,1541,1387,1539,1542,1388,1390,1541,1391,1389,1542,1392,1544,1545,1391,1543,1546,1392,1394,1545,1395,1393,1546,1396,1548,1549,1395,1547,1550,1396,1398,1549,1399,1397,1550,1400,1552,1553,1399,1551,1554,1400,1402,1553,1403,1401,1554,1519,1556,1557,1403,1555,1518,1405,1558,1560,1405,1559,1559,1406,1561,1561,1407,1562,1562,1408,1563,1563,1409,1564,1564,1410,1565,1565,1411,1566,1566,1412,1567,1567,1413,1568,1568,1414,1569,1569,1415,1570,1570,1416,1571,1571,1417,1572,1572,1418,1573,1573,1419,1574,1574,1420,1575,1575,1421,1576,1576,1422,1577,1578,1422,1423,1578,1424,1579,1424,1580,1579,1426,1580,1425,1426,1582,1581,1583,1427,1428,1428,1584,1583,1429,1585,1584,1430,1586,1585,1431,1587,1586,1588,1432,1433,1433,1589,1588,1590,1434,1435,1435,1591,1590,1436,1592,1591,1437,1593,1592,1438,1594,1593,1595,1439,1440,1440,1596,1595,1597,1441,1443,1557,1443,1442,1599,1443,1598,1600,1601,1445,1445,1601,1446,1444,1600,1445,1447,1600,1444,1446,1601,1448,1602,1600,1447,1449,1602,1447,1601,1603,1448,1448,1603,1450,1451,1602,1449,1450,1603,1452,1604,1602,1451,1453,1604,1451,1603,1605,1452,1452,1605,1454,1455,1604,1453,1454,1605,1456,1606,1604,1455,1457,1606,1455,1605,1607,1456,1456,1607,1458,1459,1606,1457,1458,1607,1460,1608,1606,1459,1461,1608,1459,1607,1609,1460,1460,1609,1462,1463,1608,1461,1462,1609,1464,1610,1608,1463,1465,1610,1463,1609,1611,1464,1464,1611,1466,1467,1610,1465,1466,1611,1468,1612,1610,1467,1469,1612,1467,1611,1613,1468,1468,1613,1470,1471,1612,1469,1470,1613,1472,1614,1612,1471,1473,1614,1471,1613,1615,1472,1472,1615,1474,1475,1614,1473,1474,1615,1476,1616,1614,1475,1477,1616,1475,1615,1617,1476,1476,1617,1478,1479,1616,1477,1478,1617,1480,1618,1616,1479,1518,1618,1479,1619,1481,1480,1620,1482,1481,1617,1622,1480,1480,1622,1619,1621,1483,1482,1623,1484,1483,1624,1485,1484,1486,1625,1626,1487,1626,1627,1627,1488,1487,1628,1489,1488,1490,1629,1630,1630,1491,1490,1631,1492,1491,1632,1493,1492,1494,1633,1634,1634,1495,1494,1496,1635,1636,1636,1497,1496,1498,1637,1638,1638,1499,1498,1500,1639,1640,1641,1500,1640,1642,1501,1641,1643,1502,1642,1644,1503,1643,1645,1504,1644,1646,1505,1645,1647,1506,1646,1648,1507,1647,1649,1508,1648,1650,1509,1649,1651,1510,1650,1652,1511,1651,1653,1512,1652,1654,1513,1653,1655,1514,1654,1656,1515,1655,1657,1516,1656,1658,1517,1657,1558,1618,1518,1659,1519,1658,1661,1520,1660,1662,1520,1522,1661,1523,1521,1662,1524,1664,1665,1523,1663,1666,1524,1526,1665,1527,1525,1666,1528,1668,1669,1527,1667,1670,1528,1530,1669,1531,1529,1670,1532,1672,1673,1531,1671,1674,1532,1534,1673,1535,1533,1674,1536,1676,1677,1535,1675,1678,1536,1538,1677,1539,1537,1678,1540,1680,1681,1539,1679,1682,1540,1542,1681,1543,1541,1682,1544,1684,1685,1543,1683,1686,1544,1546,1685,1547,1545,1686,1548,1688,1689,1547,1687,1690,1548,1550,1689,1551,1549,1690,1552,1692,1693,1551,1691,1694,1552,1554,1693,1555,1553,1694,1556,1696,1697,1555,1695,1698,1556,1659,1697,1598,1557,1700,1618,1558,1560,1700,1558,1560,1702,1701,1559,1703,1702,1701,1700,1560,1561,1704,1703,1562,1705,1704,1563,1706,1705,1707,1564,1565,1565,1708,1707,1566,1709,1708,1710,1567,1568,1568,1711,1710,1712,1569,1570,1713,1570,1571,1714,1571,1572,1572,1715,1714,1573,1716,1715,1574,1717,1716,1718,1575,1576,1719,1576,1577,1577,1720,1719,1720,1579,1721,1722,1579,1580,1581,1722,1580,1582,1723,1581,1583,1724,1582,1584,1725,1583,1585,1726,1584,1586,1727,1585,1587,1728,1586,1588,1729,1587,1589,1730,1588,1590,1731,1589,1591,1732,1590,1592,1733,1591,1593,1734,1592,1594,1735,1593,1595,1736,1594,1596,1737,1595,1597,1738,1596,1599,1739,1597,1741,1598,1699,1741,1740,1599,1601,1743,1603,1600,1743,1601,1602,1743,1600,1604,1743,1602,1603,1743,1605,1606,1743,1604,1605,1743,1607,1608,1743,1606,1607,1743,1609,1610,1743,1608,1609,1743,1611,1612,1743,1610,1611,1743,1613,1614,1743,1612,1613,1743,1615,1616,1743,1614,1615,1743,1617,1618,1743,1616,1617,1743,1622,1700,1743,1618,1619,1745,1620,1620,1746,1621,1619,1622,1744,1621,1747,1623,1622,1743,1748,1622,1748,1744,1623,1749,1624,1624,1750,1625,1625,1751,1626,1626,1752,1627,1627,1753,1628,1628,1754,1629,1629,1755,1630,1630,1756,1631,1631,1757,1632,1632,1758,1633,1633,1759,1634,1634,1760,1635,1635,1761,1636,1636,1762,1637,1637,1763,1638,1638,1764,1639,1639,1765,1640,1765,1641,1640,1766,1642,1641,1767,1643,1642,1768,1644,1643,1645,1769,1770,1770,1646,1645,1647,1771,1772,1772,1648,1647,1649,1773,1774,1650,1774,1775,1651,1775,1776,1776,1652,1651,1653,1777,1778,1778,1654,1653,1655,1779,1780,1780,1656,1655,1781,1657,1656,1658,1782,1783,1659,1783,1784,1698,1784,1785,1786,1787,1660,1660,1787,1661,1662,1786,1660,1661,1787,1663,1664,1786,1662,1787,1788,1663,1663,1788,1665,1789,1786,1664,1666,1789,1664,1665,1788,1667,1668,1789,1666,1788,1790,1667,1667,1790,1669,1791,1789,1668,1670,1791,1668,1669,1790,1671,1672,1791,1670,1790,1792,1671,1671,1792,1673,1793,1791,1672,1674,1793,1672,1673,1792,1675,1676,1793,1674,1792,1794,1675,1675,1794,1677,1795,1793,1676,1678,1795,1676,1677,1794,1679,1680,1795,1678,1794,1796,1679,1679,1796,1681,1797,1795,1680,1682,1797,1680,1681,1796,1683,1684,1797,1682,1796,1798,1683,1683,1798,1685,1799,1797,1684,1686,1799,1684,1685,1798,1687,1688,1799,1686,1798,1800,1687,1687,1800,1689,1801,1799,1688,1690,1801,1688,1689,1800,1691,1692,1801,1690,1800,1802,1691,1691,1802,1693,1803,1801,1692,1694,1803,1692,1693,1802,1695,1696,1803,1694,1802,1804,1695,1695,1804,1697,1805,1803,1696,1698,1805,1696,1697,1804,1699,1785,1805,1698,1804,1806,1699,1699,1806,1741,1748,1743,1700,1748,1700,1701,1808,1702,1807,1807,1703,1809,1808,1748,1701,1809,1704,1810,1810,1705,1811,1811,1706,1812,1812,1707,1813,1813,1708,1814,1814,1709,1815,1815,1710,1816,1816,1711,1817,1817,1712,1818,1818,1713,1819,1819,1714,1820,1820,1715,1821,1821,1716,1822,1822,1717,1823,1823,1718,1824,1824,1719,1825,1825,1720,1826,1826,1721,1827,1721,1828,1827,1722,1829,1828,1830,1723,1724,1831,1724,1725,1725,1832,1831,1833,1726,1727,1727,1834,1833,1728,1835,1834,1836,1729,1730,1837,1730,1731,1731,1838,1837,1732,1839,1838,1733,1840,1839,1841,1734,1735,1842,1735,1736,1843,1736,1737,1737,1844,1843,1738,1845,1844,1846,1739,1740,1847,1740,1742,1741,1806,1742,1806,1848,1742,1742,1848,1847,1808,1745,1744,1807,1746,1745,1744,1748,1808,1809,1747,1746,1749,1810,1811,1811,1750,1749,1812,1751,1750,1813,1752,1751,1753,1814,1815,1754,1815,1816,1816,1755,1754,1817,1756,1755,1757,1818,1819,1758,1819,1820,1820,1759,1758,1760,1821,1822,1822,1761,1760,1823,1762,1761,1824,1763,1762,1764,1825,1826,1826,1765,1764,1828,1765,1827,1829,1766,1828,1830,1767,1829,1831,1768,1830,1832,1769,1831,1833,1770,1832,1834,1771,1833,1835,1772,1834,1836,1773,1835,1837,1774,1836,1838,1775,1837,1839,1776,1838,1840,1777,1839,1841,1778,1840,1842,1779,1841,1843,1780,1842,1844,1781,1843,1845,1782,1844,1846,1783,1845,1847,1784,1846,1848,1805,1785,1847,1848,1785,1789,1849,1786,1786,1849,1787,1787,1849,1788,1788,1849,1790,1791,1849,1789,1790,1849,1792,1793,1849,1791,1792,1849,1794,1795,1849,1793,1794,1849,1796,1797,1849,1795,1796,1849,1798,1799,1849,1797,1798,1849,1800,1801,1849,1799,1800,1849,1802,1803,1849,1801,1802,1849,1804,1805,1849,1803,1804,1849,1806,1848,1849,1805,1806,1849,1848,1,2,3,4,5,6,1,6,7,7,8,9,10,11,0,0,11,4,12,0,3,3,14,15,9,14,3,16,17,5,5,17,18,19,20,6,6,20,21,16,4,11,21,23,8,8,24,25,26,24,8,25,27,14,28,22,11,28,10,30,10,12,31,32,31,12,15,33,32,14,27,34,34,35,33,36,37,17,17,37,38,36,16,22,38,40,41,18,41,42,20,19,42,20,43,44,44,45,23,46,39,22,47,26,23,49,25,24,50,48,24,49,51,27,50,26,47,53,34,27,29,54,46,55,54,29,56,29,30,57,30,31,31,32,59,33,60,59,61,60,33,53,62,35,35,62,63,64,65,37,66,38,37,64,36,39,66,68,40,69,67,39,40,68,70,41,40,71,72,73,42,73,74,43,43,74,75,75,76,45,77,47,45,54,78,69,79,52,47,81,49,48,82,80,48,81,83,51,52,84,82,51,83,85,86,84,52,85,87,62,88,78,54,88,55,90,55,56,91,92,91,56,57,58,93,58,59,94,60,95,94,61,96,95,63,97,96,98,63,62,98,99,97,100,101,65,102,66,65,67,103,100,102,104,68,105,103,67,68,104,106,78,107,105,106,108,109,70,109,110,71,110,111,72,111,112,73,112,113,113,114,75,115,76,75,115,116,77,116,117,79,118,107,78,117,119,86,80,120,121,122,120,80,121,123,83,122,82,84,125,85,83,126,124,84,125,127,87,119,128,126,87,127,129,118,88,89,132,130,89,131,89,90,133,90,91,134,91,92,135,92,93,136,93,94,94,95,138,139,138,95,140,139,96,141,140,97,129,142,99,99,142,143,144,145,101,146,102,101,144,100,103,146,148,104,149,147,103,150,106,104,149,105,107,150,152,108,153,151,107,108,152,154,155,156,109,156,157,110,157,158,111,112,111,158,159,160,113,160,161,114,162,115,114,163,116,115,164,117,116,165,119,117,130,166,153,167,128,119,169,121,120,170,168,120,169,171,123,170,122,124,123,171,173,174,172,124,173,175,127,128,176,174,177,129,127,178,176,128,177,179,142,180,166,130,181,182,180,132,131,183,131,133,184,185,184,133,134,135,186,135,136,187,187,136,137,137,138,189,139,190,189,140,191,190,141,192,191,143,193,192,194,143,142,194,195,193,196,197,145,145,197,198,147,199,196,198,200,148,201,199,147,202,150,148,151,203,201,202,204,152,205,203,151,152,204,206,205,153,166,206,208,209,154,209,210,155,210,211,156,211,212,157,212,213,158,213,214,159,214,215,160,215,216,216,217,162,217,218,163,218,219,164,165,164,219,220,221,167,222,207,166,178,167,221,168,224,225,226,224,168,225,227,171,172,228,226,171,227,229,230,228,172,229,231,175,230,174,176,175,231,233,234,232,176,233,235,179,223,236,234,179,235,237,222,180,182,239,238,182,240,182,181,241,181,183,242,183,184,243,184,185,244,185,186,245,186,187,246,187,188,188,189,248,189,190,249,190,191,250,251,250,191,192,193,252,193,195,253,237,254,195,255,253,195,256,257,197,258,198,197,256,196,199,258,260,200,261,259,199,200,260,262,261,201,203,262,264,204,265,263,203,266,206,204,207,267,265,266,268,208,269,267,207,270,271,208,271,272,209,210,209,272,273,274,211,212,211,274,275,276,213,214,213,276,277,278,215,278,279,216,280,217,216,281,218,217,282,219,218,283,220,219,284,221,220,285,223,221,238,286,269,287,236,223,224,288,289,290,288,224,289,291,227,228,292,290,293,229,227,294,292,228,293,295,231,232,296,294,231,295,297,298,296,232,297,299,235,236,300,298,235,299,301,302,300,236,301,303,254,304,286,238,304,239,306,239,240,307,308,307,240,241,242,309,310,309,242,243,244,311,312,311,244,245,246,313,246,247,314,248,315,314,249,316,315,250,317,316,251,318,317,252,319,318,253,320,319,255,321,320,322,255,254,322,323,321,324,325,257,257,325,326,259,327,324,326,328,260,329,327,259,260,328,330,263,331,329,330,332,264,333,331,263,334,266,264,267,335,333,334,336,268,337,335,267,268,336,338,337,269,286,338,340,341,270,341,342,271,342,343,272,343,344,273,344,345,274,345,346,275,346,347,276,347,348,277,348,349,279,278,349,351,280,279,351,352,281,352,353,282,283,282,353,354,355,284,285,284,355,356,357,287,358,339,286,302,287,357,361,289,288,362,360,288,361,363,291,362,290,292,365,293,291,366,364,292,365,367,295,296,368,366,369,297,295,370,368,296,369,371,299,370,298,300,373,301,299,374,372,300,373,375,303,374,302,359,303,375,377,358,304,305,379,378,305,380,305,306,381,306,307,382,307,308,383,308,309,384,309,310,385,310,311,386,311,312,387,312,313,388,313,314,314,315,390,315,316,391,392,391,316,317,318,393,318,319,394,395,394,319,320,321,396,397,396,321,377,398,323,399,397,323,400,401,325,402,326,325,400,324,327,402,404,328,405,403,327,328,404,406,331,407,405,406,408,332,409,407,331,332,408,410,409,333,335,410,412,336,413,411,335,336,412,414,339,415,413,414,416,340,417,415,339,418,419,340,419,420,341,342,341,420,421,422,343,344,343,422,423,424,345,346,345,424,425,426,347,426,427,348,349,348,427,428,429,350,430,351,350,431,352,351,432,353,352,433,354,353,434,355,354,435,356,355,436,357,356,437,359,357,417,358,378,439,376,359,360,440,441,442,440,360,441,443,363,442,362,364,445,365,363,446,444,364,445,447,367,368,448,446,367,447,449,450,448,368,449,451,371,450,370,372,453,373,371,454,452,372,453,455,375,376,456,454,375,455,457,458,456,376,457,459,398,460,438,378,460,379,462,463,462,379,464,463,380,381,382,465,466,465,382,383,384,467,384,385,468,469,468,385,386,387,470,471,470,387,471,388,389,389,390,473,391,474,473,392,475,474,393,476,475,394,477,476,395,478,477,396,479,478,397,480,479,399,481,480,482,399,398,482,483,481,484,485,401,401,485,486,484,400,403,486,488,404,489,487,403,490,406,404,489,405,407,490,492,408,493,491,407,494,410,408,493,409,411,494,496,412,497,495,411,412,496,498,497,413,415,498,500,416,501,499,415,416,500,502,438,503,501,502,504,505,418,505,506,419,506,507,420,507,508,421,508,509,422,509,510,423,510,511,424,511,512,425,512,513,426,513,514,427,514,515,428,515,516,516,517,430,517,518,431,518,519,432,433,432,519,520,521,434,435,434,521,522,523,436,437,436,523,524,525,439,526,503,438,525,527,458,440,528,529,530,528,440,529,531,443,530,442,444,443,531,533,534,532,444,533,535,447,448,536,534,537,449,447,538,536,448,537,539,451,538,450,452,451,539,541,542,540,452,541,543,455,456,544,542,455,543,545,546,544,456,545,547,459,527,548,546,459,547,549,526,460,461,551,550,461,552,461,462,553,462,463,554,463,464,555,464,465,556,465,466,557,466,467,558,467,468,559,468,469,560,469,470,561,470,471,562,471,472,472,473,564,473,474,565,474,475,566,567,566,475,476,477,568,569,568,477,478,479,570,479,480,571,572,571,480,573,572,481,549,574,483,483,574,575,576,577,485,578,486,485,487,579,576,578,580,488,581,579,487,582,490,488,491,583,581,582,584,492,585,583,491,492,584,586,585,493,495,586,588,496,589,587,495,590,498,496,589,497,499,590,592,500,593,591,499,594,502,500,593,501,503,594,596,504,597,595,503,598,599,504,599,600,505,506,505,600,507,506,601,602,603,508,603,604,509,510,509,604,605,606,511,606,607,512,513,512,607,608,609,514,515,514,609,515,610,611,611,612,517,613,518,517,614,519,518,615,520,519,616,521,520,617,522,521,618,523,522,619,524,523,620,525,524,621,527,525,550,622,597,623,548,527,625,529,528,626,624,528,625,627,531,532,628,626,629,533,531,630,628,532,629,631,535,536,632,630,535,631,633,634,632,536,633,635,539,540,636,634,539,635,637,638,636,540,637,639,543,544,640,638,641,545,543,642,640,544,641,643,547,548,644,642,547,643,645,646,644,548,645,647,574,648,622,550,648,551,650,551,552,651,652,651,552,553,554,653,554,555,654,655,654,555,556,557,656,657,656,557,658,657,558,559,560,659,560,561,660,661,660,561,562,563,662,564,663,662,565,664,663,566,665,664,567,666,665,568,667,666,569,668,667,570,669,668,571,670,669,572,671,670,573,672,671,575,673,672,574,647,674,674,675,673,676,677,577,678,578,577,676,576,579,678,680,580,681,679,579,682,582,580,583,683,681,682,684,584,685,683,583,584,684,686,587,687,685,686,688,588,689,687,587,588,688,690,689,589,591,690,692,592,693,691,591,694,594,592,595,695,693,694,696,596,697,695,595,698,598,596,697,597,622,698,700,701,598,701,702,599,702,703,600,703,704,601,704,705,602,705,706,603,706,707,604,707,708,605,708,709,606,709,710,607,710,711,608,711,712,609,712,713,610,713,714,714,715,612,715,716,613,614,613,716,717,718,615,718,719,616,719,720,617,618,617,720,721,722,619,620,619,722,723,724,621,623,621,724,726,699,622,725,727,646,624,728,729,730,728,624,729,731,627,730,626,628,627,731,733,734,732,628,733,735,631,734,630,632,631,735,737,738,736,632,737,739,635,636,740,738,741,637,635,742,740,636,741,743,639,742,638,640,745,641,639,746,744,640,745,747,643,644,748,746,643,747,749,750,748,644,749,751,647,750,646,727,647,751,753,649,754,726,756,754,649,755,649,650,757,650,651,758,651,652,759,652,653,760,653,654,761,654,655,762,655,656,763,656,657,764,657,658,765,658,659,766,659,660,767,660,661,768,661,662,662,663,770,663,664,771,772,771,664,665,666,773,774,773,666,667,668,775,776,775,668,777,776,669,670,671,778,671,672,779,672,673,780,781,780,673,753,782,675,783,781,675,784,785,677,786,678,677,679,787,784,786,788,680,789,787,679,680,788,790,789,681,683,790,792,684,793,791,683,794,686,684,687,795,793,794,796,688,797,795,687,798,690,688,691,799,797,798,800,692,801,799,691,692,800,802,801,693,695,802,804,696,805,803,695,696,804,806,805,697,699,806,808,700,809,807,699,810,811,700,701,700,811,812,813,702,703,702,813,704,703,814,815,816,705,706,705,816,817,818,707,708,707,818,819,820,709,710,709,820,821,822,711,712,711,822,823,824,713,824,825,714,826,715,714,827,716,715,828,717,716,829,718,717,830,719,718,831,720,719,832,721,720,833,722,721,834,723,722,835,724,723,836,725,724,837,727,725,809,726,754,839,752,727,841,729,728,842,840,728,841,843,731,732,844,842,731,843,845,846,844,732,845,847,735,846,734,736,735,847,849,850,848,736,849,851,739,740,852,850,739,851,853,854,852,740,853,855,743,744,856,854,857,745,743,858,856,744,857,859,747,748,860,858,861,749,747,862,860,748,861,863,751,862,750,752,751,863,865,866,864,752,865,867,782,868,838,754,869,870,868,756,755,871,755,757,872,873,872,757,758,759,874,875,874,759,760,761,876,761,762,877,762,763,878,879,878,763,880,879,764,881,880,765,882,881,766,767,768,883,768,769,884,770,885,884,771,886,885,772,887,886,773,888,887,774,889,888,775,890,889,776,891,890,777,892,891,778,893,892,779,894,893,780,895,894,781,896,895,783,897,896,898,783,782,898,899,897,900,901,785,902,786,785,900,784,787,902,904,788,905,903,787,906,790,788,791,907,905,906,908,792,909,907,791,910,794,792,909,793,795,910,912,796,913,911,795,914,798,796,799,915,913,914,916,800,917,915,799,918,802,800,917,801,803,918,920,804,921,919,803,922,806,804,807,923,921,922,924,808,925,923,807,808,924,926,838,927,925,926,928,929,810,929,930,811,930,931,812,931,932,813,932,933,814,933,934,815,934,935,816,935,936,817,936,937,818,937,938,819,938,939,820,939,940,821,940,941,822,941,942,823,942,943,943,944,825,945,826,825,945,946,827,946,947,828,829,828,947,948,949,830,949,950,831,832,831,950,833,832,951,952,953,834,953,954,835,836,835,954,837,836,955,839,837,956,958,927,838,957,959,866,961,841,840,962,960,840,961,963,843,844,964,962,965,845,843,966,964,844,965,967,847,848,968,966,847,967,969,970,968,848,969,971,851,970,850,852,851,971,973,974,972,852,973,975,855,856,976,974,855,975,977,978,976,856,977,979,859,978,858,860,981,861,859,982,980,860,981,983,863,864,984,982,985,865,863,986,984,864,985,987,867,959,988,986,867,987,989,958,868,870,992,990,870,991,870,869,993,869,871,994,871,872,995,872,873,996,873,874,997,874,875,998,875,876,999,876,877,1000,877,878,1001,878,879,1002,879,880,1003,880,881,1004,881,882,1005,882,883,1006,883,884,1008,1007,884,885,886,1009,1010,1009,886,1011,1010,887,888,889,1012,889,890,1013,1014,1013,890,1015,1014,891,1016,1015,892,893,894,1017,894,895,1018,1019,1018,895,1020,1019,896,897,899,1021,989,1022,899,1023,1021,899,1024,1025,901,901,1025,1026,1024,900,903,1026,1028,904,1029,1027,903,1030,906,904,1029,905,907,1030,1032,908,1033,1031,907,908,1032,1034,911,1035,1033,1034,1036,912,1037,1035,911,912,1036,1038,915,1039,1037,1038,1040,916,1041,1039,915,1042,918,916,919,1043,1041,1042,1044,920,1045,1043,919,1046,922,920,923,1047,1045,1046,1048,924,1049,1047,923,924,1048,1050,1049,925,927,1050,1052,928,1053,1051,927,1054,1055,928,1055,1056,929,1056,1057,930,1057,1058,931,932,931,1058,1059,1060,933,934,933,1060,1061,1062,935,1062,1063,936,937,936,1063,938,937,1064,1065,1066,939,940,939,1066,941,940,1067,1068,1069,942,1069,1070,943,1070,1071,944,1072,945,944,1073,946,945,1074,947,946,1075,948,947,1076,949,948,1077,950,949,1078,951,950,1079,952,951,1080,953,952,1081,954,953,1082,955,954,1083,956,955,1084,957,956,1085,959,957,1053,958,990,1087,988,959,960,1088,1089,1090,1088,960,1089,1091,963,1090,962,964,1093,965,963,1094,1092,964,1093,1095,967,1094,966,968,967,1095,1097,1098,1096,968,1097,1099,971,1098,970,972,1101,973,971,1102,1100,972,1101,1103,975,1102,974,976,975,1103,1105,1106,1104,976,1105,1107,979,980,1108,1106,979,1107,1109,1110,1108,980,1109,1111,983,984,1112,1110,1113,985,983,1114,1112,984,1113,1115,987,1114,986,988,987,1115,1117,1118,1116,988,1117,1119,1022,1120,1086,990,1120,992,1122,1123,1122,992,1124,1123,991,1125,1124,993,994,995,1126,1127,1126,995,1128,1127,996,1129,1128,997,998,999,1130,999,1000,1131,1000,1001,1132,1133,1132,1001,1134,1133,1002,1135,1134,1003,1136,1135,1004,1005,1006,1137,1006,1007,1138,1008,1139,1138,1009,1140,1139,1010,1141,1140,1011,1142,1141,1012,1143,1142,1013,1144,1143,1014,1145,1144,1015,1146,1145,1016,1147,1146,1017,1148,1147,1018,1149,1148,1019,1150,1149,1020,1151,1150,1021,1152,1151,1023,1153,1152,1022,1119,1154,1154,1155,1153,1156,1157,1025,1158,1026,1025,1156,1024,1027,1158,1160,1028,1161,1159,1027,1028,1160,1162,1161,1029,1031,1162,1164,1032,1165,1163,1031,1166,1034,1032,1035,1167,1165,1166,1168,1036,1169,1167,1035,1170,1038,1036,1169,1037,1039,1170,1172,1040,1173,1171,1039,1174,1042,1040,1043,1175,1173,1174,1176,1044,1177,1175,1043,1044,1176,1178,1047,1179,1177,1178,1180,1048,1181,1179,1047,1182,1050,1048,1181,1049,1051,1182,1184,1052,1185,1183,1051,1052,1184,1186,1185,1053,1086,1186,1188,1189,1054,1189,1190,1055,1190,1191,1056,1191,1192,1057,1192,1193,1058,1193,1194,1059,1194,1195,1060,1195,1196,1061,1196,1197,1062,1197,1198,1063,1198,1199,1064,1199,1200,1065,1200,1201,1066,1201,1202,1067,1202,1203,1068,1203,1204,1069,1204,1205,1070,1205,1206,1206,1207,1072,1073,1072,1207,1074,1073,1208,1209,1210,1075,1076,1075,1210,1211,1212,1077,1212,1213,1078,1079,1078,1213,1214,1215,1080,1081,1080,1215,1216,1217,1082,1217,1218,1083,1084,1083,1218,1085,1084,1219,1220,1221,1087,1222,1187,1086,1221,1223,1118,1225,1089,1088,1226,1224,1088,1225,1227,1091,1092,1228,1226,1091,1227,1229,1230,1228,1092,1229,1231,1095,1096,1232,1230,1233,1097,1095,1234,1232,1096,1233,1235,1099,1100,1236,1234,1237,1101,1099,1238,1236,1100,1237,1239,1103,1238,1102,1104,1103,1239,1241,1242,1240,1104,1241,1243,1107,1242,1106,1108,1107,1243,1245,1246,1244,1108,1245,1247,1111,1246,1110,1112,1249,1113,1111,1250,1248,1112,1249,1251,1115,1116,1252,1250,1253,1117,1115,1254,1252,1116,1253,1255,1119,1223,1256,1254,1257,1154,1119,1121,1258,1222,1259,1258,1121,1260,1121,1122,1261,1122,1123,1262,1123,1124,1263,1124,1125,1264,1125,1126,1265,1126,1127,1266,1127,1128,1267,1128,1129,1268,1129,1130,1269,1130,1131,1270,1131,1132,1271,1132,1133,1272,1133,1134,1273,1134,1135,1274,1135,1136,1275,1136,1137,1137,1138,1277,1139,1278,1277,1139,1140,1279,1140,1141,1280,1141,1142,1281,1282,1281,1142,1143,1144,1283,1284,1283,1144,1145,1146,1285,1146,1147,1286,1147,1148,1287,1148,1149,1288,1149,1150,1289,1290,1289,1150,1151,1152,1291,1292,1291,1152,1293,1292,1153,1257,1294,1155,1155,1294,1295,1296,1297,1157,1298,1158,1157,1296,1156,1159,1298,1300,1160,1301,1299,1159,1302,1162,1160,1301,1161,1163,1302,1304,1164,1305,1303,1163,1306,1166,1164,1305,1165,1167,1306,1308,1168,1309,1307,1167,1310,1170,1168,1309,1169,1171,1310,1312,1172,1313,1311,1171,1314,1174,1172,1313,1173,1175,1314,1316,1176,1317,1315,1175,1318,1178,1176,1317,1177,1179,1318,1320,1180,1321,1319,1179,1322,1182,1180,1321,1181,1183,1322,1324,1184,1325,1323,1183,1326,1186,1184,1325,1185,1187,1326,1328,1188,1329,1327,1187,1330,1331,1188,1189,1188,1331,1190,1189,1332,1333,1334,1191,1192,1191,1334,1193,1192,1335,1336,1337,1194,1195,1194,1337,1338,1339,1196,1197,1196,1339,1198,1197,1340,1341,1342,1199,1342,1343,1200,1201,1200,1343,1344,1345,1202,1203,1202,1345,1346,1347,1204,1205,1204,1347,1206,1205,1348,1350,1207,1206,1351,1208,1207,1352,1209,1208,1353,1210,1209,1354,1211,1210,1355,1212,1211,1356,1213,1212,1357,1214,1213,1358,1215,1214,1359,1216,1215,1360,1217,1216,1361,1218,1217,1362,1219,1218,1363,1220,1219,1364,1221,1220,1365,1223,1221,1329,1222,1258,1367,1256,1223,1369,1225,1224,1370,1368,1224,1369,1371,1227,1228,1372,1370,1227,1371,1373,1374,1372,1228,1373,1375,1231,1232,1376,1374,1377,1233,1231,1378,1376,1232,1377,1379,1235,1236,1380,1378,1235,1379,1381,1382,1380,1236,1381,1383,1239,1240,1384,1382,1385,1241,1239,1386,1384,1240,1385,1387,1243,1386,1242,1244,1243,1387,1389,1390,1388,1244,1389,1391,1247,1390,1246,1248,1247,1391,1393,1394,1392,1248,1393,1395,1251,1252,1396,1394,1251,1395,1397,1398,1396,1252,1397,1399,1255,1398,1254,1256,1255,1399,1401,1402,1400,1256,1401,1403,1294,1404,1366,1258,1404,1259,1406,1259,1260,1407,1408,1407,1260,1261,1262,1409,1410,1409,1262,1263,1264,1411,1264,1265,1412,1413,1412,1265,1414,1413,1266,1267,1268,1415,1416,1415,1268,1269,1270,1417,1418,1417,1270,1419,1418,1271,1272,1273,1420,1421,1420,1273,1274,1275,1422,1275,1276,1423,1423,1276,1277,1277,1278,1425,1279,1426,1425,1280,1427,1426,1281,1428,1427,1282,1429,1428,1283,1430,1429,1284,1431,1430,1285,1432,1431,1286,1433,1432,1287,1434,1433,1288,1435,1434,1289,1436,1435,1290,1437,1436,1291,1438,1437,1292,1439,1438,1293,1440,1439,1295,1441,1440,1294,1403,1442,1442,1443,1441,1444,1445,1297,1446,1298,1297,1444,1296,1299,1446,1448,1300,1449,1447,1299,1450,1302,1300,1449,1301,1303,1450,1452,1304,1453,1451,1303,1454,1306,1304,1453,1305,1307,1454,1456,1308,1457,1455,1307,1458,1310,1308,1457,1309,1311,1458,1460,1312,1461,1459,1311,1462,1314,1312,1461,1313,1315,1462,1464,1316,1465,1463,1315,1466,1318,1316,1465,1317,1319,1466,1468,1320,1469,1467,1319,1470,1322,1320,1469,1321,1323,1470,1472,1324,1473,1471,1323,1474,1326,1324,1473,1325,1327,1474,1476,1328,1477,1475,1327,1478,1330,1328,1477,1329,1366,1478,1480,1481,1330,1481,1482,1331,1482,1483,1332,1483,1484,1333,1484,1485,1334,1485,1486,1335,1486,1487,1336,1487,1488,1337,1488,1489,1338,1489,1490,1339,1490,1491,1340,1491,1492,1341,1492,1493,1342,1493,1494,1343,1494,1495,1344,1495,1496,1345,1496,1497,1346,1497,1498,1347,1498,1499,1349,1348,1499,1501,1350,1349,1501,1502,1351,1352,1351,1502,1353,1352,1503,1504,1505,1354,1505,1506,1355,1506,1507,1356,1357,1356,1507,1508,1509,1358,1509,1510,1359,1360,1359,1510,1511,1512,1361,1512,1513,1362,1363,1362,1513,1364,1363,1514,1515,1516,1365,1516,1517,1367,1518,1479,1366,1402,1367,1517,1521,1369,1368,1522,1520,1368,1521,1523,1371,1522,1370,1372,1525,1373,1371,1526,1524,1372,1525,1527,1375,1526,1374,1376,1529,1377,1375,1530,1528,1376,1529,1531,1379,1530,1378,1380,1533,1381,1379,1534,1532,1380,1533,1535,1383,1534,1382,1384,1537,1385,1383,1538,1536,1384,1537,1539,1387,1538,1386,1388,1541,1389,1387,1542,1540,1388,1541,1543,1391,1542,1390,1392,1545,1393,1391,1546,1544,1392,1545,1547,1395,1546,1394,1396,1549,1397,1395,1550,1548,1396,1549,1551,1399,1550,1398,1400,1553,1401,1399,1554,1552,1400,1553,1555,1403,1554,1402,1519,1557,1442,1403,1518,1404,1405,1560,1558,1405,1559,1405,1406,1561,1406,1407,1562,1407,1408,1563,1408,1409,1564,1409,1410,1565,1410,1411,1566,1411,1412,1567,1412,1413,1568,1413,1414,1569,1414,1415,1570,1415,1416,1571,1416,1417,1572,1417,1418,1573,1418,1419,1574,1419,1420,1575,1420,1421,1576,1421,1422,1578,1577,1422,1578,1423,1424,1424,1425,1580,1426,1581,1580,1426,1427,1582,1583,1582,1427,1428,1429,1584,1429,1430,1585,1430,1431,1586,1431,1432,1587,1588,1587,1432,1433,1434,1589,1590,1589,1434,1435,1436,1591,1436,1437,1592,1437,1438,1593,1438,1439,1594,1595,1594,1439,1440,1441,1596,1597,1596,1441,1557,1598,1443,1599,1597,1443,1619,1620,1481,1620,1621,1482,1621,1623,1483,1623,1624,1484,1624,1625,1485,1486,1485,1625,1487,1486,1626,1627,1628,1488,1628,1629,1489,1490,1489,1629,1630,1631,1491,1631,1632,1492,1632,1633,1493,1494,1493,1633,1634,1635,1495,1496,1495,1635,1636,1637,1497,1498,1497,1637,1638,1639,1499,1500,1499,1639,1641,1501,1500,1642,1502,1501,1643,1503,1502,1644,1504,1503,1645,1505,1504,1646,1506,1505,1647,1507,1506,1648,1508,1507,1649,1509,1508,1650,1510,1509,1651,1511,1510,1652,1512,1511,1653,1513,1512,1654,1514,1513,1655,1515,1514,1656,1516,1515,1657,1517,1516,1658,1519,1517,1659,1556,1519,1661,1521,1520,1662,1660,1520,1661,1663,1523,1662,1522,1524,1665,1525,1523,1666,1664,1524,1665,1667,1527,1666,1526,1528,1669,1529,1527,1670,1668,1528,1669,1671,1531,1670,1530,1532,1673,1533,1531,1674,1672,1532,1673,1675,1535,1674,1534,1536,1677,1537,1535,1678,1676,1536,1677,1679,1539,1678,1538,1540,1681,1541,1539,1682,1680,1540,1681,1683,1543,1682,1542,1544,1685,1545,1543,1686,1684,1544,1685,1687,1547,1686,1546,1548,1689,1549,1547,1690,1688,1548,1689,1691,1551,1690,1550,1552,1693,1553,1551,1694,1692,1552,1693,1695,1555,1694,1554,1556,1697,1557,1555,1698,1696,1556,1697,1699,1598,1560,1559,1702,1559,1561,1703,1561,1562,1704,1562,1563,1705,1563,1564,1706,1707,1706,1564,1565,1566,1708,1566,1567,1709,1710,1709,1567,1568,1569,1711,1712,1711,1569,1713,1712,1570,1714,1713,1571,1572,1573,1715,1573,1574,1716,1574,1575,1717,1718,1717,1575,1719,1718,1576,1577,1578,1720,1720,1578,1579,1722,1721,1579,1581,1723,1722,1582,1724,1723,1583,1725,1724,1584,1726,1725,1585,1727,1726,1586,1728,1727,1587,1729,1728,1588,1730,1729,1589,1731,1730,1590,1732,1731,1591,1733,1732,1592,1734,1733,1593,1735,1734,1594,1736,1735,1595,1737,1736,1596,1738,1737,1597,1739,1738,1599,1740,1739,1741,1599,1598,1741,1742,1740,1619,1744,1745,1620,1745,1746,1621,1746,1747,1623,1747,1749,1624,1749,1750,1625,1750,1751,1626,1751,1752,1627,1752,1753,1628,1753,1754,1629,1754,1755,1630,1755,1756,1631,1756,1757,1632,1757,1758,1633,1758,1759,1634,1759,1760,1635,1760,1761,1636,1761,1762,1637,1762,1763,1638,1763,1764,1639,1764,1765,1765,1766,1641,1766,1767,1642,1767,1768,1643,1768,1769,1644,1645,1644,1769,1770,1771,1646,1647,1646,1771,1772,1773,1648,1649,1648,1773,1650,1649,1774,1651,1650,1775,1776,1777,1652,1653,1652,1777,1778,1779,1654,1655,1654,1779,1780,1781,1656,1781,1782,1657,1658,1657,1782,1659,1658,1783,1698,1659,1784,1808,1701,1702,1807,1702,1703,1809,1703,1704,1810,1704,1705,1811,1705,1706,1812,1706,1707,1813,1707,1708,1814,1708,1709,1815,1709,1710,1816,1710,1711,1817,1711,1712,1818,1712,1713,1819,1713,1714,1820,1714,1715,1821,1715,1716,1822,1716,1717,1823,1717,1718,1824,1718,1719,1825,1719,1720,1826,1720,1721,1721,1722,1828,1722,1723,1829,1830,1829,1723,1831,1830,1724,1725,1726,1832,1833,1832,1726,1727,1728,1834,1728,1729,1835,1836,1835,1729,1837,1836,1730,1731,1732,1838,1732,1733,1839,1733,1734,1840,1841,1840,1734,1842,1841,1735,1843,1842,1736,1737,1738,1844,1738,1739,1845,1846,1845,1739,1847,1846,1740,1808,1807,1745,1807,1809,1746,1809,1810,1747,1749,1747,1810,1811,1812,1750,1812,1813,1751,1813,1814,1752,1753,1752,1814,1754,1753,1815,1816,1817,1755,1817,1818,1756,1757,1756,1818,1758,1757,1819,1820,1821,1759,1760,1759,1821,1822,1823,1761,1823,1824,1762,1824,1825,1763,1764,1763,1825,1826,1827,1765,1828,1766,1765,1829,1767,1766,1830,1768,1767,1831,1769,1768,1832,1770,1769,1833,1771,1770,1834,1772,1771,1835,1773,1772,1836,1774,1773,1837,1775,1774,1838,1776,1775,1839,1777,1776,1840,1778,1777,1841,1779,1778,1842,1780,1779,1843,1781,1780,1844,1782,1781,1845,1783,1782,1846,1784,1783,1847,1785,1784
            ]).buffer, webgl.STATIC_DRAW);
            
            const texture_vcahwttk = webgl.createTexture();
            const image_vcahwttk = new Image();
            image_vcahwttk.onload = () => {
                webgl.bindTexture(webgl.TEXTURE_2D, texture_vcahwttk);
                webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, image_vcahwttk);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR_MIPMAP_NEAREST);
                webgl.generateMipmap(webgl.TEXTURE_2D);
            }
            image_vcahwttk.src = './Earth_TEXTURE_CM.tga';

            const geometry_qazzcqj = Object.assign({
                vertexs: v_buff_vcahwttk,
                indexes: f_buff_vcahwttk,
                normals: n_buff_vcahwttk,
                uvs: uvs_buff_vcahwttk,
                texture: texture_vcahwttk,
                count: 11088,
                color: [0.5, 0.5, 0.5, 1],
                transform: new Transform([0.5,0,0,0,0,0.5,0,0,0,0,0.5,0,-2,0,0,1])
            });
            geometries.push(geometry_qazzcqj);

            
            eventScheduler.scheduleInterval((function (event) {
                 this.transform.rotate(
            0, 0.00017453300000000002, 0
        );
            }).bind(geometry_qazzcqj), 16);
        

        

        const PhongFragment = `
            #extension GL_OES_standard_derivatives : enable
            precision highp float; 

            uniform mat4 uPMVMatrix;
            uniform vec4 geometryColor; 

            const vec4 ambient_light = vec4(0.26666666666666666,0.26666666666666666,0.26666666666666666,1);

            const vec3 dir_0 = vec3(0.5,0.5,0.5);

            varying vec3 vNormal;
            varying vec4 vVertexColor;

            void main() {
                float attenuation = 0.0;
                
                 attenuation += max(0.0, dot(vNormal, dir_0));
                
                gl_FragColor = 
                    vVertexColor * vec4(attenuation, attenuation, attenuation, 1.0) +
                    vVertexColor * ambient_light;
            }
        `;

        const PhongVertex = `

            attribute lowp vec3 aVertexPosition; 
            attribute lowp vec3 aVertexNormal;
            attribute lowp vec2 aVertexUV;

            uniform mat4 localTransform;
            uniform mat4 uPMVMatrix; 
            uniform mat4 pMatrix;
            uniform sampler2D uSampler;

            varying vec3 vNormal;
            varying vec4 vVertexColor;
            
            void main(void) {
                gl_Position = pMatrix * uPMVMatrix * localTransform * vec4(aVertexPosition, 1.0); 
                vNormal = (localTransform * vec4(aVertexNormal, 1.0)).xyz;
                vVertexColor = texture2D(uSampler, aVertexUV);
            }

        `;

        // Fragment 
        const PhongFragmentShader = webgl.createShader(webgl.FRAGMENT_SHADER);
        webgl.shaderSource(PhongFragmentShader, PhongFragment);
        webgl.compileShader(PhongFragmentShader);

        if (!webgl.getShaderParameter(PhongFragmentShader, webgl.COMPILE_STATUS)) {
            alert(webgl.getShaderInfoLog(PhongFragmentShader));
        }

        // Vertex
        const PhongVertexShader = webgl.createShader(webgl.VERTEX_SHADER);
        webgl.shaderSource(PhongVertexShader, PhongVertex);
        webgl.compileShader(PhongVertexShader);

        if (!webgl.getShaderParameter(PhongVertexShader, webgl.COMPILE_STATUS)) {
            alert(webgl.getShaderInfoLog(PhongVertexShader));
        }

        // Program
        const PhongShaderProgram = webgl.createProgram();
        webgl.attachShader(PhongShaderProgram, PhongVertexShader);
        webgl.attachShader(PhongShaderProgram, PhongFragmentShader);
        webgl.linkProgram(PhongShaderProgram);
        webgl.useProgram(PhongShaderProgram);

        // Attributes and uniforms
        PhongShaderProgram.vertexPositionAttribute = webgl.getAttribLocation(PhongShaderProgram, "aVertexPosition");
        PhongShaderProgram.vertexNormalAttribute = webgl.getAttribLocation(PhongShaderProgram, "aVertexNormal");
        PhongShaderProgram.vertexUVAttribute = webgl.getAttribLocation(PhongShaderProgram, "aVertexUV");

        PhongShaderProgram.uPMVMatrix = webgl.getUniformLocation(PhongShaderProgram, "uPMVMatrix");
        PhongShaderProgram.pMatrix = webgl.getUniformLocation(PhongShaderProgram, 'pMatrix');
        PhongShaderProgram.localTransform = webgl.getUniformLocation(PhongShaderProgram, 'localTransform');
        PhongShaderProgram.geometryColor = webgl.getUniformLocation(PhongShaderProgram, 'geometryColor');

        webgl.enableVertexAttribArray(PhongShaderProgram.vertexPositionAttribute);
        webgl.enableVertexAttribArray(PhongShaderProgram.vertexNormalAttribute);
        webgl.enableVertexAttribArray(PhongShaderProgram.vertexUVAttribute);

    
            const aspect = canvas.width / canvas.height;
            const b = 0.41421356237309503 * aspect;
            const h = b + b;
            const camera_tppeamfmd = {
                projectionMatrix: [
                    1 * 2 / h, 0,            0,                    0,
                    0,         1 * 2 / 0.8284271247461901, 0,                    0,
                    0,         0,            -11 / 9.9,           -1,
                    0,         0,            -(10 * 1 * 2) / 9.9, 0
                ],
                transform: new Transform([-0.9396930301180461,0,-0.3420190186927694,0,0,0.9999999999999999,0,0,0.3420190186927694,0,-0.9396930301180461,0,0,0,-5,1])
            };

            cameras.push(camera_tppeamfmd);
            enableCamera(camera_tppeamfmd);
            
            eventScheduler.scheduleDrag((function (event) {
                if (event.button == 0) {
                     this.transform.rotate(
            event.delta_y*-1, event.delta_x, 0
        );
                }
            }).bind(camera_tppeamfmd));
        

            eventScheduler.scheduleDrag((function (event) {
                if (event.button == 2) {
                     this.transform.translate(
            event.delta_x*2, event.delta_y*2, 0
        );
                }
            }).bind(camera_tppeamfmd));
        
        

    /*
    *
    */
    function updateMatrix () {
        // TODO - Remember to encode the nomrla transformation matrix as the
        // transpose of the inverse, to avoid errors when the object is scaled.
        webgl.uniformMatrix4fv(PhongShaderProgram.uPMVMatrix, false, activeCamera.transform.matrix);
        requestAnimationFrame(() => render());
    }

    /*
    *
    */
    function enableCamera (camera) {
        activeCamera = camera;
        webgl.uniformMatrix4fv(PhongShaderProgram.pMatrix, false, camera.projectionMatrix);
        webgl.uniformMatrix4fv(PhongShaderProgram.uPMVMatrix, false, camera.transform.matrix);
        requestAnimationFrame(() => render());
    }

    /*
    * Render Geometry Objectsl
    * TODO Remember to implement isDirty pattern
    */
    function render () {
        
        webgl.clear(webgl.DEPTH_BUFFER_BIT);
        webgl.clear(webgl.COLOR_BUFFER_BIT);

        for (const geometry of geometries) {
            webgl.uniformMatrix4fv(PhongShaderProgram.localTransform, false, geometry.transform.matrix);
            webgl.uniform4fv(PhongShaderProgram.geometryColor, geometry.color);
            
            webgl.bindBuffer(webgl.ARRAY_BUFFER, geometry.vertexs);
            webgl.vertexAttribPointer(PhongShaderProgram.vertexPositionAttribute, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, geometry.normals);
            webgl.vertexAttribPointer(PhongShaderProgram.vertexNormalAttribute, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, geometry.uvs);
            webgl.vertexAttribPointer(PhongShaderProgram.vertexUVAttribute, 2, webgl.FLOAT, false, 0, 0);

            webgl.bindTexture(webgl.TEXTURE_2D, geometry.texture);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, geometry.indexes);
            webgl.drawElements(webgl.TRIANGLES, geometry.count, webgl.UNSIGNED_SHORT, 0);
        }

    }

    requestAnimationFrame(() => render());

}



