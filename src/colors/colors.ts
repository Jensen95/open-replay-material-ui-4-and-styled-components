import { DESIGN_SYSTEM_COLORS } from './designSystemColors'

type CssVarWithVariants<T extends Record<string, string>> = { [P in keyof T]: string } & {
	[P in keyof T & string as `${Uppercase<P>}_DARK`]: string
} & { [P in keyof T & string as `${Uppercase<P>}_DARKER`]: string } & {
	[P in keyof T & string as `${Uppercase<P>}_LIGHT`]: string
} & { [P in keyof T & string as `${Uppercase<P>}_LIGHTER`]: string }

const createColorVarsFromColorObject = <T extends Record<string, string>>(colorObject: T) => {
	const colorVars = Object.keys(colorObject).reduce((acc, color) => {
		const colorVarName = color.toLowerCase().replace(/_/g, '-')
		acc[color] = `var(--${colorVarName}, ${colorObject[color]})`
		acc[`${color}_DARK`] = `var(--${colorVarName}-dark)`
		acc[`${color}_DARKER`] = `var(--${colorVarName}-darker)`
		acc[`${color}_LIGHT`] = `var(--${colorVarName}-light)`
		acc[`${color}_LIGHTER`] = `var(--${colorVarName}-lighter)`
		return acc
	}, {} as CssVarWithVariants<Record<string, string>>)

	return colorVars as Readonly<CssVarWithVariants<T>>
}

const BRAND_COLOR_VARS = createColorVarsFromColorObject<typeof DESIGN_SYSTEM_COLORS.BRAND_COLORS>(DESIGN_SYSTEM_COLORS.BRAND_COLORS)

const GREY_SCALE_VARS = createColorVarsFromColorObject<typeof DESIGN_SYSTEM_COLORS.GREY_SCALE>(DESIGN_SYSTEM_COLORS.GREY_SCALE)

const OTHER_COLOR_VARS = createColorVarsFromColorObject<typeof DESIGN_SYSTEM_COLORS.OTHER_COLORS>(DESIGN_SYSTEM_COLORS.OTHER_COLORS)

const TEXT_COLOR_VARS = createColorVarsFromColorObject<typeof DESIGN_SYSTEM_COLORS.TEXT_COLORS>(DESIGN_SYSTEM_COLORS.TEXT_COLORS)

const THEME_COLORS = { PRIMARY: '#000000', SECONDARY: '#000000', BACKGROUND: '#000000' }
const THEMING_VARS = createColorVarsFromColorObject<typeof THEME_COLORS>(THEME_COLORS)

// Add to global styles
export const COLORS = {
	BRAND_COLORS: BRAND_COLOR_VARS,
	GREY_SCALE: GREY_SCALE_VARS,
	OTHER_COLORS: OTHER_COLOR_VARS,
	TEXT_COLORS: TEXT_COLOR_VARS,
	...THEMING_VARS,
} as const
