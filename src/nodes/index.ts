import type { Node, NodeTypes } from "reactflow";
import CustomNodeComponent from "./CustomNodeComponent";
const x=-700;
export const initialNodes = [
  { 
    id: "a", 
    type: 'custom',
    position: { x: -1000, y: 300 }, 
    data: { 
      label: "root",
      
    } 
  },
  {
    id: "b1",
    type: 'custom',
    position: { x: x, y: 120 },
    data: { 
      label: "Research",
      
    },
  },
  { 
    id: "b2", 
    type: 'custom',
    position: { x: x, y: 220 }, 
    data: { 
      label: "Planning",
      
    } 
  },
  {
    id: "b3",
    type: 'custom',
    position: { x: x, y: 320 },
    data: { 
      label: "Designing",
      
    },
  },
  {
    id: "b4",
    type: 'custom',
    position: { x: x, y: 420 },
    data: { 
      label: "Manufacturing"
    },
    
  },
  {
    id: "b5",
    type: 'custom',
    position: { x: x, y: 520 },
    data: { 
      label: "Sales/Marketing"
    },
    
  },
  {
    id: "c1",
    type: 'custom',
    position: { x: x+200, y: 100 },
    data: { 
      label: "External"
    },
  },
  {
    id: "c2",
    type: 'custom',
    position: { x: x+200, y: 150 },
    data: { 
      label: "Internal"
    },
  },
  {
    id: "c3",
    type: 'custom',
    position: { x: x+200, y: 200 },
    data: { 
      label: "PRD"
    },
  },
  {
    id: "c4",
    type: 'custom',
    position: { x: x+200, y: 250},
    data: { 
      label: "Specs"
    },
  },
  {
    id: "c5",
    type: 'custom',
    position: { x: x+200, y: 300},
    data: { 
      label: "Hardware"
    },
  },
  {
    id: "c6",
    type: 'custom',
    position: { x: x+200, y: 350},
    data: { 
      label: "Software"
    },
  },
  {
    id: "c7",
    type: 'custom',
    position: { x: x+200, y: 400},
    data: { 
      label: "Material"
    },
  },
  {
    id: "c8",
    type: 'custom',
    position: { x: x+200, y: 450},
    data: { 
      label: "Production"
    },
  },{
    id: "c9",
    type: 'custom',
    position: { x: x+200, y: 500},
    data: { 
      label: "Online"
    },
  },{
    id: "c10",
    type: 'custom',
    position: { x: x+200, y: 550},
    data: { 
      label: "Dealship"
    },
  },
  {
    id: "d1",
    type: 'custom',
    position: { x: x+500, y: 50},
    data: { 
      label: "B2C"
    },
  },{
    id: "d2",
    type: 'custom',
    position: { x: x+500, y: 150},
    data: { 
      label: "B2C"
    },
  },
  {
    id: "e1",
    type: 'custom',
    position: { x: x+700, y: 0},
    data: { 
      label: "Online"
    },
  },{
    id: "e2",
    type: 'custom',
    position: { x: x+700, y: 50},
    data: { 
      label: "Interview"
    },
  },
  {
    id: "e3",
    type: 'custom',
    position: { x: x+700, y: 100},
    data: { 
      label: "Health"
    },
  },
  {
    id: "fin",
    type: 'custom',
    position: { x: x+1000, y: 50},
    data: { 
      label: "hi"
    },
  },
  
] satisfies Node[];

export const nodeTypes = {
 
  "custom":CustomNodeComponent,

} satisfies NodeTypes;
