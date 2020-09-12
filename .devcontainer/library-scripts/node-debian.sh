#!/bin/bash
DEBIAN_FRONTEND=noninteractive
curl -sL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

curl -o- -L https://yarnpkg.com/install.sh | bash