import Location from "upload/location";
import Pic from "upload/pic";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { uploadPicState } from "@common/recoil/atom";

export default function index() {
  const [location, setLocation] = useState<string>("");
  const [uploadPic, setUploadPic] = useRecoilState(uploadPicState);
  const [searchInput, setSearchInput] = useState("");
  const [locationId, setLocationId] = useState<number | null>(null);

  function moveToUploadLocation() {
    setUploadPic(false);
  }

  function moveToUploadPic(locationId: number) {
    setUploadPic(true);
    setLocationId(locationId);
  }

  console.log(uploadPic);

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
      {uploadPic && locationId !== null && (
        <Pic
          setLocation={setLocation}
          location={location}
          locationId={locationId}
          moveToUploadLocation={moveToUploadLocation}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setUploadPic={setUploadPic}
          setLocationId={setLocationId}
        />
      )}
    </>
  );
}
