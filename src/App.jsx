import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./components/Cube";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Canvas>
                <ambientLight />
                <directionalLight />
                <Suspense>
                    <Cube />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/footer" element={<Footer />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;