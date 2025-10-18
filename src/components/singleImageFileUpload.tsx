"use client";

import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react";
import { useFileUpload } from "@/hooks/use-file-upload";
import { useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";


type SingleImageUploaderProps = {
  onChange: (file: File | null) => void;
};

export default function SingleImageUploader({ onChange }: SingleImageUploaderProps) {
  const maxSizeMB = 1; // ✅ 1MB limit
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/*",
    maxSize,
  });

  useEffect(() => {
    if (files.length > 0) {
      const firstFile = files[0]?.file;

      // ✅ Ensure file exists and is of correct type
      if (firstFile instanceof File) {
        if (firstFile.size > maxSize) {
          toast.error(`Image size must be less than ${maxSizeMB}MB`);
          onChange(null);
          return;
        }
        onChange(firstFile); // ✅ Safe now
      } else {
        onChange(null);
      }
    } else {
      onChange(null);
    }
  }, [files, onChange, maxSize, maxSizeMB]);

  const previewUrl = files[0]?.preview || null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* Drop area */}
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors"
        >
          <input {...getInputProps()} className="sr-only" aria-label="Upload file" />

          {previewUrl ? (
            <div className="absolute inset-0">
              <Image
                src={previewUrl}
                alt={files[0]?.file?.name || "Uploaded image"}
                className="size-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Drop your image here or click to browse
              </p>
              <p className="text-muted-foreground text-xs">Max size: {maxSizeMB}MB</p>
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="z-50 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove image"
            >
              <XIcon className="size-4" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="text-destructive flex items-center gap-1 text-xs" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
