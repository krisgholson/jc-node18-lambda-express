// from the project root - build and run the app in one console:
// 1. > docker build -t test-image .
// 2. > docker run -p 9000:8080 test-image expressLambda.handler

// test that you receive a hello world response in a different console:
// > curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"body": null,"httpMethod": "GET","path": "/","requestContext": {}}'

import serverlessExpress from '@vendia/serverless-express'
import {app} from './expressApp.js'

export const handler = serverlessExpress({app})


