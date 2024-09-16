import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Smoke() {
	const group = React.useRef()
	const { nodes, materials, animations } = useGLTF<any>(
		'smoke/scene.gltf'
	) as any
	const { actions } = useAnimations(animations, group)

	useFrame(() => {
		actions.Animation?.play()
	})

	useEffect(() => {
		console.log(actions.Animation?.getClip().duration)
	}, [])

	return (
		<group ref={group} dispose={null} position={[0, 0, 0]}>
			<group name='Sketchfab_Scene'>
				<group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
					<group name='root'>
						<group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
							<group name='Torus001_0'>
								<mesh
									name='Object_4'
									geometry={nodes.Object_4.geometry}
									material={materials.material}
								/>
								<mesh
									name='Object_5'
									geometry={nodes.Object_5.geometry}
									material={materials.material}
								/>
							</group>
							<group name='Torus003_1'>
								<mesh
									name='Object_7'
									geometry={nodes.Object_7.geometry}
									material={materials.material}
								/>
								<mesh
									name='Object_8'
									geometry={nodes.Object_8.geometry}
									material={materials.material}
								/>
							</group>
							<group name='Torus002_5'>
								<mesh
									name='Object_16'
									geometry={nodes.Object_16.geometry}
									material={materials.material}
								/>
								<mesh
									name='Object_17'
									geometry={nodes.Object_17.geometry}
									material={materials.material}
								/>
							</group>
							<group name='Torus004_6'>
								<mesh
									name='Object_19'
									geometry={nodes.Object_19.geometry}
									material={materials.material}
								/>
								<mesh
									name='Object_20'
									geometry={nodes.Object_20.geometry}
									material={materials.material}
								/>
							</group>
							<group name='Cube002_4' scale={1.668}>
								<group name='Cube_2' scale={0.599}>
									<mesh
										name='Object_12'
										geometry={nodes.Object_12.geometry}
										material={materials.hide}
									/>
								</group>
								<group
									name='Cube001_3'
									rotation={[0, -Math.PI / 2, 0]}
									scale={0.599}
								>
									<mesh
										name='Object_14'
										geometry={nodes.Object_14.geometry}
										material={materials.hide}
									/>
								</group>
								<mesh
									name='Object_10'
									geometry={nodes.Object_10.geometry}
									material={materials.hide}
								/>
							</group>
							<group
								name='Cube005_9'
								rotation={[Math.PI / 2, 0, 0]}
								scale={1.668}
							>
								<group name='Cube003_7' scale={0.599}>
									<mesh
										name='Object_24'
										geometry={nodes.Object_24.geometry}
										material={materials.hide}
									/>
								</group>
								<group
									name='Cube004_8'
									rotation={[0, -Math.PI / 2, 0]}
									scale={0.599}
								>
									<mesh
										name='Object_26'
										geometry={nodes.Object_26.geometry}
										material={materials.hide}
									/>
								</group>
								<mesh
									name='Object_22'
									geometry={nodes.Object_22.geometry}
									material={materials.hide}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('smoke/scene.gltf')
