export function intcode(pattern) {
    for (let idx = 0; idx < pattern.length; idx += 4) {
        if (pattern[idx] === 1) {
            pattern[pattern[idx + 3]] = pattern[pattern[idx + 1]] + pattern[pattern[idx + 2]];
        }
        else if (pattern[idx] === 2) {
            pattern[pattern[idx + 3]] = pattern[pattern[idx + 1]] * pattern[pattern[idx + 2]];
        }
        else if (pattern[idx] === 99) {
            // exit intcode
            break;
        }
    }

    return pattern;
}
