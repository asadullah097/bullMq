"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const connection_1 = require("./connection");
const worker = new bullmq_1.Worker('bullQueue', async (job) => { }, { connection: connection_1.connection });
worker.on('completed', job => {
    console.log(`${JSON.stringify(job.data)} has completed!`);
});
worker.on('failed', (job, err) => {
    console.log(`${job.data} has failed with ${err.message}`);
});
