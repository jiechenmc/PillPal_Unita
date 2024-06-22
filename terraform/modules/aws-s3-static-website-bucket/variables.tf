variable "bucket_name" {
  description = "Name of the s3 bucket. Must be unique."
  type        = string
}

variable "region" {
    description = "AWS region"
    default = "us-east-1"
}


