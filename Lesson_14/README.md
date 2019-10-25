### Para hacer deploy:
SLSUSER=di npm run deploy

### Para introducir datos en DynamoDB
AWS_PROFILE=serverless-local node seedGetTogethers.js devdi-gettogethers


### Testar:

curl https://i7kfw355ca.execute-api.eu-west-1.amazonaws.com/devdi/api/getTogether --data '{"getTogetherId": "1", "userEmail":"someone@example.com"}'

