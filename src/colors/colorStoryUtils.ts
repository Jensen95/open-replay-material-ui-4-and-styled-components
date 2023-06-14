import styled from 'styled-components'

export const ColorDot = styled.span<{ $color: string }>`
	background-color: ${(props) => props.$color};
	border-radius: 50%;
	width: 20px;
	height: 20px;
	outline: 1px solid black;
	margin-right: 5px;
`

export const Color = styled.div`
	display: flex;
	flex-flow: row nowrap;

	margin: 2px;
	padding: 2px;
`

export const ColorGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`
