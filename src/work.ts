import { Worker } from 'bullmq'
import { connection } from './connection';

const worker = new Worker('bullQueue', async (job: any) => { }, { connection });
worker.on('completed', job => {
    console.log(`${JSON.stringify(job.data)} has completed!`);
});

worker.on('failed', (job: any, err) => {
    console.log(`${job.data} has failed with ${err.message}`);
});
