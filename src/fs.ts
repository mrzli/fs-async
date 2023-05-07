import { promises as fs } from 'node:fs';
import { ENCODING_UTF8 } from '@gmjs/fs-shared';

export async function readTextAsync(filePath: string): Promise<string> {
  return await fs.readFile(filePath, ENCODING_UTF8);
}

export async function writeTextAsync(
  filePath: string,
  content: string
): Promise<void> {
  await fs.writeFile(filePath, content, ENCODING_UTF8);
}

export async function readBinaryAsync(filePath: string): Promise<Buffer> {
  return await fs.readFile(filePath);
}

export async function writeBinaryAsync(
  filePath: string,
  content: Buffer
): Promise<void> {
  await fs.writeFile(filePath, content);
}
