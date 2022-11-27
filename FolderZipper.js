// Package Used for Zipping the file is : adm-zip
// Package URL : https://www.npmjs.com/package/adm-zip
// Homepage : github.com/cthackers/adm-zip

import { rmdir } from 'fs';
import AdmZip from 'adm-zip';
import { join } from 'path';


//function that takes the path of the folder and name of directory to be zipped
// as a parameter and zip that folder
export function create_zip_folder(folder_path,directory_to_be_zipped){

    // defining path of the folder to be zipped
    const Path_To_Folder_To_Be_Zipped = join(folder_path,directory_to_be_zipped);
    // instanting the AdmZip class
    const Zip = new AdmZip();

    //output file name along with the extensions
    const Output_File = directory_to_be_zipped +".zip";

    //Storing full path of the file where it is to be zipped
    const Output_File_Path = join(folder_path,Output_File);

    //Adding local files to the zipped folder
    //It will add subfolder or the files of node_modules inside zip file
    Zip.addLocalFolder(Path_To_Folder_To_Be_Zipped ,directory_to_be_zipped);

    //Zipping the folder
    Zip.writeZip(Output_File_Path);

    //Displaying Successful Message
    console.log(`Created ${Output_File} on folder ${folder_path} Successfully...`);

    //deleting the folder that is zipped
    //for our case it will delete node_module folder from the directory
    rmdir(Path_To_Folder_To_Be_Zipped,{recursive:true},(error)=>{
        if(error){
            console.log("Error in deleting folder");
        }
        console.log(`${directory_to_be_zipped} folder successfully deleted from path ${folder_path}`);
    });
    
}
