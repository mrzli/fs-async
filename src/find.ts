import klaw from 'klaw';
import { FilePathStats, FindOptions, toKlawFindOptions } from '@gmjs/fs-shared';

export async function findFsEntries(
  directory: string,
  options?: FindOptions
): Promise<readonly FilePathStats[]> {
  return new Promise<readonly FilePathStats[]>((resolve, reject) => {
    const entries: FilePathStats[] = [];
    klaw(directory, toKlawFindOptions(options))
      .on('data', (item) => {
        entries.push({
          path: item.path,
          stats: item.stats,
        });
      })
      .on('error', (error) => {
        reject(error);
      })
      .on('end', () => {
        resolve(entries);
      });
  });
}
