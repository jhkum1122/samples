import { Div, Title, Subtitle } from "../components";
import * as D from "../data";

export default function JustifyCenterTest() {
  const boxes = D.range(0, 5).map((index) => (
    <Div key={index} className="w-4 h-4 m-1 bg-black" />
  ));
  return (
    <section className="mt-4 ">
      <Title>JustifyCenterTest</Title>
      <div className="mt-4 ">
        <Subtitle>flex flex-row justify-center</Subtitle>
        <div className="h-40 bg-gray-300 flex justify-center">{boxes}</div>
      </div>
      <div className="mt-4 justify-end">
        <Subtitle>flex flex-col justify-center</Subtitle>
        <div className="h-40 bg-gray-300 flex flex-col align-middle ">
          {boxes}
        </div>
      </div>
    </section>
  );
}
