import styled from "styled-components";

type Props = {
  icon: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
};

const FeatureCardWrapper = styled.div`
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  max-width: 350px;
  max-height: 267px;
  padding: 41px 32px;
  border-radius: 5px;
  z-index: 1;
`;

const CardImageWrapper = styled.div`
  position: absolute;
  top: -44px;
  left: 76px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 50%;
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
`;

const CardImage = styled.img`
  width: 40px;
  height: 40px;
`;

const CardTitle = styled.h3`
  margin-top: 77px;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`;

const CardDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.gray};
`;

const FeatureCard = (props: Props) => {
  return (
    <FeatureCardWrapper style={props.style}>
      <CardImageWrapper>
        <CardImage src={props.icon} alt={props.title} />
      </CardImageWrapper>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </FeatureCardWrapper>
  );
};

export default FeatureCard;
