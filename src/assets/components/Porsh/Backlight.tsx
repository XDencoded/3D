import React, { useRef, useState } from 'react'
import { Html, Trail, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function BackLight() {
	const [stop, setStop] = useState<boolean>(false)
	const [inten, setInten] = useState<number>(0)
	const _ = !stop ? 1 : 2
	// Габарит
	const stripe = useRef<any>()
	const stripe1 = useRef<any>()
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any
	useFrame(() => {
		if (stripe.current) {
			stripe.current.color.setRGB(inten * _ * 20, 0, 0)
			stripe1.current.color.setRGB(inten * _ * 20, 0, 0)
		}
	})

	const intenSive = (event: KeyboardEvent) => {
		if (event.code === 'Digit1') {
			setInten(0)
		}
		if (event.code === 'Digit2') {
			setInten(1)
		}
		if (event.code === 'Digit3') {
			setInten(1)
		}
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === 'Space') {
			setStop(true)
		}
	}

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === 'Space') {
			setStop(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)
		window.addEventListener('keypress', intenSive)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
			window.removeEventListener('keypress', intenSive)
		}
	}, [])

	return (
		<group dispose={null}>
			<group position={[0, 0, 0]}>
				{/* ЗАДНИЙ СВЕТ */}
				<Trail
					width={3} // Width of the line
					color={'hotpink'} // Color of the line
					length={4} // Length of the line
					decay={4} // How fast the line fades away
					local={false} // Wether to use the target's world or local positions
					stride={0} // Min distance between previous and current point
					interval={10} // Number of frames to wait before next calculation
					target={undefined} // Optional target. This object will produce the trail.
					attenuation={(width) => width} // A function to define the width in each point along it.
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_117.geometry}
						material={materials.red_light_main}
						position={[-3.792, -1.099, 0.035]}
						scale={0.021}
					>
						<meshBasicMaterial ref={stripe} toneMapped={false} />

						<pointLight
							intensity={inten}
							color={[20, 0, 0]}
							distance={2.5}
							castShadow
						/>
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_123.geometry}
						material={materials.reflectors}
						position={[-3.784, -1.406, 0.035]}
						scale={0.021}
					>
						<meshBasicMaterial ref={stripe1} toneMapped={false} />
					</mesh>
				</Trail>
			</group>
		</group>
	)
}

useGLTF.preload('porsh/scene.gltf')
