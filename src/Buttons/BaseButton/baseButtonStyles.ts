import styled, { css } from 'styled-components'
import { COLORS } from '../../colors'
import { ButtonTypes, getBaseOverride, getHoveringOverride, getPressedOverride } from './baseButtonOverrideStyles'

export const focusedCss = css`
	outline: 2px solid ${COLORS.PRIMARY};
	outline-offset: 2px;
`

export const hoveringCss = css<{ $buttonType: ButtonTypes }>`
	background-color: ${COLORS.GREY_SCALE.LIGHT_GREY_DARK};
	${(props) => getHoveringOverride(props.$buttonType)}
`

export const pressedCss = css<{ $buttonType: ButtonTypes }>`
	background-color: ${COLORS.GREY_SCALE.LIGHT_GREY_DARKER};
	${(props) => getPressedOverride(props.$buttonType)}
`

export const disabledCss = css<{ $loading: boolean; $buttonType: ButtonTypes }>`
	opacity: ${(props) => (props.$loading ? 1 : 0.65)};
	user-select: none;
	cursor: not-allowed;
`

export const loadingCss = css`
	cursor: progress;
`

// const StyledButton = styled.button.attrs<{}>((props) => ({}))`
export const StyledButton = styled.button<{
	$buttonType: ButtonTypes
	$focused: boolean
	disabled: boolean
	$hovering: boolean
	$loading: boolean
	$pressed: boolean
}>`
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 14px;
	padding: 8px 8px;
	appearance: none;
	cursor: pointer;
	color: ${COLORS.TEXT_COLORS.DEFAULT};
	font-family: 'Nunito';
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.GREY_SCALE.LIGHT_GREY};
	border: none;
	outline: none;
	position: relative;

	${(props) => getBaseOverride(props.$buttonType)}

	${(props) => props.$focused && focusedCss}

	${(props) => props.$hovering && !props.$loading && hoveringCss}

	${(props) => props.$pressed && pressedCss};

	${(props) => props.disabled && disabledCss};

	${(props) => props.$loading && loadingCss};
`
