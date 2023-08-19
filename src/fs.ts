import fs from 'fs-extra';
import { ENCODING_UTF8 } from '@gmjs/fs-shared';

export async function readTextAsync(filePath: string): Promise<string> {
  return await fs.readFile(filePath, ENCODING_UTF8);
}

export async function writeTextAsync(
  filePath: string,
  content: string,
): Promise<void> {
  await fs.writeFile(filePath, content, ENCODING_UTF8);
}

export async function readBinaryAsync(filePath: string): Promise<Buffer> {
  return await fs.readFile(filePath);
}

export async function writeBinaryAsync(
  filePath: string,
  content: Buffer,
): Promise<void> {
  await fs.writeFile(filePath, content);
}

export async function createFileAsync(filePath: string): Promise<void> {
  await fs.createFile(filePath);
}

export async function existsAsync(path: string): Promise<boolean> {
  return await fs.pathExists(path);
}

export function ensureDirAsync(path: string): Promise<void> {
  return fs.ensureDir(path);
}
