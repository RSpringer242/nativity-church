import { createGlobalStyle } from 'styled-components'


const theme = {
  colors: {
    //PRIMARY
    "primary0": "#E0E8F9",
    "primary1": "#BED0F7",
    "primary2": "#98AEEB",
    "primary3": "#7B93DB",
    "primary4": "#647ACB",
    "primary5": "#4C63B6",
    "primary6": "#4055A8",
    "primary7": "#35469C",
    "primary8": "#2D3A8C",
    "primary9": "#19216C",

    //NEUTRALS
    "neutral0": "#F5F7FA",
    "neutral1": "#E4E7EB",
    "neutral2": "#CBD2D9",
    "neutral3": "#9AA5B1",
    "neutral4": "#7B8794",
    "neutral5": "#616E7C",
    "neutral6": "#52606D",
    "neutral7": "#3E4C59",
    "neutral8": "#323F4B",
    "neutral9": "#1F2933",

    //SUPPORTING
    "blue0": "#E3F8FF",
    "blue1": "#B3ECFF",
    "blue2": "#81DEFD",
    "blue3": "#5ED0FA",
    "blue4": "#40C3F7",
    "blue5": "#2BB0ED",
    "blue6": "#1992D4",
    "blue7": "#127FBF",
    "blue8": "#0B69A3",
    "blue9": "#035388",

    "red0": "#FFE3E3",
    "red1": "#FFBDBD",
    "red2": "#FF9B9B",
    "red3": "#F86A6A",
    "red4": "#EF4E4E",
    "red5": "#E12D39",
    "red6": "#CF1124",
    "red7": "#AB091E",
    "red8": "#8A041A",
    "red9": "#610316",

    "yellow0": "#FFFBEA",
    "yellow1": "#FFF3C4",
    "yellow2": "#FCE588",
    "yellow3": "#FADB5F",
    "yellow4": "#F7C948",
    "yellow5": "#F0B429",
    "yellow6": "#DE911D",
    "yellow7": "#CB6E17",
    "yellow8": "#B44D12",
    "yellow9": "#8D2B0B",

    "teal0": "#EFFCF6",
    "teal1": "#C6F7E2",
    "teal2": "#8EEDC7",
    "teal3": "#65D6AD",
    "teal4": "#3EBD93",
    "teal5": "#27AB83",
    "teal6": "#199473",
    "teal7": "#147D64",
    "teal8": "#0C6B58",
    "teal9": "#014D40",
  }
}



const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }
  html {
    box-sizing: border-box;
    /* font-size: 62.5%; */
  }
  *, *:before, *:after {
    box-sizing: inherit;

  }
  body {
    /* @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap");
    font-family: 'Raleway', sans-serif; */
    padding: 0;
    margin: 0;
    background-color: ${theme.neutral0};

    color: ${theme.neutral9};

    #root { 
    height: 100%;
    
    }
  }

  a {
    text-decoration: none; 
    color: ${theme.neutral1};
  }

  a:visited {
  color: ${theme.neutral1};
}

  

`

export { GlobalStyles, theme }