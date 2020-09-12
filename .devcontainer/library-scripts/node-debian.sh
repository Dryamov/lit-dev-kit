#!/bin/bash
DEBIAN_FRONTEND=noninteractive
curl -sL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn