```sh
docker build -t hpbonfim/jenkins-workspace .
docker push hpbonfim/jenkins-workspace:latest
docker run --publish 80:80 website

cat ~/.docker/config.json
gcloud auth login
gcloud init
gcloud iam service-accounts list
gcloud artifacts locations list
gcloud auth activate-service-account {EMAIL_SERVICE} --key-file=YOUR_GCLOUD_KEY.json

gcloud auth configure-docker us-central1-docker.pkg.dev
docker build . -t us-central1-docker.pkg.dev/gitops-0/website/jenkins:latest
docker push us-central1-docker.pkg.dev/gitops-0/website/jenkins
```

[REFERENCES](https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
