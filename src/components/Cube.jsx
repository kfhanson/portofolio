import React, {useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import FaceContent from "./FaceContent"
import { useLocation, useNavigate } from "react-router-dom";

const Cube = ({ size = 2 }) => {
    const cubeRef = useRef(null);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [activeFace, setActiveFace] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const faceRoutes = [
        '/',
        '/about',
        '/skills',
        '/projects',
        '/experience',
        '/footer'
    ];

    const initialFaceIndex = faceRoutes.indexOf(location.pathname);
    const [currentFaceIndex, setCurrentFaceIndex] = useState(initialFaceIndex === -1 ? 0 : initialFaceIndex);

    const { rotation: springRotation } = useSpring({
        rotation: rotation.map(angle => angle * Math.PI / 180),
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            clamp: true
        }
    });

    // useFrame(() => {
    //     if (cubeRef.current) {
    //         cubeRef.current.rotation.y += 0.005;
    //     }
    // });

    const handleFaceClick = (faceIndex) => {
        setActiveFace(faceIndex);
        setCurrentFaceIndex(faceIndex);
        navigate(faceRoutes[faceIndex]);
        switch (faceIndex) {
            case 0:
                setRotation([0, 0, 0]);
                break;
            case 1:
                setRotation([0, -90, 0]);
                break;
            case 2:
                setRotation([0, 180, 0]);
                break;
            case 3:
                setRotation([0, 90, 0]);
                break;
            case 4:
                setRotation([-90, 0, 0]);
                break;
            case 5:
                setRotation([90, 0, 0]);
                break;
            default:
                setRotation([0, 0, 0]);
        }
    };

    useEffect(() => {
        const newFaceIndex = faceRoutes.indexOf(location.pathname);
        if (newFaceIndex !== -1 && newFaceIndex !== currentFaceIndex) {
            handleFaceClick(newFaceIndex);
        }
    }, [location.pathname, currentFaceIndex]);

    return (
        <animated.mesh ref={cubeRef} rotation={springRotation} onClick={(e) => { e.stopPropagation(); }}>
            {[...Array(6)].map((_, index) => {
                let position = [0, 0, 0];
                let faceRotation = [0, 0, 0];
                switch (index) {
                    case 0:
                        position = [0, 0, size/2];
                        break;
                    case 1:
                        position = [size/2, 0, 0];
                        faceRotation = [0, Math.PI / 2, 0];
                        break;
                    case 2:
                        position = [0, 0, -size/2];
                        faceRotation = [0, Math.PI, 0];
                        break;
                    case 3:
                        position = [-size/2, 0, 0];
                        faceRotation = [0, -Math.PI / 2, 0];
                        break;
                    case 4:
                        position = [0, size/2, 0];
                        faceRotation = [-Math.PI / 2, 0, 0];
                        break;
                    case 5:
                        position = [0, -size/2, 0];
                        faceRotation = [Math.PI / 2, 0, 0];
                        break;
                }
                return (
                    <FaceContent 
                        key={index} 
                        position={position}
                        rotation={faceRotation}
                        size = {size} 
                        faceIndex={index} 
                        onClick={() => handleFaceClick(index)}
                        isActive={index === activeFace} 
                    />
                )
            })}
        </animated.mesh>
    );
};

export default Cube;