import { getFileName } from '@renderer/utils/stringUtils';
import { createContext, useState, ReactNode } from 'react';

interface FilesContextType {
  files: string[];
  setFiles: (files: string[]) => void;
  addFile: (file: string) => void;
  clearFiles: () => void;
  getFileNames: () => string[];
}

export const FilesContext = createContext<FilesContextType | undefined>(
  undefined
);

export const FilesProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFilesState] = useState<string[]>([]);

  const setFiles = (newFiles: string[]) => setFilesState(newFiles);
  const addFile = (file: string) => setFilesState((prev) => [...prev, file]);
  const clearFiles = () => setFilesState([]);
  const getFileNames = () => files.map((e) => getFileName(e));

  return (
    <FilesContext.Provider
      value={{ files, setFiles, addFile, clearFiles, getFileNames }}
    >
      {children}
    </FilesContext.Provider>
  );
};
