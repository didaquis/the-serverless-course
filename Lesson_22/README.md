### Para hacer deploy:
SLSUSER=di npm run deploy

### Para hacer package:
SLSUSER=di npx sls package --aws-profile serverless-local

### Para introducir datos en DynamoDB
AWS_PROFILE=serverless-local node seedGetTogethers.js devdi-gettogethers

### Execute (para simular un error!)
curl https://i7kfw355ca.execute-api.eu-west-1.amazonaws.com/devdi/api/getTogether --data '{"getTogetherId": "error", "userEmail":"error"}' --header "x-correlation-id:777777" --header "x-correlation-city:Girona"

### Secret Manager
Navegar hasta: AWS > System Manager > Parameter Store

Name: /gettogethers/devdi/secureTableName
Name: /gettogethers/devdi/secureTableName (type: secure string; value: devdi-gettogethers)

### Remove all lambda functions and all stack
The sls remove command will remove the deployed service, defined in your current working directory, from the provider: `npx serverless remove`

Navegar hasta: AWS > s3 > buckets 
Borrar todos los buckets.

Luego navegar hasta: AWS > CloudFormation > Stacks
Y borrar todos los stacks.

Luego navegar hasta: AWS > CloudWatch > Registros
Y borrar todos los grupos de registros.

Luego navegar hasta: AWS > CloudWatch > Reglas
Y borrar todos las reglas.