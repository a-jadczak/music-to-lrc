import { getFileName } from './../utils/stringUtils';
import { createContext, useState, ReactNode } from 'react';
import AudioFile from 'src/types/AudioFile';

interface FilesContextType {
  files: AudioFile[];
  outputPath: string;
  setOutputPath: (path: string) => void;
  setFiles: (files: AudioFile[]) => void;
  addFile: (file: AudioFile) => void;
  addFiles: (files: AudioFile[]) => void;
  deleteFile: (file: AudioFile) => void;
  clearFiles: () => void;
  getFileNames: () => string[];
}

export const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFilesState] = useState<AudioFile[]>([]);
  const [outputPath, setOutputPath] = useState<string>('');

  const setFiles = (newFiles: AudioFile[]) => setFilesState(newFiles);

  const addFile = (file: AudioFile) => setFilesState((files) => [...files, file]);
  const addFiles = (newFiles: AudioFile[]) => setFilesState((files) => [...files, ...newFiles]);
  const deleteFile = (fileToDelete: AudioFile) =>
    setFilesState(files.filter((file) => file.id !== fileToDelete.id));
  const clearFiles = () => setFilesState([]);
  const getFileNames = () => files.map((file) => getFileName(file.path));

  return (
    <FilesContext.Provider
      value={{
        files,
        outputPath,
        setOutputPath,
        setFiles,
        addFiles,
        deleteFile,
        addFile,
        clearFiles,
        getFileNames
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
