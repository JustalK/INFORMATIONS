# How to remove a branch in git ? How to switch the master branch ? (bitbucket)


## In Github

1. Switching the master branch in bitbucket

```
Just go in the repository of the project, go inside the setting and in the new panel in front of you,
change the main branch setting

```

2. Removing the old main branch

```
git push origin :master
```

If an error occur, telling you :
refusing to delete the current branch: refs/heads/master
Just go on the step 1 and change the actual master branch

## Locally

Here is a little scrip for removing all local branches except master

```
git branch | grep -v "master" | xargs git branch -D
```

## Fetching only remote branches

```
git branch -r
```
