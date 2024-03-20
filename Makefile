# Makefile for web deployment
# Must first:
# sudo mkdir /var/www/html/hw12_javascript_two/rockpaperscissors
# sudo chown ubuntu /var/www/html/hw12_javascript_two/rockpaperscissors

all: PutHTML

PutHTML:
	cp rockpaperscissors.html /var/www/html/hw12_javascript_two/rockpaperscissors/
	cp rockpaperscissors.css /var/www/html/hw12_javascript_two/rockpaperscissors/
	cp rockpaperscissors.js /var/www/html/hw12_javascript_two/rockpaperscissors/
	cp -r images /var/www/html/hw12_javascript_two/rockpaperscissors/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/hw12_javascript_two/rockpaperscissors/
