const overrides = {
	MuiSwitch: {
		track: {
			'$checked$checked + &': {
				opacity: 1.0,
				backgroundColor: '#67CB99', // Affirmation Green
			},
		},
	},
	MuiCardHeader: {
		action: {
			marginTop: '-4px',
			marginRight: '-4px',
		},
	},
	MuiStepLabel: {
		label: {
			fontSize: '16px',
			color: '#46464680',
			'&$active': {
				color: '#4F5BD5',
			},
			'&$completed': {
				color: '#4F5BD5',
			},
		},
		active: {
			color: '#4F5BD5',
		},
		iconContainer: {
			paddingRight: 10,
			transform: 'scale(0.75)',
			margin: 'auto',
		},
		horizontal: {
			height: '72px',
			display: 'flex',
			justifyContent: 'center',
			borderWidth: '2px',
			borderColor: '#4F5BD5',
		},
	},
	MuiStepIcon: {
		root: {
			color: '#E5E6EB',
			'&$active': {
				color: '#4F5BD5',
			},
			'&$completed': {
				color: '#4F5BD5',
			},
		},
	},
	MuiStepConnector: {
		line: {
			color: '#FFFFFF',
			//color: '#4F5BD5'
		},
		lineHorizontal: {
			borderTopWidth: '0px',
		},
	},
	MuiStep: {
		horizontal: {
			width: '175px',
			height: '69px',
			paddingLeft: '0px',
			paddingBottom: '0px',
			paddingTop: '0px',
			paddingRight: '0px',
			borderWidth: '2px',
			borderColor: '#4F5BD5',
		},
	},
	MuiStepper: {
		root: {
			padding: '0px',
		},
	},
	MuiMobileStepper: {
		root: {
			padding: '0px',
		},
		progress: {
			width: '1000px',
		},
	},
	MuiLinearProgress: {
		colorPrimary: {
			backgroundColor: '#EFF0F8',
		},
	},
	MuiAppBar: {
		colorPrimary: {
			backgroundColor: '#FFFFFF',
		},
	},
	MuiGrid: {
		container: {
			wrap: 'nowrap',
		},
	},
}

export default overrides
