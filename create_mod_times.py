import os
from datetime import datetime

def create_mod_times_file(directory):
    mod_times = {}
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                mod_time = os.path.getmtime(file_path)
                date_str = datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')
                rel_path = os.path.relpath(file_path, directory)
                mod_times[rel_path] = date_str

    with open('mod_times.txt', 'w', encoding='utf-8') as f:
        for path, date in mod_times.items():
            f.write(f"{path}|{date}\n")

    print("Created mod_times.txt with last modified dates")

# Replace 'path/to/your/content/directory' with the actual path to your content directory
create_mod_times_file('./content')