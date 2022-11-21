import { double } from './lib.mjs';

export const handler = async (event) => {
    let result = double(6); // 12
    const response = {
        "statusCode": 200,
        "body": {event, "file": "index.js", "result": result}
    };
    return response;
};
