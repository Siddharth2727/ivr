import { Row, Col } from "react-bootstrap";
import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  Background,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  applyNodeChanges, applyEdgeChanges,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 100 },
    },
  ];

  const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

function IVR_panel() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
   

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const myStyle = {
    width: "100%",
    height: "700px",
  };

  return (
    <Row>
      <Col md={12}>
        <div style={myStyle}>
            <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
        > <Background />
            <Controls />
          </ReactFlow>
        </div>
      </Col>
    </Row>
  );
}

export default IVR_panel;
