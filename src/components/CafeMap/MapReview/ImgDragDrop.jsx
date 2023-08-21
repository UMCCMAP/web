import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as D from './styles/ImgDragDrop.style';
import { TiDelete } from 'react-icons/ti';
import addSvg from '@/assets/images/add.svg';

function ImgDragDrop({ color, addImg, data }) {
  const [files, setFiles] = useState(data || []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) =>
        prevFiles.concat(acceptedFiles.map((file) => URL.createObjectURL(file))),
      );
    },
  });

  const handleClickDelete = (id) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[id]);
    newFiles.splice(id, 1);
    setFiles(newFiles);
  };

  useEffect(() => {
    addImg(files);
    // return () => {
    //   files.forEach((file) => URL.revokeObjectURL(file));
    // };
  }, [files]);

  return (
    <D.DragDropContainer>
      <D.DropzoneWrapper {...getRootProps()}>
        <input {...getInputProps()} />
        {files.length === 0 ? (
          <D.DragDropWord>
            <img src={addSvg} />
            <p>사진 추가하기</p>
          </D.DragDropWord>
        ) : (
          <D.ImgContainer color={color}>
            <D.AddImgBtn>
              <img src={addSvg} />
            </D.AddImgBtn>
            {files.map((data, index) => (
              <D.ImgItem key={index} onClick={(e) => e.stopPropagation()}>
                <img src={data} alt="리뷰 사진" />
                <D.DeleteImg onClick={() => handleClickDelete(index)}>
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
