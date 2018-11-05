function EventScheduler (canvas, update) {

    this.isLeftMousePressed = false;
    this.prevXPosition = 0;
    this.prevYPosition = 0;
    this.drag_schedules = [];

    canvas.addEventListener('mousedown', (event) => {
        this.isLeftMousePressed = event.button == 0;
        this.prevXPosition = event.x;
        this.prevYPosition = event.y;
    });
 
    canvas.addEventListener('mousemove', (event) => this.ondrag(event));

    canvas.addEventListener('mouseup', (event) => {
        this.isLeftMousePressed = false;
    });

    this.update = update;
}

EventScheduler.prototype.ondrag = function (event) {
    if (!this.isLeftMousePressed) {
        return;
    }

    const variables = {
        delta_x: (event.x - this.prevXPosition) * 0.001,
        delta_y: -(event.y - this.prevYPosition) * 0.001
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
        uniform mat4 localTransform; 
        uniform mat4 uPMVMatrix; 
        uniform mat4 pMatrix; 
        varying vec3 vPosition; 
        
        void main(void) {
            gl_Position = pMatrix * uPMVMatrix * localTransform * vec4(aVertexPosition, 1.0); 
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
    shaderProgram.localTransform = webgl.getUniformLocation(shaderProgram, 'localTransform');
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

    

            const v_buff_ybudaxhuo = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff_ybudaxhuo);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                -1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1
            ]).buffer, webgl.STATIC_DRAW);

            const f_buff_ybudaxhuo = webgl.createBuffer();
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff_ybudaxhuo);
            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23
            ]).buffer, webgl.STATIC_DRAW);

            const geometry_ybxtrqfah = {
                vertexs: v_buff_ybudaxhuo,
                indexes: f_buff_ybudaxhuo,
                count: 36,
                localTransform: [0.5,0,0,0,0,0.5,0,0,0,0,0.5,0,2,0,-5,1]
            };
            geometries.push(geometry_ybxtrqfah);

            eventScheduler.scheduleDrag((function (event) {
                this.localTransform[12] += event['delta_x'] || 0.0;
                this.localTransform[13] += event['delta_y'] || 0.0;
                this.localTransform[14] += event['none'] || 0.0;
             }).bind(geometry_ybxtrqfah));

        

            const v_buff_csghlfmrk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff_csghlfmrk);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                -1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1
            ]).buffer, webgl.STATIC_DRAW);

            const f_buff_csghlfmrk = webgl.createBuffer();
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff_csghlfmrk);
            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23
            ]).buffer, webgl.STATIC_DRAW);

            const geometry_goxvgqb = {
                vertexs: v_buff_csghlfmrk,
                indexes: f_buff_csghlfmrk,
                count: 36,
                localTransform: [0.5,0,0,0,0,0.5,0,0,0,0,0.5,0,-2,0,-5,1]
            };
            geometries.push(geometry_goxvgqb);

            eventScheduler.scheduleDrag((function (event) {

                let x = 0;
                let y = 1;
                let z = 0;
        
                // Compute the length of the rotation vector
                let len = Math.sqrt(x*x + y*y + z*z);
        
                // If it is equal o less than zero, exit
                if (len <= 0.0) {
                    return;
                }
        
                // Normalize the vector
                len = 1.0 / len;
                x *= len;
                y *= len;
                z *= len;
        
                let s = -0.766044683523313;
                let c = 0.6427873231837007;
                let t = 0.3572126768162993;
        
                // TODO
                let a00 = this.localTransform[0];
                let a01 = this.localTransform[1];
                let a02 = this.localTransform[2];
                let a03 = this.localTransform[3];
                let a10 = this.localTransform[4];
                let a11 = this.localTransform[5];
                let a12 = this.localTransform[6];
                let a13 = this.localTransform[7];
                let a20 = this.localTransform[8];
                let a21 = this.localTransform[9];
                let a22 = this.localTransform[10];
                let a23 = this.localTransform[11];
        
                //TODO
                let b00 = x * x * t + c;
                let b01 = y * x * t + z * s;
                let b02 = z * x * t - y * s;
                let b10 = x * y * t - z * s;
                let b11 = y * y * t + c;
                let b12 = z * y * t + x * s;
                let b20 = x * z * t + y * s;
                let b21 = y * z * t - x * s;
                let b22 = z * z * t + c;
        
                // TODO
                this.localTransform[0] = a00 * b00 + a10 * b01 + a20 * b02;
                this.localTransform[1] = a01 * b00 + a11 * b01 + a21 * b02;
                this.localTransform[2] = a02 * b00 + a12 * b01 + a22 * b02;
                this.localTransform[3] = a03 * b00 + a13 * b01 + a23 * b02;
                this.localTransform[4] = a00 * b10 + a10 * b11 + a20 * b12;
                this.localTransform[5] = a01 * b10 + a11 * b11 + a21 * b12;
                this.localTransform[6] = a02 * b10 + a12 * b11 + a22 * b12;
                this.localTransform[7] = a03 * b10 + a13 * b11 + a23 * b12;
                this.localTransform[8] = a00 * b20 + a10 * b21 + a20 * b22;
                this.localTransform[9] = a01 * b20 + a11 * b21 + a21 * b22;
                this.localTransform[10] = a02 * b20 + a12 * b21 + a22 * b22;
                this.localTransform[11] = a03 * b20 + a13 * b21 + a23 * b22;

             }).bind(geometry_goxvgqb));

        
            const v_buff_vgshhxte = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, v_buff_vgshhxte);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
                
            ]).buffer, webgl.STATIC_DRAW);

            const f_buff_vgshhxte = webgl.createBuffer();
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, f_buff_vgshhxte);
            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                
            ]).buffer, webgl.STATIC_DRAW);

            geometries.push({
                vertexs: v_buff_vgshhxte,
                indexes: f_buff_vgshhxte,
                count: 0,
                localTransform: [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
            })
        

    function updateMatrix () {
        webgl.uniformMatrix4fv(shaderProgram.uPMVMatrix, false, worldMatrix);
        requestAnimationFrame(() => render());
    }

    /*
    * Render Geometry Objectsl
    */
    function render () {
        
        webgl.clear(webgl.DEPTH_BUFFER_BIT);
        webgl.clear(webgl.COLOR_BUFFER_BIT);

        for (const geometry of geometries) {
            webgl.uniformMatrix4fv(shaderProgram.localTransform, false, geometry.localTransform);
            webgl.bindBuffer(webgl.ARRAY_BUFFER, geometry.vertexs);
            webgl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, webgl.FLOAT, false, 0, 0);
            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, geometry.indexes);
            webgl.drawElements(webgl.TRIANGLES, geometry.count, webgl.UNSIGNED_SHORT, 0);
        }

    }

    requestAnimationFrame(() => render());

}


