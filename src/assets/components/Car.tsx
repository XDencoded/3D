import React, { useRef } from 'react'
import { Lightformer, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Car() {
	const stripe = useRef()
	const light = useRef()
	const { nodes, materials } = useGLTF('audi/scene.gltf')
	useFrame((state, delta) => {
		stripe.current.color.setRGB(10 + state.mouse.y * 20, 0 , 0)
	})

	return (
		<group dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					geometry={nodes.Object_2.geometry}
					material={materials.Body1Mtl}
				/>
				<mesh
					geometry={nodes.Object_3.geometry}
					material={materials.BodyGrille1Mtl}
				/>
				<mesh
					geometry={nodes.Object_4.geometry}
					material={materials.BrakeTaillight1Mtl}
				/>
				<mesh
					geometry={nodes.Object_5.geometry}
					material={materials.BrakeTaillights1Mtl}
				/>
				<mesh
					geometry={nodes.Object_6.geometry}
					material={materials.DrlHeadlights1Mtl}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_7.geometry}
					material={materials.DrlTaillights1Mtl}
				>
					<meshBasicMaterial  ref={stripe} toneMapped={false} />
					<pointLight
						ref={light}
						intensity={5}
						color={[10, 2, 5]}
						distance={2.5}
					/>
				</mesh>
				<mesh
					geometry={nodes.Object_8.geometry}
					material={materials.Engine1Mtl}
				/>

				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials.Exhaust2Mtl}
				/>
				<mesh
					geometry={nodes.Object_10.geometry}
					material={materials.FogHeadlights1Mtl}
				/>
				<mesh
					geometry={nodes.Object_11.geometry}
					material={materials.FrontCaliper1Mtl}
				/>
				<mesh
					geometry={nodes.Object_12.geometry}
					material={materials.Gascan1Mtl}
				/>
				<mesh geometry={nodes.Object_13.geometry} material={materials.H1Mtl} />
				<mesh geometry={nodes.Object_14.geometry} material={materials.H2Mtl} />
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.Headlights1Mtl}
				/>
				<mesh
					geometry={nodes.Object_16.geometry}
					material={materials.HoodWindowTrim1Mtl}
				/>
				<mesh
					geometry={nodes.Object_17.geometry}
					material={materials.LeftDoor2Mtl}
				/>
				<mesh
					geometry={nodes.Object_18.geometry}
					material={materials.RearBumperFrame3Mtl}
				/>
				<mesh
					geometry={nodes.Object_19.geometry}
					material={materials.RearBumperGrille1Mtl}
				/>
				<mesh
					geometry={nodes.Object_20.geometry}
					material={materials.RimBadges1Mtl}
				/>
				<mesh
					geometry={nodes.Object_21.geometry}
					material={materials.SteeringWheel1Mtl}
				/>
				<mesh
					geometry={nodes.Object_22.geometry}
					material={materials.SteeringWheelCarbon1Mtl}
				/>
				<mesh
					geometry={nodes.Object_23.geometry}
					material={materials.SteeringWheelCarbon2Mtl}
				/>
				<mesh
					geometry={nodes.Object_24.geometry}
					material={materials.TaillightsGlass1Mtl}
				/>
				<mesh
					geometry={nodes.Object_25.geometry}
					material={materials.Tire1Mtl}
				/>
				<mesh
					geometry={nodes.Object_26.geometry}
					material={materials.TrunkBadge1Mtl}
				/>
				<mesh
					geometry={nodes.Object_27.geometry}
					material={materials.TrunkV10Badges1Mtl}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('audi/scene.gltf')
