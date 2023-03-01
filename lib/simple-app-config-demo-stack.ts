import { StackProps, Stack, App } from 'aws-cdk-lib';
import { SimpleAppConfig } from 'cdk-appconfig';
import { Construct } from 'constructs';


/**
 * Demo stack for {@link SimpleAppConfig}.
 */
export class SimpleAppConfigDemoStack extends Stack {
    /**
       * The {@link SimpleAppConfig} construct.
       */
    public readonly simpleAppConfig: SimpleAppConfig;

    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        // Everything below is customizable, so use it as needed.
        this.simpleAppConfig = new SimpleAppConfig(this, 'SimpleAppConfig', {
            applicationName: 'MyAppConfigAppName',
            applicationEnvironment: 'MyEnvironment',
            configurationProfileName: 'MyConfigProfileName',
            // see {@link SimpleAppConfig#ConfigurationContent}, this is pretty generic.
            configurationContent: {
                MyStringKey: 'MyValue',
                MyBooleanKey: true,
                MyNumberKey: 123,
                MyCompositeKey: {
                    MyStringKey: 'MyValue',
                    MyBooleanKey: true,
                    MyNumberKey: 123,
                },
                MyArrayKey: [
                    {
                        MyStringKey: 'MyValue1',
                        MyBooleanKey: true,
                        MyNumberKey: 123,
                    },
                    {
                        MyStringKey: 'MyValue2',
                        MyBooleanKey: false,
                        MyNumberKey: 456,
                    },
                ],
            },
        });
    }
}