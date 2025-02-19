import { MeshReflectorMaterial } from '@react-three/drei'
import { LinearEncoding } from '@react-three/drei/helpers/deprecated'
import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { RepeatWrapping, TextureLoader,  } from 'three'

export function Ground() {
	const [rough, normal] = useLoader(TextureLoader, [
		'public/rough.jpg',
		'public/normal.jpg',
	])

	useEffect(() => {
		;[normal, rough].forEach((t) => {
			t.wrapS = RepeatWrapping
			t.wrapT = RepeatWrapping
			t.repeat.set(5, 5)
		})

		normal.encoding = LinearEncoding
	}, [normal, rough])

	return (
		<mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
			<planeGeometry args={[30, 30]} />
			<MeshReflectorMaterial
				envMapIntensity={0}
				dithering={true}
				normalMap={normal}
				normalScale={[0.15, 0.15]}
				roughnessMap={rough}
				color={[0.015, 0.015, 0.15]}
				roughness={0.7}
				blur={[1000, 400]}
				mixBlur={30}
				mixStrength={80}
				mixContrast={1}
				resolution={1024}
				mirror={0}
				depthScale={0.01}
				minDepthThreshold={0.9}
				maxDepthThreshold={1}
				depthToBlurRatioBias={0.25}
				reflectorOffset={0.2}
			/>
		</mesh>
	)
}
