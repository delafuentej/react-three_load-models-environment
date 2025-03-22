import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export default function FlightHelmetModel() {

    const flightHelmetModel = useLoader(
        GLTFLoader, 
        './FlightHelmet/glTF/FlightHelmet.gltf',
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader);
        }
    );


    return <>
                 
                 <primitive object={flightHelmetModel.scene} scale={5} position-y={-1}/>
            </>

}