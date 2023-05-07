# Async File System Utilities

This is a simple file system utilities for Node.js, using Promises.

## Installation

```bash
npm install --save @gmjs/fs-async
```

## Functions

### Basic File System

- `readTextAsync(filePath: string): Promise<string>`
- `writeTextAsync(filePath: string, content: string): Promise<void>`
- `readBinaryAsync(filePath: string): Promise<Buffer>`
- `writeBinaryAsync(filePath: string, content: Buffer): Promise<void>`

### Find

- `findFsEntries(directory: string, options?: FindOptions): Promise<readonly FilePathStats[]>`
  - Parameters:
    - `directory: string` - The directory to search.
    - `options: FindOptions`
      - Description - Options for the search.
      - Fields:
        - `depthLimit: number | undefined`
          - Description
            - The maximum depth to search.
            - Default is `undefined`.
            - If value is `-1` or `undefined`, there is no depth limit (limit is inifnite).
