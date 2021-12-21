variable "domain_name" {
  type        = string
  description = "The domain name where the product will be published. Must have the parent domain the ssl_domain defined in main.tf"
  default     = [TO_FILL:DevelopmentURL, ex: console.virtualoutbound.com]
}

variable "aws_region" {
  type        = string
  description = "The region where the product will be published."
  default     = "us-west-2"
}

variable "aws_resource_name" {
  type        = string
  description = "The resource name that will be added to all the AWS resources."
  default     = [TO_FILL:AWSResourceName, ex: console-ui-v2]
}

variable "aws_resource_display_name" {
  type        = string
  description = "The display name that will show on the tags and named resources on AWS."
  default     = [TO_FILL:AWSResourceDisplayName, ex: Console UI]
}
