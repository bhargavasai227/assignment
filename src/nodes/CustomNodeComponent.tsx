import React, { MouseEvent } from 'react';
import { Handle, Position } from 'reactflow';

// Define a type for the expected node data
interface NodeData {
  label: string;
  handlers?: { left: boolean; right: boolean; };
  clr?:string;
  // Add other properties as needed
}

interface CustomNodeComponentProps {
  data: NodeData;
  onNodeDrag?: (event: MouseEvent, data: NodeData) => void;
  onNodeDoubleClick?: (data: NodeData) => void;
}

const CustomNodeComponent: React.FC<CustomNodeComponentProps> = ({ data, onNodeDrag, onNodeDoubleClick }) => {
 
  const handleNodeDragStart = (event: MouseEvent) => {
    if (onNodeDrag) {
      onNodeDrag(event, data);
    }
  };

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
    >
      <div>{data.label}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
};

export default CustomNodeComponent;
