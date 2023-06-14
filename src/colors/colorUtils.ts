import { parseToHsl } from 'polished'

/**
 * Darkens a css variable that has a `VAR_NAME-hs` and `VAR_NAME-l`
 * @param varName the css variable to use, only works on base vars created with hsl
 * @param darkenAmount how much it should be darkened in %
 * @param opacity opacity of the color, defaults to 1
 * @returns hsla color
 */
export const varDarken = (
	varName: string,
	darkenAmount: number,
	opacity = 1,
) => {
	const name = varName.toLowerCase()
	return `hsla(var(--${name}-hs), calc(var(--${name}-l) - ${darkenAmount}%), ${opacity});`
}

/**
 * Lightens a css variable that has a `VAR_NAME-hs` and `VAR_NAME-l`
 * @param varName the css variable to use, only works on base vars created with hsl
 * @param lightenAmount how much it should be lightened in %
 * @param opacity opacity of the color, defaults to 1
 * @returns hsla color
 */
export const varLighten = (
	varName: string,
	lightenAmount: number,
	opacity = 1,
) => {
	const name = varName.toLowerCase()
	return `hsla(var(--${name}-hs), calc(var(--${name}-l) + ${lightenAmount}%), ${opacity});`
}

/**
 * Creates a css variable with dark and light variants
 * The hex color given will be converted to hsl
 * @param varName css variable name
 * @param color hex color
 */
export const createHslVar = (varName: string, color: `#${string}`) => {
	const name = varName.toLowerCase()
	const hslValues = parseToHsl(color)
	const variants = Array.from({ length: 4 }, (_, index) => {
		switch (index) {
			case 0:
				return `--${name}-dark: hsl(var(--${name}-hs), calc(var(--${name}-l) - 10%));`
			case 1:
				return `--${name}-darker: hsl(var(--${name}-hs), calc(var(--${name}-l) - 20%));`
			case 2:
				return `--${name}-light: hsl(var(--${name}-hs), calc(var(--${name}-l) + 10%));`
			case 3:
				return `--${name}-lighter: hsl(var(--${name}-hs), calc(var(--${name}-l) + 20%));`
		}
	})
	return `
	  --${name}-hs: ${hslValues.hue}, ${hslValues.saturation * 100}%;
	  --${name}-l: ${hslValues.lightness * 100}%;
	  --${name}: hsl(var(--${name}-hs), var(--${name}-l));
	  ${variants.join('\n')}
	`
}

/**
 * The hex color given will be converted to hsl
 * @param themeVarName css variable name
 * @param color hex color
 */
export const setThemingHslVar = (
	themeVarName: 'primary' | 'secondary' | 'background',
	color: `#${string}`,
) => {
	const name = themeVarName.toLowerCase()
	const hslValues = parseToHsl(color)
	const root = document.documentElement
	root.style.setProperty(
		`--${name}-hs`,
		` ${hslValues.hue}, ${hslValues.saturation * 100}%`,
	)
	root.style.setProperty(`--${name}-l`, `${hslValues.lightness * 100}%`)
}
