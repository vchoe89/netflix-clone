import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const Movie = ({ item, rowID, id }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieId = doc(db, "users", `${user?.email}`);

  const navigate = useNavigate();

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please login to save a movie");
    }
  };

  const showInfo = () => {
    console.log(item.id);
    // navigate(`/${item.id}`);
  };

  const overflowText = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div
      onClick={showInfo}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-md duration-500 hover:scale-105 inline-block cursor-pointer relative p-2 "
    >
      <img
        className="w-full h-auto block rounded-md"
        src={`https://image.tmdb.org/t/p/w500/${
          id === "slider1" ? item?.poster_path : item?.backdrop_path
        }`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:scale-120 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center z-10">
          {overflowText(item?.title || item?.name || item?.original_name, 35)}
        </p>

        <p onClick={saveShow}>
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-4 left-4 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-4 left-4 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
