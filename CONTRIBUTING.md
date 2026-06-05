# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/empty-directories/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:

- **JavaScript (Node.js)** with ES6+ features
- **ESLint** for code quality
- **fs-extra** for enhanced file operations

Before submitting:

```bash
# Check for linting errors
npm run lint

# Test the application
npm start
```

### Coding Standards

1. **Functions with 3+ parameters**: Use object parameters
2. **Error handling**: Include descriptive error messages with error codes
3. **Naming**: Use clear, descriptive names for variables and functions
4. **File organization**: Keep related functionality in dedicated service files
5. **Comments**: Add comments to explain non-obvious logic

### Adding New Features

When adding new features:

1. Add service logic in `src/services/`
2. Create utility functions in `src/utils/` if needed
3. Update models in `src/core/models/` for data structures
4. Add configuration options to `src/settings/settings.js`
5. Update documentation (README, INSTRUCTIONS)
6. Test thoroughly with different directory structures

### Configuration Management

When adding new configuration options:

1. Add the setting to `src/settings/settings.js`
2. Document the setting with clear comments
3. Update the confirmation prompt if it's an important setting
4. Update INSTRUCTIONS.md with usage examples

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
