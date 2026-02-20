import React from 'react';
import { Activity, Power } from 'lucide-react';

const TelemetryCard = ({ voltage, ignitionOn }) => {
    // Simple color logic based on voltage (assuming 12V system scaled to 0-5V for ADC)
    // Let's say: < 2V is danger, 2-3V warning, > 3V is good.
    let voltageColor = 'var(--status-ok)';
    if (voltage < 2.0) voltageColor = 'var(--status-danger)';
    else if (voltage < 3.5) voltageColor = 'var(--status-warning)';

    return (
        <div className="card">
            <div className="card-header">
                <Activity className="card-icon" size={18} />
                Real-time Telemetry
            </div>

            <div className="voltage-display">
                <div>
                    <span className="voltage-value" style={{ color: voltageColor }}>
                        {voltage.toFixed(2)}
                    </span>
                    <span className="voltage-unit">V</span>
                </div>
                <span className="data-label" style={{ marginTop: '0.5rem' }}>Analog Input Voltage</span>
            </div>

            <div className="card-header" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                <Power className="card-icon" size={18} />
                Digital Inputs
            </div>

            <div className="data-row">
                <span className="data-label">Ignition Status (DI 1)</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className={`status-dot ${ignitionOn ? 'pulse' : ''}`} style={{ backgroundColor: ignitionOn ? 'var(--status-ok)' : 'var(--text-muted)' }}></div>
                    <span className="data-value" style={{ color: ignitionOn ? 'var(--status-ok)' : 'var(--text-muted)' }}>
                        {ignitionOn ? 'ON' : 'OFF'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TelemetryCard;
