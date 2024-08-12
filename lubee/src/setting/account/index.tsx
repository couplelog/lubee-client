import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/mypage");
  }

  return <SettingHeader handleBackBtn={handleBackBtn} title="환경 설정" />;
}
