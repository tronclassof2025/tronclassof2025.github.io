import React from 'react';
import { TagCloud } from 'react-tagcloud';

const CloudChartComponent = ({ 
  data = [], 
  title = "Tag Cloud", 
  description = "", 
  minSize = 12, 
  maxSize = 32,
  height = "300px",
  showCounts = true 
}) => {

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        fontSize: size,
        color: color,
        margin: '8px 12px',
        fontWeight: tag.count > 3 ? 'bold' : 'normal',
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textShadow: tag.count > 5 ? '1px 1px 2px rgba(0,0,0,0.1)' : 'none',
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = '0.7';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'scale(1)';
      }}
    >
      {tag.value}
    </span>
  );

  return (
    <div className="tagcloud-container" style={{ padding: '20px', width: '100%' }}>
      <h3 style={{ marginBottom: '30px', color: '#333', textAlign: 'center', fontSize: '24px' }}>
        {title}
      </h3>
      <div style={{ 
        padding: '40px',
        backgroundColor: 'transparent',
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: '1.8'
      }}>
        <TagCloud
          minSize={minSize}
          maxSize={maxSize}
          tags={data}
          className="simple-cloud"
          onClick={tag => console.log('Clicked on:', tag)}
          renderer={customRenderer}
          shuffle={false}
        />
      </div>
      {description && (
        <p style={{ 
          marginTop: '20px', 
          fontSize: '16px', 
          color: '#666',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default CloudChartComponent;