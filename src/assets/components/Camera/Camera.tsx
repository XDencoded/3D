import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export function Camera() {
	return (
		<>
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault  fov={50} position={[3,2,5]} />
		</>
	)
}
