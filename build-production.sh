#!/bin/sh

export REACT_APP_CONTENT_URL=https://content.phoenix.virtualoutbound.com/
export REACT_APP_user_pool=$(aws secretsmanager get-secret-value --secret-id oai-prod-secret-content-userpool --query=SecretString --output=text)

yarn run build
