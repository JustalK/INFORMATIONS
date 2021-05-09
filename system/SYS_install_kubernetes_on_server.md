# How to install a docker image inside kubernetes on a server ?

## Install Docker

For installing docker follow the steps there => https://docs.docker.com/engine/install/ubuntu/

1. Install manually (Do not use snap !)

```
$ sudo apt-get install     apt-transport-https     ca-certificates     curl     gnupg     lsb-release
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
$ echo   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

2. Test the install

```
$ sudo docker run hello-world
```

3. Active the service

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

## Download the latest version of kubernetes

1. You will need to download the latest version : https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

```
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

2. Check the checksum

```
$ curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(<kubectl.sha256) kubectl" | sha256sum --check
```

The response should be : OK

## Install kubernetes

```
$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

## Check the version of kubernetes

```
kubectl version --client
```

## Create a cluster

1. Install Kubeadm

```
sudo apt-get install -y apt-transport-https ca-certificates curl
```

2. Initialize the kubeadm

```
sudo kubeadm init
```

If there is error, you can avoid them with

```
sudo kubeadm init --ignore-preflight-errors=Mem,NumCPU
```

3. Copy the config of the cluster

```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

## Verify the configuration of kubernetes

```
$ kubectl cluster-info
```

In case, you have an error : **The connection to the server <server-name:port> was refused - did you specify the right host or port?**
It means you have a problem with the cluster. Redo the step create a cluster

## Run your image inside the kubernetes

Follow the step there => https://codeburst.io/getting-started-with-kubernetes-deploy-a-docker-container-with-kubernetes-in-5-minutes-eb4be0e96370
