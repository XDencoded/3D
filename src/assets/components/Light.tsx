import { Environment, Lightformer } from '@react-three/drei'


export function Light(): JSX.Element | null {

	return (
		<>
			<Environment frames={Infinity} resolution={512} blur={1}>
				<color attach='background' args={['#000']} />
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[-9, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[-6, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[-3, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[0, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[3, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[6, 10, 0]}
					scale={[1, 10, 1]}
				/>
				<Lightformer
					intensity={10}
					rotation-x={Math.PI / 2}
					position={[9, 10, 0]}
					scale={[1, 10, 1]}
				/>
				{/* Sides */}
				<Lightformer intensity={2} position={[0, 2, -50]} scale={[100, 2, 1]} />
				<Lightformer intensity={2} position={[0, 2, 50]} scale={[100, 2, 1]} />
				{/* Key */}

				<Lightformer
					form='ring'
					color='red'
					intensity={10}
					scale={5}
					position={[-20, 5, 20]}
					onUpdate={(self) => self.lookAt(0, 0, 0)}
				/>
				<Lightformer
					form='ring'
					color='red'
					intensity={10}
					scale={5}
					position={[20, 5, -20]}
					onUpdate={(self) => self.lookAt(0, 0, 0)}
				/>
			</Environment>
		</>
	)
}
