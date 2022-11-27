import { readdirSync,statSync } from 'fs'
import { join } from 'path'

// function that returns path of all the subfolders on the folder
export function get_all_directories (folder_path){
    return readdirSync(folder_path)
            .map(file => join(folder_path,file))
            .filter(path => statSync(path).isDirectory())
}