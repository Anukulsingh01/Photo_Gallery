import { useState, useMemo, useCallback, useReducer } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      const exists = state.includes(action.id);
      const updated = exists
        ? state.filter((i) => i !== action.id)
        : [...state, action.id];

      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;

    default:
      return state;
  }
};

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by author..."
        className="border p-2 w-full mb-4"
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="border rounded shadow p-2">
            <img
              src={photo.download_url}
              alt={photo.author}
              className="w-full h-48 object-cover rounded"
            />

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">{photo.author}</p>

              <button
                onClick={() => dispatch({ type: "TOGGLE", id: photo.id })}
                className="text-xl"
              >
                {favourites.includes(photo.id) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}