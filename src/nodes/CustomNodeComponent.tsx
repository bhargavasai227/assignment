import React, { MouseEvent,useState } from 'react';
import { Handle, Position } from 'reactflow';


interface NodeData {
  label: string;
  handlers?: { left: boolean; right: boolean; };
  
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
  
const imageUrl="https://29b2eb86d7.clvaw-cdnwnd.com/18b93d4bb4f77ddec8c75f8adc4f29dc/200001415-8488a8488c/FullStack-Assignemt.png?ph=29b2eb86d7";
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
    >
      <div>{data.label}</div>
      <img
        src={imageUrl}
        alt="Hover image"
        className="hover-image" 
        style={{
          position: 'absolute',
          top: -50,
          left: 0,
          width: '5vw',
          height: '2wh',
          opacity: isHovering ? 1 : 0, 
          transition: 'opacity 0.2s ease-in-out', 
        }}
      />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      
    </div>
  );
};

export default CustomNodeComponent;
