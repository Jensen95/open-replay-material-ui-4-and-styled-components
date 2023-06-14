import styled from 'styled-components'
import { StyledButton } from '../BaseButton/baseButtonStyles'

export const RegularButtonWrapper = styled.div`
	${StyledButton} {
		width: 100%;
		min-height: 38px;
		font-weight: 600;
		font-size: 16px;
	}
	box-sizing: border-box;
	min-width: 250px;

	${(props) => props.theme.breakpoints.down('xs')} {
		width: 100%;
		min-width: 100%;
	}
`
