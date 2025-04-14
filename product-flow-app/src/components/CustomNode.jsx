import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  const { label, onChange } = data;

  return (
    <div
      onDoubleClick={() => {
        const newLabel = prompt('Edit node text:', label);
        if (newLabel && onChange) onChange(newLabel);
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: '#3b82f6' }} />
      {label}
      <Handle type="source" position={Position.Bottom} style={{ background: '#3b82f6' }} />
    </div>
  );
}

export default CustomNode;
