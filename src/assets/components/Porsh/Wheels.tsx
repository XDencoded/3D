import { Edges, useGLTF } from '@react-three/drei'

export function Wheels() {
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any
	return (
		<group dispose={null}>
			<group position={[0, 0, 0]}>
				<mesh
					geometry={nodes.Object_5.geometry}
					material={materials.tires}
					position={[0.269, -1.992, 0.035]}
					scale={0.021}
				>
			</mesh>

				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials.black_metal}
					position={[0.143, -1.982, 0.035]}
					scale={0.021}
				/>

				<mesh
					geometry={nodes.Object_23.geometry}
					material={materials.brakes}
					position={[0.674, -2.029, 0.035]}
					scale={0.021}
				/>

				<mesh
					geometry={nodes.Object_37.geometry}
					material={materials.Discs}
					position={[0.87, -1.994, 0.035]}
					scale={0.021}
				/>


				<mesh 
					geometry={nodes.Object_145.geometry}
					material={materials.rim_black}
					position={[0.184, -1.993, 0.035]}
					scale={0.021}
				/>
			
				<mesh 
					geometry={nodes.Object_147.geometry}
					material={materials.rim_chrome}
					position={[0.389, -1.993, 0.035]}
					scale={0.021}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('porsh/scene.gltf')
