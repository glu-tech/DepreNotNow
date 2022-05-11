import boto3
import json
import os

class AwsService():
    def upload(self, filename, name, path_bucket):        
        bucket = "depre-not-now"
        AWSAccessKeyId, AWSSecretKey = self.get_env_aws_key()
        s3 = boto3.Session(
            aws_access_key_id=AWSAccessKeyId,
            aws_secret_access_key=AWSSecretKey,
        ).client("s3")

        try:
            s3.upload_file(Filename=filename, Bucket=bucket, Key=f"{path_bucket}/{name}", ExtraArgs={'ACL': "public-read"})
        finally:
            return self.make_url(name, bucket, path_bucket)

    def make_url(self, name, bucket, path):
        base_url = f"https://{bucket}.s3.amazonaws.com/{path}/{name}"
        return base_url

    def get_env_aws_key(self):
        filepath = f"{os.path.dirname(os.path.realpath('__file__'))}/.env.json"
        with open(filepath, "r") as file:
            content = file.read()
            file.close()

        decoded_json = json.loads(content)

        return decoded_json["AWSAccessKeyId"], decoded_json["AWSSecretKey"]

                