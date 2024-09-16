import {
	AsciiRenderer,
	ContactShadows,
	Html,
	MeshReflectorMaterial,
	OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'
import { Effects } from './assets/components/Effect'
import { Light } from './assets/components/Light'
import { Porsh } from './assets/components/Porsh'

export function App(): JSX.Element | null {
	return (
		<Canvas
			performance={{ min: 0.1 }}
			frameloop='demand'
			gl={{ logarithmicDepthBuffer: true, antialias: false }}
			dpr={[1, 1.5]}
			shadows
			camera={{ position: [15, 5, 10], fov: 75, far: 50 }}
		>
			<OrbitControls
				// autoRotate
				autoRotateSpeed={1}
				enablePan={false}
				minPolarAngle={0}
				minDistance={8}
				maxPolarAngle={Math.PI / 2.1}
			/>
			<Light />

			<Suspense fallback>
				<ContactShadows
					resolution={2048}
					frames={1}
					position={[0, -1.5, 0]}
					scale={40}
					blur={1}
					opacity={0.8}
					far={35}
				/>

				<Physics>
					<RigidBody
						mass={10}
						friction={1}
						restitution={0.3}
						colliders={'hull'}
						position={[0, -1.3, 0]}
						scale={2}
					>
						<Porsh />
					</RigidBody>
					<CuboidCollider
						position={[0, -2, 0]}
						args={[100, 0.5, 100]}
					></CuboidCollider>
				</Physics>
				
				<Effects />
			</Suspense>
		</Canvas>
	)
}
