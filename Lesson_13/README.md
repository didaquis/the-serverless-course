### Para hacer deploy:
SLSUSER=di npm run deploy

### Para introducir datos en DynamoDB
AWS_PROFILE=serverless-local node seedGetTogethers.js devdi-gettogethers


Payload:
```
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:eu-west-1:{{{accountId}}}:ExampleTopic",
      "Sns": {
        "Type": "Notification",
        "MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
        "TopicArn": "arn:aws:sns:eu-west-1:123456789012:ExampleTopic",
        "Subject": "example subject",
        "Message": "{\"getTogetherId\": 1,\"orderId\": 2,\"userEmail\": \"test@test.com\"}",
        "Timestamp": "1970-01-01T00:00:00.000Z",
        "SignatureVersion": "1",
        "Signature": "EXAMPLE",
        "SigningCertUrl": "EXAMPLE",
        "UnsubscribeUrl": "EXAMPLE",
        "MessageAttributes": {
          "Test": {
            "Type": "String",
            "Value": "TestString"
          },
          "TestBinary": {
            "Type": "Binary",
            "Value": "TestBinary"
          }
        }
      }
    }
  ]
}

```
