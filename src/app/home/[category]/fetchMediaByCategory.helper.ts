// import prisma from "@/lib/db";
import type { MediaCategory } from "@/types";

export async function fetchMediasByCategory(
  category: MediaCategory,
) {
  // console.log("fetchMediasByCategory", userId);
  switch (category) {
    case "shows": {
      // const data = await prisma.movie.findMany({
      //   where: {
      //     category: "show",
      //   },
      //   select: {
      //     age: true,
      //     duration: true,
      //     id: true,
      //     title: true,
      //     release: true,
      //     imageString: true,
      //     overview: true,
      //     youtubeString: true,
      //     watchlists: {
      //       where: {
      //         userId,
      //       },
      //     },
      //   },
      // });

      // return data;
      return [];
    }

    case "movies": {
      // const data = await prisma.movie.findMany({
      //   where: {
      //     category: "movie",
      //   },
      //   select: {
      //     age: true,
      //     duration: true,
      //     id: true,
      //     title: true,
      //     release: true,
      //     imageString: true,
      //     overview: true,
      //     youtubeString: true,
      //     watchlists: {
      //       where: {
      //         userId,
      //       },
      //     },
      //   },
      // });

      // return data;
      return [];
    }

    case "recently": {
      // const data = await prisma.movie.findMany({
      //   where: {
      //     category: "recent",
      //   },
      //   select: {
      //     age: true,
      //     duration: true,
      //     id: true,
      //     title: true,
      //     release: true,
      //     imageString: true,
      //     overview: true,
      //     youtubeString: true,
      //     watchlists: {
      //       where: {
      //         userId,
      //       },
      //     },
      //   },
      // });

      // return data;
      return [];
    }

    default:
      throw new Error();
  }
}
