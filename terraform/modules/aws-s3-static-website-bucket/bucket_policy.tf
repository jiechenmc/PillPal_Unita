resource "aws_s3_bucket_policy" "s3_bucket" {
    bucket = aws_s3_bucket.s3_bucket.id
    policy = <<EOF
    {
        "Version": "2012-10-17",
        "Statement": [
           {
               "Sid": "PublicRead",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "${aws_s3_bucket.s3_bucket.arn}/*"
           }
        ]
    }
    EOF
    depends_on = [ aws_s3_bucket_public_access_block.s3_bucket ]
}