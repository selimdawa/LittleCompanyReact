import React from "react";
import { Button } from "../../globalStyles";
import {
  ContactContainer,
  ContactSubscription,
  ContactSubText,
  ContactSubHeading,
  Form,
  FormInput,
} from "./Contact.elements";

function Contact() {
  return (
    <ContactContainer>
      <ContactSubscription>
        <ContactSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </ContactSubHeading>
        <ContactSubText>You can unsubscribe at any time.</ContactSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </ContactSubscription>
    </ContactContainer>
  );
}

export default Contact;
