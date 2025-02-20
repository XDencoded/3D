
import { Environment, Lightformer } from '@react-three/drei';

export function Light() {
	return (
		<>
		<Environment frames={Infinity} resolution={512} blur={1}>
				<color args={[0, 0, 0]} attach='background'  />
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[-9, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[-6, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[-3, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[0, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[3, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[6, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={1}
					rotation-x={Math.PI / 2}
					position={[9, 10, 0]}
					scale={[1, 10, 1]}
				/>
				{/* Sides */}
				<Lightformer intensity={5} position={[0, 2, -50]} scale={[100, 2, 1]} />
				<Lightformer intensity={5} position={[0, 2, 50]} scale={[100, 2, 1]} />
				{/* Key */}

				<Lightformer
					form='ring'
					color='#ffd700'
					intensity={2}
					scale={5}
					position={[-20, 5, 20]}
					onUpdate={(self) => self.lookAt(0, 0, 0)}
				/>
				<Lightformer
					form='ring'
					color='#ffd700'
					intensity={2}
					scale={5}
					position={[20, 5, -20]}
					onUpdate={(self) => self.lookAt(0, 0, 0)}
				/>
			</Environment>
			
		</>
	)
}
