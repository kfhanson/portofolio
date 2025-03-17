import React from "react";
import * as THREE from 'three';

const FaceContent = ({ position, rotation, size, faceIndex, onClick, isActive }) => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF'];
    const opacity = isActive ? 1 : 0.5;
    return (
        <mesh position={position} rotation={rotation} onClick={onClick}>
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial color={colors[faceIndex]} transparent opacity={opacity} side={THREE.DoubleSide} />
        </mesh>
    );
};

export default FaceContent;