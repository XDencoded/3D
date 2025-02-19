import { Edges } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, MeshStandardMaterial } from 'three'

type TProps = {
	position: any
	args: any
}

const col = ['0', '9']

const randomColor = () => {
	let new_color = ''
	for (let i = 1; i <= 6; i++) {
		new_color += col[Math.floor(Math.random() * col.length)]
	}
	return '#' + new_color
}

export function Sphera(props: TProps): JSX.Element | null {
	const sphere = useRef<Mesh>(null)
	const color = useRef<MeshStandardMaterial>(null)

	if (sphere || color) {
		useFrame((state, delta) => {
			const t = Math.tan(state.clock.elapsedTime / -1) //-1
			if (sphere.current) {
				if(sphere.current.position.y != -1){
					sphere.current.position.y = t
				} 
			}
			// console.log(sphere.current?.position.y)

			// if (color.current && t <= 0.01 && t >= -0.01)
			// 	color.current.color.set(randomColor())
		})
	}

	return (
		<mesh ref={sphere} position={props.position}>
			<sphereGeometry args={props.args} />

			<meshStandardMaterial ref={color} color={'red'} metalness={0.8} roughness={0.45} />

			{/* <Edges linewidth={1} scale={1.2} threshold={0.9} color='#1f1f1f' /> */}

		</mesh>
	)
}
