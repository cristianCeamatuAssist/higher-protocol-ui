terraform {
  required_version = "1.0.6"

  backend "s3" {
    acl     = "bucket-owner-full-control"
    bucket  = "outlift.ai-dev-us-west-2-tf"
    key     = "831870631916/us-west-2/vpc-dev/app/outlift.[TO_FILL:AwsProjectName]/terraform.tfstate"
    encrypt = true
    region  = "us-west-2"
  }
}

module "webserver" {
  source                    = "../../modules/webserver"
  region                    = var.aws_region
  domain_name               = var.domain_name
  ssl_domain                = "virtualoutbound.com"
  environment               = "dev"
  aws_resource_name         = var.aws_resource_name
  aws_resource_display_name = var.aws_resource_display_name
}