import { EffectComposer, Bloom } from '@react-three/postprocessing'

export function Effects() {
	return (
		<EffectComposer>
			<Bloom
				luminanceThreshold={0.9}
				mipmapBlur
				luminanceSmoothing={5}
				intensity={0.3}
				
			/>
		</EffectComposer>
	)
}
