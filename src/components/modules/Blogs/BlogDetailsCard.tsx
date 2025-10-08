// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";

// export default async function BlogDetailsCard({ blog }: { blog: any }) {
//   if (!blog) {
//     return (
//       <div className="py-20 text-center text-gray-500">Blog not found.</div>
//     );
//   }

//   return (
//     <main className="max-w-4xl mx-auto py-30 px-4">
//       <h1 className="text-5xl text-blue-600 font-bold mb-6">{blog?.title}</h1>

//       <div className="flex items-center gap-4 mb-8">
//         <Image
//           src={
//             blog?.author?.picture ||
//             "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
//           }
//           alt={blog?.author?.name}
//           width={48}
//           height={48}
//           className="rounded-full"
//         />
//         <div>
//           <p className="font-semibold">
//             {blog.author.name}{" "}
//             {blog.author.isVerified && (
//               <span className="inline-block ml-1 text-blue-500">✔</span>
//             )}
//           </p>
//           <p className="text-gray-500 text-sm">
//             {new Date(blog.createdAt).toLocaleDateString()} • {blog.views} views
//           </p>
//         </div>
//       </div>

//       {blog.thumbnail && (
//         <div className="relative h-80 w-full overflow-hidden">
//           <Image
//             src={blog.thumbnail}
//             alt={blog.title}
//             fill
//             className="rounded-lg object-cover shadow-md"
//           />
//         </div>
//       )}

//       <article className="prose prose-lg max-w-none">
//         <p>{blog.content}</p>
//       </article>
//     </main>
//   );
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default async function BlogDetailsCard({ blog }: { blog: any }) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Blog not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-400">
          {blog?.title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={
              blog?.author?.picture ||
              "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
            }
            alt={blog?.author?.name || "Author"}
            width={48}
            height={48}
            className="rounded-full border border-gray-700"
          />
          <div>
            <p className="font-semibold text-white">
              {blog.author.name}{" "}
              {blog.author.isVerified && (
                <span className="inline-block ml-1 text-blue-500">✔</span>
              )}
            </p>
            <p className="text-gray-400 text-sm">
              {new Date(blog.createdAt).toLocaleDateString()} • {blog.views} views
            </p>
          </div>
        </div>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="relative h-80 w-full overflow-hidden rounded-lg mb-10">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <article className="text-gray-400 prose prose-lg prose-invert max-w-none leading-relaxed">
          {blog.content}
        </article>
      </div>
    </main>
  );
}
