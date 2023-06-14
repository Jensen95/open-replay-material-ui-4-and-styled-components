import styled, { css } from 'styled-components'
import { COLORS } from '../../colors'

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary' | 'text'

const primaryBaseOverride = css`
	color: ${COLORS.GREY_SCALE.WHITE};
	background-color: ${COLORS.PRIMARY};
`

const textBaseOverride = css`
	color: ${COLORS.PRIMARY};
	background-color: unset;
`

const tertiaryBaseOverride = css`
	${textBaseOverride}
	background-color: ${COLORS.SECONDARY};
`

const secondaryBaseOverride = css`
	${textBaseOverride}
	border: 2px solid ${COLORS.PRIMARY};
`

export const getBaseOverride = (buttonType: ButtonTypes) => {
	switch (buttonType) {
		case 'primary':
			return primaryBaseOverride
		case 'secondary':
			return secondaryBaseOverride
		case 'tertiary':
			return tertiaryBaseOverride
		case 'text':
			return textBaseOverride
	}
}

const primaryHoveringOverride = css`
	background-color: ${COLORS.PRIMARY_DARK};
`

const textHoveringOverride = css`
	background-color: ${COLORS.GREY_SCALE.HOVER_GREY};
`

const tertiaryHoveringOverride = css`
	background-color: ${COLORS.SECONDARY_DARK};
`

const secondaryHoveringOverride = css`
	${textHoveringOverride}
	border: 2px solid ${COLORS.PRIMARY_DARK};
`

export const getHoveringOverride = (buttonType: ButtonTypes) => {
	switch (buttonType) {
		case 'primary':
			return primaryHoveringOverride
		case 'secondary':
			return secondaryHoveringOverride
		case 'tertiary':
			return tertiaryHoveringOverride
		case 'text':
			return textHoveringOverride
	}
}

const primaryPressedOverride = css`
	background-color: ${COLORS.PRIMARY_DARKER};
`

const textPressedOverride = css`
	background-color: ${COLORS.GREY_SCALE.HOVER_GREY_DARK};
`

const tertiaryPressedOverride = css`
	background-color: ${COLORS.SECONDARY_DARKER};
`

const secondaryPressedOverride = css`
	${textPressedOverride}
	border: 2px solid ${COLORS.PRIMARY_DARKER};
`

export const getPressedOverride = (buttonType: ButtonTypes) => {
	switch (buttonType) {
		case 'primary':
			return primaryPressedOverride
		case 'secondary':
			return secondaryPressedOverride
		case 'tertiary':
			return tertiaryPressedOverride
		case 'text':
			return textPressedOverride
	}
}
