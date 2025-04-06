#!/usr/bin/env bash
#$1 = $(Pipeline.Workspace)/apps/web/$(Build.BuildId) 
#$2 = $(Pipeline.Workspace)/apps/web                
#$3 = $(Build.BuildId)

echo "Running: ($0)"
echo "1 is ($1) "
echo "2 is Build Number which is ($2)"
echo "3 is Build Number which is ($3)"
echo "Use this script to run the web app (in an azure virtual machine, in the test or staging environment)"
echo "*********DO NO USE IN PRODUCTION*********" 

#delete old files if any
cd /opt/decode/web/www
sudo rm -r -f lib
sudo rm -r -f app
sudo rm -r -f components
#todo sudo rm -r -f *

#copy to web site folder
echo "Copying deployed files to /opt/decode/web/www..."
cd /opt/decode
sudo mkdir -p web
cd web
sudo mkdir -p www 
sudo cp -r -a -v "$1"/. www
#cd www

# Restart API
echo "Restarting Web..."
cd /opt/decode/web/www

# Todo: this is commented out for now, to avoid duplication
# Update Nginx
# echo Updating Nginx config 
# sudo cp /opt/decode/web/www/src/_infrastructure/nginx/api.config /etc/nginx/sites-available/api.config

# If not using nvm, run the command which nvm to locate the path of nvm, alternatively add to the user bashrc file
# TODO: set --env from pipeline passed as a string argument to this script
# TODO change the NGINX settings using these setting, and perhaps doing a text/placeholder replace with what is passed in as an arg
#sudo npm install
#sudo npm run build 


#todo: see comment on the NodeTool@0 task for why this is here
#This is required for now as there is an issue, on the pipeline, 
#when using private scoped npm packages. 
#TODO: Need to find a way to make npm tocken readable.  
sudo rm package-lock.json
sudo rm -r -f node_modules
sudo mkdir node_modules
sudo chmod 777 node_modules
sudo touch package-lock.json
sudo chmod 777 package-lock.json
# use just npm i on production
# using nvm on test hence the use of the full path below
sudo /usr/bin/npm i 
#uncomment out to disable caching as these cmds delete the nextjs cache
echo "Not using the nextjs cache.." 
#sudo rm -r -f /opt/decode/web/www/.next
#sudo mkdir /opt/decode/web/www/.next
#sudo chmod 777 /opt/decode/web/www/.next
echo "Rebuilding on destination server" 
sudo npm run build
# use just pm2 start ecosystem.config.js --env production on production
# using nvm on test hence the use of the full path below
echo "Auto starting the web on pm2" 
sudo pm2 start ecosystem.config.js --env production 

# Restart nginx
echo "Restarting Nginx..." 
sudo systemctl restart nginx 