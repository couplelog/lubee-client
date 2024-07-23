import Location from "upload/location";
import Pic from "upload/pic";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { uploadPicState } from "@common/recoil/atom";

export default function index() {
  const [location, setLocation] = useState<string>("");
  const [uploadPic, setUploadPic] = useRecoilState(uploadPicState);
  const [searchInput, setSearchInput] = useState("");

  function moveToUploadLocation() {
    setUploadPic(false);
  }

  function moveToUploadPic() {
    setUploadPic(true);
  }

  return (
    <>
      {!uploadPic && (
        <Location
          setLocation={setLocation}
          moveToUploadPic={moveToUploadPic}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
      {uploadPic && (
        <Pic
          setLocation={setLocation}
          location={location}
          moveToUploadLocation={moveToUploadLocation}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setUploadPic={setUploadPic}
        />
      )}
    </>
  );
}
