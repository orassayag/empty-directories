const fs = require('fs-extra');
const globalUtils = require('./global.utils');
const pathUtils = require('./path.utils');
const textUtils = require('./text.utils');

class FileUtils {

    constructor() { }

    async appendFile(data) {
        const { targetPath, message } = data;
        if (!targetPath) {
            throw new Error(`targetPath not found: ${targetPath} (1000010)`);
        }
        if (!message) {
            throw new Error(`message not found: ${message} (1000011)`);
        }
        if (!await this.isPathExists(targetPath)) {
            await fs.promises.mkdir(pathUtils.getDirectoryPath(targetPath), { recursive: true }).catch(console.error);
        }
        // Append the message to the file.
        await fs.appendFile(targetPath, message);
    }

    async isPathExists(targetPath) {
        // Check if the path parameter was received.
        if (!targetPath) {
            throw new Error(`targetPath not received: ${targetPath} (1000012)`);
        }
        // Check if the path parameter exists.
        try {
            return await fs.stat(targetPath);
        }
        catch (error) {
            return false;
        }
    }

    async getFilesRecursive(data) {
        const { directory, ignorePaths, logProgress } = data;
        await logProgress(directory);
        if (ignorePaths.some(d => textUtils.toLowerCase(directory).includes(d))) {
            return [];
        }
        const dirents = await fs.readdir(directory, { withFileTypes: true });
        let directories = [];
        if (this.ifEmptyDirectory(directory)) {
            directories.push(directory);
        }
        directories = [...directories, ...await Promise.all(dirents.map(dirent => {
            const result = pathUtils.resolve(directory, dirent.name);
            if (dirent.isDirectory()) {
                return this.getFilesRecursive({
                    directory: result,
                    ignorePaths: ignorePaths,
                    logProgress: logProgress
                });
            }
        }))];
        return Array.prototype.concat(...directories).filter(d => d);
    }

    ifEmptyDirectory(targetPath) {
        return fs.readdirSync(targetPath, { withFileTypes: true }).filter(dirent => dirent.isFile() || dirent.isDirectory()).length === 0;
    }

    isFilePath(targetPath) {
        const stats = fs.statSync(targetPath);
        return stats.isFile();
    }

    isDirectoryPath(targetPath) {
        const stats = fs.statSync(targetPath);
        return stats.isDirectory();
    }

    async removeDirectoryIfExists(targetPath) {
        if (await this.isPathExists(targetPath)) {
            await fs.remove(targetPath);
        }
    }

    async createDirectoryIfNotExists(targetPath) {
        if (!await this.isPathExists(targetPath)) {
            await fs.mkdir(targetPath);
        }
    }

    async copyDirectory(sourcePath, targetPath, filterFunction) {
        await fs.copy(sourcePath, targetPath, { filter: filterFunction });
    }

    createDirectory(targetPath) {
        if (!targetPath) {
            return;
        }
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
        }
    }

    // This method removes all files from a given target path.
    async emptyDirectory(targetPath) {
        // Verify that the path exists.
        globalUtils.isPathExistsError(targetPath);
        // Empty the directory.
        await fs.emptyDir(targetPath);
    }
}

module.exports = new FileUtils();