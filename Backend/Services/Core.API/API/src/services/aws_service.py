import boto3
import json
import os

class AwsService():
    def upload(self, filename, name, path_bucket):        
        bucket, s3 = self.load_bucket()

        try:
            s3.client('s3').upload_file(Filename=filename, Bucket=bucket, Key=f"{path_bucket}/{name}", ExtraArgs={'ACL': "public-read"})
        finally:
            return self.make_url(name, bucket, path_bucket)
        
    def load_audio(self, file):
        try:
            bucket, s3 = self.load_bucket()
            obj = list(s3.resource('s3').Bucket(bucket).objects.filter(Prefix=f'sounds/{file}'))[0].key.split('sounds/')[1]
            
            return self.make_url(obj, bucket, 'sounds')
        except:
            return ''
        
    def load_bucket(self):
        bucket = "depre-not-now"
        AWSAccessKeyId, AWSSecretKey = self.get_env_aws_key()
        return bucket, boto3.Session(
            aws_access_key_id=AWSAccessKeyId,
            aws_secret_access_key=AWSSecretKey,
        )

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

                