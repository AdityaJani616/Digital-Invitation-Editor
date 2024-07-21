// FontOption.jsx
import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomLabel = styled("div")(({ theme }) => ({
  color: "white",
  fontFamily: '"Roboto", "Arial", sans-serif',
  fontWeight: "bold",
  fontSize: "1rem",
  marginBottom: "0.25rem",
  textAlign: "left",
  display: "block",
}));

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  borderColor: "white",
  borderRadius: "8px",
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const fonts = [
  'Arial',
  'Playfair Display', 
  'Great Vibes', 
  'Garamond', 
  'Bodoni Moda', 
  'Montserrat', 
  'Raleway', 
  'Lora', 
  'Dancing Script', 
  'Satisfy', 
  'Sacramento'
];
const fontSizes = ["12", "14", "16", "18", "21", "24", "28", "32","36","42","48","56","64"];
const backgroundColors = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Light Gray', value: '#F5F5F5' },
  { name: 'Beige', value: '#FAF3E0' },
  { name: 'Pastel Blue', value: '#E3F2FD' },
  { name: 'Pastel Pink', value: '#FCE4EC' },
  { name: 'Pastel Green', value: '#E8F5E9' },
  { name: 'Champagne', value: '#F7E7CE' },
  { name: 'Ivory', value: '#FFFFF0' },
  { name: 'Pale Gold', value: '#F0E5D8' },
  { name: 'Soft Mint', value: '#E0F2F1' },
  { name: 'Muted Lavender', value: '#EDE7F6' },
  { name: 'Cool Gray', value: '#B0BEC5' },

];

export default function FontOption({
  selectedFont,
  setSelectedFont,
  selectedFontSize,
  setSelectedFontSize,
  selectedFontColor,
  setSelectedFontColor,
  selectedBackgroundColor,
  setSelectedBackgroundColor,
}) {
  const theme = useTheme();

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setSelectedFontSize(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setSelectedFontColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setSelectedBackgroundColor(event.target.value);
  };

  return (
    <div className="flex flex-col items-center lg:gap-5 w-full lg:mt-3">
      {/* Font  */}
      <div className="flex flex-col items-center w-full">
        <CustomLabel>Fonts</CustomLabel>
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            value={selectedFont}
            onChange={handleFontChange}
            input={<StyledOutlinedInput />}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Font Type" }}
          >
            {fonts.map((font) => (
              <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Font Size  */}
      <div className="flex flex-col lg:flex-row gap-4 w-full mt-4">
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <CustomLabel>Font Size</CustomLabel>
          <FormControl sx={{ m: 1, width: "70%" }}>
            <Select
              value={selectedFontSize}
              onChange={handleFontSizeChange}
              input={<StyledOutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Font Size" }}
            >
              {fontSizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size} pt
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
{/* Font Color */}
        <div className="flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0 items-center">
          <CustomLabel>Font Color</CustomLabel>
          <FormControl sx={{ m: 1, width: "20%" }}>
            <OutlinedInput
              type="color"
              value={selectedFontColor}
              onChange={handleFontColorChange}
              sx={{
                borderColor: "white",
                borderRadius: "23px",
                width: "100%",
              }}
              inputProps={{ "aria-label": "Font Color" }}
            />
          </FormControl>
        </div>
      </div>
    {/* Background Color Option  */}
      <div className="flex flex-col items-center w-full mt-4">
        <CustomLabel>Background Color</CustomLabel>
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            value={selectedBackgroundColor}
            onChange={handleBackgroundColorChange}
            input={<StyledOutlinedInput />}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Background Color" }}
          >
            {backgroundColors.map((bg) => (
              <MenuItem key={bg.value} value={bg.value} style={{ backgroundColor: bg.value }}>
                {bg.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
