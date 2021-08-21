import React, { useState } from "react";
import "./search.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function NewSearch() {
  const [inputValue, setInputValue] = useState("");
  const suggestionArray = ["apple", "ball", "cat", "are", "aaarom"];

  function onChangeHandeler(event, newInputValue) {
    setInputValue(newInputValue);
    if (event.keyCode === 13) {
      console.log("search");
    }
  }

  const submitSearchIcon = () => {
    if (inputValue !== "") {
      console.log("search");
    }
  };

  return (
    <div className="text">
      <Autocomplete
        value={inputValue}
        onInputChange={(e, newInputValue) => {
          onChangeHandeler(e, newInputValue);
        }}
        freeSolo
        autoSelect
        options={suggestionArray.slice(0, 10).map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            className="textInput"
            InputProps={{
              ...params.InputProps,
              style: {
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "2px",
              },
              startAdornment: (
                <InputAdornment onClick={submitSearchIcon}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default NewSearch;
