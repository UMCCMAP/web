import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as D from './styles/ImgDragDrop.style';
import { TiDelete } from 'react-icons/ti';

function ImgDragDrop({ color }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) =>
        prevFiles.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        ),
      );
    },
  });

  const handleClickDelete = (file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <D.DragDropContainer>
      <D.DropzoneWrapper {...getRootProps()}>
        <input {...getInputProps()} />
        {files.length === 0 ? (
          <D.DragDropWord>
            <img src="src/assets/images/add.svg" />
            <p>사진 추가하기</p>
          </D.DragDropWord>
        ) : (
          <D.ImgContainer color={color}>
            <D.AddImgBtn>
              <img src="src/assets/images/add.svg" />
            </D.AddImgBtn>
            {files.map((data, index) => (
              <D.ImgItem key={index} onClick={(e) => e.stopPropagation()}>
                <img src={data.preview} alt={data.name} />
                <D.DeleteImg onClick={() => handleClickDelete(data)}>
                  <TiDelete color="red" size={18} />
                </D.DeleteImg>
              </D.ImgItem>
            ))}
          </D.ImgContainer>
        )}
      </D.DropzoneWrapper>
    </D.DragDropContainer>
  );
}
export default ImgDragDrop;
