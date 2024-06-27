"use client";

import { useEffect } from "react";

import MovieDetails from "../_components/MovieDetails/MovieDetails";
import { IMovieDetails } from "@/api/movies/movies.types";

export default function SingleMoviePage({ params }: { params: { id: string } }) {
  const getDetails = () =>
    fetch(`https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`, {
      headers: {
        Authorization: "Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log("repo => ", res));

  useEffect(() => {
    getDetails();
  }, []);

  return <MovieDetails details={[] as unknown as IMovieDetails} />;
}
