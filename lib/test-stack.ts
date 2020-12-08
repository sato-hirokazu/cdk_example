import cdk = require('@aws-cdk/core');

export class TestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const myFunction = new lambda.Function( this, 'my-function', {
      functionName: 'my-function',
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.asset('lambda')
    })

  }
}
