resource "aws_s3_bucket_website_configuration" "s3_bucket" {
    bucket = aws_s3_bucket.s3_bucket.id
    index_document {
      suffix = "index.html"
    }
    error_document {
      key = "index.html"
    }
    depends_on = [ aws_s3_bucket_policy.s3_bucket , aws_s3_bucket_public_access_block.s3_bucket]
}