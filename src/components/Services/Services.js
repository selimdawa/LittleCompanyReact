import React from "react";
//import { Button } from "../../globalStyles";
//import { AiFillThunderbolt } from "react-icons/ai";
import {
  GiStairsCake,
  GiStakesFence,
  GiStalagtite,
  GiStamper,
  GiStandingPotion,
  GiStaplerHeavyDuty,
  GiStaplerPneumatic,
  GiStarProminences,
  GiStapler,
  GiStarSwirl,
  GiStarfighter,
  GiStarsStack,
} from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingText,
} from "./Services.elements";

function Services() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio
            elit, cursus id facilisis et, facilisis eget dui. Curabitur
            tincidunt imperdiet eleifend. Maecenas porttitor metus augue, vitae
            laoreet purus pulvinar.
          </PricingText>

          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStarSwirl />
                </PricingCardIcon>
                <PricingCardPlan>Item 1</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStairsCake />
                </PricingCardIcon>
                <PricingCardPlan>Item 2</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStarfighter />
                </PricingCardIcon>
                <PricingCardPlan>Item 3</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStarsStack />
                </PricingCardIcon>
                <PricingCardPlan>Item 4</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStakesFence />
                </PricingCardIcon>
                <PricingCardPlan>Item 5</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStaplerHeavyDuty />
                </PricingCardIcon>
                <PricingCardPlan>Item 6</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStalagtite />
                </PricingCardIcon>
                <PricingCardPlan>Item 7</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStapler />
                </PricingCardIcon>
                <PricingCardPlan>Item 8</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStarProminences />
                </PricingCardIcon>
                <PricingCardPlan>Item 9</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStaplerPneumatic />
                </PricingCardIcon>
                <PricingCardPlan>Item 10</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStamper />
                </PricingCardIcon>
                <PricingCardPlan>Item 11</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStandingPotion />
                </PricingCardIcon>
                <PricingCardPlan>Item 12</PricingCardPlan>
                <PricingCardFeatures>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ullamcorper.
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Services;
