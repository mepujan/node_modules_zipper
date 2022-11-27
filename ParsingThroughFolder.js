import { get_all_directories } from './GetAllDirectories.js'
import { create_zip_folder } from './FolderZipper.js'
import { has_node_module_directory } from './CheckFolderExistence.js'


//function allows to parse through multiple directories that are contained in base folder
export function parse_through_directories(folder_path,directory_to_be_zipped){
    //getting all the available directories from the folder_path
    let directories = get_all_directories(folder_path,directory_to_be_zipped)

    //checking if the provided folder_path has sub_folders or not
    if(directories.length == 0){
        console.log(`Doesnot Contain Any ${directory_to_be_zipped} Directory in ${folder_path}...`);
    }

    //checking if the folder_path has node_module directory or not
    // if present then call the create_zip_folder
    if (has_node_module_directory(folder_path,directory_to_be_zipped)){
       create_zip_folder(folder_path,directory_to_be_zipped)
    }
    else{
        //if folder_path doesnot have node_modules in root 
        // parse through the sub-folder available in folder_path
        for (let directory of directories){
            //if sub-folder has node_modules then call thr create_zip_folder
            if(has_node_module_directory(directory,directory_to_be_zipped)){
                create_zip_folder(directory,directory_to_be_zipped)
            }
            //else parse through other directories available
            else{
                this.parse_through_directories(directory)
            }
        }
    }
    

}
