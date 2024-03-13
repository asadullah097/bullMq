import { Queue } from 'bullmq';
import { connection } from './connection';

// Reuse the ioredis instance
const myQueue = new Queue('bullQueue', { connection });

async function addJobs() {
    await myQueue.add('bullQueue', { color: 'red' }, { removeOnComplete: true, removeOnFail: true, delay: 5000 },);
    await myQueue.add('bullQueue', { color: 'yellow p' }, { removeOnComplete: true, removeOnFail: true, priority: 1 },);
}

async function main() {
    await addJobs();
}


main(); // Call the async function
