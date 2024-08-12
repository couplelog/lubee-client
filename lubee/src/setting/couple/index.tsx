import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("setting/account");
  }

  return <SettingHeader handleBackBtn={handleBackBtn} title="커플 연결" />;
}
