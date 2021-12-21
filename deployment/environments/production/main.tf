terraform {
  required_version = "1.0.6"

  backend "s3" {
    acl     = "bucket-owner-full-control"
    bucket  = "outbound.ai-production-us-west-2-tf"
    key     = "313360567698/us-west-2/vpc-production/app/outlift.[TO_FILL:AwsProjectName]/terraform.tfstate"
    encrypt = true
    region  = "us-west-2"
  }
}

module "webserver" {
  source                    = "../../modules/webserver"
  region                    = var.aws_region
  domain_name               = var.domain_name
  ssl_domain                = "outlift.ai"
  environment               = "production"
  aws_resource_name         = var.aws_resource_name
  aws_resource_display_name = var.aws_resource_display_name
}