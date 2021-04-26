# PacMania
Repository of MITxPro Coding Cohort Week 7 Project
___

#Description

## Purpose
Experience manipulation of the Document Object Model (DOM) by creating objects (pacmen) that move about the window.

## Background
This project builds on weekly exercises for the MITxPro coding cohort.

Cohort was given a basic HTML page that had two buttons: "Add PacMen" and "Start Game". The first added an image of a PacMan to the window. The second started images moving about the screen.

Cohort was tasked to write the javascript code that made those two things happen.

## Project

This project required the cohort to write javascript that did the following:

1. Insantiate a new entity with random position and velocity
2. Add it to an array
3. Add it to the DOM
4. Manage its "virtual" position changing its direction upon contact with edges
5. Alternate the open/closed status of the entity
6. Continually revise the image in the DOM

## Repository
The following files are contained in this repository.
1. Index.html - Main HTML document: Buttons to add images and start movement
2. pacmen.js - Javascript code for responding to HTML buttons, managing crreation and movement of images, manipulation of the DOM to display the images.
3. /images (PacMan1.png, PacMan2.png, PacMan3.png, PacMan4.png) - "PacMan" images open and closed for left and right facing directions.

# Installation
The resulting code was tested on Google Chrome. Once loaded, PacMen are added clicking the "Add PacMen" button. Movement starts upon clicking the "Start Game" button.

# Support
For questions contact rmc4th@yahoo.com

# Roadmap
For future revisions, the code could be reworked to reflect changes to the window size after the "Start Game" button is pressed.

# License Information
This work was done as part of MIT xPRO Professional Certificate in Coding. The code above comes with the following license:

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

