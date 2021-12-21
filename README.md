# :exclamation: Mandatory step :exclamation:

- Do a global search in your preferred code editor and search for the string `TO_FILL:`, then replace all the results with your project details. **Make sure that the bucket name used in `deploy.yml` line 55 is the same as the bucket name defined in `s3-bucket.tf` lines 2 and 11.**
- Delete this block of text after you finish

# [TO_FILL:RepositoryNameAndShortDescription]

This repository includes the components of the [TO_FILL:ServiceName] service. [TO_FILL:Description]

The service is part of the following products:
- [TO_FILL:ListOfProducts-https://outboundai.atlassian.net/wiki/spaces/OM/pages/810647553/Component+Inventory]

## Prerequisites

  1. Install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

  2. If you will work with the deployment scripts, you will need to have [AWS CLI Installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html),  [terraform CLI installed](https://www.terraform.io/downloads.html) and an AWS CLI profile configured and active in the shell environment.

## Project Structure

There are two major folder branches at the root of this repository.

- **[source](./source/README.md)** - A single React app containing the code for the Revenue Cycle Management Console UI.
- **[deployment](./deployment/README.md)** - A single Terraform project used by all CI/CD processes.

## Getting Started
  1. From the root folder please run the following commands:
      ```bash
        > yarn add --dev husky
        > npx husky install

        # IMPORTANT! Only if the .husky/pre-commit is not defined already or it does not contain `cd source && yarn lint-staged`
        > npx husky add .husky/pre-commit "cd source && yarn lint-staged"
      ```
  - This will add a pre-commit hook (`cd source && yarn lint-staged`) that will run every time you make a commit, `lint-staged` is defined in **[source/package.json](./source/package.json)** and it will run the linter and prettier check and format the code: 
    
      ```javascript
        "lint-staged": {
          "src/*.{ts,tsx}": [
            "yarn prettier:fix",
            "yarn lint"
          ]
        }
      ```
  > :pushpin: You can add other pre-commit hooks as per your needs, ex: 
        `> npx husky add .husky/pre-commit "cd deployment && terraform validate"`

<br />     

  2. Follow the instructions found in the README files in the **[source](./source/README.md)** and **[deployment](./deployment/README.md)** folders

## Live links

- Dev URL: [TO_FILL:DevUrl]
- Prod URL: [TO_FILL:ProdUrl]
- Backend URL: [TO_FILL:BackendUrl]

## Useful links
- Components Inventory: https://outboundai.atlassian.net/wiki/spaces/OM/pages/810647553/Component+Inventory