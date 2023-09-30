'use client';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { searchResults } from "@/services/spotifyService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AlbumList from "./AlbumList";
import { useTranslation } from "next-i18next";
import TrackList from "./TrackList";

const SearchBar = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const { data: results, error, refetch, isLoading } = useQuery({
    queryKey: ["searchData"],
    queryFn: async () => {
      const res = await searchResults({ searchText, types: ["album", "track", "artist"] });
      return res.data;
    },
    enabled: false,
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText || searchText === "") {
      return;
    }
    refetch();
    setSearchText("");
  };

  const handleVoiceSearch = () => {
    if (!browserSupportsSpeechRecognition) {
      console.error("El navegador no admite el reconocimiento de voz.");
      return;
    }

    SpeechRecognition.startListening();
  };

  return (
    <div className="text-center">
      <div className="mb-8 whitespace-nowrap">
        <form onSubmit={handleSearch}>
          <input
            className="outline-none bg-gray-100 h-12 text-2xl text-zinc-900 rounded-s-full align-middle px-4"
            type="search"
            name="search-bar"
            placeholder={t("search.placeholder")}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-zinc-100 h-12 text-2xl text-zinc-900 border-solid border-2 border-l-zinc-400 rounded-e-full align-middle px-4"
            onClick={refetch}
            type="submit"
          >
            {t("search.button")}
          </button>
          <button
            className="bg-zinc-100 h-12 text-2xl text-zinc-900 border-solid border-2 border-l-zinc-400 rounded-e-full align-middle px-4 ml-2"
            onClick={handleVoiceSearch}
          >
            Voice Search
          </button>
        </form>
      </div>

      {results && (
        <>
          <h3 className="text-[2rem] text-zinc-100 font-bold">{t("search.songs")}</h3>
          <TrackList tracks={results.tracks?.items} />

          <h3 className="text-[2rem] text-zinc-100 font-bold">{t("search.albums")}</h3>
          <AlbumList albums={results.albums} withAccess={true} />
        </>
      )}

      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default SearchBar;
