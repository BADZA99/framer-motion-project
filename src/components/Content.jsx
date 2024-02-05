import React from "react";
import styled from "styled-components";

const StyledContentSection = styled.section`
  position: relative;
  padding: 30vh 4vw 10vh;
  background-color: #e1dfdd;
  z-index: -1;
  .content__wrapper {
    width: 100%;
    max-width: 1417px;
    margin: 0 auto;
    .content__text--heading {
      font-family: "Italiana", serif;
      font-size: clamp(1rem, 5.25vw, 10rem);
      line-height: 1;
      font-weight: 300;
    }
    .content__text--copy {
      font-family: "Italiana", serif;
      font-size: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.3;
      font-weight: 300;
      width:50%;
      margin-bottom:10vh;
      margin-top:10vh;
    }
  }
`;

const Content = () => {
  return (
    <StyledContentSection>
      <div className="content__wrapper">
        <p className="content__text--heading">
          Creates amazing rotated 3d letters Animation for a Menu Hover effect
        </p>
        <p className="content__text--copy">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
          porro animi facilis quidem deleniti quo voluptatum sequi numquam?
          Minus, hic! Nemo magnam, vitae nobis atque nam, eius quis suscipit
          cumque asperiores itaque debitis est inventore, sed accusamus
          delectus? Velit porro adipisci vel atque quo! Itaque, totam? Quaerat,
          quasi rerum nesciunt voluptatibus impedit asperiores, eum est
          aspernatur ullam beatae tempora.
        </p>
      </div>
    </StyledContentSection>
  );
};

export default Content;
