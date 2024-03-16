import React, { MouseEvent,useState } from 'react';
import { Handle, Position } from 'reactflow';


interface NodeData {

  label: string;
  imge?:string;
  clr:string;
  
}

interface CustomNodeComponentProps {
  data: NodeData;
  onNodeDrag?: (event: MouseEvent, data: NodeData) => void;
  onNodeDoubleClick?: (data: NodeData) => void;
}

const CustomNodeComponent: React.FC<CustomNodeComponentProps> = ({ data, onNodeDrag, onNodeDoubleClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleNodeDragStart = (event: MouseEvent) => {
    if (onNodeDrag) {
      onNodeDrag(event, data);
    }
  };
  
const imageUrl=data.imge;
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleNodeDoubleClick = () => {
    if (onNodeDoubleClick) {
      onNodeDoubleClick(data);
    }
  };

  return (
    <div
      className="react-flow__node-default"
      draggable
      onDragStart={handleNodeDragStart}
      onDoubleClick={handleNodeDoubleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{backgroundColor:data.clr}}
    >
      <div>{data.label}</div>
      {data.imge&&<img
        src={imageUrl}
        alt="Hover image"
        className="hover-image" 
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          width: '10vw',
          height: '5wh',
          opacity: isHovering ? 1 : 0, 
          transition: 'opacity 0.2s ease-in-out', 
        }}
      />}
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      
    </div>
  );
};

export default CustomNodeComponent;
