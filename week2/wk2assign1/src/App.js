import React from "react"
import Block from "./components/Block"

function App() {
  return (
    <div className="App">
      <Block backgroundColor="#52D1DC" title="Chester" subTitle="The Cheetah" info="Mascot for Cheetohs!"/>
      <Block backgroundColor="#6279B8" title="Tony" subTitle="The Tiger" info="Mascot for Frosted Flakes"/>
      <Block backgroundColor="#5B8C5A" title="Tucan Sam" subTitle="The Parrot" info="Mascot for Fruit Loops!"/>
      <Block backgroundColor="#FFBF00" title="Kool-Aid Man" subTitle="The Pitcher Guy" info="Mascot for Kool-Aid!"/>
      <Block backgroundColor="#CC8B8C" title="Snap, Crackle and Pop" subTitle="The Tiny People" info="Mascot for Rice Krispies!"/>
      <Block backgroundColor="#52D1DC" title="Colonel Sanders" subTitle="The Colonel" info="Mascot for KFC!"/>
      <Block backgroundColor="#6279B8" title="Leprechaun" subTitle="The Lucky Guy" info="Mascot for Lucky Charms!"/>
      <Block backgroundColor="#5B8C5A" title="Ronald McDonald" subTitle="The Clown" info="Mascot for McDonald's!"/>
      <Block backgroundColor="#FFBF00" title="Charlie" subTitle="The Tuna" info="Mascot for Starkist!"/>
      <Block backgroundColor="#CC8B8C" title="Stork" subTitle="The Bird" info="Mascot for Vlasic!"/>

    </div>
  );
}

export default App;
