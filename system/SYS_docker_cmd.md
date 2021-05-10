# Usefull command with docker

## Show all docker

```
docker ps -a
```

## Build a docker compose

```
sudo docker-compose build
```

## Restart a docker by name

```
sudo docker restart inpsyche_nudgyt
```

## exec a command inside a container

```
$ sudo docker exec -it <name_of_container> curl http://localhost:8080
```

## Free memory from the image

If there is `no space left on device` :

```
docker system prune
```
