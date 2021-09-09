import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #e9e9cf;
`;

export default function Home() {
  const [viewp, setViewP] = useState({
    width: 0,
    height: 10,
  });

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      console.log(e);
      // setViewP(...viewp, [{ width: e.currentTarget.innerWidth }]);
      // setViewP(viewp => {viewp, width: e.currentTarget.innerWidth})
      // setViewP({...viewp => {viewp, width: e.currentTarget.innerWidth});

      setViewP({
        width: e.currentTarget.innerWidth,
        height: e.currentTarget.innerHeight,
      });
      // this.setState({
      //   images: [...this.state.images, image],
      // });

      // setViewP({
      //   ...viewp,
      //   width: {
      //     ...viewp.width,
      //     width: 30,
      //   },
      // });
    });
  }, []);

  return (
    <Container>
      <Sidebar></Sidebar>
      <DynamicComponentWithNoSSR viewp={viewp} />
    </Container>
  );
}

const DynamicComponentWithNoSSR = dynamic(() => import("./components/Map"), {
  ssr: false,
});
