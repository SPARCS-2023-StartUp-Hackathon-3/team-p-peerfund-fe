import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";
import CategoryJob from "@/components/CategoryJob";
import ProjectList from "@/components/ProjectList";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Home: FunctionComponent<ICardViewProps> = (props) => {
  return (
    <DefaultLayout>
      <Banner />
      <CategoryJob />
      <ProjectList />
    </DefaultLayout>
  );
};

export default Home;
