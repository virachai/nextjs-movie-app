import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-[1.5rem] sm:px-8 lg:px-16">
      <h1 className="hidden">Netflix Category</h1>
      <div className="flex flex-col mt-20 min-h-[100vh]">
        <div className="flex justify-center items-center px-[6%] h-[10rem] font-[900] text-4xl text-center text-white capitalize leading-[1.2] cursor-default select-none Helvetica Neue, Roboto, sans-serif">
          {" "}
        </div>

        {/* Render MovieCards */}
        <div className="gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-60" />
        </div>
      </div>
    </div>
  );
}
