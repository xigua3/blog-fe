#!/bin/bash
echo "============ start ==========="
echo `date`
source ~/.bashrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
nvm use 8.9.4
cd /home/ubuntu/projects/blog-fe
prevCommit=`git rev-parse HEAD`
echo current git branch latest commit id=$prevCommit
echo "git pull"
git pull
newCommit=`git rev-parse HEAD`
echo current git branch latest commit id=$newCommit
if [ "$prevCommit" !=  "$newCommit" ]
then
        echo "changed"
        npm install
        npm run build
fi
echo `date`
echo "============ end ==========="
