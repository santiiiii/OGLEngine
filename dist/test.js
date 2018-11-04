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

    /*
    * Geometries COnfiguration
    */
    const geometries = [];

    /*
    * Basic Shader Configuration
    */
    const fragment = "precision highp float; void main() { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); } ";
    const vertex = " attribute lowp vec3 aVertexPosition; uniform mat4 uPMVMatrix; uniform mat4 pMatrix; void main(void) { gl_Position = pMatrix * uPMVMatrix * vec4(aVertexPosition, 1.0); } ";

    // Fragment 
    const fragmentShader = webgl.createShader(webgl.FRAGMENT_SHADER);
    webgl.shaderSource(fragmentShader, fragment);
    webgl.compileShader(fragmentShader);

    // Vertex
    const vertexShader = webgl.createShader(webgl.VERTEX_SHADER);
    webgl.shaderSource(vertexShader, vertex);
    webgl.compileShader(vertexShader);

    // Program
    const shaderProgram = webgl.createProgram();
    webgl.attachShader(shaderProgram, vertexShader);
    webgl.attachShader(shaderProgram, fragmentShader);
    webgl.linkProgram(shaderProgram);
    webgl.useProgram(shaderProgram);

    // Attributes and uniforms
    shaderProgram.vertexPositionAttribute = webgl.getAttribLocation(shaderProgram, "aVertexPosition");
    shaderProgram.uPMVMatrix = webgl.getUniformLocation(shaderProgram, "uPMVMatrix");
    shaderProgram.pMatrix = webgl.getUniformLocation(shaderProgram, 'pMatrix');
    webgl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    /*
    * Transformation Matrix Configuration
    */
    const aspect = canvas.width / canvas.height;
    const a = 1 * Math.tan(45 * Math.PI / 360);
    const b = a * aspect;
    const h = b + b, i = a + a, j = 10 - 1;

    webgl.uniformMatrix4fv(shaderProgram.pMatrix, false, [
        1 * 2 / h, 0, 0, 0,
        0, 1 * 2 / i, 0, 0,
        0, 0, -11 / j, -1,
        0, 0, -(10 * 1 * 2) / j, 0
    ]);

    webgl.uniformMatrix4fv(shaderProgram.uPMVMatrix, false, [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, -5, 1
    ]);

    

                const v_buff = webgl.createBuffer();
                webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff);
                webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([-2,-2,2,2,-2,2,2,2,2,-2,2,2,-2,-2,-2,-2,2,-2,2,2,-2,2,-2,-2,-2,2,-2,-2,2,2,2,2,2,2,2,-2,-2,-2,-2,2,-2,-2,2,-2,2,-2,-2,2,2,-2,-2,2,2,-2,2,2,2,2,-2,2,-2,-2,-2,-2,-2,2,-2,2,2,-2,2,-2]).buffer, webgl.STATIC_DRAW);

                const f_buff = webgl.createBuffer();
                webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff);
                webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]).buffer, webgl.STATIC_DRAW);

                geometries.push({
                    vertexs: v_buff,
                    indexes: f_buff,
                    count: 36
                });

            

    /*
    * Render Geometry Objectsl
    */
    const render = () => {
        
        webgl.clear(webgl.DEPTH_BUFFER_BIT);
        webgl.clear(webgl.COLOR_BUFFER_BIT);

        for (const geometry of geometries) {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, geometry.vertexs);
            webgl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, webgl.FLOAT, false, 0, 0);
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, geometry.indexes);
            webgl.drawElements(webgl.TRIANGLES, geometry.count, webgl.UNSIGNED_SHORT, 0);
        }

    }

    requestAnimationFrame(() => render());

}


