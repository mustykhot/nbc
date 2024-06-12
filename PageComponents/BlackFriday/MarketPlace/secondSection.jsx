import EmptyResponse from "Components/EmptyResponse";
import Image from "next/image";
import FifthSection from "../FifthSection";
import MarketPagination from "./marketPagination";

const SingleMarket = ({ item }) => {
  return (
    <div
      className="single_market"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open(`${item.url_link}/browse/blackfriday22`, "_blank");
        }
      }}
    >
      <div className="image_box">
        <Image
          src={`${item.logo_url}`}
          objectPosition={"0 0"}
          priority={true}
          objectFit={"cover"}
          layout={"fill"}
          alt="store"
        />
      </div>
      <div className="text_box">
        <p className="title_text">{item.name}</p>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
};

const SecondSection = ({ paginated, page, setPage, total }) => {
  return (
    <section className="pd_second_section">
      <div className="display_market">
        <div className="bg_image_box"></div>
        <div className="displaying_box">
          <div className="cover_display">
            <p>Displaying {total} NBCTradeFair Merchants</p>
          </div>
        </div>

        {paginated && paginated.length ? (
          paginated.length > 1 ? (
            <div className="market_grid">
              {" "}
              {paginated[page - 1].map((item) => (
                <SingleMarket item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="market_grid">
              {" "}
              {paginated[0].map((item) => (
                <SingleMarket item={item} key={item.id} />
              ))}
            </div>
          )
        ) : (
          <EmptyResponse message={"No record found"} />
        )}

        <div className="line"></div>
        {paginated && paginated.length ? (
          <MarketPagination
            totalPages={paginated.length}
            page={page}
            setPage={setPage}
          />
        ) : (
          ""
        )}
      </div>

      <FifthSection isFaq={false} />
    </section>
  );
};

export default SecondSection;
