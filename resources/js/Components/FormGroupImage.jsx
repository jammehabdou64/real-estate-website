import AppInputError from "./AppInputError";
import AppLabel from "./AppInputLable";
import AppInputImage from "./AppInputImage";
import React from "react";
// import Image from "./Image";

const FormGroupImage = ({ id, error, label, onChange, value, name }) => {
  return (
    <div className="col-span-1">
      <AppLabel forId={id} value={label} />
      <div className="mt-1">
        <AppInputImage id={id} name={name} value={value} onChange={onChange} />
        <AppInputError message={error} />
      </div>
    </div>
  );

  // const [previewImg, setPreviewImg] = useState("");

  // const handleFileUpload = (event) => {
  //   onChange(event);
  //   const reader = new FileReader();
  //   reader.onload = function () {
  //     setPreviewImg(reader.result);
  //   };
  //   console.log({ event: event.target.files });
  //   reader.readAsDataURL(event.target.files[0]);
  // };

  // const clearUpload = (e) => {
  //   setPreviewImg("");
  // };

  // useState(() => {
  //   if (value) {
  //     setPreviewImg(value);
  //   }
  // });

  // return (
  //   <>
  //     <div className="col-span-1 ">
  //       <AppLabel forId={name} value={label} />
  //       <div className="flex-1">
  //         {value ? (
  //           <div className="relative h-40 w-full rounded-md overflow-hidden">
  //             <div className="hover:opaciy-100 opacity-0 absolute inset-0 bg-gray-800/30 z-20 flex items-center justify-center">
  //               <button
  //                 type="button"
  //                 className=" bg-red-500 inline-flex items-center justify-center w-9 h-9 rounded-full text-white relative z-50"
  //                 onClick={clearUpload}
  //               >
  //                 <i className="fad fa-trash"></i>
  //               </button>
  //             </div>
  //             <Image
  //               className={"block object-cover h-40 w-40 rounded-md object-top"}
  //               src={previewImg}
  //             />
  //             {previewImg}
  //           </div>
  //         ) : (
  //           <label
  //             className={`${
  //               value ? "pointer-events-none" : "pointer-events-auto"
  //             } h-40 w-40 bg-gray-200/90 hover:shadow-lg rounded-md flex items-center justify-center text-gray-200 duration-300 cursor-pointer relative overflow-hidden`}
  //             htmlFor={id}
  //           >
  //             <i className="text-6xl text-white fad fa-camera" />
  //             <input
  //               type="file"
  //               onChange={handleFileUpload}
  //               accept="image/*"
  //               className="sr-only"
  //               id={id}
  //               name={name}
  //             />
  //           </label>
  //         )}

  //         <AppInputError message={error} className="mt-2" />
  //       </div>
  //     </div>
  //   </>
  // );
};

export default FormGroupImage;
