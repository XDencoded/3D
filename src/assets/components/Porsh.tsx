import { Edges, Outlines, useGLTF } from '@react-three/drei'
import { BackLight } from './Porsh/Backlight'
import { Headlight } from './Porsh/Headlight'
import { Wheels } from './Porsh/Wheels'
import { RightDoor } from './Porsh/RightDoor'
import { TurnSignals } from './Porsh/TurnSignals'
import { useFrame, Vector3 } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Porsh(props: { position: Vector3 }) {
	const { nodes, materials } = useGLTF<any>('porsh/scene.gltf') as any

	return (
		<group castShadow dispose={null}>
			<group {...props}>
				{/* Задний свет */}
				<BackLight />
				{/* Передний свет */}
				<Headlight />
				{/* Поворотники  */}
				<TurnSignals />
				{/* Калеса */}
				<Wheels />
				{/* Правая дверь */}
				<RightDoor />

				{/* Ремни */}
				<mesh
					geometry={nodes.Object_7.geometry}
					material={materials.belts}
					position={[-0.874, -1.31, 0.035]}
					scale={0.021}
				/>

				{/* Кузов */}
				<mesh
					geometry={nodes.Object_13.geometry}
					material={materials.body_main}
					position={[0.22, -1.161, 0.035]}
					scale={0.021}
				>
					{/* <Edges
						linewidth={4}
						scale={1.002}
						threshold={15}
						color='#fff'
					/> */}
				</mesh>
				{/* Левая ручка двери */}
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.body_main}
					position={[-0.317, -1.22, -1.735]}
					scale={0.021}
				/>
				{/* Рамка личка бак */}
				<mesh
					geometry={nodes.Object_17.geometry}
					material={materials.body_main}
					position={[1.505, -1.193, 1.51]}
					scale={0.021}
				/>
				<mesh
					geometry={nodes.Object_19.geometry}
					material={materials.invisible_all}
					position={[2.429, -1.059, 1.785]}
					scale={0.021}
				/>
				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_21.geometry}
					material={materials.body_main}
					position={[0.789, -1.48, -1.687]}
					scale={0.021}
				/>

				{/* Левая дверь  */}
				<mesh
					geometry={nodes.Object_27.geometry}
					material={materials.carbon_int}
					position={[0.14, -1.015, -1.371]}
					scale={0.021}
				/>
				{/* Салон */}
				<mesh
					geometry={nodes.Object_29.geometry}
					material={materials.carbon_int}
					position={[1.166, -1.218, -0.048]}
					scale={0.021}
				/>
				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_31.geometry}
					material={materials.chrom_int}
					position={[0.498, -1.054, -1.365]}
					scale={0.021}
				/>

				{/* Торпеда */}
				<mesh
					geometry={nodes.Object_35.geometry}
					material={materials.chrom_int}
					position={[1.509, -1.622, 0.038]}
					scale={0.021}
				/>

				{/* что то у левой двери */}
				<mesh
					geometry={nodes.Object_39.geometry}
					material={materials.dynamics}
					position={[1.2, -1.577, -1.395]}
					scale={0.021}
				/>
				{/*  что то у задних карт */}
				<mesh
					geometry={nodes.Object_41.geometry}
					material={materials.dynamics}
					position={[-0.924, -1.284, 0.035]}
					scale={0.021}
				/>

				{/* шильдик задней брови */}
				<mesh
					geometry={nodes.Object_45.geometry}
					material={materials.bl_pl__GL_int_ext}
					position={[-1.323, -1.185, 0.031]}
					scale={0.021}
				/>
				{/* ФАРЫ ПЕРЕДНИЕ */}
				<mesh
					geometry={nodes.Object_47.geometry}
					material={materials.lights}
					position={[4.015, -1.208, 0.035]}
					scale={0.021}
				/>
				{/* Пердположем габорит */}
				<mesh
					geometry={nodes.Object_49.geometry}
					material={materials.headlights_plastic_ring}
					position={[3.937, -1.197, 0.035]}
					scale={0.021}
				/>
				{/*  в фаре низ */}
				<mesh
					geometry={nodes.Object_51.geometry}
					material={materials.hedlights_grid}
					position={[4.213, -1.388, 0.035]}
					scale={0.021}
				/>
				{/* Левая карта */}
				<mesh
					geometry={nodes.Object_53.geometry}
					material={materials.pl_leather_int}
					position={[0.859, -1.697, -1.36]}
					scale={0.021}
				/>
				{/* Салон */}
				<mesh
					geometry={nodes.Object_55.geometry}
					material={materials.leather_int}
					position={[-0.501, -1.406, 0.01]}
					scale={0.021}
				/>

				{/* Швы у сидений */}
				<mesh
					geometry={nodes.Object_59.geometry}
					material={materials.leather_seam}
					position={[0.304, -1.459, -0.044]}
					scale={0.021}
				>
					<meshMatcapMaterial color={'#ef6b1b'} />
				</mesh>

				{/* Салон  */}
				<mesh
					geometry={nodes.Object_63.geometry}
					material={materials.leather_seam}
					position={[0.642, -1.269, 1.42]}
					scale={0.021}
				/>
				{/* Левая дверная карта */}
				<mesh
					geometry={nodes.Object_65.geometry}
					material={materials.leather_int}
					position={[0.575, -1.213, -1.376]}
					scale={0.021}
				/>
				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_67.geometry}
					material={materials.leather_seam}
					position={[0.644, -1.269, -1.348]}
					scale={0.021}
				/>
				{/* Логотип */}
				<mesh
					geometry={nodes.Object_73.geometry}
					material={materials.LOGO1}
					position={[1.384, -1.688, -0.042]}
					scale={0.021}
				/>

				<mesh
					geometry={nodes.Object_77.geometry}
					material={materials.LOGO1}
					position={[0.855, -1.355, -1.387]}
					scale={0.021}
				/>
				{/* Задний логотип  */}
				<mesh
					geometry={nodes.Object_79.geometry}
					material={materials.rim_chrome}
					position={[0.304, -1.683, -0.061]}
					scale={0.021}
				>
					{' '}
					<Edges linewidth={1} scale={1.002} threshold={15} color='#fff' />
				</mesh>

				{/* ЛЕвое зеркало */}
				<mesh
					geometry={nodes.Object_83.geometry}
					material={materials.monitor}
					position={[1.07, -0.761, -1.86]}
					scale={0.021}
				/>

				{/* Зеркало левой двери(ухо) */}
				<mesh
					geometry={nodes.Object_87.geometry}
					material={materials.Mirror}
					position={[1.072, -0.761, -1.861]}
					scale={0.021}
				/>
				{/* ЗЕркало заднего вида */}
				<mesh
					geometry={nodes.Object_89.geometry}
					material={materials.Mirror}
					position={[1.036, -0.352, 0.035]}
					scale={0.021}
				/>
				{/* Тарпеда  */}
				<mesh
					geometry={nodes.Object_91.geometry}
					material={materials.monitor}
					position={[1.396, -0.919, -0.245]}
					scale={0.021}
				/>
				{/* Номер  */}
				<mesh
					geometry={nodes.Object_93.geometry}
					material={materials.number_plate1}
					position={[-4.132, -1.576, 0.031]}
					scale={[0.021, 0.021, 0.007]}
				/>
				{/* Выхлоп */}
				<mesh
					geometry={nodes.Object_95.geometry}
					material={materials.pipes_chrom}
					position={[-4.072, -2.064, 0.035]}
					scale={0.021}
				/>
				{/* обшивка салона */}
				<mesh
					geometry={nodes.Object_97.geometry}
					material={materials.pl_leather_int}
					position={[-0.097, -0.931, 0.088]}
					scale={0.021}
				/>
				{/* Задние дверные(ну типа) карты */}
				<mesh
					geometry={nodes.Object_99.geometry}
					material={materials['Material.001']}
					position={[-0.952, -1.301, -0.036]}
					scale={0.021}
				/>
				{/* Салон */}
				<mesh
					geometry={nodes.Object_101.geometry}
					material={materials.bl_pl_M_int}
					position={[0.804, -1.485, 0.057]}
					scale={0.021}
				/>
				{/* тарпеда */}
				<mesh
					geometry={nodes.Object_103.geometry}
					material={materials.bl_pl_M_int}
					position={[0.631, -1.397, -0.054]}
					scale={0.021}
				/>
				{/* Климот контроль */}
				<mesh
					geometry={nodes.Object_105.geometry}
					material={materials.interior_grid}
					position={[1.254, -1.245, -0.147]}
					scale={0.021}
				/>

				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_109.geometry}
					material={materials.bl_pl_M_int}
					position={[0.661, -1.464, -1.409]}
					scale={0.021}
				/>
				{/* Часть левого уха */}
				<mesh
					geometry={nodes.Object_111.geometry}
					material={materials.bl_pl_M_ext}
					position={[0.973, -0.86, -1.591]}
					scale={0.021}
				/>
				{/* Шильдики */}
				<mesh
					geometry={nodes.Object_113.geometry}
					material={materials.bl_pl_M_ext}
					position={[-0.426, -1.489, 0.032]}
					scale={0.021}
				/>

				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_121.geometry}
					material={materials.reflectors}
					position={[0.267, -1.883, -1.388]}
					scale={0.021}
				/>

				{/*  Левая дверь */}
				<mesh
					geometry={nodes.Object_127.geometry}
					material={materials.reisin}
					position={[0.648, -1.317, -1.586]}
					scale={0.021}
				/>
				{/* Мрезинки двени и лобаша */}
				<mesh
					geometry={nodes.Object_129.geometry}
					material={materials.reisin}
					position={[0.983, -1.121, 0.052]}
					scale={0.021}
				/>
				{/* Коврики  */}
				<mesh
					geometry={nodes.Object_131.geometry}
					material={materials.rug_interior}
					position={[0.107, -1.87, 0.035]}
					scale={0.021}
				/>
				{/* ЗАмок правый  */}
				<mesh
					geometry={nodes.Object_133.geometry}
					material={materials.black_metal}
					position={[-0.456, -1.444, 1.585]}
					scale={0.021}
				/>
				{/* Замок левый  */}
				<mesh
					geometry={nodes.Object_135.geometry}
					material={materials.black_metal}
					position={[-0.454, -1.444, -1.513]}
					scale={0.021}
				/>
				{/* арки */}
				<mesh
					geometry={nodes.Object_137.geometry}
					material={materials.invisible_all}
					position={[0.729, -1.973, 0.033]}
					scale={0.021}
				/>
				<mesh
					geometry={nodes.Object_139.geometry}
					material={materials.pl_leather_int}
					position={[0.956, -1.107, -0.671]}
					scale={0.021}
				/>

				{/* крыша салона */}
				<mesh
					geometry={nodes.Object_143.geometry}
					material={materials.upholstery}
					position={[-0.175, -0.206, 0.035]}
					scale={0.021}
				/>

				{/* нИз лобаша  */}
				<mesh
					geometry={nodes.Object_149.geometry}
					material={materials.windows_dots}
					position={[0.212, -0.575, 0.035]}
					scale={0.021}
				/>

				{/* левое слекло */}
				<mesh
					geometry={nodes.Object_155.geometry}
					material={materials.windows}
					position={[0.273, -0.8, -1.463]}
					scale={0.021}
				/>
				{/* Левая дверь */}
				<mesh
					geometry={nodes.Object_157.geometry}
					material={materials.windows_edge}
					position={[0.313, -0.609, -1.359]}
					scale={0.021}
				/>
				{/* остальные стекла */}
				<mesh
					geometry={nodes.Object_159.geometry}
					material={materials.windows}
					position={[-0.058, -0.494, 0.035]}
					scale={0.021}
				/>
				{/* Лобашь */}
				<mesh
					geometry={nodes.Object_161.geometry}
					material={materials.windows_edge}
					position={[-0.306, -0.51, 0.035]}
					scale={0.021}
				/>
				{/* Кресло */}
				<mesh
					geometry={nodes.Object_57.geometry}
					material={materials.leather_perforated}
					position={[0.137, -1.824, 0.004]}
					scale={0.021}
				>
					<meshMatcapMaterial color={'#8c210d'} />
				</mesh>
			</group>
		</group>
	)
}

useGLTF.preload('porsh/scene.gltf')
