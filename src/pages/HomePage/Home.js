import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import { InfoSection, Pricing, Services } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Pricing />
    </>
  );
}
export default Home;
