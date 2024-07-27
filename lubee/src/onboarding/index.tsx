import { useRecoilState } from "recoil";
import {
  onboardingConnectState,
  onboardingCodeState,
  onboardingCustomState,
  onboardingProfileState,
  onboardingBirthState,
  onboardingAnnivState,
} from "@common/recoil/atom";
import Connect from "onboarding/connect";
import Code from "onboarding/code";
import Custom from "onboarding/custom";
import Profile from "onboarding/profile";
import Birth from "onboarding/birth";
import Anniv from "onboarding/anniversary";

export default function index() {
  const [onboardingConnect, setOnboardingConnect] = useRecoilState(onboardingConnectState);
  const [onboardingCode, setOnboardingCode] = useRecoilState(onboardingCodeState);
  const [onboardingCustom, setOnboardingCustom] = useRecoilState(onboardingCustomState);
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(onboardingProfileState);
  const [onboardingBirth, setOnboardingBirth] = useRecoilState(onboardingBirthState);
  const [onboardingAnniv, setOnboardingAnniv] = useRecoilState(onboardingAnnivState);

  function moveToOnboardingConnect() {
    setOnboardingConnect(true);
    setOnboardingCode(false);
    setOnboardingCustom(false);
    setOnboardingProfile(false);
    setOnboardingBirth(false);
    setOnboardingAnniv(false);
  }

  function moveToOnboardingCode() {
    setOnboardingConnect(false);
    setOnboardingCode(true);
    setOnboardingCustom(false);
    setOnboardingProfile(false);
    setOnboardingBirth(false);
    setOnboardingAnniv(false);
  }

  function moveToOnboardingCustom() {
    setOnboardingConnect(false);
    setOnboardingCode(false);
    setOnboardingCustom(true);
    setOnboardingProfile(false);
    setOnboardingBirth(false);
    setOnboardingAnniv(false);
  }

  function moveToOnboardingProfile() {
    setOnboardingConnect(false);
    setOnboardingCode(false);
    setOnboardingCustom(false);
    setOnboardingProfile(true);
    setOnboardingBirth(false);
    setOnboardingAnniv(false);
  }

  function moveToOnboardingBirth() {
    setOnboardingConnect(false);
    setOnboardingCode(false);
    setOnboardingCustom(false);
    setOnboardingProfile(false);
    setOnboardingBirth(true);
    setOnboardingAnniv(false);
  }

  function moveToOnboardingAnniv() {
    setOnboardingConnect(false);
    setOnboardingCode(false);
    setOnboardingCustom(false);
    setOnboardingProfile(false);
    setOnboardingBirth(false);
    setOnboardingAnniv(true);
  }

  return (
    <>
      {onboardingConnect && (
        <Connect moveToOnboardingCode={moveToOnboardingCode} moveToOnboardingCustom={moveToOnboardingCustom} />
      )}
      {onboardingCode && (
        <Code moveToOnboardingConnect={moveToOnboardingConnect} moveToOnboardingCustom={moveToOnboardingCustom} />
      )}
      {onboardingCustom && (
        <Custom moveToOnboardingCode={moveToOnboardingCode} moveToOnboardingProfile={moveToOnboardingProfile} />
      )}
      {onboardingProfile && (
        <Profile moveToOnboardingCustom={moveToOnboardingCustom} moveToOnboardingBirth={moveToOnboardingBirth} />
      )}
      {onboardingBirth && (
        <Birth moveToOnboardingProfile={moveToOnboardingProfile} moveToOnboardingAnniv={moveToOnboardingAnniv} />
      )}
      {onboardingAnniv && <Anniv moveToOnboardingBirth={moveToOnboardingBirth} />}
    </>
  );
}
