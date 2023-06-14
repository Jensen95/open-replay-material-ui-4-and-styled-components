import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { createTheme } from '@material-ui/core/styles'

const defaultTheme = createTheme()
const { breakpoints } = defaultTheme

const typography: TypographyOptions = {
	// useNextVariants: true,
	fontFamily: ['Nunito', 'serif'].join(','),
	fontSize: 16,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	h1: {
		[breakpoints.down('xs')]: {
			fontSize: '17px',
			fontWeight: 600,
		},
		[breakpoints.up('sm')]: {
			fontSize: '20px',
			fontWeight: 600,
		},
		[breakpoints.up('lg')]: {
			fontSize: '30px',
			fontWeight: 600,
		},
		lineHeight: 1.2,
	},
	h2: {
		[breakpoints.down('xs')]: {
			fontSize: '15px',
			fontWeight: 600,
		},
		[breakpoints.up('sm')]: {
			fontSize: '16px',
			fontWeight: 700,
		},
		[breakpoints.up('lg')]: {
			fontSize: '20px',
			fontWeight: 700,
		},
		lineHeight: 1.2,
	},
	h3: {
		[breakpoints.down('xs')]: {
			fontSize: '12px',
			fontWeight: 600,
		},
		[breakpoints.up('sm')]: {
			fontSize: '14px',
			fontWeight: 600,
		},
		[breakpoints.up('lg')]: {
			fontSize: '15px',
			fontWeight: 600,
		},
		fontWeight: 600,
		lineHeight: 1.2,
	},
	h4: {
		fontSize: '1.25rem',
		fontWeight: 600,
		lineHeight: 1.2,
	},
	h5: {
		fontSize: '1.125rem',
		fontWeight: 600,
		lineHeight: 1.2,
	},
	h6: {
		fontSize: '1.0625rem',
		fontWeight: 600,
		lineHeight: 1.2,
	},
	body1: {
		letterSpacing: 0.36,
		[breakpoints.down('xs')]: {
			fontSize: '14px',
			fontWeight: 400,
		},
		[breakpoints.up('sm')]: {
			fontSize: '16px',
			fontWeight: 400,
		},
		[breakpoints.up('lg')]: {
			fontSize: '20px',
			fontWeight: 400,
		},
	},
	body2: {
		letterSpacing: 0.36,
		[breakpoints.down('xs')]: {
			fontSize: '14px',
			fontWeight: 400,
		},
		[breakpoints.up('sm')]: {
			fontSize: '16px',
			fontWeight: 400,
		},
		[breakpoints.up('lg')]: {
			fontSize: '18px',
			fontWeight: 400,
		},
	},
	button: {
		textTransform: 'none',
		fontWeight: 600,
	},
}

export default typography
