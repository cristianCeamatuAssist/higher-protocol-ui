data "aws_iam_policy_document" "s3_policy" {
  depends_on = [
    aws_s3_bucket_public_access_block.block_public_access
  ]
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.s3_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  depends_on = [
    data.aws_iam_policy_document.s3_policy
  ]

  bucket =  aws_s3_bucket.s3_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}