import React from 'react';
import '../styles/FeatureCard.scss';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h4 className="feature-card__title">{title}</h4>
      <p className="feature-card__description">{description}</p>
    </div>
  );
};

export default FeatureCard;
