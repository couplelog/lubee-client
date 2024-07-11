import Location from "upload/location";
import Pic from "upload/pic";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { uploadLocationState, uploadPicState } from "@common/recoil/atom";

export default function index() {
  const [location, setLocation] = useState<string>("");
  const [uploadLocation, setUploadLocation] = useRecoilState(uploadLocationState);
  const [uploadPic, setUploadPic] = useRecoilState(uploadPicState);

  function moveToUploadPic() {
    setUploadLocation(false);
    setUploadPic(true);
  }

  function moveToUploadLocation() {
    setUploadLocation(true);
    setUploadPic(false);
  }

  return (
    <>
      {uploadLocation && <Location setLocation={setLocation} moveToUploadPic={moveToUploadPic} />}
      {uploadPic && <Pic setLocation={setLocation} location={location} moveToUploadLocation={moveToUploadLocation} />}
    </>
  );
}
