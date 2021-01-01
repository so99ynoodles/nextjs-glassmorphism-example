import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'

const LoadModel = () => {
	const [model, setModel] = useState<any>();
	useEffect(() => {
		const loadModel = async () => {
			const GLTFLoader = (await import('three/examples/jsm/loaders/GLTFLoader')).GLTFLoader;
			new GLTFLoader().load("./pony_cartoon/scene.gltf", gltf => setModel(gltf), undefined, error => console.error(error));
		}
		loadModel();
	}, [])
	return model ? (
		<primitive object={model.scene} dispose={null} />
	) : null
}

const UseModel = () => {
	return (
		<Suspense fallback={null}>
			<LoadModel />
		</Suspense>
	)
}

const Model = () => {
	return (
		<Canvas>
			<mesh>
				<UseModel />
			</mesh>
		</Canvas>
	)
}

export default Model;