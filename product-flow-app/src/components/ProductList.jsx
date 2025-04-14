function ProductList({ products, onSelect }) {
    return (
      <div
        style={{
          width: '25%',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRight: '1px solid #e5e7eb',
          overflowY: 'auto',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
        }}
      >
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          🛒 Product List
        </h2>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            style={{
              marginBottom: '0.75rem',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0f2fe')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
          >
            <div style={{ fontWeight: '600', fontSize: '1rem' }}>{product.title}</div>
            <div style={{ color: '#6b7280' }}>💰 ${product.price}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  