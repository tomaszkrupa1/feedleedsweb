import "./CardsStyles.css";
import CardsData from "./CardsData";

function Cards() {
  return (
    <div className="cards">
      <h1>More info</h1>
      <p>This is so more information cards to suck more money out of you</p>
      <div className="full-card">
        <CardsData
          image="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/358480366_563471996002279_4204337843879590215_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ro-YgKIb5OcAX_E6Ty5&_nc_ht=scontent-man2-1.xx&oh=00_AfA8CFIQk9DrIkvWTBeNHrlvCWag3tE_Pbo7H_hvwJfJfg&oe=64AF3C84"
          heading="About us"
          text="Sample text about what is above"
        />
        <CardsData
          image="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/358563118_563346026014876_7283392476868722072_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EaLw0tuFiuIAX_SYBEk&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAxuhL38nK2X9jfU3BF83ViPeXdiQ-qxMZZyKJrc_hD7Q&oe=64AF2A60"
          heading="This is another card"
          text="Sample text about what is above"
        />
        <CardsData
          image="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/358539421_563346002681545_4395110623632923366_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pzRWUhCiSYIAX9z8aLY&_nc_ht=scontent-nrt1-1.xx&oh=00_AfBVyfNeDrO3Xe1nTrjJ98QyRe4HTUgK3mK5xkJX0j2aUw&oe=64AE15E7"
          heading="Final card"
          text="Sample text about what is above"
        />
      </div>
    </div>
  );
}

export default Cards;
