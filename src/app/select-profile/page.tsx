import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import Logo from "../../../public/netflix_logo.svg";
import Placeholder from "../../../public/placeholder.svg";

interface Profile {
  id: string;
  name: string;
  avatar: string;
  type?: "adult";
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "DH",
    avatar:
      "https://occ-0-5412-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png",
  },
  {
    id: "2",
    name: "Alan",
    avatar:
      "https://occ-0-5412-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXFZnMq0aIUsTd1J4Zy10TaPi4Ulx3VRyT_ZN1p9XYcE1KAon0Ndskx0e2tTr9hajESYNDSnSrbDexSXvmYSBiI8gVqOF9SORA.png",
  },
  {
    id: "3",
    name: "Sam",
    avatar:
      "https://occ-0-5412-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdgqRu86LNrfFPuQ2Xhlz2NQehmsezXIx7HyVhyQXZ1wK8n97QjoJnDaiuKnWVnXclSIoqmrdlcXykFzFbnQP91p8rM-yxTFwQ.png",
  },
  {
    id: "4",
    name: "John",
    avatar:
      "https://occ-0-5412-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQYlg7rw1jw8D4qZVkZSRxxRxXOwsY6wiZLThDOU9YkDTz8PyAUd1_98emUrSzgoPSTjDiMgattAyGUJoEnjCeNkH-3rlvE4Tg.png",
  },
  {
    id: "5",
    name: "Adult",
    avatar:
      "https://occ-0-5412-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABS558YkUwFx-_rnxQNW6RM6GtiQhDVN4WSxe396tTbHBWVReVVYUTFYOjRL6C__ceOdEtdLm56LmSqVIk_dzxeozmarg9ZLuZg.png",
    type: "adult",
  },
];

export default function ProfilesPage() {
  return (
    <div className="flex flex-col items-center bg-black px-4 min-h-screen text-white">
      <div className="pt-8 pb-16 w-full max-w-6xl">
        <Link href="/home">
          <Image
            src={Logo}
            alt="Netflix"
            width={120}
            height={32}
            className="mx-auto mb-20"
          />
        </Link>
        <h1 className="mb-8 text-3xl text-center md:text-4xl">
          Who&apos;s Watching?
        </h1>
        <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto px-8 sm:px-20 md:px-10 max-w-4xl">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/home?profile=${profile.id}`}
              className="group flex flex-col items-center transition-transform duration-200"
            >
              <div className="relative border-2 group-hover:border-white group-focus:border-white border-transparent rounded-md w-full max-w-[200px] overflow-hidden aspect-square">
                <Image
                  src={profile.avatar || Placeholder}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <span className="font-semibold text-center text-lg text-white">
                    {profile.name}
                  </span>
                </div>
              </div>
              <span className="group-hover:text-white text-gray-400 text-sm sm:text-base">
                {profile.name}
              </span>
            </Link>
          ))}
        </div>
        <button className="flex items-center gap-2 border-gray-400 hover:border-white mx-auto mt-8 px-4 py-2 border text-gray-400 hover:text-white transition-colors duration-200">
          <Pencil className="w-4 h-4" />
          Edit
        </button>
      </div>
    </div>
  );
}
