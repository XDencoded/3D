

export function Light(): JSX.Element | null {
	return (
		<>
			<color args={[0, 0, 0]} attach='background' />

			<spotLight
				color={[1, 0.25, 0.7]}
				intensity={1.5}
				angle={0.6}
				penumbra={0.5}
				position={[5, 2, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			<spotLight
				color={[0.14, 0.5, 1]}
				intensity={2}
				angle={0.6}
				penumbra={0.5}
				position={[-5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			
		</>
	)
}
