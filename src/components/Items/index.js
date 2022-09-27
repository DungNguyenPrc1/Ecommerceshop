import styles from "./Items.module.scss";
import classNames from "classnames/bind";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);

const Items = ({ listsItem }) => {
  const settings = {
    // infinite: true,
    // centerMode: true,

    slidesToShow: 5,
    slidesToScroll: 1,
    // slidesPerRow: 5,
    autoplay: true,
    speed: 1000,

    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1195,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {listsItem?.map((item) => {
          return (
            <div className={cx("wrapper")} key={item.id}>
              <div className={cx("items-label")}>{item.label}</div>
              <div className={cx("items-img")}>
                <img
                  className={cx("items-img-main")}
                  src={item.image}
                  // "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg"
                  alt="abc"
                />
                <img
                  className={cx("items-img-mini")}
                  src={item.imageMini}
                  alt="abc"
                />
              </div>
              <div style={{ height: "21px", marginBottom: "8px" }}>
                {item.name}
              </div>
              <strong
                style={{
                  heigh: "18px",
                  color: "#d0021c",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
                className={cx("price")}
              >
                {item.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </strong>
              <p className={cx("desb")}>{item.desc}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default Items;
