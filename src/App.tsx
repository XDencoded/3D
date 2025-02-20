import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { Light } from './assets/components/Light'
import { Effects } from './assets/components/Effect'

import { Camera } from './assets/components/Camera/Camera'
import { BMW } from './assets/components/BMW/bmw'
import { Ground } from './assets/components/Ground'
import { Rings } from './assets/components/Rings'
import { CubeCamera, Environment, Sky } from '@react-three/drei'
import { Boxs } from './assets/components/Box/box'
import { Porsh } from './assets/components/Porsh'

export function App(): JSX.Element | null {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{far:15}} shadows>
				<Camera  />
				<Light />
				<CubeCamera resolution={256} frames={Infinity}>
					{(texture) => (
						<>
							<Environment map={texture} />
							<Porsh position={[0,1.4,0]} />
						</>
					)}
				</CubeCamera>

				<Rings />
				<Boxs />
				<Ground />
				<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />
				{/* <Effects /> */}
			</Canvas>
		</Suspense>
	)
}
