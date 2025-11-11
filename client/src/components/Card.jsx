import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable card component for displaying content in a contained box
 */
const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  elevation = 'medium',
  onClick,
}) => {
  // Elevation classes
  const elevationClasses = {
    none: 'border border-gray-200',
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-md',
  };

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden ${elevationClasses[elevation]} ${className} ${onClick ? 'cursor-pointer transition-transform hover:scale-[1.01]' : ''}`}
      onClick={onClick}
    >
      {title && (
        <div className="px-6 pt-6 pb-0">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  elevation: PropTypes.oneOf(['none', 'low', 'medium', 'high']),
  onClick: PropTypes.func,
};

export default Card;
