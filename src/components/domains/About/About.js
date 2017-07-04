import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';

// const history = createBrowserHistory();

class About extends Component {
  render() {
    return (
      <div styleName="root">
        <p styleName="paragraph">
          Smooth, thick and viscous on the palate, with a full and robust body. For a moment, its sweet and tropical, then hops rush in and tear it all to shreds! The lip-smacking hop profile roams all over the place, as a sticky pine and a slightly burnt resinous coating forms on the palate. Intensely spicy, with a big grapefruity zest and a sugary, warming alcohol that smacks you upside the head for noticing it. Malt-wise, caramel and bread flavors clamor to be heard, but the hops entangle them and draw them back into the depths of the brew, where they die. Malt flavors are there, but they add sweetness and body versus anything distinct enough to challenge the hops.
        </p>

        <p styleName="paragraph">
          Ordered by the pint, the orange-colored beer shimmers with deep red and brown hues, and is topped with a healthy lace. The nose offers a very soft, mixed bag of spices and faint notes of pumpkin meat beneath some maltiness. The aroma is delicate at first, opening up as the beer warms. Carbonation is tight on the palate, a bit sharp. More soft and powdery spices emerge, reminiscent of the holidays. The pumpkin is subtle, with hints of starch. There's just enough malty sweetness as not to overwhelm the spicing or pumpkin, with an interesting bit of burnt sugar around the edges and, at times, suggestions of oranges. No real bitterness to speak of, but there's a thin sourness that awakens the palate. Some huskiness as the beer warms, with a dry finish and faint spice linger. Overall, the beer is quite dry.
        </p>
      </div>
    );
  }
}

export default CSSModules(About, styles);
