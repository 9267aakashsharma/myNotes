import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { MdSearch } from "react-icons/md";
import "./Navbar.scss";
const payO_logo = require("../../../assets/logos/logo.png");

type Props = {
  getSearchText: (searchText: string) => void;
};

const Navbar = (props: Props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    props.getSearchText(searchText);
  }, [searchText]);
  return (
    <div className="payO-navbar">
      <nav>
        <img src={payO_logo} alt="logo" />
        <div>
          <MdSearch />
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            placeholder="Search Notes"
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
