#!/usr/bin/env bash
#$1 = $(Pipeline.Workspace)/apps/web/$(Build.BuildId) 
#$2 = $(Pipeline.Workspace)/apps/web                
#$3 = $(Build.BuildId)
#$4 = $(Pipeline.Workspace)/drop/$(Build.BuildId).zip

echo "Cleaninn up Build($3)"
echo "Use this script to clean up temp items after a continous deployment"
echo "Deleting $1"
sudo rm -f -r "$1"
echo "Deleting $4"
sudo rm -f "$4"
echo "Finished cleaning up" 
