# Empty Directories

A Node.js utility application to scan and identify all empty directories from a given path and log them into a TXT file.

Built in April 2021. This simple yet powerful tool helps you clean up your file system by finding directories that contain no files or subdirectories.

## Features

- 📁 Recursively scans directories from a specified path
- 🔍 Identifies all empty directories
- 📝 Generates a detailed log file with all findings
- ⚙️ Configurable ignore paths for flexibility
- 🛡️ Interactive confirmation before execution
- 💾 Backup functionality for the application itself
- 📊 Progress tracking during scan operations

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/orassayag/empty-directories.git
cd empty-directories
```

2. Install dependencies:
```bash
npm install
```

### Configuration

Edit the settings in `src/settings/settings.js`:
- `SCAN_PATH`: The absolute path to scan (e.g., `C:\\Or\\Web`)
- `DIST_FILE_NAME`: Name for the output log file (default: `result-log`)
- `APPLICATION_NAME`: Application name for path calculations
- `IGNORE_DIRECTORIES`: Directories to exclude from backup operations
- `MILLISECONDS_END_DELAY_COUNT`: Delay before exiting (default: 1000ms)

Configure paths to ignore during scan in `src/configurations/ignorePaths.js`:
```javascript
module.exports = [
    'node_modules',
    '.git',
    'dist',
    // Add more paths to ignore
];
```

## Available Scripts

### Scan
Scans for empty directories and generates a log file:
```bash
npm start
```

### Backup
Creates a backup of the application:
```bash
npm run backup
```

### Lint
Checks code for linting errors:
```bash
npm run lint
```

## Project Structure

```
empty-directories/
├── src/
│   ├── configurations/  # Configuration files (ignore paths)
│   ├── core/
│   │   ├── enums/       # Enumeration definitions
│   │   └── models/      # Data models
│   ├── logics/          # Main application logic
│   ├── scripts/         # Script executables
│   ├── services/        # Business logic services
│   ├── settings/        # Application settings
│   ├── tests/           # Test files
│   └── utils/           # Utility functions
├── dist/                # Output log files
├── backups/             # Application backups
└── package.json
```

## How It Works

```mermaid
graph TD
    A[Start Application] --> B[Load Settings]
    B --> C[Display Configuration]
    C --> D{User Confirms?}
    D -->|No| E[Exit: Abort by User]
    D -->|Yes| F[Initialize Services]
    F --> G[Start Scan]
    G --> H[Recursive Directory Scan]
    H --> I{Directory Empty?}
    I -->|Yes| J[Add to Results]
    I -->|No| K{Has Subdirectories?}
    K -->|Yes| H
    K -->|No| L{More Directories?}
    J --> L
    L -->|Yes| H
    L -->|No| M[Write Results to File]
    M --> N[Display Statistics]
    N --> O[Exit: Finish]
    
    style A fill:#90EE90
    style E fill:#FFB6C1
    style O fill:#87CEEB
```

## Application Flow

1. **Configuration Loading**: Reads settings from `src/settings/settings.js`
2. **User Confirmation**: Displays key settings and prompts for confirmation
3. **Service Initialization**: Initializes all required services (log, path, scan, count limit)
4. **Directory Scanning**: Recursively scans the specified path
5. **Empty Detection**: Checks each directory for files and subdirectories
6. **Filtering**: Applies ignore paths to skip unwanted directories
7. **Logging**: Records all empty directories found
8. **Report Generation**: Creates a TXT file in the `dist/` directory
9. **Cleanup**: Performs graceful shutdown with statistics

## Usage Example

```bash
$ npm start

===IMPORTANT SETTINGS===
SCAN_PATH: C:\Or\Web
DIST_FILE_NAME: result-log
========================
OK to run? (y = yes)
y
===INITIATE THE SERVICES===
===SCAN DIRECTORIES===
C:\Or\Web\OldProject\EmptyFolder
C:\Or\Web\Archive\UnusedDir
C:\Or\Web\TestData\TempDir
===EXIT: FINISH===
```

The output file `dist/result-log.txt` will contain:
```
C:\Or\Web\OldProject\EmptyFolder
C:\Or\Web\Archive\UnusedDir
C:\Or\Web\TestData\TempDir
```

## Development

The project uses:
- **Node.js** for runtime
- **fs-extra** for enhanced file operations
- **ESLint** for code linting
- **readline-sync** for user input

## Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute. Contributing doesn't just mean submitting pull requests—there are many different ways to get involved, including answering questions and reporting issues.

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](LICENSE) file for details.
