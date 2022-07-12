import os
from urllib.parse import urljoin
from urllib.request import pathname2url

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

    def file_path_to_url(self, filepath, address):
        filename = filepath.split("merge")[1]
        path = os.path.dirname(os.path.realpath(f"{filepath}{filename}"))
        return urljoin(f'file://{address}', pathname2url(path)) 
    
    def validate_environment(self, name, condition):
        if(os.environ.get(name)):
            if(condition == os.environ.get(name)):
                return True
            else:
                return False
        return True