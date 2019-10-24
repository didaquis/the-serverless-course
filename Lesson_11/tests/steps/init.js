module.exports.init = () => {
    process.env.AWS_REGION = "eu-west-1";
    process.env.TableName = "devdi-gettogethers";
    process.env.getTogethersTableName = "devdi-gettogethers";
};