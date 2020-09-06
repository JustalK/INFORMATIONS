# Useful commands for git

1. Saving credential for a certain time

```
git config --global credential.helper "cache --timeout=3600"
```

2. Removing a file/folder totally from git

```
git rm --cached filename
git rm --cached -r foldername
```

3. Adding tag to git publish

```
git tag <tagname>
git push origin --tags
```
