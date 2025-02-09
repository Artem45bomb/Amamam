import { RefObject } from 'react';

export interface Props extends Stylable {
  inputRef: RefObject<HTMLInputElement | null>;
  onFileChange?: (arg: File) => void;
  typeFile?: FileType;
}

type FileType = 'image' | 'video' | 'image/video';
