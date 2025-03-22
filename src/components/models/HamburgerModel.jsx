import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export default function HamburgerModel() {
     //const model = useLoader(GLTFLoader,'./hamburger.glb');

    const hamburgerModel = useLoader(
        GLTFLoader, 
        './hamburger-draco.glb',
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader);
        }
    );
    


    return <>
                 <primitive object={hamburgerModel.scene} scale={0.35} position={[3,-1,-1]}/>
            </>

}