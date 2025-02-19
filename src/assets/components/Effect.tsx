import {
	EffectComposer,
	Bloom,
	BrightnessContrast,

} from '@react-three/postprocessing'

export function Effects() {
	return (
		<EffectComposer>
			<BrightnessContrast brightness={0.05} contrast={0.03} />
			<Bloom
				luminanceThreshold={0.11}
				mipmapBlur
				luminanceSmoothing={0.2}
				intensity={0.1}
			/>
		</EffectComposer>
	)
}
