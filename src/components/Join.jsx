import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div className="join-content">
            <img alt="coin_img" className="join-content__btc" src={Btc} />
            <img alt="coin_img" className="join-content__eth" src={Eth} />
            <div className="join-content__text">
              <h2>
                join us via <br /> <span>discord</span>
              </h2>
              <p>Invest and manage all your crypto at one place.</p>
              <a rel="noreferrer" target="_blank" href="https://discord.com/">
                Join via Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
