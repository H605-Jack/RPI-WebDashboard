# Localhost Web Dashboard Server

The Web Dashboard Server provides the essential materials to run a web server with an overview of the host's system status, some networking tools to assess security and other usage within the cybersecurity field, and integrations such as calendar events, remote control over media playback, etc.. This project will need a prerequisite of Apache2, and instructions for its configurations will be provided later in this README file.

The Web Dashboard Server will be developed alongside Apache2, which introduces PHP, JavaScript, and Vite + Vue. PHP will be essential for Apache2 operation with mod_php enabled, and JavaScript will be used to create Vue application, as well as Vue Router operation.

This project is done on the Raspberry Pi 5. Generally it is because of the ability to maintain the 24/7 uptime, which is useful for server hosting, and other projects that are useful for networking security. While this project is mainly on the Raspberry Pi, this project also aims to support other Linux devices as well.

## Getting Started

On Linux, create a site folder in `/var/www`. Do not use the existing `html` folder for this project. You will typically need a root permission to create a directory like this:

```
# mkdir -p /var/www/$HOSTNAME/dev
# chown -R $USER:$USER /var/www/$HOSTNAME/
$ cd /var/www/$HOSTNAME/dev
$ git clone <this-repository>
```


## Run and Build Instructions
### To launch the Development Environment at localhost:5173
```
$ cd /var/www/$HOSTNAME/dev
$ npm run dev
```


### For production

`$ bin/server-prod`

### Configure Apache2
See [APACHE_INSTRUCTION.md](./APACHE_INSTRUCTION.md) for instruction to setup the Apache2 server.

### The README file is still under construction. We are still adding things into it.