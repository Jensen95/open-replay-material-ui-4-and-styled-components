import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../colors'

const LoaderOverlay = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	overflow: hidden;
	z-index: 2;
`

const Overlay = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 100%;
	height: 100%;

	border-radius: 4px;
	background-color: ${COLORS.GREY_SCALE.LIGHT_GREY_DARK};
	opacity: 0.4;
`

export const LoadingContainer: FunctionComponent = () => {
	return (
		<>
			<Overlay />
			<LoaderOverlay>Loading</LoaderOverlay>
		</>
	)
}
