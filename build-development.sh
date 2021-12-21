#!/bin/sh

export REACT_APP_CONTENT_URL=https://content.phoenix.newdev.virtualoutbound.com/
export REACT_APP_user_pool=$(aws secretsmanager get-secret-value --secret-id oai-dev-secret-content-userpool --query=SecretString --region=us-west-2 --output=text)

yarn run build
