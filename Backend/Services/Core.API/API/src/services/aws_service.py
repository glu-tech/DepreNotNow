import boto3

class AwsService():
    def upload(self, filename, name):        
        bucket = "depre-not-now-sounds"
        s3 = boto3.Session(
            aws_access_key_id="XXXXXXXXXXXXXXXXXXXX",
            aws_secret_access_key="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        ).client("s3")

        try:
            s3.upload_file(Filename=filename, Bucket=bucket, Key=name, ExtraArgs={'ACL': "public-read"})
        finally:
            return self.make_url(name, bucket)

    def make_url(self, name, bucket):
        base_url = f"https://{bucket}.s3.amazonaws.com/{name}"
        return base_url
                