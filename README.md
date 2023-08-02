<<<<<<< HEAD
#Commands for Submodule :

### 1. For fetching remote URL

```
$computer >:/home/others/training$ git config --get remote.origin.url

$computer >:https://github.com/Eddy08/training.git
```

### 2. Error Related to previous index

```
$computer >:/home/others/training$ git submodule add https://github.com/Eddy08/training.git frontend/angular/13/myEcomm

$computer >:'frontend/angular/13/myEcomm' already exists in the index
```

#### Solution

```
$computer >:/home/others/training$ git rm --cached frontend/angular/13/myEcomm

$computer >:rm 'frontend/angular/13/myEcomm'
```

### 3. Adding submodule

```
$computer >:/home/others/training$ git submodule add https://github.com/Eddy08/training.git frontend/angular/13/myEcomm

$computer >:Adding existing repo at 'frontend/angular/13/myEcomm' to the index

$computer >:/home/others/training$ git submodule init

$computer >:/home/others/training$ git submodule update


```

### 4. git push error in submodule:

#### Error:

```
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git add .
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git commit -m "Updated Provider details inside model.module.ts"
[main aa47add] Updated Provider details inside model.module.ts
 1 file changed, 2 insertions(+), 2 deletions(-)
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>

and then push using the remote name

    git push <name>

```

```
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git remote add origin https://github.com/Eddy08/training.git
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git push origin
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main
```

##### Error related to git push --set-upstream

```

$computer >:/home/others/training/frontend/angular/13/myEcomm$ git push --set-upstream origin main
To https://github.com/Eddy08/training.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/Eddy08/training.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git pull
warning: no common commits
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 10 (delta 0), reused 10 (delta 0), pack-reused 0
Unpacking objects: 100% (10/10), 646 bytes | 71.00 KiB/s, done.
From https://github.com/Eddy08/training
 * [new branch]      main       -> origin/main
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> main
```

#### Solution:

```
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git branch --set-upstream-to=origin/main main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### 5. Error related to git pull in submodule

#### Error:

```
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git pull
fatal: refusing to merge unrelated histories
```

#### Solution:

```
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git pull --allow-unrelated-histories
Merge made by the 'recursive' strategy.
 frontend/angular/13/myEcomm | 1 +
 1 file changed, 1 insertion(+)
 create mode 160000 frontend/angular/13/myEcomm
$computer >:/home/others/training/frontend/angular/13/myEcomm$ git push
Enumerating objects: 50, done.
Counting objects: 100% (50/50), done.
Delta compression using up to 4 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (49/49), 122.52 KiB | 2.72 MiB/s, done.
Total 49 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), done.
To https://github.com/Eddy08/training.git
   2a134f9..c5f7a39  main -> main

```
=======
# MyEcomm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> c5f7a39b4a540ba48917fb869692c7b0975748ab
