import React from "react";
import * as THREE from 'three';

const FaceContent = ({ position, rotation, size, faceIndex, onClick, isActive }) => {
    const colors = [];
    return (
        <mesh position={position} rotation={rotation} onClick={onClick}>
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial color={colors[faceIndex]} transparent side={THREE.DoubleSide} />
        </mesh>
    )
}

export default FaceContent;