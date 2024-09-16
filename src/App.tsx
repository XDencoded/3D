import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Html } from '@react-three/drei'
import { Suspense } from 'react'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { Light } from './assets/components/Light'
import _ from 'lodash'
import { Effects } from './assets/components/Effect'
import { Porsh } from './assets/components/Porsh'

export function App(): JSX.Element | null {
	return (
		<Canvas
			gl={{ logarithmicDepthBuffer: true, antialias: false }}
			dpr={[1, 1.5]}
			shadows
			camera={{ position: [10, 10, 10], fov: 75 }}
		>
			<OrbitControls
				// position={[0, 20, 0]}
				// autoRotate
				autoRotateSpeed={1}
				enablePan={false}
				minPolarAngle={0}
				minDistance={10}
				maxPolarAngle={Math.PI / 2.1}
			/>

			<Html center>
				<div className='info'>
					<ul>
						<li>
							<b>1</b>Выкл свет
						</li>
						<li>
							<b>2</b>Вкл габариты
						</li>
						<li>
							<b>3</b>Вкл дальний свет
						</li>

						<li>
							<b>space</b>Стоп-сигнал
						</li>
					</ul>
				</div>
			</Html>
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
