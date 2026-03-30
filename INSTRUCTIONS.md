# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Open `src/settings/settings.js`
2. Configure the settings according to your needs:
   - `SCAN_PATH`: The absolute path to scan for empty directories (e.g., `C:\\Or\\Web`)
   - `DIST_FILE_NAME`: Name of the output TXT file (default: `result-log`)
   - `APPLICATION_NAME`: Application name for path calculations
   - `IGNORE_DIRECTORIES`: Directories to skip during backup operations
   - `IGNORE_FILES`: Files to skip during backup operations

### Important Settings

**SCAN_PATH** - The directory to scan:
```javascript
SCAN_PATH: 'C:\\Or\\Web'
```

**DIST_FILE_NAME** - Output file name:
```javascript
DIST_FILE_NAME: 'result-log'
```

### Ignore Paths Configuration

Configure paths to ignore in `src/configurations/ignorePaths.js`:
```javascript
module.exports = [
    'node_modules',
    '.git',
    'dist',
    // Add more paths to ignore
];
```

## Running the Application

### Scan for Empty Directories
Scans the configured path and generates a log file:
```bash
npm start
```

**What it does:**
1. Displays important settings (SCAN_PATH, DIST_FILE_NAME)
2. Prompts for confirmation (type 'y' to proceed)
3. Initiates all services
4. Recursively scans directories
5. Identifies empty directories
6. Creates a TXT file in `dist/` with results

**Example Output:**
```
===IMPORTANT SETTINGS===
SCAN_PATH: C:\Or\Web
DIST_FILE_NAME: result-log
========================
OK to run? (y = yes)
y
===INITIATE THE SERVICES===
===SCAN DIRECTORIES===
C:\Or\Web\Project1\EmptyFolder
C:\Or\Web\Project2\UnusedDir
===EXIT: FINISH===
```

### Create Backup
Creates a backup of the application:
```bash
npm run backup
```

**What it does:**
- Creates a timestamped backup directory
- Copies all application files except ignored directories
- Includes files specified in `INCLUDE_FILES` setting
- Stores backup in the `backups/` directory

## File Structure

### Source Files (`src/`)
- `settings/settings.js` - Main configuration
- `configurations/ignorePaths.js` - Paths to ignore during scan
- `services/` - Business logic services
- `logics/` - Main application logic flows
- `utils/` - Utility functions
- `core/models/` - Data models
- `core/enums/` - Enumeration definitions

### Output Files (`dist/`)
Generated log files are placed in the dist directory with the name specified in `DIST_FILE_NAME`.

### Backup Files (`backups/`)
Application backups are stored here with timestamped directory names.

## Error Messages

All errors include descriptive messages with error codes for easy troubleshooting:
- `1000010` - Target path not found for file append
- `1000011` - Message not found for file append
- `1000012` - Target path not received for path existence check

## Development

### Project Scripts

```bash
# Run the scan application
npm start

# Create a backup of the application
npm run backup

# Run linting
npm run lint
```

## Notes

- The application requires read permissions for the scan path
- Ensure proper write permissions for the dist directory
- Empty directories are determined by having no files or subdirectories
- Hidden files and directories are included in the scan
- Ignored paths are case-insensitive

## Troubleshooting

**Problem:** "OK to run?" prompt doesn't accept input
- **Solution:** Ensure you're running the application in an interactive terminal

**Problem:** No output file generated
- **Solution:** Check that the dist directory exists and has write permissions

**Problem:** Scan takes too long
- **Solution:** Add more paths to the ignore list in `src/configurations/ignorePaths.js`

**Problem:** Application crashes during scan
- **Solution:** Check that the SCAN_PATH exists and is accessible

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
