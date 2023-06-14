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
import { SnackbarProvider } from 'notistack'
import { DevTools } from './DevTools'

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

const renderFlow = (children: React.ReactNode) => {
	ReactDOM.render(
		<StrictMode>
			<MaterialUiThemeProvider>
				<StyledComponentsThemeProvider>
					<GlobalStyle />
					<SnackbarProvider maxSnack={5}>
						<MemoryRouter>{children}</MemoryRouter>
						<DevTools />
					</SnackbarProvider>
				</StyledComponentsThemeProvider>
			</MaterialUiThemeProvider>
		</StrictMode>,
		document.getElementById('root'),
	)
}

const renderStuckPage = () => {
	ReactDOM.render(
		<React.StrictMode>
			<MaterialUiThemeProvider>
				<StyledComponentsThemeProvider>"Stuck"</StyledComponentsThemeProvider>
			</MaterialUiThemeProvider>
		</React.StrictMode>,
		document.getElementById('root'),
	)
}

const main = async () => {
	if (false) {
		renderStuckPage()
		return
	}

	renderFlow(<App />)
}

main()
