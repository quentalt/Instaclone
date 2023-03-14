import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        teal: {
            500: "#f3a16c", // Change this color to the desired active tab color
        },
    },
    components: {
        Tab: {
            baseStyle: {
                _selected: {
                    color: "white",
                    bg: "teal.500", // Use the modified color from the color theme
                },
            },
        },
    },
});

export default theme;
