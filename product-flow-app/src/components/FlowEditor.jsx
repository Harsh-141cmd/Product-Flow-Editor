import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

let id = 0;
const getId = () => `node_${id++}`;

function FlowEditor({ selectedProducts }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      const latest = selectedProducts[selectedProducts.length - 1];
      const newNode = {
        id: getId(),
        data: {
          label: (
            <div>
              <strong>{latest.title}</strong>
              <div>💰 ${latest.price}</div>
            </div>
          ),
        },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        style: {
          padding: 10,
          border: '1px solid #d1d5db',
          borderRadius: 10,
          backgroundColor: '#fefce8',
        },
      };
      setNodes((nds) => [...nds, newNode]);
    }
  }, [selectedProducts]);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => {
      const updatedNodes = applyNodeChanges(changes, nds);
      const selected = changes.find((change) => change.selected);
      if (selected) {
        setSelectedNodeId(selected.id);
      }
      return updatedNodes;
    });
  }, []);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection) => {
    setEdges((eds) =>
      addEdge({ ...connection, animated: true, style: { stroke: '#3b82f6' } }, eds)
    );
  }, []);

  const addEmptyNode = () => {
    const newId = getId();
    const newNode = {
      id: newId,
      data: {
        label: (
          <div
            onDoubleClick={() => {
              const newText = prompt('Edit node text:', 'Double click to edit');
              if (newText) {
                setNodes((nds) =>
                  nds.map((node) =>
                    node.id === newId
                      ? {
                          ...node,
                          data: { label: <div>{newText}</div> },
                        }
                      : node
                  )
                );
              }
            }}
          >
            Double click to edit
          </div>
        ),
      },
      position: { x: 100 + Math.random() * 400, y: 100 + Math.random() * 400 },
      style: {
        padding: 10,
        border: '1px solid #d1d5db',
        borderRadius: 10,
        backgroundColor: '#fefce8',
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelectedNode = () => {
    if (!selectedNodeId) return;

    setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== selectedNodeId && edge.target !== selectedNodeId));
    setSelectedNodeId(null);
  };

  return (
    <div style={{ width: '75%', height: '100vh', backgroundColor: '#f8fafc', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10, display: 'flex', gap: '10px' }}>
        <button
          onClick={addEmptyNode}
          style={{
            padding: '6px 12px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          ➕ Add Empty Node
        </button>
        <button
          onClick={deleteSelectedNode}
          style={{
            padding: '6px 12px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          🗑️ Delete Selected Node
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background color="#e5e7eb" />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowEditor;
