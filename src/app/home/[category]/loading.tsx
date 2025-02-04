import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    // <section className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 px-5 sm:px-0">
    //   <Skeleton className="w-full h-60" />
    //   <Skeleton className="w-full h-60" />
    //   <Skeleton className="w-full h-60" />
    //   <Skeleton className="w-full h-60" />
    //   <Skeleton className="w-full h-60" />
    // </section>
    <>
      <h1 className="hidden">Netflix Category</h1>
      <div className="flex flex-col mt-20 min-h-[100vh]">
        <div className="flex justify-center items-center px-[6%] h-[10rem] font-[900] text-4xl text-center text-white leading-[1.2] cursor-default select-none Helvetica Neue, Roboto, sans-serif">
          {" "}
        </div>

        {/* Render MovieCards */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 px-[6%]">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
        </div>
      </div>
    </>
  );
}
