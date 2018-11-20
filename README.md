# Simple++/SimplePlusPlus
Simple++ is a hybrid modular application, designed primarily for desktop and tablet browsers, focusing on delivering a healthcare system
for elderly users. Developed with HTML, CSS, JavaScript, jQuery and Node.js, it uses Phonegap to deploy to mobile devices.

The inspiration behind this project is the application +Simple developed by Buenos Aires Ciudad - check it out at http://www.buenosaires.gob.ar/desarrollohumanoyhabitat/personasmayores/massimple

The main features focus on accessibility - high contrast colours, resizable text and responsive design. Users may choose their desired font size on demand using a Javascript slider that updates CSS rulesets accordingly. Modules can be enabled/disabled at will via the settings menu. Audiovisual aid is provided for improving target accuracy - sound notification on missed click and a brief background colour flash.

The main backend architecture focuses on modularity - each of the usable modules are functionally independent and do not need updating when the underlying framework is updated.
The backend architecture uses EJS to render each page in real time, providing a great solution for separating the code into modules. Each module is tasked with maintaining its own filesystem and request handlers, as well as what data other modules may request from it. All modules retain full ownership of any raw generated data and may choose to allow other modules to access it by using Node.js native export functionality. As a result, third-party modules have access to all the data they may require without having physical access to the source data.

This project contains a few demonstration modules - Nutrition and First Aid - as well as Maps, which was a proof of concept implementation of another student's application as a third-party module.

To run, simply start the local server using server.js via terminal and navigate to localhost:3000. 
