
provider "aws" {
    region = var.region
}

resource "aws_s3_bucket" "s3_bucket" {
    bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "s3_bucket" {
    bucket = aws_s3_bucket.s3_bucket.id
    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
}

