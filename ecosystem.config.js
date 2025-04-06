/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = {
    apps: 
    [
        {
            name: 'decode-web',
            script_old: './node_modules/.bin/next',
            script: 'node --require ./AzureApplicationinsights.js node_modules/next/dist/bin/next start -p 3000',
            args: 'start -p 3000',
            watch: false,
            autorestart: true,
            force: true,
  
            env: {
              NODE_ENV: "production"
            },
      
            // eslint-disable-next-line @typescript-eslint/naming-convention
            env_development: {
              NODE_ENV: "development",              
            },
      
            // eslint-disable-next-line @typescript-eslint/naming-convention
            env_test: {
              NODE_ENV: "test"            
            },
      
            // eslint-disable-next-line @typescript-eslint/naming-convention
            env_staging: {
              NODE_ENV: "staging"            
            },

            // eslint-disable-next-line @typescript-eslint/naming-convention
            env_production: {
              NODE_ENV: "production"              
            }
        }
    ],
}
