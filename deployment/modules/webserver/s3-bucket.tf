resource "aws_s3_bucket" "s3_bucket" {
  bucket        = "oai-${var.environment}-s3-bucket-${var.aws_resource_name}"
  acl           = "private"
  force_destroy = true

  versioning {
    enabled = true
  }

  tags = {
    Name = "oai-${var.environment}-s3-bucket-${var.aws_resource_name}"
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  depends_on = [aws_s3_bucket.s3_bucket]
  bucket =  aws_s3_bucket.s3_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
