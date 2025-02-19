import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { Light } from './assets/components/Light'
import { Effects } from './assets/components/Effect'

import { Camera } from './assets/components/Camera/Camera'
import { BMW } from './assets/components/BMW/bmw'
import { Ground } from './assets/components/Ground'
import { Rings } from './assets/components/Rings'
import { CubeCamera, Environment } from '@react-three/drei'

export function App(): JSX.Element | null {
	return (
		<Suspense fallback={<h1>ЗАГРУЗКА...</h1>}>
			<Canvas camera={{far:15}} shadows>
				<Camera  />
				<Light />
				<CubeCamera resolution={256} frames={Infinity}>
					{(texture) => (
						<>
							<Environment map={texture} />
							<BMW />
						</>
					)}
				</CubeCamera>
				<Rings />
				<Ground />
				<Effects />
			</Canvas>
		</Suspense>
	)
}
