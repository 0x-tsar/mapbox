import styled from "styled-components";

export const Container = styled.div``;

export const SideStyle = styled.div`
  background-color: white;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  width: 725px;
  height: 100vh;
  padding: 2px;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: left; */
  /* justify-content: center; */
  align-content: flex-start;
  /* align-items: flex-start; */
`;

export const Item = styled.div`
  background-color: black;
  width: 350px;
  height: 260px;
  margin-left: 1px;

  position: relative;
`;

export const Sidebar = () => {
  return (
    <SideStyle>
      <Item>
        <img
          width={350}
          src="https://photos.zillowstatic.com/fp/4265a93c0f513e3530b997c3124c7b4a-cc_ft_1536.webp"
        />
        <h2
          style={{
            position: "absolute",
            left: 20,
            // top: 0,
            padding: 0,
            margin: 0,
            marginTop: -50,
            textAlign: "center",
            // float: "right",
            color: "white",

            textShadow: "2px 2px  rgba(0,0,0,0.5)",
          }}
        >
          Some house
        </h2>
      </Item>
      <Item>
        <img
          width={350}
          src="https://photos.zillowstatic.com/fp/4265a93c0f513e3530b997c3124c7b4a-cc_ft_1536.webp"
        />
        <h2
          style={{
            position: "absolute",
            left: 20,
            // top: 0,
            padding: 0,
            margin: 0,
            marginTop: -50,
            textAlign: "center",
            // float: "right",
            color: "white",

            textShadow: "2px 2px  rgba(0,0,0,0.5)",
          }}
        >
          Some house
        </h2>
      </Item>

      {/* <Item>
        <img
          width={350}
          src="https://photos.zillowstatic.com/fp/843acc43229878b2f66d9cebd83762ac-cc_ft_1536.webp"
        />
      </Item>
      <Item>
        <img
          width={350}
          src="https://photos.zillowstatic.com/fp/c7123d7dceeef332ba6271da480a463e-cc_ft_1536.webp"
        />
      </Item>
      <Item>
        <img
          width={350}
          src="https://photos.zillowstatic.com/fp/2ef34e45846eb5dce8ecf90f5eb1018a-uncropped_scaled_within_1536_1152.webp"
        />
      </Item> */}
    </SideStyle>
  );
};
