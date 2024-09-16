import {
	EffectComposer,
	Bloom,
	BrightnessContrast,
	Noise
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export function Effects() {
	return (
		<EffectComposer>
			<BrightnessContrast brightness={0.03} contrast={0.1} />

			<Bloom
				luminanceThreshold={0.9}
				mipmapBlur
				luminanceSmoothing={0.02}
				intensity={0.3}
			/>
		</EffectComposer>
	)
}
