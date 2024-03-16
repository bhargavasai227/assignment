import type { Node, NodeTypes } from "reactflow";
import CustomNodeComponent from "./CustomNodeComponent";
const x=-700;
interface NodeData {
  clr: string; 
  label: string; 
  imge?: string; 
}
const initialNodes: Node<NodeData, string | undefined>[] = [
  { 
    id: "a", 
    type: 'custom',
    position: { x: -1000, y: 300 }, 
    data: {
      clr:"white",
      label: "root",
      
    } 
  },
  {
    id: "b1",
    type: 'custom',
    position: { x: x, y: 120 },
    data: { 
      clr:"#2a4494",
      label: "Research",
      
    },
  },
  { 
    id: "b2", 
    type: 'custom',
    position: { x: x, y: 220 }, 
    data: { 
      clr:"#82b3e8",
      label: "Planning",
      
    } 
  },
  {
    id: "b3",
    type: 'custom',
    position: { x: x, y: 320 },
    data: { 
      clr:"#e96343",
      label: "Designing",
      
    },
  },
  {
    id: "b4",
    type: 'custom',
    position: { x: x, y: 420 },
    data: { 
      clr:"#e8919d",
      label: "Manufacturing"
    },
    
  },
  {
    id: "b5",
    type: 'custom',
    position: { x: x, y: 520 },
    data: { 
      clr:"#a684eb",
      label: "Sales/Marketing"
    },
    
  },
  {
    id: "c1",
    type: 'custom',
    position: { x: x+200, y: 100 },
    data: { 
      clr:"#2a4494",
      label: "External"
    },
  },
  {
    id: "c2",
    type: 'custom',
    position: { x: x+200, y: 150 },
    data: { 
      clr:"#2a4494",
      label:"Internal"
    },
  },
  {
    id: "c3",
    type: 'custom',
    position: { x: x+200, y: 200 },
    data: { 
      clr:"#82b3e8",
      label: "PRD"
    },
  },
  {
    id: "c4",
    type: 'custom',
    position: { x: x+200, y: 250},
    data: { 
      clr:"#82b3e8",
      label: "Specs"
    },
  },
  {
    id: "c5",
    type: 'custom',
    position: { x: x+200, y: 300},
    data: { 
      clr:"#e96343",
      label: "Hardware"
    },
  },
  {
    id: "c6",
    type: 'custom',
    position: { x: x+200, y: 350},
    data: { 
      clr:"#e96343",
      label: "Software"
    },
  },
  {
    id: "c7",
    type: 'custom',
    position: { x: x+200, y: 400},
    data: { 
      clr:"#e8919d",
      label: "Material"
    },
  },
  {
    id: "c8",
    type: 'custom',
    position: { x: x+200, y: 450},
    data: { 
      clr:"#e8919d",
      label: "Production"
    },
  },{
    id: "c9",
    type: 'custom',
    position: { x: x+200, y: 500},
    data: { 
      clr:"#a684eb",
      label: "Online"
    },
  },{
    id: "c10",
    type: 'custom',
    position: { x: x+200, y: 550},
    data: { 
      clr:"#a684eb",
      label: "Dealship"
    },
  },
  {
    id: "d1",
    type: 'custom',
    position: { x: x+500, y: 50},
    data: { 
      clr:"#2a4494",
      label: "B2C"
    },
  },{
    id: "d2",
    type: 'custom',
    position: { x: x+500, y: 150},
    data: { 
      clr:"#2a4494",
      label: "B2C"
    },
  },
  {
    id: "e1",
    type: 'custom',
    position: { x: x+700, y: 0},
    data: { 
      clr:"#2a4494",
      label: "Online"
    },
  },{
    id: "e2",
    type: 'custom',
    position: { x: x+700, y: 50},
    data: { 
      clr:"#2a4494",
      label: "Interview"
    },
  },
  {
    id: "e3",
    type: 'custom',
    position: { x: x+700, y: 100},
    data: { 
      clr:"#2a4494",
      label: "Health"
    },
  },
  {
    id: "fin",
    type: 'custom',
    position: { x: x+1000, y: 50},
    data: { 
      clr:"white",
      imge:"https://29b2eb86d7.clvaw-cdnwnd.com/18b93d4bb4f77ddec8c75f8adc4f29dc/200001415-8488a8488c/FullStack-Assignemt.png?ph=29b2eb86d7",
      label: "Hover"
    },
  },
  
] satisfies Node[];

const nodeTypes: NodeTypes = {
  custom: CustomNodeComponent,
};

export { initialNodes, nodeTypes };