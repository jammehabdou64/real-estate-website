import React, { useEffect, useRef, useState, forwardRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// Register FilePond plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const AppInputImage = forwardRef((props, ref) => {
  const { name, value, onChange } = props;
  const pondRef = useRef(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (value) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(value);
    } else {
      setFilePreview(null);
    }
  }, [value]);

  const handleFileAdd = (error, fileItem) => {
    if (!error) {
      onChange(fileItem.file);
    }
  };

  const handleFileRemove = () => {
    onChange(null);
  };

  return (
    <div>
      {/* FilePond Component */}
      <FilePond
        ref={pondRef}
        files={
          filePreview
            ? [{ source: filePreview, options: { type: "local" } }]
            : []
        }
        allowMultiple={false}
        maxFileSize="5MB"
        name={name}
        instantUpload={false}
        required={false}
        labelIdle="Click to choose image, or drag here..."
        acceptedFileTypes={["image/*"]}
        onaddfile={handleFileAdd}
        onremovefile={handleFileRemove}
      />
    </div>
  );
});

export default AppInputImage;
