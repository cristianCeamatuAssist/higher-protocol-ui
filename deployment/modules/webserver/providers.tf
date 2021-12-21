terraform {
  required_providers {
    aws = {
      version = "3.58.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = var.region

  default_tags {
    tags = module.tags.tags
  }
}

module "tags" {
  source              = "git::https://github.com/outbound-ai/terraform-core.git//aws/tags"
  environment_billing = var.environment
  contact             = "operations@outlift.ai"
  project             = "oai"
  service             = var.aws_resource_display_name
  component           = "app"
  repo                = [TO_FILL:GithubRepoURL, ex: https://github.com/outbound-ai/templates-frontend-react]
}
