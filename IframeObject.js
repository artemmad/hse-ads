import { CSS3DObject } from './three/examples/jsm/renderers/CSS3DRenderer.js';

export default class IframeObject {
    position = {
        x: 0,
        y: 0,
        z: 0
    }

    rotation = {
        x: 0,
        y: 0,
        z: 0
    }

    scale = {
        x: 0,
        y: 0,
        z: 0
    }

    /**
    * Define a context
    * 
    * @param  {THREE.Scene} scene the CSS scene
    * @param  {string} url target url (iframe src)
    */
    constructor(scene, url) {
        this.scene = scene;
        this.url = url;
    }

    /**
    * Set page size. Default: 1000px x 1000px
    * 
    * @param  {number} width page width inside aframe
    * @param  {number} height page height inside aframe
    */
    setSize(width, heigth) {
        this.width = width;
        this.height = heigth;
    }

    /**
    * Set position on scene. Default: (0, 0, 0)
    * 
    * @param  {number} x x coordinate
    * @param  {number} y y coordinate
    * @param  {number} z z coordinate
    */
    setPosition(x, y, z) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    /**
    * Set rotation of object. Default: (0, 0, 0)
    * 
    * @param  {number} x x coordinate
    * @param  {number} y y coordinate
    * @param  {number} z z coordinate
    */
    setRotation(x, y, z) {
        this.rotation.x = x;
        this.rotation.y = y;
        this.rotation.z = z;
    }

    /**
    * Set scale of object. Default: (0, 0, 0)
    * 
    * @param  {number} x x coordinate
    * @param  {number} y y coordinate
    * @param  {number} z z coordinate
    */
    setScale(x, y, z) {
        this.scale.x = x;
        this.scale.y = y;
        this.scale.z = z;
    }

    /**
    * @returns {CSS3DObject} Get created element
    */
    get object() {
        // create the dom Element
        let element = document.createElement( 'iframe' );
        element.src = 'http://realityfamily.ru/testad/';

        element.style.width = '1000px';
        element.style.height = '1000px';

        if (this.width) {
            element.style.width = `${this.width}px`;
            element.style.height = `${this.height}px`;
        }

        const cssObject = new CSS3DObject(element);
        cssObject.position.set(this.position.x, this.position.y, this.position.z);
        cssObject.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
        cssObject.scale.set(this.scale.x, this.scale.y, this.scale.z);

        return cssObject;
    }
}