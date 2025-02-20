import {
	EffectComposer,
	Bloom,

	BrightnessContrast,
} from '@react-three/postprocessing'

export function Effects() {
	return (
		<EffectComposer>
			<BrightnessContrast brightness={0.03} contrast={0.1} />

			<Bloom
				luminanceThreshold={0.9}
				mipmapBlur
				luminanceSmoothing={5}
				luminanceSmoothing={0.02}
				intensity={0.3}
			/>
		</EffectComposer>
	)
}
