# Deployment Project
This is a Terraform project that deploys all the major components of this service.

## Resource Naming
Use the following AWS name template whenever possible.

```
{project}-{environment}-{aws service}-{aws resource type}-{unique project name}
```

Examples:
* oai-dev-iam-role-content
* oai-dev-s3-bucket-datalake
* oai-dev-rds-cluster-content

## Resource Tagging
The aws provider is already [setup with default tags](./modules/webserver/providers.tf) from the tags module. There may be situations where you want to add or override a tag on an individual resource, but you do not need to set every tag on every resource.

```
resource "aws_something" "my_thing" {
    tags = {
        Name = "This tag is merged into the defaults."
    }
}
```

## Setup
You'll need to have [terraform CLI installed](https://www.terraform.io/downloads.html) and an AWS CLI profile configured and active in the shell environment.

```bash
> brew install awscli
> aws configure --profile dev
    (Enter your AWS API keys generated from the AWS console as prompted.)
> export AWS_PROFILE=dev
> aws configure --profile prod
    (Enter your AWS API keys generated from the AWS console as prompted.)
> export AWS_PROFILE=prod
```

Terraform has a horrible history of version compatibility issues. Do not use any version of Terraform other than 1.0.6 to deploy this project.

```bash
> brew install tfenv
> tfenv install 1.0.6
> tfenv use 1.0.6
```

## Deployment
The /environments folder contains an entry point for each deployable environment. This entrypoint automatically connects to the correct Terraform backend store, and retrieves the correct configuration from AWS Secret Manager. So to deploy development, you would do something like this.

```bash
> cd /environments/development/<environment folder, ex: dev>
> terraform init
> terraform apply
```
