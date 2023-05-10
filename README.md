# Async File System Utilities

This is a simple file system utilities for Node.js, using Promises.

## Installation

```bash
npm install --save @gmjs/fs-async
```

## Functions

### Basic File System

- `readTextAsync(filePath: string): Promise<string>`
  - Description - Read a text file.
---
- `writeTextAsync(filePath: string, content: string): Promise<void>`
  - Description - Write a text file.
---
- `readBinaryAsync(filePath: string): Promise<Buffer>`
  - Description - Read a binary file.
---
- `writeBinaryAsync(filePath: string, content: Buffer): Promise<void>`
  - Description - Write a binary file.
---
- `createFileAsync(filePath: string): Promise<void>`
  - Description
    - Create a file.
    - Often used with `writeTextAsync` or `writeBinaryAsync` to ensure that a file and ancestor directories exist before writing to it.
---
- `existsAsync(filePath: string): Promise<boolean>`
  - Description - Check if a file exists.

### Find

- `findFsEntriesAsync(directory: string, options?: FindOptions): Promise<readonly FilePathStats[]>`
  - Description - Search a directory for files. Search can be limited by depth.
  - Parameters
    - `directory: string` - The directory to search.
    - `options: FindOptions`
      - Description - Options for the search.
      - Fields
        - `depthLimit: number | undefined`:
          - Description
            - The maximum depth to search.
            - Default is `undefined`.
            - If value is `-1` or `undefined`, there is no depth limit (limit is inifnite).
