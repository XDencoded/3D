import { GradientTexture, MeshWobbleMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export function TurnSignals() {
	const [isActive, setIsActive] = useState<boolean>(false)
	const ref = useRef<any>()
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === 'Digit4') {
			setIsActive(true)
		}
		if (event.code === 'Digit5') {
			setIsActive(false)
		}
	}

	useFrame((state, delta) => {
		const t = isActive ? (1 + Math.sin(state.clock.elapsedTime * 20)) / 2 : 0
		;(ref.current as any).color.setRGB(t * 47, t * 10, 0)
	})

	useEffect(() => {
		window.addEventListener('keypress', handleKeyDown)

		return () => {
			window.removeEventListener('keypress', handleKeyDown)
		}
	}, [])
	return (
		<group dispose={null}>
			<group position={[0, 0, 0]}>
				<mesh
					geometry={nodes.Object_71.geometry}
					material={materials.headlights_pattern}
					position={[2.719, -1.543, 0.035]}
					scale={0.021}
				>
					<MeshWobbleMaterial factor={10} speed={10} />
					<meshBasicMaterial ref={ref} toneMapped={true}>
					
					</meshBasicMaterial>
				</mesh>
			</group>
		</group>
	)
}

useGLTF.preload('porsh/scene.gltf')
