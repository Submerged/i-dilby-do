import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from 'path';
import {LambdaRestApi} from "aws-cdk-lib/aws-apigateway";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new NodejsFunction(this, 'rsvp-function', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main',
      entry: path.join(__dirname, `/../handlers/rsvp/index.ts`),
    });

    const api = new LambdaRestApi(this, 'API', {
      handler: lambdaFunction,
      proxy: true,
    })
  }
}
