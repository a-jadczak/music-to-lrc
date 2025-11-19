import { getFileName } from '@renderer/utils/stringUtils';
import { createContext, useState, ReactNode } from 'react';

interface FilesContextType {
  files: string[];
  outputPath: string;
  setOutputPath: (path: string) => void;
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
  const [outputPath, setOutputPath] = useState<string>('');
  const setFiles = (newFiles: string[]) => setFilesState(newFiles);
  const addFile = (file: string) => setFilesState((prev) => [...prev, file]);
  const clearFiles = () => setFilesState([]);
  const getFileNames = () => files.map((e) => getFileName(e));

  return (
    <FilesContext.Provider
      value={{
        files,
        outputPath,
        setOutputPath,
        setFiles,
        addFile,
        clearFiles,
        getFileNames
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
