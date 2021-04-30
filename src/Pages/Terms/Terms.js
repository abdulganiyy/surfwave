import classes from "./Terms.module.scss";
import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";

class Terms extends Component {
  render() {
    return (
      <>
        <div className={classes.Wrap}>
          <div>
            <h2>INFORMATION, COMMUNICATION & MATERIALS</h2>
            <p>
              You agree that all information, communications, materials coming
              from Blue waves are unsolicited and must be kept private,
              confidential, and protected from any disclosure. Moreover, the
              information, communications, and materials contained herein are
              not to be regarded as an offer, nor a solicitation for investments
              in any jurisdiction which deems non-public offers or solicitations
              unlawful, nor to any person to whom it will be unlawful to make
              such offer or solicitation.
            </p>
          </div>
          <div>
            <h2>PERSONAL DATA</h2>
            <p>
              {" "}
              All  Personal data given by a member to Blue waves will only be
              used privately and not disclosed to any third parties. Whereas
              Blue waves  is not responsible or liable for any loss of data, it
              will endeavor to take good care of such data.
            </p>
          </div>
          <div>
            <h2>LIABILITY</h2>
            <p>
              Whereas it is Blue waves objective and general policy to always
              exercise sound judgment, prudence, and due diligence while
              analysing crypto markets, it is not possible to guarantee exact
              and/or past replica performance owing to market trade fluctuations
              and market volatility. You undertake not to hold Blue waves liable
              for any loss as you know are investing at your own risk and you
              hereby agree that past performance is not an explicit guarantee
              for the same future performance.  You agree that all information,
              communications, and materials you will be given are deemed as
              informational,  educational purposes as it's only adviced to
              invest what you can afford to lose
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Terms;
