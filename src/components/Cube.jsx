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
}