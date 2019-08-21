import React from 'react';
import * as THREE from 'three'

export default class WebGLContainer extends React.Component {

    loadGLShape() {

        // //SETUP
        // var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('demo'), antialias: true });
        // renderer.setClearColor(0x000);
        // renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize(window.innerWidth, window.innerHeight);

        // //CAMERA
        // var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

        // //SCENE
        // var scene = new THREE.Scene();


        // //LIGHTS
        // var light = new THREE.AmbientLight(0xffffff, 0.5);
        // scene.add(light);

        // var light1 = new THREE.PointLight(0xffffff, 0.5);
        // scene.add(light1);

        // // PARTICLES -- GEOMETRY //
        // var particleCount = 2000;
        // var particles = new THREE.Geometry();

        // //Create all particles
        // for (var p = 0; p < particleCount; p++) {

        //     var particle = new THREE.Vector3();
        //     particle.x = THREE.Math.randFloatSpread( 2000 );
        //     particle.y = THREE.Math.randFloatSpread( 2000 );
        //     particle.z = THREE.Math.randFloatSpread( 2000 );

        //     //add particles to geometry
        //     particles.vertices.push(particle);
        // }

        // // MATERIALS
        // var pMaterial = new THREE.PointsMaterial({ color: 0xFF2222 });

        // var particleSpace = new THREE.Points (particles, pMaterial)

        // //POSITIONING
        // // camera.position.z = 1000; // mesh.position.set(0, 0, -1000);  SIMPLY MOVE Z CAMERA + SOME

        // scene.add(particleSpace);



        // requestAnimationFrame(animate);

        // function animate() {
        //     renderer.render(scene, camera);
        //     requestAnimationFrame(animate);
        // }


    }

    newGLShape() {

        //RENDER
        var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('demo'), antialias: true });
        renderer.setClearColor(0x81C66F)
        renderer.setSize(window.innerWidth, window.innerHeight);

        //SCENE
        var scene = new THREE.Scene();

        //CAMERA
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
        scene.add(camera);

        //GEOMETRY
        var geometry = new THREE.BoxGeometry(200, 200, 200);

        //MATERIAL
        var material = new THREE.MeshLambertMaterial({
            color: 0xaa6666,
            wireframe: true,
            antialias: true,
            transparent: true,
        });

        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        var waveSine = 0;

        //TEXT CREATION
        var textGeo = new THREE.PlaneGeometry(300, 300)
        THREE.ImageUtils.crossOrigin = '';
        var textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png')
        var textMaterial = new THREE.MeshLambertMaterial({
            color: 0x00ffff,
            opacity: 1,
            map: textTexture,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        var text = new THREE.Mesh(textGeo, textMaterial);
        text.position.z = 800;
        scene.add(text);

        //LIGHTS CAMERA ACTION
        var light = new THREE.DirectionalLight(0x694873, 0.5);
        light.position.set(-1, 0, 1);
        scene.add(light);

        //SMOKE TEXTURE
        var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
        var smokeMaterial = new THREE.MeshLambertMaterial({
            color: 0xfff8eb,
            map: smokeTexture,
            transparent: true,
        });
        var smokeGeo = new THREE.PlaneGeometry(300, 300);
        var smokeParticles = [];

        for (var p = 0; p < 150; p++) {
            var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            scene.add(particle);
            smokeParticles.push(particle);
        }

     
        function animate() {
            requestAnimationFrame(animate);
            evolveSmoke();
            render();

        }

        function evolveSmoke() {
            var lengthSmokeParticles = smokeParticles.length;
            while(lengthSmokeParticles--){
                smokeParticles[lengthSmokeParticles].rotation.z += (0.003 * 2);
            }
        }

           // A L W A Y S    C A L L     R E N D E R E R    !!!!-------- SCENE/CAMERA
           function render() {
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;
            waveSine += 0.01;
            mesh.position.z = 100 + (Math.sin(waveSine) * 500);
            renderer.render(scene, camera);
        }

        animate();

    }


    componentDidMount() {
        // this.loadGLShape();
        this.newGLShape();

    }

    render() {
        return (
            <div>
                <canvas id="demo">  </canvas>

            </div>
        )
    }
};
