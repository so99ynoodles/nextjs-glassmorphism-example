import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { Color } from 'three';

const LoadModel = () => {
	const [model, setModel] = useState<any>();
	useEffect(() => {
		const loadModel = async () => {
			const GLTFLoader = (await import('three/examples/jsm/loaders/GLTFLoader')).GLTFLoader;
			new GLTFLoader().load("./pony_cartoon/scene.gltf", (gltf: any) => {
				setModel(gltf)
				// console.log(gltf)
				const meshes = gltf?.scene.children[0].children[0].children[0].children;
				meshes.forEach(mesh => {
					console.log(mesh)
					mesh.material.color = new Color(1, 1, 1)
				})
				console.log()
			}, undefined, error => console.error(error));
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
			<ambientLight color="0xffffff" />
			<mesh>
				<UseModel />
			</mesh>
		</Canvas>
	)
}

export default Model;