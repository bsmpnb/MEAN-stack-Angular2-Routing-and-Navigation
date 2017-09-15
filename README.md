# MEAN-stack-Angular2-Routing-and-Navigation

######## MEAN - Routing  ##########
	{ https://angular.io/guide/router }
	Create directory "MEAN-stack-Angular2-Routing-and-Navigation" on github yo will get below
	echo "# MEAN-stack-Angular2-Routing-and-Navigation" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/bsmpnb/MEAN-stack-Angular2-Routing-and-Navigation.git
	git push -u origin master

	create your mean-routes branch
	git init
	git checkout -b mean-routes
	git branch
	npm init

	vim index.js
	:wq!

	npm install express --save
		var express = require('express');
		var app = express();

		app.get('/', (req, res) => {
		    res.send('hello world');
		});

		app.listen(1338, () => {
		    console.log('Listing on port: 1338');
		});
	In index.js
		"scripts": {
		    "start": "node index.js"
	  	}

	install nodemon
	nodemon index.js

	install mongodb & mongoose
	npm install mongoose --save
	nodemon index.js

	cd client
	install angular/cli
	ng new client && cd client && ng serve
	http://localhost:1338/
	http://localhost:4200/
	ng build
	http://localhost:1338/
	In index.json 
		const path = require('path');
		app.use(express.static(__dirname + '/client/dist/'));
		app.get('/', (req, res) => {
		//    res.send('<h1>Hello World!</h1>');
		    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
		});
	nodemon index.js

	search angular 2 router
	creat app.routing.module.ts inside angular app
		import { RouterModule, Routes } from '@angular/router';
		import { NgModule } from '@angular/core';

		@NgModule({
		  declarations: [],
		  imports: [],
		  providers: [],
		  bootstrap: []
		})
		export class ApprRoutingModule {}


	In index.html
	{ http://getbootstrap.com/ }
	{ https://www.bootstrapcdn.com/ }
	{ http://jquery.com/download/ }

	cd src/app/components(new)
	ng generate component navbar

	https://getbootstrap.com/docs/3.3/examples/navbar/
	cd components
	ng g component home


8. ADD to Git server_setup branch
===========================================================
	git status
	git add.A
	git status
	git branch
	git commit -m "Server Setup"
	git status
	git push --all origin
	git branch
	git checkout master
	git merge server-setup
	git status
	git push