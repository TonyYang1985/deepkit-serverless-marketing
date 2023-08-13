# deepkit-serverless-adapter-aws-lambda-apigateway-typescript
deepkit-serverless-adapter-aws-lambda-apigateway-typescript

# deepkit + serverless-adapter+ aws-lambda+ apigateway + typescript


## How to run lambda 

### How to install AWS CLI on Mac

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install

curl -o awscli.zip https://s3.amazonaws.com/aws-cli/awscli-bundle.zip

###  Create the AWS access key ID and secret access key 

https://www.cyberciti.biz/faq/osx-installing-the-aws-command-line-interface-using-brew/

>1.Visit the IAM console
>2.Select your IAM user name.
>3.Select the Security Credentials tab and then Create Access Key.
###  Configure the aws-cli
> aws configure

### install denpendecy 

> npm install

### frist time  deploy lambda function to aws
> npm run init

###  configuration api gateway V2 in aws console .
Step1: Create API 
> Choose an API type : HTTP API
Build low-latency and cost-effective REST APIs with built-in features such as OIDC and OAuth2, and native CORS support.
> Integrations : Lambda ,AWS Region , Lambda function
>  type API name : xxxx

Step2: Configure routes
> Choose Method : GET
> type Resource path : /hello/{name}
> Choose Integration target : xxx

Step3: Configure stages 
> add  Stage name : dev
> open Auto-deploy: open

###  test api configuration with postman .

### if code change & upgrade + deploy lambda function to aws
> npm run deploy