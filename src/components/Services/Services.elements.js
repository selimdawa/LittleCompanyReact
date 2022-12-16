import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin: auto 80px 24px 80px;
`;

export const PricingText = styled.h1`
  color: #000;
  font-size: 24px;
  margin: auto 70px 38px 70px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #1b1a1a;
  box-shadow: 0 6px 20px rgba(177, 177, 177, 0.5);
  width: 280px;
  height: auto;
  text-decoration: none;
  border-radius: 12px;

  &:nth-child(2) {
    margin: 12px 24px 12px 24px;
  }

  &:nth-child(4) {
    margin: 12px 24px 12px 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;
