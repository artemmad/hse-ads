import * as THREE from './three/build/three.module.js';
import { CSS3DObject, CSS3DRenderer } from './three/examples/jsm/renderers/CSS3DRenderer.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
import { IndoorControls } from './three/examples/jsm/controls/IndoorControls.js';
import IframeObject from './IframeObject.js';

// // Basic scene set up //
// ///////////////////////

const glScene   = new THREE.Scene();

const camera  = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(-4.5, 1.5, -1.6);

const light = new THREE.AmbientLight(0xf0f0f0);
glScene.add(light);


// Add iframes //
//////////////

const cssScene   = new THREE.Scene();

const url = 'https://realityfamily.ru/testad/'

// to left 17
let iframe = new IframeObject(cssScene, url);
iframe.setPosition(-11.8, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-13.811, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-15.822, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-17.833, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-19.844, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-21.855, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-23.866, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-25.877, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-27.888, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-9.789, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-7.778, 1.068, -3.830);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);


//forward
iframe = new IframeObject(cssScene, url);
iframe.setPosition(-6.765, 1.068, -4.824);
iframe.setRotation(0, Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-6.765, 1.068, -6.3);
iframe.setRotation(0, Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);


//15
iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -11.35);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -9.339);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -7.328);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -5.317);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -3.306);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, -1.295);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-1.8, 1.068, 0.716);
iframe.setRotation(0, - Math.PI / 2, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

//14
iframe = new IframeObject(cssScene, url);
iframe.setPosition(-11.8, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-13.811, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-15.822, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-17.833, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-19.844, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-21.855, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-23.866, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-25.877, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-27.888, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-9.789, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);

iframe = new IframeObject(cssScene, url);
iframe.setPosition(-7.778, 1.068, -7.32);
iframe.setRotation(0, Math.PI, 0);
iframe.setScale(0.002, 0.002, 0.002);
cssScene.add(iframe.object);


//create materaials for image moc's
// const img1 = new THREE.MeshLambertMaterial({
//     map:new THREE.TextureLoader().load('res/1.png')
// });

// const img2 = new THREE.MeshLambertMaterial({
//     map:THREE.TextureLoader().load('res/2.png')
// });

// const img3 = new THREE.MeshLambertMaterial({
//     map:THREE.TextureLoader().load('res/3.png')
// });

// const img4 = new THREE.MeshLambertMaterial({
//     map:THREE.TextureLoader().load('res/4.png')
// });


// add moc reclama planes
// var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img1);
// plane.setPosition(-7.778, 2, -6)
// glScene.add(plane);

// Create renderers //
/////////////////////

let cssRenderer = new CSS3DRenderer();
cssRenderer.setSize( window.innerWidth, window.innerHeight );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild(cssRenderer.domElement);

const rendererMain = new THREE.WebGLRenderer({ alpha: true });
rendererMain.setSize( window.innerWidth, window.innerHeight );
rendererMain.domElement.style.position	= 'absolute';
rendererMain.domElement.style.top	= 0;
rendererMain.domElement.style.zIndex	= -1;
cssRenderer.domElement.appendChild( rendererMain.domElement );


// Add controller //
///////////////////

const controls = new IndoorControls(camera, rendererMain.domElement);
controls.update();


// Add controller ground //
//////////////////////////

let groundMaterial = new THREE.MeshBasicMaterial();
groundMaterial.transparent = true;
groundMaterial.opacity = 0;
var groundGeometry = new THREE.PlaneGeometry(90, 50);
var ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.renderOrder = 1;
ground.rotateX(- Math.PI / 2);
glScene.add(ground);

controls.ground.push(ground);


// Add visual ground //
//////////////////////

let element = document.createElement('div');
element.style.width = '90px';
element.style.height = '50px';
element.style.background = 'white';

const cssObject = new CSS3DObject(element);
cssObject.rotation.set(Math.PI / 2, 0, 0);
cssObject.position.set(0, -300, 0);
cssScene.add(cssObject);

// Add model //
//////////////

var loader = new GLTFLoader();
loader.load( 'scene.gltf', function ( object ) {

    object.scene.position.set(0, 0, 0);
    //object.scene.scale.set(0.000000000000009, 0.00000000000001, 0.000000000000009)
    glScene.add(object.scene);

    // controls.ground.push( object.scene );

    console.log(object)
});


// // Animation loop //
// ///////////////////

let lastTimeMsec= 0
const animate = (nowMsec) => {
	requestAnimationFrame( animate );

    lastTimeMsec	= lastTimeMsec || nowMsec - 1000 / 60;
	let deltaMsec	= Math.min(200, nowMsec - lastTimeMsec);
	lastTimeMsec	= nowMsec;

    controls.update()

	rendererMain.render(glScene, camera);
	cssRenderer.render(cssScene, camera);
};
animate(0);
