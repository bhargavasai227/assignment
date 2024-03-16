import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  { id: "a->c", source: "a", target: "b1" },
  { id: "b->d", source: "a", target: "b2" },
  { id: "c->d", source: "a", target: "b3" },
  { id: "a->d", source: "a", target: "b4" },
  { id: "a->e", source: "a", target: "b5" },
  { id: "b1->c1", source: "b1", target: "c1" },
  { id: "b1->c2", source: "b1", target: "c2" },
  { id: "b2->c3", source: "b2", target: "c3" },
  { id: "b2->c4", source: "b2", target: "c4" },
  { id: "b3->c5", source: "b3", target: "c5" },
  { id: "b3->c6", source: "b3", target: "c6" },

  { id: "b1->c7", source: "b4", target: "c7" },
  { id: "b2->c8", source: "b4", target: "c8" },
  { id: "b2->c9", source: "b5", target: "c9" },
  { id: "b3->c10", source: "b5", target: "c10" },

  { id: "c1->d1", source: "c1", target: "d1" },
  { id: "c1->d2", source: "c1", target: "d2" },

  { id: "d1->e1", source: "d1", target: "e1" },
  { id: "d1->e2", source: "d1", target: "e2" },
  { id: "d1->e3", source: "d1", target: "e3" },
{id:"final2", source:"e1",target:"fin"},
{id:"final1", source:"e3",target:"fin"},
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
