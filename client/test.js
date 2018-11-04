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
   let isLeftMousePressed = false;
   let prevXPosition = 0;
   let prevYPosition = 0;

   canvas.addEventListener('mousedown', (event) => {
       isLeftMousePressed = event.button == 0;
       prevXPosition = event.x;
       prevYPosition = event.y;
   });

   canvas.addEventListener('mouseup', (event) => {
       isLeftMousePressed = false;
   });

    /*
    * Basic Shader Configuration
    */
    const fragment = `
        #extension GL_OES_standard_derivatives : enable
        precision highp float; 

        varying vec3 vPosition;
        
        vec3 normals(vec3 pos) { 
            vec3 fdx = dFdx(pos); 
            vec3 fdy = dFdy(pos); 
            return normalize(cross(fdx, fdy)); 
        }  

        void main() {
            vec3 normal = normalize(normals(vPosition)); 
            float attenuation = max(0.0, dot(normal, normalize(vec3(1.0, 0.5, 0.5))));
            gl_FragColor = vec4(attenuation, attenuation, attenuation, 1.0); 
        } 
    `;

    const vertex = ` 
        attribute lowp vec3 aVertexPosition; 
        uniform mat4 uPMVMatrix; 
        uniform mat4 pMatrix; 
        varying vec3 vPosition; 
        
        void main(void) {
            gl_Position = pMatrix * uPMVMatrix * vec4(aVertexPosition, 1.0); 
            vPosition = vec4(pMatrix * uPMVMatrix * vec4(aVertexPosition, 1.0)).xyz; 
        }
    `;

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
    let worldMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    webgl.uniformMatrix4fv(shaderProgram.pMatrix, false, [
        1 * 2 / h, 0, 0, 0,
        0, 1 * 2 / i, 0, 0,
        0, 0, -11 / j, -1,
        0, 0, -(10 * 1 * 2) / j, 0
    ]);
    webgl.uniformMatrix4fv(shaderProgram.uPMVMatrix, false, worldMatrix);

    
            canvas.addEventListener('mousemove', (event) => {

                if (isLeftMousePressed) {
                    const variables = {
                        delta_x: (event.x - prevXPosition) * 0.001,
                        delta_y: -(event.y - prevYPosition) * 0.001
                    }

                    

            const x = variables['delta_x'] || 0.0;
            const y = variables['delta_y'] || 0.0;
            const z = variables['none'] || 0.0;

            worldMatrix[12] += x;
            worldMatrix[13] += y;
            worldMatrix[14] += z;

        

                    prevXPosition = event.x;
                    prevYPosition = event.y;

                    updateMatrix();
                }
                
            });
        

            const v_buff = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([1.5,-0.5,-4.5,2.5,-0.5,-4.5,2.5,0.5,-4.5,1.5,0.5,-4.5,1.5,-0.5,-5.5,1.5,0.5,-5.5,2.5,0.5,-5.5,2.5,-0.5,-5.5,1.5,0.5,-5.5,1.5,0.5,-4.5,2.5,0.5,-4.5,2.5,0.5,-5.5,1.5,-0.5,-5.5,2.5,-0.5,-5.5,2.5,-0.5,-4.5,1.5,-0.5,-4.5,2.5,-0.5,-5.5,2.5,0.5,-5.5,2.5,0.5,-4.5,2.5,-0.5,-4.5,1.5,-0.5,-5.5,1.5,-0.5,-4.5,1.5,0.5,-4.5,1.5,0.5,-5.5,-2.5,0.5,-4.5,-1.5,0.5,-4.5,-1.5,1.5,-4.5,-2.5,1.5,-4.5,-2.5,0.5,-5.5,-2.5,1.5,-5.5,-1.5,1.5,-5.5,-1.5,0.5,-5.5,-2.5,1.5,-5.5,-2.5,1.5,-4.5,-1.5,1.5,-4.5,-1.5,1.5,-5.5,-2.5,0.5,-5.5,-1.5,0.5,-5.5,-1.5,0.5,-4.5,-2.5,0.5,-4.5,-1.5,0.5,-5.5,-1.5,1.5,-5.5,-1.5,1.5,-4.5,-1.5,0.5,-4.5,-2.5,0.5,-5.5,-2.5,0.5,-4.5,-2.5,1.5,-4.5,-2.5,1.5,-5.5]).buffer, webgl.STATIC_DRAW);

            const f_buff = webgl.createBuffer();
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff);
            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23,24,25,26,24,26,27,28,29,30,28,30,31,32,33,34,32,34,35,36,37,38,36,38,39,40,41,42,40,42,43,44,45,46,44,46,47]).buffer, webgl.STATIC_DRAW);

            geometries.push({
                vertexs: v_buff,
                indexes: f_buff,
                count: 72
            });

        

    const updateMatrix = () => {
        webgl.uniformMatrix4fv(shaderProgram.uPMVMatrix, false, worldMatrix);
        requestAnimationFrame(() => render());
    }

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


