#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";

import { SimpleAppConfigDemoStack } from "../lib";

const app = new cdk.App();
new SimpleAppConfigDemoStack(app, "SimpleAppConfigDemoStack", {
  description: "Demo stack for simple app config",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    Stack: "SimpleAppConfigDemoStack",
  },
  terminationProtection: false,
});
