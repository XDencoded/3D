import { useGLTF } from '@react-three/drei'

export function BMW() {
	const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
		'public/bmw/scene.gltf'
	)
	return (
		<group dispose={null}>
			<group scale={0.01}>
				<group position={[-0.008, 60.141, -216.19]} scale={100}>
					<mesh
						geometry={nodes.LICENSE_LOCK_METALIC_SYMB_0.geometry}
						material={materials.METALIC_SYMB}
					/>
					<mesh
						geometry={nodes.LICENSE_LOCK_METALIC_SYMB001_0.geometry}
						material={materials['METALIC_SYMB.001']}
					/>
				</group>
				<group
					position={[-0.317, 23.822, 220.218]}
					rotation={[-2.793, 0, Math.PI]}
					scale={100}
				>
					<mesh
						geometry={nodes.LICENSE_LOCK001_METALIC_SYMB_0.geometry}
						material={materials.METALIC_SYMB}
					/>
					<mesh
						geometry={nodes.LICENSE_LOCK001_METALIC_SYMB001_0.geometry}
						material={materials['METALIC_SYMB.001']}
					/>
				</group>
				<group position={[0, 11.217, 12.18]} scale={94.555}>
					<mesh
						geometry={nodes.C_Mirror001_MIRRORS_0.geometry}
						material={materials.MIRRORS}
						rotation={[-Math.PI, 0, 0]}
					/>
					<group position={[0.508, 0.729, 0.548]} rotation={[-1.18, 0.92, 0]}>
						<mesh
							geometry={nodes.FUEL001_gauge_needle_0.geometry}
							material={materials.gauge_needle}
						/>
						<mesh
							geometry={nodes.FUEL001_plastic_0.geometry}
							material={materials.plastic}
						/>
					</group>
					<group position={[0, 0.715, -0.913]} rotation={[-Math.PI, 0, 0]}>
						<group
							position={[0, 0.715, -0.913]}
							rotation={[Math.PI / 2, 0, -Math.PI]}
						>
							<mesh
								geometry={
									nodes
										.bmw_m5_95_cockpit_interior_reflector__SUB0001_boordcomputer_0
										.geometry
								}
								material={materials.boordcomputer}
							/>
							<mesh
								geometry={
									nodes
										.bmw_m5_95_cockpit_interior_reflector__SUB1001_shiftrelfector_0
										.geometry
								}
								material={materials.shiftrelfector}
							/>
						</group>
					</group>
					<mesh
						geometry={nodes.HEAD001_E34_M5_FARI_ZAD_T1_0.geometry}
						material={materials.E34_M5_FARI_ZAD_T1}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<mesh
						geometry={nodes.HEAD1001_E34_M5_GLASS_OFF_0.geometry}
						material={materials.E34_M5_GLASS_OFF}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<mesh
						geometry={nodes.L_Mirror001_MIRRORS_0.geometry}
						material={materials.MIRRORS}
						rotation={[-Math.PI, 0, 0]}
					/>
					<mesh
						geometry={nodes.Object002001_INT_DOORPANELS_0.geometry}
						material={materials.INT_DOORPANELS}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.Object008001_INT_DOORPANELS_0.geometry}
						material={materials.INT_DOORPANELS}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.Object009001_INT_SEAT_0.geometry}
						material={materials.INT_SEAT}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.Object010001_INT_shift_0.geometry}
						material={materials.INT_shift}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.R_Mirror001_MIRRORS_0.geometry}
						material={materials.MIRRORS}
						rotation={[-Math.PI, 0, 0]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_badge_001_badge_0.geometry
						}
						material={materials.badge}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes
								.bmw_m5_95_cockpit_interior_bump_leather2_001_INT_DOORPANELS_0
								.geometry
						}
						material={materials.INT_DOORPANELS}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_bump_leather3_001_INT_DASH_0
								.geometry
						}
						material={materials.INT_DASH}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_bump_leather_001_INT_DASH2_0
								.geometry
						}
						material={materials.INT_DASH2}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes
								.bmw_m5_95_cockpit_interior_bump_plastic2_001_INT_plasticrest_0
								.geometry
						}
						material={materials.INT_plasticrest}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_bump_plastic3_001_bump_plastic3_0
								.geometry
						}
						material={materials.bump_plastic3}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_bump_stitching_001_stitching_0
								.geometry
						}
						material={materials.stitching}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_chrome_001_chrome_0.geometry
						}
						material={materials.chrome}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_cloth_001_cloth_0.geometry
						}
						material={materials.cloth}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_digital_gauge_001_digital_gauge_0
								.geometry
						}
						material={materials.digital_gauge}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes
								.bmw_m5_95_cockpit_interior_gauge_emissive_001_gauge_emissive_0
								.geometry
						}
						material={materials.gauge_emissive}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_gauge_needle_002_gauge_needle_0
								.geometry
						}
						material={materials.gauge_needle}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<group rotation={[-Math.PI / 2, 0, -Math.PI]}>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_interior_headliner_001_INT_headliner_0
									.geometry
							}
							material={materials.INT_headliner}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_interior_headliner_002_INT_headliner_0
									.geometry
							}
							material={materials.INT_headliner}
							position={[0, -0.221, 1.252]}
							rotation={[-0.049, 0, 0]}
						/>
					</group>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_leather_001_INT_DASH_0.geometry
						}
						material={materials.INT_DASH}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_metal_001_metal_0.geometry
						}
						material={materials.metal}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_mottled_001_INT_CARPET_0.geometry
						}
						material={materials.INT_CARPET}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<group rotation={[-Math.PI / 2, 0, -Math.PI]}>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_interior_plastic_001_plastic_0.geometry
							}
							material={materials.plastic}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_interior_plastic_002_plastic_0.geometry
							}
							material={materials.plastic}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_interior_plastic_002_gauge_needle_0
									.geometry
							}
							material={materials.gauge_needle}
						/>
					</group>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_rubber_001_rubber_0.geometry
						}
						material={materials.rubber}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_interior_solid_001_solid_0.geometry
						}
						material={materials.solid}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.bmw_m5_95_cockpit_seatL_badge_001_badge_0.geometry}
						material={materials.badge}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatL_chrome_001_chrome_0.geometry
						}
						material={materials.chrome}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.bmw_m5_95_cockpit_seatL_cloth_001_cloth_0.geometry}
						material={materials.cloth}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatL_leather_001_INT_SEAT_0.geometry
						}
						material={materials.INT_SEAT}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatL_plastic_001_plastic_0.geometry
						}
						material={materials.plastic}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.bmw_m5_95_cockpit_seatR_badge_001_badge_0.geometry}
						material={materials.badge}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatR_chrome_001_chrome_0.geometry
						}
						material={materials.chrome}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.bmw_m5_95_cockpit_seatR_cloth_001_cloth_0.geometry}
						material={materials.cloth}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatR_leather_001_INT_SEAT_0.geometry
						}
						material={materials.INT_SEAT}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={
							nodes.bmw_m5_95_cockpit_seatR_plastic_001_plastic_0.geometry
						}
						material={materials.plastic}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<group
						position={[0.432, 0.765, 0.565]}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_speed_min_plastic_001_plastic_0.geometry
							}
							material={materials.plastic}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_speed_min_plastic_001_gauge_needle_0
									.geometry
							}
							material={materials.gauge_needle}
						/>
					</group>
					<group
						position={[0.322, 0.764, 0.566]}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_tach_min_plastic_001_plastic_0.geometry
							}
							material={materials.plastic}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_cockpit_tach_min_plastic_001_gauge_needle_0
									.geometry
							}
							material={materials.gauge_needle}
						/>
					</group>
					<mesh
						geometry={nodes.bmw_m5_95_lod0_body_emblem_001_emblem_0.geometry}
						material={materials.emblem}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<mesh
						geometry={nodes.bmw_m5_95_lod0_body_misc_001_misc_0.geometry}
						material={materials.misc}
						rotation={[-Math.PI / 2, 0, -Math.PI]}
					/>
					<group rotation={[-Math.PI / 2, 0, -Math.PI]}>
						<mesh
							geometry={
								nodes.bmw_m5_95_lod0_body_rubber_trim_001_rubber_trim_0.geometry
							}
							material={materials.rubber_trim}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_lod0_body_rubber_trim_002_rubber_trim_0.geometry
							}
							material={materials.rubber_trim}
						/>
						<mesh
							geometry={
								nodes.bmw_m5_95_lod0_body_rubber_trim_003_rubber_trim_0.geometry
							}
							material={materials.rubber_trim}
							position={[0, -0.224, 1.255]}
							rotation={[-0.049, 0, 0]}
						/>
					</group>
					<mesh
						geometry={
							nodes.e34_m5_blinkers_t1_gmt_001001_E34_M5_FARI_ZAD_T1_0.geometry
						}
						material={materials.E34_M5_FARI_ZAD_T1}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<group rotation={[-Math.PI, 0, 0]}>
						<mesh
							geometry={nodes.e34_m5_body_gmt001_E34_CAR_PAINT_0.geometry}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt002_E34_CAR_PAINT_0.geometry}
							material={materials.E34_CAR_PAINT}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt003_trimblack_0.geometry}
							material={materials.trimblack}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt004_zadLights_0.geometry}
							material={materials.zadLights}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt005_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt006_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt007_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt008_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt009_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt010_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt011_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt012_sidelight_0.geometry}
							material={materials.sidelight}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt013_sidelight_0.geometry}
							material={materials.sidelight}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt014_sidelight_0.geometry}
							material={materials.sidelight}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt015_123__spec__0.geometry}
							material={materials['123__spec']}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt016_123__spec__0.geometry}
							material={materials['123__spec']}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt017_Matte__FFFF0000__spec__0.geometry
							}
							material={materials.Matte__FFFF0000__spec}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt018_zadLights_0.geometry}
							material={materials.zadLights}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt019_trimblack_0.geometry}
							material={materials.trimblack}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt020_sidelight_0.geometry}
							material={materials.sidelight}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt021_sidelight_0.geometry}
							material={materials.sidelight}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt022_trimblack_0.geometry}
							material={materials.trimblack}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt023_trimblack_0.geometry}
							material={materials.trimblack}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt024_Matte__FF808040__spec__0.geometry
							}
							material={materials.Matte__FF808040__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt025_Matte__FF7D7D7D__env_4_spec__0.geometry
							}
							material={materials.Matte__FF7D7D7D__env_4_spec}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt026_M5_E34_UNDERHOOD_0.geometry}
							material={materials.M5_E34_UNDERHOOD}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt027_M5_E34_UNDERHOOD_0.geometry}
							material={materials.M5_E34_UNDERHOOD}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt028_Matte__FF141414__spec__0.geometry
							}
							material={materials.Matte__FF141414__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt029_Matte__FF7A7A7A__env_14_spec__0
									.geometry
							}
							material={materials.Matte__FF7A7A7A__env_14_spec}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt030_trimblack_0.geometry}
							material={materials.trimblack}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt031_INTE_GLASS_0.geometry}
							material={materials.INTE_GLASS}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt032_Matte__FF333333__spec__0.geometry
							}
							material={materials.Matte__FF333333__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt033_Matte__FF7D7D7D__env_4_spec__0.geometry
							}
							material={materials.Matte__FF7D7D7D__env_4_spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt034_Matte__FF333333__spec__0.geometry
							}
							material={materials.Matte__FF333333__spec}
							position={[0.006, -0.375, -1.932]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt035_Matte__FF5A5A5A__env_4_spec__0.geometry
							}
							material={materials.Matte__FF5A5A5A__env_4_spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt036_Matte__FF121212__spec__0.geometry
							}
							material={materials.Matte__FF121212__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt037_Matte__FF141414__spec__0.geometry
							}
							material={materials.Matte__FF141414__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt038_Matte__FF999999__env_4_spec__0.geometry
							}
							material={materials.Matte__FF999999__env_4_spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt039_Matte__FF9C7554__spec__0.geometry
							}
							material={materials.Matte__FF9C7554__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt040_undercarriage__spec__0.geometry
							}
							material={materials.undercarriage__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt041_Matte__FFD02F2F__spec__0.geometry
							}
							material={materials.Matte__FFD02F2F__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt042_Matte__FF999999__spec__0.geometry
							}
							material={materials.Matte__FF999999__spec}
							position={[0, 0.002, 0]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt043_Matte__FF5A5A5A__env_4_spec__0.geometry
							}
							material={materials.Matte__FF5A5A5A__env_4_spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt044_Matte__FF7D7D7D__env_4_spec__0.geometry
							}
							material={materials.Matte__FF7D7D7D__env_4_spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt045_undercarriage__spec__0.geometry
							}
							material={materials.undercarriage__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt046_Matte__FF808040__spec__0.geometry
							}
							material={materials.Matte__FF808040__spec}
						/>
						<mesh
							geometry={
								nodes.e34_m5_body_gmt047_E34_M5_FARI_ZAD_T1001_0.geometry
							}
							material={materials['E34_M5_FARI_ZAD_T1.001']}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt048_intshifter_0.geometry}
							material={materials.intshifter}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt049_E34_CAR_PAINT_0.geometry}
							material={materials.E34_CAR_PAINT}
							position={[0.003, -1.259, 0.232]}
							rotation={[0.049, 0, 0]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt050_trimblack001_0.geometry}
							material={materials['trimblack.001']}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes['e34_m5_body_gmt051_Material_#0001_0'].geometry}
							material={materials['Material_0.001']}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt052_intplastic001_0.geometry}
							material={materials['intplastic.001']}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt053_emblem22_0.geometry}
							material={materials.emblem22}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes['e34_m5_body_gmt054_Material_#1_0'].geometry}
							material={materials.Material_1}
							position={[-0.001, -0.652, -1.634]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt055_ext_rim_logo_0.geometry}
							material={materials.ext_rim_logo}
							position={[0.859, -0.245, -1.413]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt056_ext_rim_metal_0.geometry}
							material={materials.ext_rim_metal}
							position={[0.822, -0.24, -1.414]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt057_RIM_CHROME_0.geometry}
							material={materials.RIM_CHROME}
							position={[0.836, -0.179, -1.412]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt058_CAR_PinzaFreni_0.geometry}
							material={materials.CAR_PinzaFreni}
							position={[0.706, -0.252, -1.291]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt059_CAR_DiscoFreni_0.geometry}
							material={materials.CAR_DiscoFreni}
							position={[0.721, -0.231, -1.414]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt060_TIRE_0.geometry}
							material={materials.TIRE}
							position={[0.784, -0.237, -1.414]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt061_ext_rim_logo_0.geometry}
							material={materials.ext_rim_logo}
							position={[0.859, -0.258, 1.383]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt062_ext_rim_metal_0.geometry}
							material={materials.ext_rim_metal}
							position={[0.822, -0.254, 1.381]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt063_RIM_CHROME_0.geometry}
							material={materials.RIM_CHROME}
							position={[0.836, -0.192, 1.383]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt064_CAR_PinzaFreni_0.geometry}
							material={materials.CAR_PinzaFreni}
							position={[0.706, -0.265, 1.505]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt065_CAR_DiscoFreni_0.geometry}
							material={materials.CAR_DiscoFreni}
							position={[0.721, -0.244, 1.382]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt066_TIRE_0.geometry}
							material={materials.TIRE}
							position={[0.784, -0.25, 1.382]}
							rotation={[0, 0, -0.065]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt067_ext_rim_logo_0.geometry}
							material={materials.ext_rim_logo}
							position={[-0.856, -0.242, -1.413]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt068_ext_rim_metal_0.geometry}
							material={materials.ext_rim_metal}
							position={[-0.819, -0.237, -1.414]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt069_RIM_CHROME_0.geometry}
							material={materials.RIM_CHROME}
							position={[-0.834, -0.176, -1.412]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt070_CAR_PinzaFreni_0.geometry}
							material={materials.CAR_PinzaFreni}
							position={[-0.704, -0.249, -1.291]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt071_CAR_DiscoFreni_0.geometry}
							material={materials.CAR_DiscoFreni}
							position={[-0.718, -0.227, -1.414]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt072_TIRE_0.geometry}
							material={materials.TIRE}
							position={[-0.782, -0.234, -1.414]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt073_ext_rim_logo_0.geometry}
							material={materials.ext_rim_logo}
							position={[-0.856, -0.255, 1.383]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt074_ext_rim_metal_0.geometry}
							material={materials.ext_rim_metal}
							position={[-0.819, -0.25, 1.381]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt075_RIM_CHROME_0.geometry}
							material={materials.RIM_CHROME}
							position={[-0.834, -0.189, 1.383]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt076_CAR_PinzaFreni_0.geometry}
							material={materials.CAR_PinzaFreni}
							position={[-0.704, -0.262, 1.505]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt077_CAR_DiscoFreni_0.geometry}
							material={materials.CAR_DiscoFreni}
							position={[-0.718, -0.241, 1.382]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
						<mesh
							geometry={nodes.e34_m5_body_gmt078_TIRE_0.geometry}
							material={materials.TIRE}
							position={[-0.782, -0.247, 1.382]}
							rotation={[0, 0, 0.065]}
							scale={[-1, 1, 1]}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_bumper_f_m_grey_gmt_SUB0001_E34_CAR_PAINT_0
									.geometry
							}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={
								nodes
									.e34_m5_bumper_f_m_grey_gmt_SUB1001_E34_M5_BUMPER_GUBA_GREY_0
									.geometry
							}
							material={materials.E34_M5_BUMPER_GUBA_GREY}
						/>
						<mesh
							geometry={
								nodes.e34_m5_bumper_f_m_grey_gmt_SUB2001_E34_M5_BLACK_0.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes.e34_m5_bumper_f_m_grey_gmt_SUB4001_E34_M5_GLASS_OFF_0
									.geometry
							}
							material={materials.E34_M5_GLASS_OFF}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_bumper_r_m_grey_gmt_SUB0001_E34_CAR_PAINT_0
									.geometry
							}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={
								nodes.e34_m5_bumper_r_m_grey_gmt_SUB1001_E34_M5_BLACK_0.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes
									.e34_m5_bumper_r_m_grey_gmt_SUB2001_E34_M5_BUMPER_GUBA_GREY_0
									.geometry
							}
							material={materials.E34_M5_BUMPER_GUBA_GREY}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_bumper_s_m_grey_gmt_SUB0001_E34_CAR_PAINT_0
									.geometry
							}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={
								nodes.e34_m5_bumper_s_m_grey_gmt_SUB1001_E34_M5_BLACK_0.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes
									.e34_m5_bumper_s_m_grey_gmt_SUB2001_E34_M5_BUMPER_GUBA_GREY_0
									.geometry
							}
							material={materials.E34_M5_BUMPER_GUBA_GREY}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB0001_E34_M5_BLACK_0.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB1001_E34_M5_FRAME_MATTE_0.geometry
							}
							material={materials.E34_M5_FRAME_MATTE}
						/>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB2001_E34_M5_BUMPER_FRAME_0.geometry
							}
							material={materials.E34_M5_BUMPER_FRAME}
						/>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB4001_E34_M5_BLACK_GLASS_0.geometry
							}
							material={materials.E34_M5_BLACK_GLASS}
						/>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB5001_E34_M5_DEFROST_LINES_0.geometry
							}
							material={materials.E34_M5_DEFROST_LINES}
						/>
						<mesh
							geometry={
								nodes.e34_m5_chassis_gmt_SUB6001_E34_M5_EMBLEM_0.geometry
							}
							material={materials.E34_M5_EMBLEM}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_emblem_old_pered_gmt_SUB0001_E34_M5_EMBLEM_0
									.geometry
							}
							material={materials.E34_M5_EMBLEM}
						/>
						<mesh
							geometry={
								nodes.e34_m5_emblem_old_pered_gmt_SUB1001_E34_M5_CHROME_0
									.geometry
							}
							material={materials.E34_M5_CHROME}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_emblem_zad_gmt_SUB0001_E34_M5_EMBLEM_0.geometry
							}
							material={materials.E34_M5_EMBLEM}
						/>
						<mesh
							geometry={
								nodes.e34_m5_emblem_zad_gmt_SUB1001_E34_M5_CHROME_0.geometry
							}
							material={materials.E34_M5_CHROME}
							position={[-0.546, 2.41, 0.703]}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_head_kishki_normal_gmt_SUB0001_E34_M5_FARI_ZAD_T1_0
									.geometry
							}
							material={materials.E34_M5_FARI_ZAD_T1}
						/>
						<mesh
							geometry={
								nodes.e34_m5_head_kishki_normal_gmt_SUB1001_newheadlights_0
									.geometry
							}
							material={materials.newheadlights}
						/>
						<mesh
							geometry={
								nodes.e34_m5_head_kishki_normal_gmt_SUB2001_E34_M5_CHROME_0
									.geometry
							}
							material={materials.E34_M5_CHROME}
						/>
					</group>
					<mesh
						geometry={
							nodes.e34_m5_lights_glass_off_gmt_001001_E34_M5_GLASS_OFF_0
								.geometry
						}
						material={materials.E34_M5_GLASS_OFF}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<group rotation={[-Math.PI, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_mirrors_old_gmt01_SUB0001_E34_CAR_PAINT_0.geometry
							}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={
								nodes.e34_m5_mirrors_old_gmt01_SUB1001_E34_M5_BLACK_0.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes.e34_m5_mirrors_old_gmt01_SUB2001_E34_M5_BADGE_E28_0
									.geometry
							}
							material={materials.E34_M5_BADGE_E28}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_muffler_stock_gmt_SUB0001_EXHAUSTBLACK_0.geometry
							}
							material={materials.EXHAUSTBLACK}
						/>
						<mesh
							geometry={
								nodes.e34_m5_muffler_stock_gmt_SUB1001_E34_M5_FRAME_MATTE_0
									.geometry
							}
							material={materials.E34_M5_FRAME_MATTE}
						/>
						<mesh
							geometry={
								nodes.e34_m5_muffler_stock_gmt_SUB2001_EXHAUSTCHROME_0.geometry
							}
							material={materials.EXHAUSTCHROME}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_nozdri_old_chrome_gmt_SUB0001_E34_M5_BLACK_0
									.geometry
							}
							material={materials.E34_M5_BLACK}
						/>
						<mesh
							geometry={
								nodes.e34_m5_nozdri_old_chrome_gmt_SUB1001_E34_M5_CHROME_0
									.geometry
							}
							material={materials.E34_M5_CHROME}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0002_E34_CAR_PAINT_0.geometry
							}
							material={materials.E34_CAR_PAINT}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0003_undercarriage__spec__0
									.geometry
							}
							material={materials.undercarriage__spec}
							position={[0.021, 0.042, 0.104]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0004_undercarriage__spec__0
									.geometry
							}
							material={materials.undercarriage__spec}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0005_grey_plast_divg_0.geometry
							}
							material={materials.grey_plast_divg}
							position={[0.048, -1.562, 0.4]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0006_Matte__FF141414__spec__0
									.geometry
							}
							material={materials.Matte__FF141414__spec}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB0007_Matte__FF333333__spec__0
									.geometry
							}
							material={materials.Matte__FF333333__spec}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={nodes.e34_m5_pered_old_gmt_SUB0009_trimblack_0.geometry}
							material={materials.trimblack}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={nodes.e34_m5_pered_old_gmt_SUB0010_sidelight_0.geometry}
							material={materials.sidelight}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={
								nodes
									.e34_m5_pered_old_gmt_SUB0011_E34_WHEELS_STYLE_21_850_BASE_0
									.geometry
							}
							material={materials.E34_WHEELS_STYLE_21_850_BASE}
							position={[-3.859, 0, 0]}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB1001_M34_BLACKBODY_0.geometry
							}
							material={materials.M34_BLACKBODY}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB1002_E34_BLACKBODY_TRANSL_0
									.geometry
							}
							material={materials.E34_BLACKBODY_TRANSL}
						/>
						<mesh
							geometry={
								nodes.e34_m5_pered_old_gmt_SUB2001_E34_M5_EMBLEM_0.geometry
							}
							material={materials.E34_M5_EMBLEM}
							position={[-0.001, -2.122, 0.587]}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={nodes.e34_m5_trunk_gmt_SUB0001_E34_CAR_PAINT_0.geometry}
							material={materials.E34_CAR_PAINT}
							position={[0, 2.323, 0.721]}
						/>
						<mesh
							geometry={nodes.e34_m5_trunk_gmt_SUB1001_E34_M5_BLACK_0.geometry}
							material={materials.E34_M5_BLACK}
							position={[-0.109, 2.369, 0.621]}
						/>
						<mesh
							geometry={nodes.e34_m5_trunk_gmt_SUB2001_E34_M5_EMBLEM_0.geometry}
							material={materials.E34_M5_EMBLEM}
							position={[-0.146, 2.424, 0.664]}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={
								nodes.e34_m5_trunk_light_gmt_001001_F10_M5_FARI_F10_0.geometry
							}
							material={materials.F10_M5_FARI_F10}
							position={[0, 2.404, 0.665]}
						/>
					</group>
					<group rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							geometry={nodes.e34_m5_windows_out_gmt_001001_WCWINDOW_0.geometry}
							material={materials.WCWINDOW}
							position={[0.001, 0.531, 1.001]}
						/>
					</group>
				</group>
				<mesh
					geometry={nodes.LICENSE_BOLTS_METALIC_SYMB_0.geometry}
					material={materials.METALIC_SYMB}
					position={[-0.203, 66.908, -215.538]}
					scale={100}
				/>
				<mesh
					geometry={nodes.LICENSE_BOLTS001_METALIC_SYMB_0.geometry}
					material={materials.METALIC_SYMB}
					position={[-0.121, 30.405, 221.92]}
					rotation={[-2.793, 0, Math.PI]}
					scale={100}
				/>
				<mesh
					geometry={nodes.LICENSE_FRAME_LicensePlateFrame_0.geometry}
					material={materials.LicensePlateFrame}
					position={[-0.203, 66.908, -215.538]}
					scale={100}
				/>
				<mesh
					geometry={nodes.LICENSE_FRAME001_LicensePlateFrame_0.geometry}
					material={materials.LicensePlateFrame}
					position={[-0.121, 30.405, 221.92]}
					rotation={[-2.793, 0, Math.PI]}
					scale={100}
				/>
				<mesh
					geometry={nodes.LICENSE_NUMBER_LICENSE_0.geometry}
					material={materials.LICENSE}
					position={[-0.194, 67.075, -215.358]}
					rotation={[-2.999, 0, -Math.PI]}
					scale={[14.562, 6.892, 76.019]}
				/>
				<mesh
					geometry={nodes.LICENSE_NUMBER001_LICENSE_0.geometry}
					material={materials.LICENSE}
					position={[-0.131, 30.623, 221.807]}
					rotation={[0.206, 0, 0]}
					scale={[14.562, 6.892, 76.019]}
				/>
				<mesh
					geometry={nodes.LICENSE_PLATE__0.geometry}
					material={materials.LICENSE_PLATE__0}
					position={[-0.203, 66.908, -215.538]}
					scale={100}
				/>
				<mesh
					geometry={nodes.LICENSE_PLATE001__0.geometry}
					material={materials.LICENSE_PLATE__0}
					position={[-0.121, 30.405, 221.92]}
					rotation={[-2.793, 0, Math.PI]}
					scale={100}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('public/bmw/scene.gltf')
