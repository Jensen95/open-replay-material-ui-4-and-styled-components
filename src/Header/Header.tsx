import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { AppBar, useTheme, useMediaQuery } from '@material-ui/core'
import { Stepper } from '../Stepper'
import { COLORS } from '../colors'

const StyledAppBar = styled(AppBar)`
	border-bottom: 2px solid ${COLORS.GREY_SCALE.LIGHT_GREY};
	padding: 6px 11px;
	${(props) => props.theme.breakpoints.up('lg')} {
		padding: 6px 32px 6px 16px;
	}
`

const ProgressBar = styled.div`
	background-color: ${COLORS.PRIMARY};
	height: 2px;
	position: relative;
	z-index: 1200;
	top: -2px;
`

const Brand = styled.div`
	display: flex;
	align-self: center;
	flex: 1;
`

const LanguageSelectContainer = styled.div`
	align-self: center;
	flex: 1;
	justify-content: flex-end;
	display: flex;
`

const HelpContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
`

export interface HeaderProps {
	clientLogoSrc: string
	activeStep: number
	steps: string[]
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
	const { clientLogoSrc, steps } = props
	let { activeStep } = props

	const theme = useTheme()
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

	const clientLogoWidth = isSmall ? '70px' : '132px'

	// If active step is undefined, use the last one
	if (activeStep < 0 || activeStep > steps.length - 1) {
		activeStep = steps.length - 1
	}
	const completedPercentage =
		steps.length > 0 ? ((activeStep + 1) / steps.length) * 100 : 100

	return (
		<>
			<StyledAppBar position="sticky" elevation={0}>
				<HeaderContainer>
					<Brand>
						{clientLogoSrc && (
							<img
								width={clientLogoWidth}
								height={'auto'}
								src={clientLogoSrc}
							/>
						)}
					</Brand>
					{steps.length > 0 && (
						<Stepper activeStep={activeStep} steps={steps} />
					)}
				</HeaderContainer>
			</StyledAppBar>
			<ProgressBar style={{ width: `${completedPercentage}%` }} />
		</>
	)
}
