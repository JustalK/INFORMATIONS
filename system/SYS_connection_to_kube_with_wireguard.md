# How to see the log of server with Kubernetes and Wireguard

## Show the log for one api

1. Connect with the VPN using wireguard

```
$ wg-quick up vpn0
```

2. Go to the pod of dev

```
$ kubectl ns dev-smood-api
```

3. Go in the repository and show the log of the server

```
$ sm docker:logs -p api-back -e dev
```

## Show the list of running pods

```
kubectl get pod -n dev-smood-api
```
