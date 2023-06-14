import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { DevToolsPortal } from './DevToolsPortal'
import { COLORS } from '../colors'
import { TertiaryButton } from '../Buttons'

const DevToolsContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 9000;
`

const DevToolsOverlay = styled.div`
	position: relative;
	pointer-events: none;
`

const Content = styled.div<{ $minimized: boolean }>`
	height: ${(props) => (props.$minimized ? 50 : 300)}px;
	width: 600px;
	background-color: ${COLORS.BACKGROUND_DARK};

	pointer-events: all;
	border: 1px solid ${COLORS.GREY_SCALE.LIGHT_GREY};
	border-radius: 8px;
	box-shadow: 0px 0px 14px rgba(53, 64, 82, 0.05);
`

const Tabs = styled.div`
	display: flex;
	flex-flow: row nowrap;
`

const Tab = styled.div<{ $active: boolean }>`
	display: ${(props) => (props.$active ? 'flex' : 'none')};
	background-color: ${COLORS.GREY_SCALE.WHITE};
	width: 100%;
	height: 100%;
	padding: 8px;
	overflow: scroll;
`

const Button = styled(TertiaryButton)<{ $active: boolean }>`
	${(props) =>
		props.$active
			? `background-color: ${COLORS.GREY_SCALE.DARK_DETAIL_GREY}`
			: null};
	margin: 4px;
`

const getDevtoolsStateFromUrl = () => {
	const search = location.search
	let shouldShow = false
	if (search) {
		const params = new URLSearchParams(search)
		params.forEach((value, name) => {
			if (name.toLowerCase() === 'devtools') {
				shouldShow = value.toLowerCase() === 'true'
			}
		})
	}
	return shouldShow
}

export const DevTools: FunctionComponent<{ children?: never }> = () => {
	const [showDevTools, setShowDevTools] = useState(true)
	const [activeTab, setActiveTab] = useState('localOverride')
	const [minimized, setMinimized] = useState(false)

	const selectTab = (tab: string) => () => {
		setActiveTab(tab)
		if (minimized) {
			setMinimized(false)
		}
	}

	return (
		<DevToolsPortal>
			<DevToolsOverlay>
				{showDevTools ? (
					<DevToolsContainer>
						<Content $minimized={minimized}>
							<Tabs>
								<Button
									$active={activeTab === 'localOverride'}
									onClick={selectTab('localOverride')}
								>
									Local override
								</Button>
							</Tabs>
						</Content>
					</DevToolsContainer>
				) : null}
			</DevToolsOverlay>
		</DevToolsPortal>
	)
}
