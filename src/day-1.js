export function fuelRequirement(mass) {
    return Math.floor(mass / 3) - 2;
}

export function fuelRequirementAdditional(mass) {
    const fuelTotal = [];

    while (mass > 0) {
        let result = fuelRequirement(mass);

        if (result > 0) {
            fuelTotal.push(result);
        }

        mass = result;
    }

    return fuelTotal.reduce((a, b) => a + b, 0);
}

export function sumOfFuelRequirements(requirements) {
    return requirements.map(requirement => fuelRequirement(requirement)).reduce((a, b) => a + b, 0);
}

export function sumOfFuelRequirementsAdditional(requirements) {
    return requirements.map(requirement => fuelRequirementAdditional(requirement)).reduce((a, b) => a + b, 0);
}
