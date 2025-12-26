import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { updateProject } from "@/action/updateProject";
import Form from "next/form";
import toast from "react-hot-toast";

const ProjectCardEdit = ({
  projectid,
  features,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: {
  projectid: number;
  features: string;
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}) => {
  type Project = {
    id: number;
    title: string;
    slug: string;
    description: string;
    features: string;
    thumbnail: string;
    projectUrl: string;
    repoUrl: string;
    createdAt: string;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [editProject, setEditProject] = useState<Project>({
    id: 0,
    title: "",
    slug: "",
    description: "",
    features: "",
    thumbnail: "",
    projectUrl: "",
    repoUrl: "",
    createdAt: "",
  });

  const projectData = {
    id: projectid,
    title: title,
    slug: "",
    description: description,
    features: features,
    thumbnail: imgUrl,
    projectUrl: previewUrl,
    repoUrl: gitUrl,
    createdAt: "",
  };

  const openEditModal = (project: Project) => {
    setEditProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    const toastId = toast.loading("Removing project...");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectid}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (res.ok && data?.success) {
        toast.success("Project deleted", { id: toastId });
        window.location.reload();
      } else {
        toast.error(data?.message || "Delete failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 transition duration-500 opacity-0 group-hover:opacity-70 ">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex gap-4 mt-3">
          <button
            onClick={() => openEditModal(projectData)}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <Form action={updateProject} className="space-y-4">
              <h2 className="text-xl font-semibold">Update Project</h2>

              <input type="hidden" name="id" value={editProject.id} />

              <input
                name="title"
                defaultValue={editProject.title}
                placeholder="Project title"
                className="w-full border px-3 py-2 rounded"
              />

              <textarea
                name="description"
                defaultValue={editProject.description}
                placeholder="Description"
                rows={3}
                className="w-full border px-3 py-2 rounded"
              />

              <textarea
                name="features"
                defaultValue={editProject.features}
                placeholder="Features"
                rows={3}
                className="w-full border px-3 py-2 rounded"
              />

              <input
                name="thumbnail"
                defaultValue={editProject.thumbnail}
                placeholder="Thumbnail URL"
                className="w-full border px-3 py-2 rounded"
              />

              <input
                name="projectUrl"
                defaultValue={editProject.projectUrl}
                placeholder="Live project URL"
                className="w-full border px-3 py-2 rounded"
              />

              <input
                name="repoUrl"
                defaultValue={editProject.repoUrl}
                placeholder="Repository URL"
                className="w-full border px-3 py-2 rounded"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete <span className="font-medium">{title}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardEdit;
