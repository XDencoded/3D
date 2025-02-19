import { useEffect, useState } from 'react'
import { SpotLight, useGLTF } from '@react-three/drei'

export function Headlight() {
	const [head, setHead] = useState<number>(0)
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === 'Digit1') {
			setHead(0)
		}
		if (event.code === 'Digit2') {
			setHead(0.2)
		}
		if (event.code === 'Digit3') {
			setHead(1)
		}
	}

	useEffect(() => {
		window.addEventListener('keypress', handleKeyDown)

		return () => {
			window.removeEventListener('keypress', handleKeyDown)
		}
	}, [])

	return (
		<>
			<group dispose={null}>
				<group position={[0, 0, 0]}>
					<mesh
						geometry={nodes.Object_141.geometry}
						material={materials.lights}
						position={[0.532, -1.236, 0.029]}
						scale={0.021}
					/>

					<pointLight
							intensity={head}
						color={[125, 205, 255]}
						distance={10}
						position={[4.1, -1.21, 1.5]}
					/>
					<pointLight
					
						intensity={head}
						color={[125, 205, 255]}
						distance={10}
						position={[4.1, -1.21, -1.43]}
					/>
				</group>
			</group>

		</>
	)
}

useGLTF.preload('porsh/scene.gltf')
