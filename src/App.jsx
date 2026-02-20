import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import LocationCard from './components/LocationCard';
import TelemetryCard from './components/TelemetryCard';
import ControlCard from './components/ControlCard';
import { useMockTelemetry } from './services/mockService';

function App() {
    const [telemetry, setTelemetry] = useState(null);
    const [connected, setConnected] = useState(false);
    const [immobilizerActive, setImmobilizerActive] = useState(false);

    // Initialize Data Simulation
    useEffect(() => {
        // In the future, this is where we will listen to Firebase instead
        const { startSimulation, stopSimulation } = useMockTelemetry((newData) => {
            setTelemetry(newData);
            setConnected(true);
        });

        startSimulation();

        // Cleanup
        return () => stopSimulation();
    }, []);

    const handleImmobilizerToggle = (newState) => {
        setImmobilizerActive(newState);
        // In the future, this is where we write `immobilizer: newState` to Firebase
        console.log(`Sending command to MCU: Immobilizer ${newState ? 'ON' : 'OFF'}`);
    };

    if (!telemetry) {
        return (
            <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <p className="text-muted">Initializing Dashboard...</p>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            {/* Header section (extracted from plan) */}
            <header className="dashboard-header">
                <div className="dashboard-title">
                    <Activity size={28} style={{ color: 'var(--accent-blue)' }} />
                    Smart Telematics Dashboard
                </div>

                <div className={`connection-status ${!connected ? 'offline' : ''}`}>
                    <div className="status-dot pulse"></div>
                    {connected ? 'System Connected' : 'System Offline'}
                </div>
            </header>

            {/* Main Grid */}
            <div className="grid-layout">
                <LocationCard data={telemetry} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <TelemetryCard
                        voltage={telemetry.voltage}
                        ignitionOn={telemetry.ignitionOn}
                    />
                    <ControlCard
                        immobilizerActive={immobilizerActive}
                        onToggle={handleImmobilizerToggle}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
