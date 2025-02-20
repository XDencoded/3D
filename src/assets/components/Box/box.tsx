import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Vector3, type Mesh } from 'three'

function Box({ color }: { color: string }) {
	const time = useRef(0)
	const box = useRef<Mesh | null>(null)
	const [xRotSpeed] = useState(() => Math.random())
	const [yRotSpeed] = useState(() => Math.random())
	const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)
	const [position] = useState<any>(resetPosition())

	function resetPosition() {
		let v = new Vector3(
			(Math.random() * 2 - 1) * 3,
			Math.random() * 2.5 * 0.5,
			(Math.random() * 2 - 1) * 25
		)
		if (v.x < 0) v.x -= 1.75
		if (v.x > 0) v.x += 1.75

		return v
	}

	useFrame((state, delta) => {
		time.current += delta * 1.2
		let newZ = position.z + (time.current)
		if (newZ < -10) {
			resetPosition()
			time.current = 0
		}

		if (box.current) {
			box.current.position.set(position.x, position.y, newZ)
			box.current.rotation.x += delta * xRotSpeed
			box.current.rotation.y += delta * yRotSpeed
		}
	})

	return (
		<mesh ref={box} scale={scale} castShadow>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={color} envMapIntensity={0.15} />
		</mesh>
	)
}

export function Boxs() {
	return (
		<>
			{[
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			].map((e, i) => (
				<Box key={i} color={i % 2 === 1 ? '0xFFCD4E1F' : '0xFF7F85F0'} />
			))}
		</>
	)
}
