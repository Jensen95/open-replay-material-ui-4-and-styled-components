import React from 'react'
import styled from 'styled-components'
import MuiStepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { Hidden, makeStyles } from '@material-ui/core'
import { COLORS } from '../colors'

export interface StepperProps {
	activeStep: number
	steps: string[]
}

const StepperContainer = styled.div`
	display: flex;

	.MuiStepLabel-label.MuiStepLabel-active {
		color: ${COLORS.TEXT_COLORS.SUB_TEXT_GREY};
		${(props) => props.theme.breakpoints.up('lg')} {
			color: ${COLORS.PRIMARY};
		}
	}

	.MuiStepLabel-label.MuiStepLabel-completed {
		color: ${COLORS.TEXT_COLORS.SUB_TEXT_GREY};
	}
`

const useStyles = makeStyles((theme) => ({
	icon: {
		padding: '0px',
	},
	labelRoot: {
		textAlign: 'center',
		height: '15px',
	},
	stepSmall: {
		height: '15px',
		width: 'max-content',
	},
	stepLarge: {
		width: 'max-content',
		paddingLeft: '16px',
		paddingRight: '16px',
	},
}))

export const Stepper = (props: StepperProps): JSX.Element => {
	const classes = useStyles(props)
	const { activeStep, steps } = props

	return (
		<StepperContainer>
			<Hidden lgUp>
				<MuiStepper activeStep={activeStep}>
					<Step key={steps[activeStep]} classes={{ root: classes.stepSmall }}>
						<StepLabel
							classes={{
								iconContainer: classes.icon,
								root: classes.labelRoot,
							}}
							icon={null}
						>
							<h4>{activeStep + 1 + '. ' + steps[activeStep]}</h4>
						</StepLabel>
					</Step>
				</MuiStepper>
			</Hidden>

			<Hidden mdDown>
				<MuiStepper activeStep={activeStep}>
					{steps.map((label, index) => (
						<Step key={label} classes={{ root: classes.stepLarge }}>
							<StepLabel classes={{ iconContainer: classes.icon }} icon={null}>
								<h4>{index + 1 + '. ' + label}</h4>
							</StepLabel>
						</Step>
					))}
				</MuiStepper>
			</Hidden>
		</StepperContainer>
	)
}
