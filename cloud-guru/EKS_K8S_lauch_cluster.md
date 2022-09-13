# Launching an EKS Cluster

## Updating a server

#### AWS

```bash
$ aws --version
```

```bash
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
$ unzip awscliv2.zip
```

```bash
$ sudo ./aws/install --bin-dir /usr/bin --install-dir /usr/bin/aws-cli --update
```

```bash
$ aws configure
```

#### K8s

```bash
$ curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.16.8/2020-04-16/bin/linux/amd64/kubectl
$ chmod +x ./kubectl
$ mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$PATH:$HOME/bin
```

```bash
$ kubectl version --short --client
```

#### eksctl

```bash
$ curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
```

```bash
$ sudo mv /tmp/eksctl /usr/bin
```

```bash
$ eksctl version
```

## Create a cluster

```bash
$ eksctl create cluster --name dev --region us-east-1 --nodegroup-name standard-workers --node-type t3.medium --nodes 3 --nodes-min 1 --nodes-max 4 --managed
```

```bash
$ eksctl get cluster
```

```bash
$ aws eks update-kubeconfig --name dev --region us-east-1
```

## K8s

```bash
$ kubectl apply -f ./deployment.yaml
$ kubectl get deployment
$ kubectl get service
$ kubectl get pod
$ kubectl get node
```
