import MovieDetails from "../_components/MovieDetails/MovieDetails";

async function getData(id: string) {
  const res = await fetch(`https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`, {
    cache: "no-store",
    headers: {
      Authorization: "Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM",
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleMoviePage({ params }: { params: { id: string } }) {
  const repo = await getData(params.id as string);

  console.log("repo => ", repo);

  return <MovieDetails details={repo.data} />;
}
