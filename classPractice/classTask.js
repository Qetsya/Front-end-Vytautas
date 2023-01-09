// Create a class named "JobWorker" which accepts a name argument in its constructor.
// If a name argument is not provided, use a default value "unnamed"

// The class has two attributes:
// - name (string, from the constructor)
// - accumulatedCost (number, starts at 0)

// The class has two methods:
// - doJob(): logs to the console the following string `${name} has done a job!`,
//     and increments the accumulated cost by 500.

// - payWorker(): logs to the console the following string `${name} has been paid ${accumulatedCost}`,
//     and then the accumulated cost is reset to 0.


class JobWorker {
    name;
    accumulatedCost = 0;

    constructor(name = 'unnamed') {
        this.name = name;
    }

    soJob() {
        console.log(`${this.name} has done a job!`);
        this.accumulatedCost += 500;
    }

    payWorker() {
        console.log(`${this.name} has been paid ${this.accumulatedCost}`);
        this.accumulatedCost = 0;
    }
}

const firstWorker = new JobWorker('Petras');

firstWorker.soJob();
firstWorker.payWorker();
