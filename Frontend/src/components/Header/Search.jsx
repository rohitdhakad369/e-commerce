import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import { CiSearch, CiMicrophoneOn } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import i18n from "../common/components/LangConfig";
import { DesignServices, InterestsOutlined } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.grey[300], 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.6),
  },
  flex: 1,
  maxWidth: "400px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  "& .MuiAutocomplete-root": {
    flex: 1,
    "& .MuiInputBase-root": {
      borderRadius: "10",
      backgroundColor: "transparent",
      "& .MuiInputBase-input": {
        borderRadius: "10",
        fontSize: "0.9rem", 
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.8rem",
        },
      },
    },
  },
  "& .MuiIconButton-root": {
    "&:hover": {
      backgroundColor: "rgba(219, 68, 68, .9)",
      color: "white",
    },
  },
}));

const SearchAppBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const cleanTranscript = (text) => {
    // Remove all dots and trim whitespace
    let cleaned = text.replace(/\./g, '').trim();
    // Capitalize first letter
    if (cleaned.length > 0) {
      cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }
    return cleaned;
  };

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice search is not supported in your browser. Please use Chrome or Edge.");
      return;
    }

    if (!recognition) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const newRecognition = new SpeechRecognition();
      newRecognition.continuous = false;
      newRecognition.interimResults = false;
      newRecognition.lang = 'en-IN';

      newRecognition.onstart = () => {
        setIsListening(true);
      };

      newRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(cleanTranscript(transcript));
        setIsListening(false);
      };

      newRecognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      newRecognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(newRecognition);
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchText(searchText.trim());
    }
  };

  return (
    <Search className="flex items-center justify-center w-48 min-[425px]:w-64 sm:max-[1200px]:w-96 min-[1200px]:w-60 min-[1450px]:w-96 ">
      <Autocomplete
        freeSolo
        disableClearable
        disableListWrap
        openOnFocus
        options={ITEMS.map((item) => item.title)}
        value={searchText}
        onChange={(event, newValue) => setSearchText(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={i18n.t("search")}
            onKeyDown={handleKeyDown}
            inputProps={{
              ...params.inputProps,
              id: 'search-input',
            }}
          />
        )}
      />
      <div className="flex">
        <IconButton 
          aria-label="voice search" 
          color="inherit"
          onClick={handleVoiceSearch}
          style={{ color: isListening ? 'red' : 'inherit' }}
        >
          <CiMicrophoneOn className="w-5 h-auto md:w-6 md:h-6" />
        </IconButton>
        {searchText && (
          <IconButton aria-label="search" color="inherit">
            <Link to={`/allProducts/${searchText}`}>
              <CiSearch className="w-5 h-auto md:w-6 md:h-6" />
            </Link>
          </IconButton>
        )}


      </div>
    </Search>
  );
};

export default SearchAppBar;

