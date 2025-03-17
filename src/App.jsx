import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./components/Cube";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";

function App() {
    return (
        <BrowserRouter>
            <Canvas style={{ height: '100vh', width: '100vw' }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[5, 5, 5]} />
                <Suspense fallback={null}>
                    <Cube />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
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