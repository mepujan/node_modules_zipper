// Pujan Gautam - c0842623
// Assignment 01 - NodeZipper

import { parse_through_directories } from './ParsingThroughFolder.js';

// node NodeZipper <Path_Of_Folder>
//Example: node NodeZipper C:\Users\mepujan\Desktop\Newfolder


//Getting the Directory path from the command line
const Directory_Path = process.argv.slice(2);

//Specifying name of folder that is to be zipped
const Directory_To_Be_Zipped = "node_modules";

//passing directory path and name of folder to zip the specified folder
parse_through_directories(Directory_Path[0],Directory_To_Be_Zipped);

