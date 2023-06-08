import style from "./Card.module.scss";

const Card = () => {
  return (
    <div className={style["card-container"]}>
      <img src="https://picsum.photos/300/200" alt="card-image" />
      <h1>Card Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum
        asperiores totam hic molestias aperiam. Cupiditate ipsa nihil eius
        distinctio! Id repudiandae sapiente dolor quas sequi amet impedit autem
        nemo.
      </p>
      <button>Learn more</button>
    </div>
  );
};

export default Card;
