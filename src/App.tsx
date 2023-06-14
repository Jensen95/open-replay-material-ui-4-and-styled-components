import React, { FunctionComponent } from 'react'
import { withSentryRouting } from '@sentry/react'
import styled from 'styled-components'
import { Header } from './Header'
import { Route, Switch, useHistory } from 'react-router-dom'

const AppContent = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	flex-grow: 1;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
`

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const landingStep = {
	id: 1,
	displayName: 'landingStep-title',
	paths: ['/splash'],
}
const consentStep = {
	id: 2,
	displayName: 'consentStep-title',
	paths: ['/consent'],
}
const nextStep = {
	id: 3,
	displayName: 'nextStep-title',
	paths: ['/next'],
}
const bankStep = {
	id: 4,
	displayName: 'bankStep-title',
	paths: ['/bank'],
}
const steps = [landingStep, consentStep, nextStep, bankStep]
const stepNames = steps.map((step) => step.displayName)

const SentryRoute = withSentryRouting(Route)

export const App: FunctionComponent<{ children?: never }> = () => {
	const { push } = useHistory()
	return (
		<PageWrapper>
			<Header steps={stepNames} activeStep={consentStep.id} clientLogoSrc="" />
			<AppContent>
				<Switch>
					<SentryRoute path={landingStep.paths} exact>
						<p>Hello</p>
						<button onClick={() => push(consentStep.paths[0])}>Next</button>
					</SentryRoute>
					<SentryRoute path={consentStep.paths} exact>
						<p>Consent</p>
						<button onClick={() => push(nextStep.paths[0])}>Next</button>
					</SentryRoute>
					<SentryRoute path={nextStep.paths} exact>
						<p>Next</p>
						<button onClick={() => push(bankStep.paths[0])}>Next</button>
					</SentryRoute>
					<SentryRoute path={bankStep.paths} exact>
						<p>Banking</p>
						<button onClick={() => push(consentStep.paths[0])}>Next</button>
					</SentryRoute>
					<SentryRoute path="/" exact>
						<p>Initial</p>
						<button onClick={() => push(landingStep.paths[0])}>Next</button>
					</SentryRoute>
				</Switch>
			</AppContent>
		</PageWrapper>
	)
}
