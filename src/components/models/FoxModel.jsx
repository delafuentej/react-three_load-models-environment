import { Clone, useGLTF, useAnimations} from '@react-three/drei';
import { useEffect } from 'react';
import { useControls } from 'leva';



export default function FoxModel() {

    const foxModel = useGLTF('./Fox/glTF-Binary/Fox.glb');
    const animations = useAnimations(foxModel.animations, foxModel.scene);
    //we have access to the various animations provided with the model and 
    // each one has been converted into an AnimationAction using the name of the animation
    // (Run, Survey, Walk in the case of the Fox)

    const {animationName} = useControls({
        animationName: {options: animations.names} // ['Survey', 'Walk', 'Run']
    })


    useEffect(()=> {
       
        const action = animations.actions[animationName];
        action
            .reset()
            .fadeIn(0.5)
            .play();

        // clean function
        return () => {
            action.fadeOut(0.5)
        }

        console.log(animationName)
    }, [animationName]);
    

    return <>
                 

                 <primitive object={foxModel.scene} scale={0.06} position={[0, -1, 0]} />
                
                 {/* <Clone model={foxModel.scene} scale={0.02} position={[0, -1, 0]} />
                  <Clone model={foxModel.scene} scale={0.02} position={[-2, -1, 0]} />  */}
                
            </>

}
// preload of useGLTF
useGLTF.preload('./Fox/glTF-Binary/Fox.glb');