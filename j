# Updated package.json with the correct scoped package name
updated_package_json = """{
  "name": "og-liyah-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@shadcn/ui": "^0.5.0",
    "lucide-react": "^0.269.0"
  },
  "devDependencies": {
    "vite": "^4.5.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
"""

# Path to save the updated package.json
package_json_path = "/mnt/data/package.json"
# Write the updated content to a file
Path(package_json_path).write_text(updated_package_json)

package_json_path
