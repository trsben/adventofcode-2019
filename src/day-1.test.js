import { fuelRequirement, fuelRequirementAdditional, sumOfFuelRequirements, sumOfFuelRequirementsAdditional } from './day-1';

test('mass of 12 to equal 2', () => {
    expect(fuelRequirement(12)).toBe(2);
});

test('mass of 14 to equal 2', () => {
    expect(fuelRequirement(14)).toBe(2);
});

test('mass of 1969 to equal 654', () => {
    expect(fuelRequirement(1969)).toBe(654);
});

test('mass of 100756 to equal 33583', () => {
    expect(fuelRequirement(100756)).toBe(33583);
});

test('total fuel requirement for 12, 14 to equal 4', () => {
    expect(sumOfFuelRequirements([12, 14])).toBe(4);
});

test('total fuel requirement for challenge to equal 3223398', () => {
    expect(sumOfFuelRequirements([56123, 145192, 123702, 66722, 148748, 53337, 147279, 126828, 118438, 54030, 145839, 87751, 58832, 90085, 113196, 104802, 61235, 136935, 108620, 60795, 107908, 123023, 142399, 131074, 123411, 122653, 84776, 100891, 78816, 62762, 92077, 91428, 56831, 65122, 94694, 78668, 112506, 73406, 118239, 57897, 59200, 54437, 55185, 102667, 86076, 80655, 83406, 141502, 67171, 88472, 149260, 68395, 56828, 108798, 125682, 68203, 118263, 101824, 94853, 68536, 95646, 120283, 135355, 82701, 92243, 122282, 55760, 129959, 142814, 56599, 70836, 69996, 85262, 126648, 69043, 67460, 119934, 82453, 147012, 72957, 53374, 97577, 59696, 121630, 122666, 116591, 145967, 75699, 85963, 140970, 75612, 78792, 100795, 92034, 132569, 117172, 134179, 109504, 103707, 54664])).toBe(3223398);
});

test('mass of 14 (with additional) to equal 2', () => {
    expect(fuelRequirementAdditional(14)).toBe(2);
});

test('mass of 1969 (with additional) to equal 966', () => {
    expect(fuelRequirementAdditional(1969)).toBe(966);
});

test('mass of 100756 (with additional) to equal 50346', () => {
    expect(fuelRequirementAdditional(100756)).toBe(50346);
});

test('total fuel requirement for 12, 14 (with additional) to equal 4', () => {
    expect(sumOfFuelRequirementsAdditional([12, 14])).toBe(4);
});

test('total fuel requirement for 1969, 100756 (with additional) to equal 51312', () => {
    expect(sumOfFuelRequirementsAdditional([1969, 100756])).toBe(51312);
});

test('total fuel requirement for challenge (with additional) to equal 0', () => {
    expect(sumOfFuelRequirementsAdditional([56123, 145192, 123702, 66722, 148748, 53337, 147279, 126828, 118438, 54030, 145839, 87751, 58832, 90085, 113196, 104802, 61235, 136935, 108620, 60795, 107908, 123023, 142399, 131074, 123411, 122653, 84776, 100891, 78816, 62762, 92077, 91428, 56831, 65122, 94694, 78668, 112506, 73406, 118239, 57897, 59200, 54437, 55185, 102667, 86076, 80655, 83406, 141502, 67171, 88472, 149260, 68395, 56828, 108798, 125682, 68203, 118263, 101824, 94853, 68536, 95646, 120283, 135355, 82701, 92243, 122282, 55760, 129959, 142814, 56599, 70836, 69996, 85262, 126648, 69043, 67460, 119934, 82453, 147012, 72957, 53374, 97577, 59696, 121630, 122666, 116591, 145967, 75699, 85963, 140970, 75612, 78792, 100795, 92034, 132569, 117172, 134179, 109504, 103707, 54664])).toBe(4832253);
});
