import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Home: FunctionComponent<ICardViewProps> = (props) => {
  return (
    <DefaultLayout>
      <Banner></Banner>
    </DefaultLayout>
  );
};

export default Home;
