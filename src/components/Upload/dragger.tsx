import React, { useState, DragEvent } from "react";
import classNames from "classnames";
import Icon from "./../Icon/icon";

interface DraggerProps {
  onFile: (files: FileList) => void;
  children?: React.ReactNode;
}

export const Dragger: React.FC<DraggerProps> = props => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames("uploader-dragger", {
    "is-dragover": dragOver,
  });

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  return (
    <div
      className={classes}
      onDragOver={e => {
        handleDrag(e, true);
      }}
      onDragLeave={e => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      <Icon icon="upload" size="3x" color="gray" />
      <div>上传文件(点击或拖拽)</div>
      {children}
    </div>
  );
};

export default Dragger;
