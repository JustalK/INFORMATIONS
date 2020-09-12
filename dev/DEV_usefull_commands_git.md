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

4. Rebase the branch to the last commit

```
git remote add upstream https://github.com/Kylart/MalScraper
git pull --rebase upstream master
git rebase --skip
git pull --rebase upstream dev
git reset --hard HEAD
```

5. Reset to a specific commit

```
git reset --hard 0d1d7fc32
```
