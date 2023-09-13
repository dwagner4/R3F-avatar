import { OrbitControls } from "@react-three/drei";
import { Cube } from '../models/Cube.jsx'
import { Avatar } from '../models/avatar/Avatar.jsx'

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Cube position={[ -1, 0, 1]} tag="Joe" fsm="shapeRef1" friend="shapeRef2"/>
      <Cube position={[ 1, 0, -1]} tag = "fart" fsm="shapeRef2" friend="shapeRef1"/>
      <group position-y={-1}>
        <Avatar />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};