import Preloader from "Components/Preloader";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import FooterForm from "../footerForm";
import Navbar from "./navbar";
import SecondSection from "./secondSection";
import {
  array_chunks,
  getComparator,
  shuffleArray,
  stableSort,
} from "utils/utils";
const MarketPlace = ({ deals }) => {
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("default");
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [store, setStore] = useState(deals.stores);
  const [input, setInput] = useState("");
  const [displayedList, setDisplayedList] = useState([]);
  const [paginated, setPaginated] = useState([]);

  const handleSearch = (value) => {
    if (value) {
      const searchedList = store.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setDisplayedList(searchedList);
    } else {
      setDisplayedList(store);
    }
  };
  console.log(deals, "deals");
  useEffect(() => {
    if (deals.stores.length) {
      let newArr = shuffleArray(deals.stores);
      setStore(newArr);
    } else {
      setStore([]);
    }
    // setStore()
  }, [deals]);
  useEffect(() => {
    if (displayedList.length) {
      const stable = stableSort(displayedList, getComparator("asc", orderBy));
      const splittedArray = array_chunks(stable, 20);
      setPaginated(stableSort(splittedArray, getComparator("asc", orderBy)));
    } else {
      setPaginated([]);
    }
  }, [displayedList, orderBy]);

  useEffect(() => {
    if (category === "All") {
      setDisplayedList(store);
    }
  }, [category]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  if (load || !deals) {
    return <Preloader />;
  }

  return (
    <>
      <div className="pd_market_place">
        <Head>
          <title>Stores</title>
        </Head>
        <Navbar input={input} setInput={setInput} handleSearch={handleSearch} />
        <SecondSection
          paginated={paginated}
          total={deals?.stores?.length}
          page={page}
          setPage={setPage}
        />
        <FooterForm isForm={false} />
      </div>
    </>
  );
};

export default MarketPlace;
