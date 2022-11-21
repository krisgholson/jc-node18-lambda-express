// from the project root - build and run the app in one console:
// 1. > docker build -t test-image .
// 2. > docker run -p 9000:8080 test-image lambda.handler

// test that you receive lambda.js as the value for the file key:
// > curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"message": "hello world!"}'
// {"statusCode":200,"body":{"event":{"message":"hello world!"},"file":"lambda.js","result":12}}

// test that if you run the app (step 2 above) using the index file as the handler, you receive index.js as the file key:
// 2. > docker run -p 9000:8080 test-image index.handler
// > curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"message": "hello world!"}'
// {"statusCode":200,"body":{"event":{"message":"hello world!"},"file":"index.js","result":12}}

import {handler as indexHandler} from './index.js'

export const handler = async (event) => {
    const response = await indexHandler(event)
    response.body.file = "lambda.js"
    return response
}


