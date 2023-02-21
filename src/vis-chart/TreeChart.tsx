import { FC, useState } from "react";
import { Treemap } from "react-vis";

function _getRandomData(total?: number) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: "thin solid red",
      },
    });
  }
  return {
    title: "",
    color: 1,
    children: leaves,
  };
}

export const TreeChart: FC = () => {
  const [hoveredNode, setHoveredNode] = useState<any>(false);
  const [treemapData, setTreemapData] = useState(_getRandomData(20));
  const [circlePacking, setCirclePacking] = useState(false);

  const treeProps: any = {
    animation: {
      damping: 9,
      stiffness: 300,
    },
    data: treemapData,
    onLeafMouseOver: (x: any) => setHoveredNode(x),
    onLeafMouseOut: () => setHoveredNode(false),
    onLeafClick: () => setTreemapData(_getRandomData()),
    height: 300,
    mode: circlePacking ? "circlePack" : "squarify",
    getLabel: (x: any) => x.name,
    width: 350,
  };

  return (
    <>
      <span onClick={() => setCirclePacking(!circlePacking)}>TOGGLE </span>
      <Treemap {...treeProps} />
      click above to the update data
      {hoveredNode && hoveredNode.value}
    </>
  );
};
