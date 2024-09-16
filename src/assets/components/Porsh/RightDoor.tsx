import { useGLTF } from '@react-three/drei'

export function RightDoor() {
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any
	return (
		<group dispose={null}>
			<group position={[0, 0, 0]}>

				<mesh
				
					geometry={nodes.Object_11.geometry}
					material={materials.body_main}
					position={[0.778, -1.478, 1.76]}
					scale={0.021}
				/>
			
				<mesh
					geometry={nodes.Object_25.geometry}
					material={materials.carbon_int}
					position={[0.137, -1.015, 1.443]}
					scale={0.021}
				/>
		
				<mesh
		
					geometry={nodes.Object_33.geometry}
					material={materials.chrom_int}
					position={[0.496, -1.054, 1.438]}
					scale={0.021}
				/>
		
				<mesh
			
					geometry={nodes.Object_43.geometry}
					material={materials.dynamics}
					position={[1.197, -1.577, 1.467]}
					scale={0.021}
				/>
		
				<mesh
			
					geometry={nodes.Object_61.geometry}
					material={materials.leather_int}
					position={[0.572, -1.213, 1.449]}
					scale={0.021}
				/>
		
				<mesh
				
					geometry={nodes.Object_69.geometry}
					material={materials.pl_leather_int}
					position={[0.857, -1.697, 1.432]}
					scale={0.021}
				/>
		
				<mesh
			
					geometry={nodes.Object_75.geometry}
					material={materials.LOGO1}
					position={[0.853, -1.355, 1.46]}
					scale={0.021}
				/>
			
				<mesh
					geometry={nodes.Object_81.geometry}
					material={materials.monitor}
					position={[1.068, -0.761, 1.932]}
					scale={0.021}
				/>
		
				<mesh
			
					geometry={nodes.Object_85.geometry}
					material={materials.Mirror}
					position={[1.069, -0.761, 1.933]}
					scale={0.021}
				/>
			
				<mesh
				
					geometry={nodes.Object_107.geometry}
					material={materials.bl_pl_M_int}
					position={[0.658, -1.464, 1.481]}
					scale={0.021}
				/>
				
				<mesh
			
					geometry={nodes.Object_115.geometry}
					material={materials.bl_pl_M_ext}
					position={[0.97, -0.86, 1.664]}
					scale={0.021}
				/>
			
				<mesh
					geometry={nodes.Object_119.geometry}
					material={materials.reflectors}
					position={[0.264, -1.883, 1.46]}
					scale={0.021}
				/>
			
				<mesh
					geometry={nodes.Object_125.geometry}
					material={materials.reisin}
					position={[0.645, -1.317, 1.658]}
					scale={0.021}
				/>
			
				<mesh
	
					geometry={nodes.Object_151.geometry}
					material={materials.windows}
					position={[0.271, -0.8, 1.535]}
					scale={0.021}
				/>
			
				<mesh
				
					geometry={nodes.Object_153.geometry}
					material={materials.windows_edge}
					position={[0.271, -0.8, 1.535]}

					scale={0.021}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('porsh/scene.gltf')
