#!/bin/bash

# Import other scripts
. utils.sh
. env.sh

# S3 will be a source of Knowledge for Model
# Rememer, you must set up the infrastructure and required

## Introduce
successln "Upload Data to Data Source"

println

## Check command
infoln "1. Check AWS CLI"
checkCommand aws
successln "Done"

println

## Check bucket
infoln "2. Check required bucket (Data source)"
checkCommand "aws s3 ls s3://aws-system"
successln "Data source exists"

println

## Upload data to S3
infoln "3. Upload data to S3 Bucket (Data source)"
aws s3 cp $HOME/$WORK_DIR/data/ s3://$BUCKET_NAME
successln "Upload done"