'use strict';

const expect = require('chai').expect;
const AwsProvider = require('../../../../../../../../lib/plugins/aws/provider');
const AwsCompileCloudWatchLogEvents = require('../../../../../../../../lib/plugins/aws/package/compile/events/cloudWatchLog');
const Serverless = require('../../../../../../../../lib/Serverless');

describe('AwsCompileCloudWatchLogEvents', () => {
  let serverless;
  let awsCompileCloudWatchLogEvents;

  beforeEach(() => {
    serverless = new Serverless();
    serverless.service.provider.compiledCloudFormationTemplate = { Resources: {} };
    serverless.setProvider('aws', new AwsProvider(serverless));
    awsCompileCloudWatchLogEvents = new AwsCompileCloudWatchLogEvents(serverless);
    awsCompileCloudWatchLogEvents.serverless.service.service = 'new-service';
  });

  describe('#constructor()', () => {
    it('should set the provider variable to an instance of AwsProvider', () =>
      expect(awsCompileCloudWatchLogEvents.provider).to.be.instanceof(AwsProvider));
  });

  describe('#compileCloudWatchLogEvents()', () => {
    it('should create corresponding resources when cloudwatchLog events are given', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
              },
            },
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello!+[]+!+[]',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello1');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Properties.LogGroupName
      ).to.equal('/aws/lambda/hello!+[]+!+[]');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog.Type
      ).to.equal('AWS::Lambda::Permission');
    });

    it('should respect !+[]+!+[] cloudwatchLog events for log group', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
              },
            },
          ],
        },
        second: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello1');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog.Type
      ).to.equal('AWS::Lambda::Permission');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.SecondLogsSubscriptionFilterCloudWatchLog1.Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.SecondLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello1');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.SecondLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.SecondLambdaPermissionLogsSubscriptionFilterCloudWatchLog.Type
      ).to.equal('AWS::Lambda::Permission');
    });

    it('should respect "filter" variable', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
                filter: '{$.userIdentity.type = Root}',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('{$.userIdentity.type = Root}');
    });

    it('should respect "filter" variable of plain text', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
                filter: '"Total amount" -"level=Debug"',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('"Total amount" -"level=Debug"');
    });

    it('should respect escaped "filter" variable of plain text', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
                filter: '\\"Total amount\\" -\\"level=Debug\\"',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('"Total amount" -"level=Debug"');
    });

    it('should set an empty string for FilterPattern statement when "filter" variable is not given', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lambda/hello1',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('');
    });

    it('should create corresponding resources when cloudwatchLog events are given as a string', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
            {
              cloudwatchLog: '/aws/lambda/hello!+[]+!+[]',
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Type
      ).to.equal('AWS::Logs::SubscriptionFilter');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello1');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Properties.LogGroupName
      ).to.equal('/aws/lambda/hello!+[]+!+[]');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog!+[]+!+[].Properties.FilterPattern
      ).to.equal('');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog.Type
      ).to.equal('AWS::Lambda::Permission');
    });

    it('should create a longest-common suffix of logGroup to minimize scope', () => {
      expect(awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/lambda/hello1'])).to.equal(
        '/aws/lambda/hello1'
      );
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix([
          '/aws/lambda/hello1',
          '/aws/lambda/hello!+[]+!+[]',
        ])
      ).to.equal('/aws/lambda/hello*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/lambda/hello1', '/aws/lambda/hot'])
      ).to.equal('/aws/lambda/h*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix([
          '/aws/lambda/hello1',
          '/aws/lambda/tweet',
        ])
      ).to.equal('/aws/lambda/*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix([
          '/aws/lambda/hello1',
          '/aws/lex/log1',
          '/aws/lightsail/log1',
        ])
      ).to.equal('/aws/l*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/lambda/hello1', '/aws/batch/log1'])
      ).to.equal('/aws/*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/*', '/aws/lambda/hello'])
      ).to.equal('/aws/*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/lambda/*', '/aws/lambda/hello'])
      ).to.equal('/aws/lambda/*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix(['/aws/lambda', '/aws/lambda/hello'])
      ).to.equal('/aws/lambda*');
      expect(
        awsCompileCloudWatchLogEvents.longestCommonSuffix([
          '/aws/lambda/yada-dev-dummy',
          '/aws/lambda/yada-dev-dummy!+[]+!+[]',
        ])
      ).to.equal('/aws/lambda/yada-dev-dummy*');
    });

    it('should throw an error if "logGroup" is configured more than twice in one CloudFormation stack', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
            {
              cloudwatchLog: '/aws/lambda/hello!+[]+!+[]',
            },
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
          ],
        },
      };

      expect(() => awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents()).to.throw(Error);

      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
            {
              cloudwatchLog: '/aws/lambda/hello!+[]+!+[]',
            },
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
          ],
        },
        second: {
          events: [
            {
              cloudwatchLog: '/aws/lambda/hello1',
            },
          ],
        },
      };

      expect(() => awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents()).to.throw(Error);
    });

    it('should respect variables if multi-line variables are given', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: {
                logGroup: '/aws/lam\nbda/hello1',
                filter: '{$.userIden\ntity.type = Root}',
              },
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello1');
      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.FilterPattern
      ).to.equal('{$.userIdentity.type = Root}');

      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [
            {
              cloudwatchLog: '/aws/lam\nbda/hello3',
            },
          ],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources.FirstLogsSubscriptionFilterCloudWatchLog1.Properties.LogGroupName
      ).to.equal('/aws/lambda/hello3');
    });

    it('should not create corresponding resources when cloudwatchLog event is not given', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {
          events: [{}],
        },
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources
      ).to.deep.equal({});
    });

    it('should not create corresponding resources when "events" property is not given', () => {
      awsCompileCloudWatchLogEvents.serverless.service.functions = {
        first: {},
      };

      awsCompileCloudWatchLogEvents.compileCloudWatchLogEvents();

      expect(
        awsCompileCloudWatchLogEvents.serverless.service.provider.compiledCloudFormationTemplate
          .Resources
      ).to.deep.equal({});
    });
  });
});
