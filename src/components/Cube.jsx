import React, {useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { FaceContent } from "./FaceContent";
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

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y += 0.005;
        }
    });

    return (
        <animated.mesh>
            <FaceContent/>
        </animated.mesh>
    )
}

export default Cube;