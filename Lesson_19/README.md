### Para hacer deploy:
SLSUSER=di npm run deploy

### Para hacer package:
SLSUSER=di npx sls package --aws-profile serverless-local

### Para introducir datos en DynamoDB
AWS_PROFILE=serverless-local node seedGetTogethers.js devdi-gettogethers

### Execute
https://i7kfw355ca.execute-api.eu-west-1.amazonaws.com/devdi/api/sayHello

### Secret Manager
Navegar hasta: AWS > System Manager > Parameter Store

Name: /gettogethers/devdi/secureTableName
Name: /gettogethers/devdi/secureTableName (type: secure string; value: devdi-gettogethers)

