# Setup and Usage Instructions

## Table of Contents

1. [Version](#version)
2. [Last Updated](#last-updated)
3. [Prerequisites](#prerequisites)
4. [System Requirements](#system-requirements)
5. [Initial Setup](#initial-setup)
6. [Available Commands](#available-commands)
7. [Running Scripts](#running-scripts)
8. [Setup Instructions](#setup-instructions)
9. [Configuration](#configuration)
10. [Running the Application](#running-the-application)
11. [File Structure](#file-structure)
12. [Error Messages](#error-messages)
13. [Development](#development)
14. [Best Practices](#best-practices)
15. [Extending the Application](#extending-the-application)
16. [Documentation](#documentation)
17. [External Resources](#external-resources)
18. [Troubleshooting](#troubleshooting)
19. [Author](#author)

## Version

1.0.0

## Last Updated

2026-06-05

## Prerequisites

- **Node.js**: Version 12 or higher
- **Package Manager**: npm

## System Requirements

- **Memory**: 512MB RAM minimum
- **Disk Space**: 100MB for application and dependencies
- **Permissions**: Read access to scan path, write access to `dist/` and `backups/` directories

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

## Available Commands

### Development Commands

**Linting and Formatting:**

```bash
# Check code style and quality
npm run lint
```

**Testing:**

```bash
# Run sandbox tests
npm test
```

### Running Scripts

**Execute the scan:**

```bash
npm start
```

**Create a backup:**

```bash
npm run backup
```

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
SCAN_PATH: 'C:\\Or\\Web';
```

**DIST_FILE_NAME** - Output file name:

```javascript
DIST_FILE_NAME: 'result-log';
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

## Best Practices

- **Verify SCAN_PATH**: Always double-check the target directory in `settings.js` before running.
- **Use Ignore Paths**: Configure `ignorePaths.js` to exclude large, irrelevant folders (e.g., `.git`, `node_modules`).
- **Review Logs**: Examine the generated `result-log.txt` in the `dist/` folder before taking cleanup actions.
- **Regular Backups**: Use `npm run backup` before making significant changes to the application or target paths.

## Extending the Application

- **New Services**: Add to `src/services/` and export from `src/services/index.js`.
- **New Utilities**: Add to `src/utils/files/` and export from `src/utils/index.js`.
- **New Scripts**: Create in `src/scripts/` and add to `package.json`.

## Documentation

- **README.md**: Main project overview, architecture, and design patterns.
- **Source Comments**: JSDoc style comments within the code for detailed function documentation.

## External Resources

- [Node.js Documentation](https://nodejs.org/)
- [fs-extra GitHub](https://github.com/jprichardson/node-fs-extra)
- [ESLint Documentation](https://eslint.org/)

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

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
