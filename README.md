# Localhost Web Dashboard Server

The Web Dashboard Server provides the essential materials to run a web server with an overview of the host's system status, some networking tools to assess security and other usage within the cybersecurity field, and integrations such as calendar events, remote control over media playback, etc.. This project will need a prerequisite of Apache2, and instructions for its configurations will be provided later in this README file.

The Web Dashboard Server will be developed alongside Apache2, which introduces PHP, JavaScript, and Vite + Vue. PHP will be essential for Apache2 operation with mod_php enabled, and JavaScript will be used to create Vue application, as well as Vue Router operation.

# Apache2 Instructions for Linux user

Make sure the followings are set:
* Configure and enable the site, using VirtualHost at port 80
* Port 80 is configured correctly at /etc/apache2/ports.conf
* Enable `mod_php` via `a2enmod phpX.X` where X.X is the corresponding PHP version

### Create the localhost site
Create a client site as `/etc/apache2/sites-available/000-default.conf`. You can use any editor such as `nano`, `vim`, etc..
```
<VirtualHost *:80>
    # Use system's hostname similarly to your mDNS hostname
	ServerName hostname.local 

	ServerAdmin webmaster@localhost
	DocumentRoot /var/www/hostname/dist
	<Directory /var/www/kiet-pifive/public/node_modules>
		Require all denied
	</Directory>
	<Directory /var/www/hostname/dist>
		AllowOverride All
	</Directory>

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
	
    # Configure proxy for the /src directive
	ProxyPreserveHost On
	ProxyPass /src http://localhost:8000
	ProxyPassReverse /src http://localhost:8000
	ErrorDocument 404 /src/404.php
</VirtualHost>
```
Then, create the resource site as `/etc/apache2/sites-available/000-development.conf`. This should be the site listens on port 8000 and is accessibile only in your system, not from any other devices in the network. 
```
<VirtualHost localhost:8000>
	ServerName kiet-pifive.local
	DocumentRoot /var/www/kiet-pifive/src
	
	<Directory /var/www/kiet-pifive/src>
		Options -Indexes
		<If "%{REMOTE_ADDR} == '127.0.0.1'">
			Options +Indexes
		</If>
		AllowOverride None
		Require all granted
	</Directory>
	
	ErrorLog ${APACHE_LOG_DIR}/dev-error.log
	CustomLog ${APACHE_LOG_DIR}/dev-access.log combined
</VirtualHost>
```

### Enable TCP port 80 and 8000 in /etc/apache2/ports.conf
```
Listen 80
Listen localhost:8000
```

#
### Enable the site (as root)
`# a2ensite /etc/apache2/sites-available/000-default.conf`, then

`# a2ensite /etc/apache2/sites-available/000-development.conf` 
#

### To start, stop, and check the status of Apache2 operation (root permission required for the first 2 commands)

Start the server 

`# systemctl start apache2.service`

Stop the server

`# systemctl stop apache2.service`

Check the status

`$ systemctl status apache2.service`


# To launch the Development Environment at localhost:5173

`$ cd dev`

`$ npm run dev`


## For production

$ bin/php-prod.sh

