import os

def update_frontmatter(directory):
    # Read the mod_times.txt file
    mod_times = {}
    with open('mod_times.txt', 'r', encoding='utf-8') as f:
        for line in f:
            path, date = line.strip().split('|')
            mod_times[path] = date

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, directory)
                
                if rel_path not in mod_times:
                    print(f"Skipping {rel_path} - not found in mod_times.txt")
                    continue

                date_str = mod_times[rel_path]

                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Check if frontmatter exists
                if content.startswith('---'):
                    # Update existing frontmatter
                    lines = content.split('\n')
                    date_updated = False
                    for i, line in enumerate(lines):
                        if line.startswith('date:'):
                            lines[i] = f'date: {date_str}'
                            date_updated = True
                            break
                    if not date_updated:
                        lines.insert(1, f'date: {date_str}')
                    new_content = '\n'.join(lines)
                else:
                    # Add new frontmatter
                    new_content = f'---\ndate: {date_str}\n---\n\n{content}'

                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f"Updated {rel_path}")

# Replace 'path/to/your/content/directory' with the actual path to your content directory
update_frontmatter('./content')