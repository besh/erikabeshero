import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';

// const history = createBrowserHistory();

class About extends Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="main">
          <div styleName="image">
            <img alt={'bio pic'} src="https://scontent.fagc1-2.fna.fbcdn.net/v/t31.0-8/18451499_10154472707705069_5322464288869472373_o.jpg?oh=c1b67d3460ecb6a79a08e98012f3ddc2&oe=59CCEDF5" />
          </div>
          <ul styleName="list">
            <li>Human mom</li>
            <li>Cat mom</li>
            <li>Animal lover</li>
            <li>People lover</li>
          </ul>
        </div>

        <p styleName="paragraph">
          Ordered by the pint, the orange-colored beer shimmers with deep red and brown hues, and is topped with a healthy lace. The nose offers a very soft, mixed bag of spices and faint notes of pumpkin meat beneath some maltiness. The aroma is delicate at first, opening up as the beer warms. Carbonation is tight on the palate, a bit sharp. More soft and powdery spices emerge, reminiscent of the holidays. The pumpkin is subtle, with hints of starch. There's just enough malty sweetness as not to overwhelm the spicing or pumpkin, with an interesting bit of burnt sugar around the edges and, at times, suggestions of oranges. No real bitterness to speak of, but there's a thin sourness that awakens the palate. Some huskiness as the beer warms, with a dry finish and faint spice linger. Overall, the beer is quite dry.
        </p>
      </div>
    );
  }
}

export default CSSModules(About, styles);
