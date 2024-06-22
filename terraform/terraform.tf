terraform {
    cloud {
        organization = "PillPal"
        workspaces {
            name = "PillPal-Workspace"
        }
    }
    
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~>5.0"
        }
    }
    
}