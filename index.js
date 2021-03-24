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
const img1 = new THREE.MeshLambertMaterial({
    map:new THREE.TextureLoader().load('./res/1.png')
});

const img2 = new THREE.MeshLambertMaterial({
    map:new THREE.TextureLoader().load('./res/2.png')
});

const img3 = new THREE.MeshLambertMaterial({
    map:new THREE.TextureLoader().load('./res/3.png')
});

const img4 = new THREE.MeshLambertMaterial({
    map:new THREE.TextureLoader().load('./res/4.png')
});

let imgMass = [img1, img2, img3, img4];
let randImage =  () => {
    return imgMass[Math.floor(Math.random() * Math.floor(4))]
}


// add moc reclama planes
// spacing between planes 4.6

// 13
var plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-8.8, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-4.2, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-13.4, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-18, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-22.6, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-27.2, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-31.8, 1.068, -12.3);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-36.4, 1.068, -12.3);
glScene.add(plane);

//11
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, -10);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, -5.4);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, -0.8);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, 3.8);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, 8.4);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, 13);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-40.93, 1.068, 17.6);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

//9
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-38.8, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-34.2, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-29.6, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-25, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-20.4, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-15.8, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-11.2, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-6.6, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-2, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(2.6, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(7.2, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(11.8, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(16.4, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(21, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(25.6, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(30.2, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(34.8, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(39.4, 1.068, 20.7);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

//7
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, 18.4);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, 13.8);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, 9.2);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, 4.6);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, 0);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, -4.6);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(41, 1.068, -9.2);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

//5
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(39, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(34.4, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(29.8, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(25.2, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(20.6, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(16, 1.068, -13.7);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(11.4, 1.068, -13.7);
glScene.add(plane);

//3
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(7.7, 1.068, -17);
plane.rotation.set(0, -Math.PI/2, 0);
glScene.add(plane);

//1
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(5.3, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(0.7, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-3.9, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-8.5, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-13.1, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-17.7, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-22.3, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-26.9, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-31.5, 1.068, -20.8);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-36.1, 1.068, -20.8);
glScene.add(plane);

//2
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-36.1, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-31.5, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-26.9, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-22.3, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-17.7, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-13.1, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-8.5, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-3.9, 1.068, -15.9);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);


//4
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(2.8, 1.068, -12.5);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

//6
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(5.2, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(9.8, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(14.4, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(19, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(23.6, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(28.2, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(32.8, 1.068, -8.76);
plane.rotation.set(0, Math.PI, 0);
glScene.add(plane);

//8
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(36.1, 1.068, -6.3);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(36.1, 1.068, -1.7);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(36.1, 1.068, 2.9);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(36.1, 1.068, 7.5);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(36.1, 1.068, 12.1);
plane.rotation.set(0, Math.PI/2, 0);
glScene.add(plane);

//10
plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(33, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(28.4, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(23.8, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(19.2, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(14.6, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(10, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(5.4, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(0.8, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-3.8, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-8.4, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-13, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-17.6, 1.068, 15.75);
glScene.add(plane);

plane = new THREE.Mesh(new THREE.PlaneGeometry(4.59, 2.25),randImage());
plane.position.set(-22.2, 1.068, 15.75);
glScene.add(plane);









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
