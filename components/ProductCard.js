import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data || !Array.isArray(data)) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',
      padding: '1rem',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {data.map((item, index) => (
        <article
          key={item.id}
          style={{
            border: '2px solid #34495e',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            background: '#2c3e50',
            width: '100%',
            cursor: 'pointer',
            transform: hoveredIndex === index ? 'translateY(-8px)' : 'none',
            boxShadow:
              hoveredIndex === index
                ? '0 12px 25px rgba(52, 152, 219, 0.2)'
                : '0 4px 12px rgba(0,0,0,0.2)',
            position: 'relative',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              backgroundColor: '#34495e',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{
                objectFit: 'cover',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div style={{ padding: '1rem', color: '#ecf0f1' }}>
            <h3 style={{ margin: '0.5rem 0' }}>{item.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>{item.category}</p>
            <p
              style={{
                fontWeight: '700',
                color: '#3498db',
                marginTop: '0.25rem',
              }}
            >
              ₹{(item.price ?? 0).toLocaleString('en-IN')}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}