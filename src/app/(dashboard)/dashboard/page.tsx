import { auth } from "@/app/auth";


const DashboardHomePage = async() => {
 const session = await auth();
  const qute = "the screat of geeting ahed is getting started"

  // console.log(session);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        welcome {session?.user?.name}
      </h1>
      <p className="text-lg text-gray-600 italic text-center">{session?.user?.email}</p>
      <p className="text-lg text-gray-600 italic text-center">{qute}</p>
    </div>
  );
};

export default DashboardHomePage;
