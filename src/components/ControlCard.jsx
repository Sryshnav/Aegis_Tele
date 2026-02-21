import React from 'react';
import { ShieldAlert } from 'lucide-react';

const ControlCard = ({ immobilizerActive, onToggle }) => {
    return (
        <div className="card" style={{ borderColor: immobilizerActive ? 'var(--status-danger)' : 'var(--border-color)' }}>
            <div className="card-header" style={{ color: immobilizerActive ? 'var(--status-danger)' : 'var(--text-muted)' }}>
                <ShieldAlert className="card-icon" size={18} style={{ color: immobilizerActive ? 'var(--status-danger)' : 'inherit' }} />
                Active Controls
            </div>

            <p className="text-muted text-sm" style={{ marginBottom: '1rem', lineHeight: 1.5 }}>
                Engaging the immobilizer will trigger the Digital Output line on the MCU to cut off fuel or ignition. Use with caution.
            </p>

            <div className="toggle-container" style={{ border: immobilizerActive ? '1px solid rgba(239, 68, 68, 0.3)' : 'none' }}>
                <div>
                    <div className="data-value" style={{ color: immobilizerActive ? 'var(--status-danger)' : 'var(--text-main)' }}>
                        Engine Immobilizer
                    </div>
                    <div className="text-xs text-muted" style={{ marginTop: '4px' }}>
                        
                    </div>
                </div>

                <label className="switch">
                    <input
                        type="checkbox"
                        checked={immobilizerActive}
                        onChange={(e) => onToggle(e.target.checked)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            {immobilizerActive && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="status-dot pulse" style={{ backgroundColor: 'var(--status-danger)' }}></div>
                    IMMOBILIZER ENGAGED
                </div>
            )}
        </div>
    );
};

export default ControlCard;
