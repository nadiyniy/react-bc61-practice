import css from "./CartModules.module.css";
import PropTypes from "prop-types";

export const CartModules = ({ data }) => {
  const { name, poster, tag, title, description, postedAt, avatar } = data;

  return (
    <div className={css.centered}>
      <div className={css.wrapper}>
        <div>
          <img className={css.img} src={poster} alt="card__image" />
        </div>
        <div className={css.wrapperInfo}>
          <div>
            <span className={css.tag}>{tag}</span>
            <h3 className={css.title}>{title}</h3>
            <p className={css.text}>{description}</p>
          </div>
          <div>
            <div className={css.wrapperImg}>
              <img className={css.imgLittle} src={avatar} alt="Jane Doe" />
              <div className={css.wrapperText}>
                <p>{name}</p>
                <p>{postedAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartModules.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postedAt: PropTypes.string,
    avatar: PropTypes.string,
  }),
};
