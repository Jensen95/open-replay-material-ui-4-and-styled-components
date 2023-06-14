import { Theme } from '@material-ui/core'
import { createGlobalStyle, ThemeProps } from 'styled-components'
import { createHslVar, COLORS } from '.'

type GlobalStyleProps = {
	theme: ThemeProps<Theme> & { body: any }
}

const cssVars = (colorVarsObject: Record<string, any>) => {
	return Object.keys(colorVarsObject)
		.map((key): string | undefined => {
			const cssVar = colorVarsObject[key]
			if (typeof cssVar === 'string') {
				const extractedCssVar = new RegExp(
					/^var\(--([\w-]+), (#.*?)\)/gim,
				).exec(cssVar)
				if (extractedCssVar == null) return
				const [_, varName, color] = extractedCssVar as unknown as [
					string,
					string,
					`#${string}`,
				]
				if (color[0] === '#') {
					return createHslVar(varName, color)
				}
				return
			}
			return cssVars(cssVar)
		})
		.filter(Boolean)
		.join('')
		.replace(/\t {2}?/g, '')
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
html,
body,
#root {
	height: 100%;
}

body {
	background: ${COLORS.BACKGROUND};
}

:root {
	${cssVars(COLORS)}
	--primary-hs: var(--blue-hs);
	--primary-l: var(--blue-l);
	--secondary-hs: var(--highlight-blue-hs);
	--secondary-l: var(--highlight-blue-l);
	--background-hs: var(--background-grey-hs);
	--background-l: var(--background-grey-l);
}
`
