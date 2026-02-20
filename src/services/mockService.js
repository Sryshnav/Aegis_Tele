// Simulates connecting to the hardware / Firebase
// This will be replaced by the actual firebase connection later

export const useMockTelemetry = (callback, intervalMs = 1000) => {
    // Hardcoded Static Data exactly as requested
    const staticData = {
        header: "TELEMETRY_PACKET_V1",
        cellularNetwork: "Jio 4G LTE",
        signalStrength: 85,
        lat: 12.9716, // Example: Bangalore
        lng: 77.5946,
        speed: 45, // km/h
        tail: "EOF"
    };

    let mockVoltage = 0.5;
    let mockIgnition = true;
    let timerId;

    // We wrap it in a function so we can start/stop it
    const startSimulation = () => {
        timerId = setInterval(() => {
            // Create some fluctuation in the Analog Voltage (0 - 5V)
            mockVoltage += (Math.random() - 0.5) * 0.2;
            if (mockVoltage > 5) mockVoltage = 5;
            if (mockVoltage < 0) mockVoltage = 0;

            // Randomly turn ignition off sometimes for demo purposes
            if (Math.random() > 0.95) mockIgnition = !mockIgnition;

            callback({
                ...staticData,
                voltage: mockVoltage,
                ignitionOn: mockIgnition,
                timestamp: new Date().toISOString()
            });
        }, intervalMs);
    };

    const stopSimulation = () => {
        clearInterval(timerId);
    };

    return { startSimulation, stopSimulation };
};
