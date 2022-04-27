import os

class ConfigurationsOS:
    def remove_files_temporary(self, path, filename, format):
        os.remove(f"{path}/{filename}.{format}")

    def get_file_paths(self, dirname):
        file_paths = []  
        for root, directories, files in os.walk(dirname):
            for filename in files:
                filepath = os.path.join(root, filename)
                file_paths.append(filepath)  
        return file_paths 

    def get_name_files_path(self, path, format):
        names = []

        files = self.get_file_paths(path)                
        for file in files:                              
            (filepath, ext) = os.path.splitext(file)    
            file_name = os.path.basename(file)         
            if ext == f".{format}":                           
                names.append(file_name)

        return names