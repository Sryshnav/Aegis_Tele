import React from 'react';
import { MapPin, Signal, Clock, Database } from 'lucide-react';

const LocationCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <MapPin className="card-icon" size={18} />
        Location & Cellular
      </div>
      
      <div className="data-row">
        <span className="data-label">Coordinates</span>
        <span className="data-value font-mono">{data.lat}, {data.lng}</span>
      </div>
      <div className="data-row">
        <span className="data-label">Speed</span>
        <span className="data-value">{data.speed} km/h</span>
      </div>
      
      <div className="card-header" style={{ marginTop: '1.5rem' }}>
        <Signal className="card-icon" size={18} />
        Cellular Info
      </div>
      <div className="data-row">
        <span className="data-label">Network</span>
        <span className="data-value">{data.cellularNetwork}</span>
      </div>
      <div className="data-row">
        <span className="data-label">Signal Strength</span>
        <span className="data-value">{data.signalStrength}%</span>
      </div>

      <div className="card-header" style={{ marginTop: '1.5rem' }}>
        <Database className="card-icon" size={18} />
        Packet Info
      </div>
      <div className="data-row">
        <span className="data-label">Timestamp (UTC)</span>
        <span className="data-value text-xs">{data.timestamp}</span>
      </div>
    </div>
  );
};

export default LocationCard;
