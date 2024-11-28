"use client";

import { BadgeCheck, LucideCircle, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function AddProductsForm() {
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // states for boolean
  const [isImgUploading, setIsImgUploading] = useState(false)
  const [isImgUploaded, setIsImgUploaded] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsImgUploaded(false)
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setIsImgUploading(true)
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      const resData = await res.json();
      if (resData.success === true) {
        setIsImgUploading(false)
        setIsImgUploaded(true)
      }
      const getUrl = resData.url;
      setImgUrl(getUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        body: JSON.stringify({ imageUrl: imgUrl, title, description, price }),
      });

      const resData = await res.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col items-center">
        <div>
          <label className="flex">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="border px-1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="flex">Description</label>
          <textarea
            name="description"
            id="description"
            cols={22}
            rows={2}
            placeholder="Write a description"
            className="border px-1"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="flex">Price</label>
          <input
            type="text"
            placeholder="Price"
            className="border px-1"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-48">
          <label className="flex">Cover: {isImgUploaded ? (<p className="font-semibold text-green-700 ml-1 flex">Image uploaded<BadgeCheck className="size-5 mt-[2px] ml-[1px]"/></p>) : (<p className="ml-1">Choose a image.</p>)}</label>
          <input type="file" onChange={handleFileUpload} />
          {isImgUploading ? (<p className="font-semibold text-blue-700 flex">Uploading image... <RotateCcw className="animate-spin"/></p>) : (<></>)}
        </div>
      </div>
      <div className="text-center mt-2">
        <button
          type="submit"
          className="bg-blue-500 px-10 py-1 rounded-full text-white hover:bg-blue-600 transition-all"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
