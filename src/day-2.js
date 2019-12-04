export function intcode(pattern) {
    pattern = pattern.slice();

    for (let idx = 0; idx < pattern.length; idx += 4) {
        if (pattern[idx] === 1) {
            pattern[pattern[(idx + 3)]] = pattern[pattern[idx + 1]] + pattern[pattern[idx + 2]];
        }
        else if (pattern[idx] === 2) {
            pattern[pattern[(idx + 3)]] = pattern[pattern[idx + 1]] * pattern[pattern[idx + 2]];
        }
        else if (pattern[idx] === 99) {
            // exit intcode
            break;
        }
    }

    return pattern;
}

export function findNounVerbPair(pattern, target) {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            pattern[1] = noun;
            pattern[2] = verb;

            if (intcode(pattern)[0] === target) {
                return 100 * noun + verb;
            }
        }
    }

    return false;
}
