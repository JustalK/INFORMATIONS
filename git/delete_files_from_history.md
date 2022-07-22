# How to delete file from github history

## Remove files from github history:

I could not push on github because of file to large pushed in the repository.

**Sample of the error**:

```
remote: Resolving deltas: 100% (62/62), completed with 10 local objects.
remote: error: Trace: f59a359b238e5d4e2366199c3648ca0b51d18ca93a42a51e8afec91329a03e59
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File Tutorials/AWS2/.terraform/providers/registry.terraform.io/hashicorp/aws/4.22.0/linux_amd64/terraform-provider-aws_v4.22.0_x5 is 259.80 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/justalk/LABORATORY-TERRAFORM.git
```

The git rm did work but I was still unable to push since the files was already in the .git directory.
The trick was to remove them from the git history with this command. Change the Path with the problematic file

```
$ git filter-branch -f --index-filter 'git rm -r --cached --ignore-unmatch <Path to the file>' HEAD
```

With this command, you will have an error since your are modifying directly the history:

```
fatal: refusing to merge unrelated histories
```

In this case, you need to pull the master branch that way:
```
$ git pull --allow-unrelated-histories
```
