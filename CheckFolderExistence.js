import { join } from 'path';
import { get_all_directories } from './GetAllDirectories.js';

//Returns boolean true or false based on whether node_module is present on that folder or not
export function has_node_module_directory(folder_path,directory_to_be_zipped){
    const Directories = get_all_directories(folder_path);
    return Directories.includes(join(folder_path,directory_to_be_zipped));
}