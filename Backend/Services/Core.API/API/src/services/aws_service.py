import boto3

class AwsService():
    def upload(self, filename, name, path_bucket):        
        bucket = "depre-not-now"
        s3 = boto3.Session(
            aws_access_key_id="XXXXXXXXXXXXXXXXXXXX",
            aws_secret_access_key="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        ).client("s3")

        try:
            s3.upload_file(Filename=filename, Bucket=bucket, Key=f"{path_bucket}/{name}", ExtraArgs={'ACL': "public-read"})
        finally:
            return self.make_url(name, bucket, path_bucket)

    def make_url(self, name, bucket, path):
        base_url = f"https://{bucket}.s3.amazonaws.com/{path}/{name}"
        return base_url
                