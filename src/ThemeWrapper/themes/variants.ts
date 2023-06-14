import { DESIGN_SYSTEM_COLORS } from '../../colors'

const brandVariant = {
	name: 'Brand',
	palette: {
		primary: {
			main: DESIGN_SYSTEM_COLORS.PRIMARY,
			contrastText: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
		},
		secondary: {
			main: DESIGN_SYSTEM_COLORS.SECONDARY,
			contrastText: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
		},
		action: {
			hoverBackground: DESIGN_SYSTEM_COLORS.GREY_SCALE.HOVER_GREY,
			disabledBackground:
				DESIGN_SYSTEM_COLORS.GREY_SCALE.BACKGROUND_GREY + '80',
		},
		// action: {
		// 	disabledBackground: '#4F5BD580',
		// 	disabled: '#FFFFFFCC',
		// 	hover: '#4D',
		// 	hoverOpacity: 0.25,
		// 	selected: '#4F5BD5',
		// }
	},
	header: {
		color: DESIGN_SYSTEM_COLORS.TEXT_COLORS.DEFAULT,
		background: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
		search: {
			color: DESIGN_SYSTEM_COLORS.TEXT_COLORS.DEFAULT,
		},
		indicator: {
			background: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
		},
	},
	sidebar: {
		color: DESIGN_SYSTEM_COLORS.TEXT_COLORS.DEFAULT,
		activeColor: DESIGN_SYSTEM_COLORS.PRIMARY,
		background: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
		header: {
			color: DESIGN_SYSTEM_COLORS.TEXT_COLORS.DEFAULT,
			background: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
			brand: {
				color: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
			},
		},
		footer: {
			color: DESIGN_SYSTEM_COLORS.TEXT_COLORS.DEFAULT,
			background: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
			online: {
				background: DESIGN_SYSTEM_COLORS.OTHER_COLORS.AFFIRMATION_GREEN,
			},
		},
		category: {
			fontWeight: 400,
			activeFontWeight: 600,
		},
		badge: {
			color: DESIGN_SYSTEM_COLORS.GREY_SCALE.WHITE,
			background: DESIGN_SYSTEM_COLORS.OTHER_COLORS.AFFIRMATION_GREEN,
		},
	},
	body: {
		background: DESIGN_SYSTEM_COLORS.GREY_SCALE.BACKGROUND_GREY,
		borderRadius: 4,
	},
}

const variants: Array<VariantType> = [brandVariant]

export default variants

export type VariantType = {
	name: string
	palette: {
		primary: MainContrastTextType
		secondary: MainContrastTextType
		action: ActionType
	}
	header: ColorBgType & {
		search: {
			color: string
		}
		indicator: {
			background: string
		}
	}
	sidebar: ColorBgType & {
		header: ColorBgType & {
			brand: {
				color: string
			}
		}
		footer: ColorBgType & {
			online: {
				background: string
			}
		}
		category: {
			fontWeight: number
		}
		badge: ColorBgType
	}
	body: {
		background: string
		borderRadius: number
	}
}

type MainContrastTextType = {
	main: string
	contrastText: string
}
type ColorBgType = {
	color: string
	background: string
}

type ActionType = {
	hoverBackground: string
	disabledBackground: string
}
