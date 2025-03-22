import { OrbitControls, Environment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
// import FlightHelmetModel from './components/models/FlightHelmetModel';
// import HamburgerModel from './components/models/HamburgerModel';
import FoxModel from './components/models/FoxModel';
// import Fox from './components/rtfComponents/Fox';
import Placeholder from './components/PlaceHolder';

// our model will start loading only  when the component is instantiated
// if we had conditions to display the component and that condition suddenly is true, the user would see the placeholder
export default function Experience(){

    const {envMapIntensity,  envMapHeight, envMapRadius, envMapScale } = useControls('envMap', {
        envMapIntensity: {value: 0.3, min: 0, max: 12},
        envMapHeight: {value: 7, min: 0, max: 100},
        envMapRadius: {value: 28, min: 10, max: 1000},
        envMapScale: {value: 100, min: 10, max: 1000}
    })

    const scene = useThree( state => state.scene);
    useEffect(() =>
        {
            scene.environmentIntensity = envMapIntensity
        }, [ envMapIntensity ])


    return <>
        <Environment
            background
            preset='forest'
            ground={{
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale
            }} 
        >
     
        </Environment>
        
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 }  shadow-normalBias={0.04}/>
        <ambientLight intensity={ 1.5 } />

      

        {/* <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

       <Suspense
            fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]}/>}
       >
            <FoxModel />
            {/* <Fox scale={0.02} position={[0 , -1, 3]}/> */}
            {/* <FlightHelmetModel />
            <HamburgerModel /> */}
       </Suspense>
          
    </>
};

