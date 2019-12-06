export function distance(wire1, wire2) {
    wire1 = wire1.split(',');
    wire2 = wire2.split(',');

    let platform = new Map();

    platform = drawWirePath(wire1, platform);
    platform = drawWirePath(wire2, platform);

    const crossingPoints = getWireCrossingPoints(platform);
    const distances = [];
    
    // get distances to each crossing point
    for (let key of platform.keys()) {
        distances.push(key.split(',').reduce((a, b) => Math.abs(parseInt(a)) + Math.abs(parseInt(b)), 0));
    }

    return Math.min(...distances);
}

function drawWirePath(wire, platform) {
    let x = 0;
    let y = 0;

    wire.forEach(instruction => {
        const direction = instruction.slice(0, 1);
        const amount = instruction.slice(1);

        for (let i = 0; i < amount; i++) {
            switch(direction) {
                case 'R': x++; break;
                case 'L': x--; break;
                case 'U': y++; break;
                case 'D': y--; break;
            };

            platform.set(`${x},${y}`, platform.get(`${x},${y}`) ? platform.get(`${x},${y}`) + 1 : 1);
        }
    });

    return platform;
}

function getWireCrossingPoints(platform) {
    for (let key of platform.keys()) {
        if (platform.get(key) <= 1) {
            platform.delete(key);
        }
    }

    return platform;
}