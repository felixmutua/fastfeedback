import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme} from "@chakra-ui/react"

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
}

const themes = {
    ...chakraTheme,
    fonts:{
        ...chakraTheme.fonts,
        body:'Inter',
        fontWeights:{
            normal : 400,
            medium : 600,
            bold : 700,
        }
    }

}

export  const customTheme = extendTheme({ colors,themes })


