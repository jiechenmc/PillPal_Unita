output "instance-arn" {
  value = aws_s3_bucket.s3_bucket.arn
}

output "instance-url" { 
  value = aws_s3_bucket.s3_bucket.website_domain
}