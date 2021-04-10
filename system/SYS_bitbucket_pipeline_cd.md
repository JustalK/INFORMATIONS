# How to create a continuous development with the pipeline of bitbucket

## Create an SSH on the server

1. Connect to the server by SSH
2. Enter the command :

```
ssh-keygen
```

3. Press enter until you get the image of the SHH
4. List the contents of ssh to view the key files :

```
ls ~/.ssh
```

5. Start the agent with :

```
eval `ssh-agent`
```

6. Add the private key to ssh :

```
ssh-add ~/.ssh/id_rsa
```

7. Copy the public key :

```
cat ~/.ssh/id_rsa.pub
```

8. Paste it inside the *Repository setting* in *Access key*
9. The SSH key is now config.

## Create the variable inside bitbucket

1. Go on bitbucket in the project
2. Repository setting
3. Repository variable
4. Configure your variables there

## Create a default bitbucket-pipelines.yml

1. Go on bitbucket in the project
2. Go in the tabs pipeline
3. Create a new pipeline

It should look like this :

```
# This is an example Starter pipeline configuration
# Use a skeleton to build, test and deploy using manual and parallel steps
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: atlassian/default-image:2

pipelines:
  default:
    - parallel:
      - step:
          name: 'Build and Test'
          script:
            - echo "Your build and test goes here..."
      - step:
          name: 'Lint'
          script:
            - echo "Your linting goes here..."
      - step:
          name: 'Security scan'
          script:
            - echo "Your security scan goes here..."

    # The following deployment steps will be executed for each pipeline run. To configure your steps and conditionally deploy see https://support.atlassian.com/bitbucket-cloud/docs/configure-bitbucket-pipelinesyml/
    - step:
        name: 'Deployment to Staging'
        deployment: staging
        script:
          - echo "Your deployment to staging script goes here..."
    - step:
        name: 'Deployment to Production'
        deployment: production
        trigger: 'manual'
        script:
          - echo "Your deployment to production script goes here..."
```

## Modify the bitbucket-pipelines.yml
