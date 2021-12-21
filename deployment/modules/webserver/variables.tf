variable "region" {
  type        = string
  description = "The region where to deploy the WebServer."
}

variable "environment" {
  type        = string
  description = "The environment on which to create the plan."
}

variable "aws_resource_name" {
  type        = string
  description = "The resource name that will be added to all the AWS resources."
}

variable "aws_resource_display_name" {
  type        = string
  description = "The display name that will show on the tags and named resources on AWS."
}

variable "domain_name" {
  type        = string
  description = "The domain where the app will be published."
}

variable "ssl_domain" {
  type        = string
  description = "The domain where SSL certificate will be created."
}
