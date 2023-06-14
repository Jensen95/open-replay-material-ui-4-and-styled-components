import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { GlobalStyle } from './colors'
import {
	MaterialUiThemeProvider,
	StyledComponentsThemeProvider,
} from './ThemeWrapper'
import { App } from './App'
import { openReplayService } from './services/openReplayService'
import { trackingService } from './services/trackingService'

trackingService.initialize()
openReplayService.initialize()

ReactDOM.render(
	<StrictMode>
		<MaterialUiThemeProvider>
			<StyledComponentsThemeProvider>
				<GlobalStyle />
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</StyledComponentsThemeProvider>
		</MaterialUiThemeProvider>
	</StrictMode>,
	document.getElementById('root'),
)
