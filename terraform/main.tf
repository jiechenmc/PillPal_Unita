module "s3_bucket" {
    source = "./modules/aws-s3-static-website-bucket"
    bucket_name = "pillpal-bucket-test"
}