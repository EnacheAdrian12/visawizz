const Page404 = () => {
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col items-center justify-center text-center">
      <p className="text-[8rem] font-bold">Error 404</p>
      <p className="text-[3rem] font-bold my-[2rem]">Page Not Found</p>
      <a
        href="/"
        className="my-[3rem] uppercase text-[1.8rem] font-bold bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-[1rem] px-[6rem] border border-yellow-300 hover:border-transparent"
      >
        Retry
      </a>
    </div>
  );
};

export default Page404;
