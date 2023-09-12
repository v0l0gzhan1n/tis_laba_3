function processQueueOperations(operations) {
    let queue = [];

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i].split(' ');

        if (operation[0] === 'WORRY') {
            let index = parseInt(operation[1]);
            queue[index] = 1;
        } else if (operation[0] === 'QUIET') {
            let index = parseInt(operation[1]);
            queue[index] = 0;
        } else if (operation[0] === 'COME') {
            let k = parseInt(operation[1]);
            if (k > 0) {
                for (let j = 0; j < k; j++) {
                    queue.push(0);
                }
            } else {
                for (let j = 0; j < Math.abs(k); j++) {
                    queue.pop();
                }
            }
        } else if (operation[0] === 'WORRY_COUNT') {
            let count = queue.reduce((acc, val) => acc + val, 0);
            console.log(count);
        }
    }
}

let input = [
    '8',
    'COME 5',
    'WORRY 1',
    'WORRY 4',
    'COME -2',
    'WORRY_COUNT',
    'COME 3',
    'WORRY 3',
    'WORRY_COUNT'
];
processQueueOperations(input);
